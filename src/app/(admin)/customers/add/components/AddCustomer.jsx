import ChoicesFormInput from '@/components/from/ChoicesFormInput';
import TextAreaFormInput from '@/components/from/TextAreaFormInput';
import TextFormInput from '@/components/from/TextFormInput';
import IconifyIcon from '@/components/wrappers/IconifyIcon';
import { yupResolver } from '@hookform/resolvers/yup';
import { Button, Card, CardBody, CardHeader, CardTitle, Col, Row } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { useState } from 'react';  

import * as yup from 'yup';
const Addlead = () => {
  

const [step, setStep] = useState('main'); // main | tenant | landlord
const [leadValue, setLeadValue] = useState('');

const [leadSubType, setLeadSubType] = useState('');
   const [leadType, setLeadType] = useState('');
  const messageSchema = yup.object({
    name: yup.string().required('Please enter name'),
    description: yup.string().required('Please enter description'),
    zipCode: yup.string().required('Please enter Zip-Code'),
    email: yup.string().email().required('Please enter email'),
    number: yup.string().required('Please enter number'),
    propertiesNumber: yup.string().required('Please enter Properties Number'),
    facebookUrl: yup.string().required('Please enter Facebook Url'),
    instagramUrl: yup.string().required('Please enter Instagram Url'),
    twitterUrl: yup.string().required('Please enter Twitter Url'),
    viewProperties: yup.string().required('Please enter view properties'),
    ownProperties: yup.string().required('Please enter own Properties')
  });
  const {
    handleSubmit,
    control
  } = useForm({
    resolver: yupResolver(messageSchema)
  });
  return <form onSubmit={handleSubmit(() => {})}>
      <Card>
        <CardHeader>
          <CardTitle as={'h4'}>Add lead information</CardTitle>
        </CardHeader>
        <CardBody>
          <Row>
            <Col lg={6}>
              <div className="mb-3">
                <TextFormInput control={control} name="name" placeholder="Full Name" label="First Name" />
              </div>
            </Col>
            <Col lg={6}>
              <div className="mb-3">
                <TextFormInput control={control} name="name" placeholder="Last Name" label="Last Name" />
              </div>
            </Col>
           
            <Col lg={6}>
              <div className="mb-3">
                <TextFormInput control={control} name="email" placeholder="Contact Number" label="Contact Number" />
              </div>
            </Col>
             <Col lg={6}>
              <div className="mb-3">
                <TextFormInput control={control} name="viewProperties"  placeholder="Enter Nationality" label="Nationality" />
              </div>
            </Col>
          
             <Col lg={6}>
              <div className="mb-3">
                <TextFormInput control={control} name="name" placeholder="Enter Detail" label="Passport ID/ Number" />
              </div>
            </Col>
            {/* <Col lg={6}>
              <div className="mb-3">
                <label htmlFor="choices-country" className="form-label">
                  Lead types 
                </label>
                
                <ChoicesFormInput className="form-control" id="choices-country" placeholder="landlord/tenant" >
                  <option>Add lead type</option>
                  <optgroup>
                    <option>Family</option>
                    <option value="Fran">Company Staff</option>
                    <option value="Netherlands">Labour</option>
                    <option value="U.S.A">Bachelor</option>
                    
                  </optgroup>
                </ChoicesFormInput>
              </div>
            </Col>
            */}
            {/* ================= LEAD TYPE ================= */}
{/* ================= LEAD TYPE ================= */}
{/* ================= LEAD TYPE ================= */}
<Col lg={6}>
  <div className="mb-3">
    <label className="form-label">Lead Types</label>

    <select
      className="form-control"
      value={leadValue}
      onChange={(e) => {
        const value = e.target.value;

        if (value === 'tenant') {
          setStep('tenant');
          setLeadValue('');
        } 
        else if (value === 'landlord') {
          setStep('landlord');
          setLeadValue('');
        } 
        else {
          setLeadValue(value);
        }
      }}
    >
      {/* STEP 1 */}
      {step === 'main' && (
        <>
          <option value="">Select Lead Type</option>
          <option value="tenant">Tenant</option>
          <option value="landlord">Landlord</option>
        </>
      )}

      {/* STEP 2 - TENANT */}
      {step === 'tenant' && (
        <>
          <option value="">Select Tenant Type</option>
          <option value="family">Family</option>
          <option value="company_staff">Company Staff</option>
          <option value="bachelor">Bachelor</option>
          <option value="labour">Labour</option>
        </>
      )}

      {/* STEP 2 - LANDLORD */}
      {step === 'landlord' && (
        <>
          <option value="">Select Landlord Type</option>
          <option value="owner">Owner</option>
          <option value="personal">Agent</option>
        </>
      )}
    </select>
  </div>
</Col>








            <Col lg={12}>
              <div className="mb-3">
                <TextAreaFormInput control={control} name="description" type="text" label="Lead  Address" className="Lead -address" id="schedule-textarea" rows={3} placeholder="Address" />
              </div>
            </Col>
            <Col lg={4}>
              <div className="mb-3">
                <TextFormInput control={control} name="PO BOX" type="number" placeholder="PO BOX" label="PO BOX" />
              </div>
            </Col>
             <Col lg={4}>
              <div className="mb-3">
                <label htmlFor="choices-country" className="form-label">
                  Country
                </label>
                <ChoicesFormInput className="form-control" id="choices-country" data-choices data-choices-groups data-placeholder="Select Country">
                  <option>Choose a country</option>
                  <optgroup>
                    <option>United Kingdom</option>
                    <option value="Fran">France</option>
                    <option value="Netherlands">Netherlands</option>
                    <option value="U.S.A">U.S.A</option>
                    <option value="Denmark">Denmark</option>
                    <option value="Canada">Canada</option>
                    <option value="Australia">Australia</option>
                    <option value="India">India</option>
                    <option value="Germany">Germany</option>
                    <option value="Spain">Spain</option>
                    <option value="United Arab Emirates">United Arab Emirates</option>
                  </optgroup>
                </ChoicesFormInput>
              </div>
            </Col>
            <Col lg={4}>
              <div className="mb-3">
                <label htmlFor="choices-city" className="form-label">
                  City
                </label>
                <ChoicesFormInput className="form-control" id="choices-city" data-choices data-choices-groups data-placeholder=" City">
                  <option>Choose a city</option>
                  <optgroup label="UK">
                    <option value="London">London</option>
                    <option value="Manchester">Manchester</option>
                    <option value="Liverpool">Liverpool</option>
                  </optgroup>
                  <optgroup label="FR">
                    <option value="Paris">Paris</option>
                    <option value="Lyon">Lyon</option>
                    <option value="Marseille">Marseille</option>
                  </optgroup>
                  <optgroup label="DE" disabled>
                    <option value="Hamburg">Hamburg</option>
                    <option value="Munich">Munich</option>
                    <option value="Berlin">Berlin</option>
                  </optgroup>
                  <optgroup label="US">
                    <option value="New York">New York</option>
                    <option value="Washington" disabled>
                      Washington
                    </option>
                    <option value="Michigan">Michigan</option>
                  </optgroup>
                  <optgroup label="SP">
                    <option value="Madrid">Madrid</option>
                    <option value="Barcelona">Barcelona</option>
                    <option value="Malaga">Malaga</option>
                  </optgroup>
                  <optgroup label="CA">
                    <option value="Montreal">Montreal</option>
                    <option value="Toronto">Toronto</option>
                    <option value="Vancouver">Vancouver</option>
                  </optgroup>
                </ChoicesFormInput>
              </div>
            </Col>
           
            <Col lg={4}>
              <div className="mb-3">
                <TextFormInput control={control} name="Lead Origin" placeholder="lead_orgin" label="Lead Origin" />
              </div>
            </Col>
            <Col lg={4}>
              <div className="mb-3">
                <TextFormInput control={control} name="Created At" placeholder="Time-Lapse" label="Created At" />
              </div>
            </Col>
            <Col lg={4}>
              <div className="mb-3">
                <TextFormInput control={control} name="Updated At" placeholder="Time-Lapse" label="Updated At" />
              </div>
            </Col>
            <Col lg={4}>
              <div className="mb-3">
                <label htmlFor="choices-status" className="form-label">
                  Status
                </label>
                <ChoicesFormInput className="form-control" id="choices-status" data-choices data-choices-groups data-placeholder="Cho">
                  <option>Choose a Status</option>
                  <optgroup>
                    <option>Active </option>
                    <option >Inactive</option>
                  </optgroup>
                </ChoicesFormInput>
                
              </div>
            </Col>
            <Col lg={4}>
              <div className="mb-3">
                <TextFormInput control={control} name="Updated At" placeholder="Lead Assigned To" label="Lead Assigned To" />
              </div>
            </Col>
             <Col lg={4}>
              <div className="mb-3">
                <TextFormInput control={control} name="Comments" placeholder="Enter Comments" label=" Comments" />
              </div>
            </Col>
            
          </Row>
        </CardBody>
      </Card>
      <div className="mb-3 rounded">
        <Row className="justify-content-end g-2">
          <Col lg={2}>
            <Button variant="outline-primary" type="submit" className="w-100">
              Create Lead
            </Button>
          </Col>
          <Col lg={2}>
            <Button variant="primary
            " className="w-100">
              Cancel
            </Button>
          </Col>
        </Row>
      </div>
    </form>;
};
export default Addlead;
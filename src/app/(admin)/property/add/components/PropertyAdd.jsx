import ChoicesFormInput from '@/components/from/ChoicesFormInput';
import TextFormInput from '@/components/from/TextFormInput';
import TextAreaFormInput from '@/components/from/TextAreaFormInput';
import { yupResolver } from '@hookform/resolvers/yup';
import { Card, CardBody, Col, Row, Form, Button } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';

/* ================= SCHEMA ================= */
const schema = yup.object({});

const PropertyAdd = () => {
  const { handleSubmit, control } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {}
  });

  return (
    <form onSubmit={handleSubmit(() => {})}>

      {/* ================= HEADER ================= */}
      <Card className="mb-4">
        <CardBody className="py-3">
          <Row className="align-items-center">
            <Col lg={4}>
              <h2 className="fw-semibold mb-0">Add New Property</h2>
            </Col>
          <Col lg={6}>
    <div className="d-flex justify-content-end align-items-center gap-3">
      <span className="fw-semibold fs-5">
        Select Property Type :
      </span>

      <ChoicesFormInput
        style={{
          width: 400,
          height: 50,
          fontSize: '16px',
          fontWeight: 500,
          borderRadius: '10px',
          padding: '10px 14px',
          backgroundColor: '#f9fafb',
          border: '1px solid #d0d5dd'
        }}
      >
        <option>Flat/Apartment</option>
        <option>Villa</option>
        <option>Office</option>
      </ChoicesFormInput>
    </div>
  </Col>

           
          </Row>
        </CardBody>
      </Card>
      {/* ================= BASIC PROPERTY DETAILS ================= */}
      <Card className="mb-4">
        <CardBody>
          <h4 className="fw-semibold">Basic Property Details</h4>
          <hr />
          <Row className="g-3">
            <Col lg={4}><TextFormInput control={control} name="property_type" label="Property Type" placeholder="Flat" /></Col>
            <Col lg={4}><TextFormInput control={control} name="property_code" label="Property Code / ID" placeholder="Auto-Generated" /></Col>
            <Col lg={4}>
              <label className="form-label">Building Name</label>
              <ChoicesFormInput className="form-control">
                <option>Select Building Name</option>
                
              </ChoicesFormInput>
            </Col>
            <Col lg={4}><TextFormInput control={control} name="building_block" label="Building Block" /></Col>
            <Col lg={4}><TextFormInput control={control} name="floor_number" label="Floor Number" /></Col>
            <Col lg={4}><TextFormInput control={control} name="flat_no" label="Flat No / Name" /></Col>
            <Col lg={4}><TextFormInput control={control} name="total_floors" label="Total Floors (Bldg)" /></Col>
          </Row>
        </CardBody>
      </Card>

      {/* ================= FLAT CONFIGURATION ================= */}
      <Card className="mb-4">
        <CardBody>
          <h4 className="fw-semibold">Flat Configuration</h4>
          <hr />
          <Row className="g-3">
            <Col lg={4}>
              <label className="form-label">Configuration</label>
              <ChoicesFormInput className="form-control">
                <option>Studio</option>
                <option>1 BHK</option>
                <option>2 BHK</option>
                <option>3 BHK</option>
              </ChoicesFormInput>
            </Col>
            <Col lg={4}><TextFormInput control={control} name="carpet_area" label="Carpet Area (Sq.Ft)" /></Col>
            <Col lg={4}><TextFormInput control={control} name="builtup_area" label="Built-up Area (Sq.Ft)" /></Col>
            <Col lg={4}>
              <label className="form-label">Balcony</label>
              <ChoicesFormInput className="form-control">
                <option>Yes</option>
                <option>No</option>
              </ChoicesFormInput>
            </Col>
            <Col lg={4}><TextFormInput control={control} name="bathrooms" label="No. of Bathrooms" /></Col>
            <Col lg={4}>
              <label className="form-label">Kitchen Type</label>
              <ChoicesFormInput className="form-control">
                <option>Open</option>
                <option>Closed</option>
              </ChoicesFormInput>
            </Col>
            <Col lg={4}>
              <label className="form-label">Store Room</label>
              <ChoicesFormInput className="form-control">
                <option>Yes</option>
                <option>No</option>
              </ChoicesFormInput>
            </Col>
            <Col lg={4}>
              <label className="form-label">Facing</label>
              <ChoicesFormInput className="form-control">
                <option>East</option>
                <option>West</option>
                <option>North</option>
                <option>South</option>
              </ChoicesFormInput>
            </Col>
          </Row>
        </CardBody>
      </Card>

      {/* ================= RENTAL & FINANCIAL DETAILS ================= */}
      <Card className="mb-4">
        <CardBody>
          <h4 className="fw-semibold">Rental & Financial Details</h4>
          <hr />
          <Row className="g-3">
            <Col lg={4}><TextFormInput control={control} name="monthly_rent" label="Monthly Rent" /></Col>
            <Col lg={4}><TextFormInput control={control} name="security_deposit" label="Security Deposit" /></Col>
            <Col lg={4}><TextFormInput control={control} name="maintenance" label="Maintenance (Monthly)" /></Col>
            <Col lg={4}>
              <label className="form-label">Electricity Type</label>
              <ChoicesFormInput className="form-control"><option>Meter</option></ChoicesFormInput>
            </Col>
            <Col lg={4}>
              <label className="form-label">Water Type</label>
              <ChoicesFormInput className="form-control"><option>Meter</option></ChoicesFormInput>
            </Col>
            <Col lg={4}><TextFormInput control={control} name="other_charges" label="Other Charges" /></Col>
            <Col lg={4}>
              <label className="form-label">Late Fee (% / Amt)</label>
              <ChoicesFormInput className="form-control">
                <option>Yes</option>
                <option>No</option>
              </ChoicesFormInput>
            </Col>
          </Row>
        </CardBody>
      </Card>

      {/* ================= OWNERSHIP ================= */}
      <Card className="mb-4">
        <CardBody>
          <h4 className="fw-semibold">Ownership</h4>
          <hr />
          <label className="form-label">Landlord Name</label>
          <ChoicesFormInput className="form-control">
            <option>Select From Master</option>
          </ChoicesFormInput>
        </CardBody>
      </Card>

      {/* ================= FACILITIES & AMENITIES ================= */}
      <Card className="mb-4">
        <CardBody>
          <h4 className="fw-semibold">Facilities & Amenities</h4>
          <hr />
          <Row className="g-3">
            {[
              'Parking','Lift','Power Backup','Security','CCTV',
              'Gas Pipeline','Water Supply','Intercom','Fire Safety'
            ].map(item => (
              <Col lg={3} key={item}>
                <Form.Check type="checkbox" label={item} />
              </Col>
            ))}
          </Row>
        </CardBody>
      </Card>

      {/* ================= TENANT PREFERENCE ================= */}
      <Card className="mb-4">
        <CardBody>
          <h4 className="fw-semibold">Tenant Preference</h4>
          <hr />
          <label className="form-label">Rental Purpose</label>
          <ChoicesFormInput className="form-control mb-3">
            <option>Residential</option>
            <option>Commercial</option>
          </ChoicesFormInput>

          <label className="form-label">Tenant Type Allowed</label>
          <Row className="g-3">
            {['Bachelor','Family','Company Staff','Labour'].map(t => (
              <Col lg={3} key={t}>
                <Form.Check label={t} />
              </Col>
            ))}
          </Row>
        </CardBody>
      </Card>

      {/* ================= AVAILABILITY & STATUS ================= */}
      <Card className="mb-4">
        <CardBody>
          <h4 className="fw-semibold">Availability & Status</h4>
          <hr />
          <Row className="g-3">
            <Col lg={4}>
              <label className="form-label">Status</label>
              <ChoicesFormInput className="form-control">
                <option>Vacant</option>
                <option>Occupied</option>
              </ChoicesFormInput>
            </Col>
            <Col lg={4}><TextFormInput control={control} name="available_from" label="Available From" placeholder="dd-mm-yyyy" /></Col>
            <Col lg={4}><TextFormInput control={control} name="current_tenant" label="Current Tenant" /></Col>
          </Row>
        </CardBody>
      </Card>

      {/* ================= LOCATION DETAILS ================= */}
      <Card className="mb-4">
        <CardBody>
          <h4 className="fw-semibold">Location Details</h4>
          <hr />
          <TextFormInput control={control} name="address1" label="Address Line 1" />
          <TextFormInput control={control} name="address2" label="Address Line 2" />
          <Row className="g-3 mt-1">
            <Col lg={4}><TextFormInput control={control} name="area" label="Area / Locality" /></Col>
            <Col lg={4}><TextFormInput control={control} name="city" label="City" /></Col>
            <Col lg={4}><TextFormInput control={control} name="state" label="State" /></Col>
            <Col lg={4}><TextFormInput control={control} name="country" label="Country" /></Col>
            <Col lg={4}><TextFormInput control={control} name="po_box" label="PO BOX" /></Col>
            <Col lg={4}><TextFormInput control={control} name="map_url" label="Google Map URL" /></Col>
          </Row>
        </CardBody>
      </Card>

      {/* ================= INTERNAL TRACKING ================= */}
      <Card className="mb-4">
        <CardBody>
          <h4 className="fw-semibold">Internal Tracking</h4>
          <hr />
          <TextAreaFormInput control={control} name="internal_notes" label="Internal Notes" />
          <TextFormInput control={control} name="created_by" label="Created By" />
        </CardBody>
      </Card>

      {/* ================= SYSTEM FIELDS ================= */}
      <Card className="mb-4">
        <CardBody>
          <h4 className="fw-semibold">System Fields (Auto)</h4>
          <hr />
          <Row className="g-3">
            <Col lg={4}><TextFormInput control={control} name="created_time" label="Created Time" placeholder="TimeStamp" /></Col>
            <Col lg={4}><TextFormInput control={control} name="updated_by" label="Last Updated By" /></Col>
            <Col lg={4}><TextFormInput control={control} name="updated_time" label="Last Updated Time" /></Col>
          </Row>
        </CardBody>
      </Card>

      {/* ================= BUTTONS ================= */}
      <div className="d-flex justify-content-end gap-2 mb-4">
        <Button variant="outline-secondary">Cancel</Button>
        <Button variant="primary" type="submit">Add Property</Button>
      </div>

    </form>
  );
};

export default PropertyAdd;

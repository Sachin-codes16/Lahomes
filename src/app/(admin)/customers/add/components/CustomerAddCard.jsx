import avatar2 from "@/assets/images/users/avatar-2.jpg";
import IconifyIcon from "@/components/wrappers/IconifyIcon";
import { currency } from "@/context/constants";
import { Button, Card, CardBody, Col, Row } from "react-bootstrap";
const CustomerAddCard = () => {
  return (
    <Col xl={3} lg={12}>
      <Card className="overflow-hidden">
        <CardBody>
          <div className="customer-bg text-center rounded position-relative">
            <img
              src={avatar2}
              alt="avtar2"
              className="avatar-xl  border border-light border-3 rounded-circle position-absolute top-100 start-0 translate-middle ms-5"
            />
          </div>
          <div className="mt-5 pt-3 ms-1">
            <div className="d-flex justify-content-between align-items-center mb-3">
              <h4 className="mb-0 text-dark fw-semibold">Daavid Nummi</h4>
              <div>
                <span className="badge bg-success text-white fs-12 px-2 py-1">
                  Available
                </span>
              </div>
            </div>
            <p className="text-muted fw-medium fs-14 mb-1">
              <span className="text-dark me-1">Email Address : </span>{" "}
              daavidnumminen@teleworm.us
            </p>
            <p className="text-muted fw-medium fs-14 mb-1">
              <span className="text-dark me-1">Contact Number : </span> +231
              06-75820711
            </p>
            <p className="text-muted fw-medium fs-14 mb-1">
              <span className="text-dark me-1">Address : </span> Schoolstraat
              161 5151 HH Drunen
            </p>
            <Row className="mt-3 justify-content-between">
              <Col lg={4}>
                <p className="fw-medium mb-2">Lead Id</p>
                <h5 className="mb-0 fw-semibold text-dark">A124</h5>
              </Col>
              <Col lg={4}>
                <p className="fw-medium mb-2">lead type</p>
                <h5 className="mb-0 fw-semibold text-dark">Tenant</h5>
              </Col>
              <Col lg={4}>
                <p className="fw-medium mb-2">Created at</p>
                <h5 className="mb-0 fw-semibold text-dark">{}11:45 Oct:12</h5>
              </Col>
            </Row>
            <h4 className="mt-3 fs-17"></h4>
            <ul className="list-inline d-flex gap-1 mb-0 align-items-center mt-3">
              <li className="list-inline-item"></li>
              <li className="list-inline-item"></li>
              <li className="list-inline-item"></li>
              <li className="list-inline-item"></li>
              <li className="list-inline-item"></li>
            </ul>
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};
export default CustomerAddCard;

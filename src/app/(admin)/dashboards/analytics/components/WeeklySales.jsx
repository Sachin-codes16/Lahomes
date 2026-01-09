import properties10 from '@/assets/images/properties/p-10.jpg';
import properties6 from '@/assets/images/properties/p-6.jpg';
import properties7 from '@/assets/images/properties/p-7.jpg';
import properties8 from '@/assets/images/properties/p-8.jpg';
import properties9 from '@/assets/images/properties/p-9.jpg';
import ReactApexChart from 'react-apexcharts';
import { useNavigate } from 'react-router-dom';

import { Button, Card, CardBody, CardFooter, CardHeader, CardTitle, Carousel, CarouselItem, Col } from 'react-bootstrap';
import { salesOptions } from '../data';
const WeeklySales = () => {
  const navigate = useNavigate();
  return <Col xl={3} lg={6}>
      <Card>
        <CardHeader>
          <CardTitle as={'h4'}>Weekly Sales</CardTitle>
        </CardHeader>
        <CardBody>
          <Carousel indicators={false} id="carouselExampleCaptions" className=" slide" data-bs-ride="carousel">
            <CarouselItem className=" active">
              <img src={properties9} width={327} className="d-block w-100 h-100 rounded" alt="img-6" />
            </CarouselItem>
            <CarouselItem className="">
              <img src={properties7} width={327} className="d-block w-100 h-100 rounded" alt="img-7" />
            </CarouselItem>
            <CarouselItem className="">
              <img src={properties8} width={327} className="d-block w-100 h-100 rounded" alt="img-5" />
            </CarouselItem>
            <CarouselItem className="">
              <img src={properties6} width={327} className="d-block w-100 h-100 rounded" alt="img-" />
            </CarouselItem>
            <CarouselItem className="">
              <img src={properties10} width={327} className="d-block w-100 h-100 rounded" alt="img-5" />
            </CarouselItem>
          </Carousel>
          <ReactApexChart options={salesOptions} series={salesOptions.series} height={120} type="bar" className="apex-charts mt-4" />
        </CardBody>
        <CardFooter className="border-top d-flex align-items-center justify-content-between">
          <p className="text-muted fw-medium fs-15 mb-0">
            <span className="text-dark me-1">Total Property Rented : </span>5,746
          </p>
          <div>
            <Button variant="primary" size="sm"
             onClick={() => navigate('/list')}>
              View More
            </Button>
          </div>
        </CardFooter>
      </Card>
    </Col>;
};
export default WeeklySales;
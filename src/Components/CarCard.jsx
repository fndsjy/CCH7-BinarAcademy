import React from 'react';
import { Col, Card, Button } from 'react-bootstrap';

const CarAPI = (props) => {
    function rupiah(number) {
        return new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR' }).format(number);
    }

    const rentCost = rupiah(props.data.rentPerDay);

    return (
        <>
            <Col xl={4} lg={4} md={4} sm={6} xs={12}>
                <Card style={{ width: '18.8rem'}}>
                    <Card.Img variant="top" src={props.data.image} />
                    <Card.Body className="car-card-body">
                        <div className="car-card-desc">
                            <Card.Title>
                                {props.data.manufacture} {props.data.model}
                            </Card.Title>
                            <Card.Text>{rentCost} / hari</Card.Text>
                            <div className="car-card-desc-cust" style={{height: "100px"}}>
                            <Card.Text>{props.data.description}</Card.Text>
                            </div>
                        </div>

                        <div className="py-2">
                            <Card.Text>
                                <i className="bi bi-people me-2"></i> {props.data.capacity}
                            </Card.Text>
                            <Card.Text>
                                <i className="bi bi-gear me-2"></i> {props.data.transmission}
                            </Card.Text>
                            <Card.Text>
                                <i className="bi bi-calendar4 me-2"></i> {props.data.year}
                            </Card.Text>
                            <div className="d-grid grap-2">
                                <Button variant="success" className="car-card-button">
                                    Pilih Mobil
                                </Button>
                            </div>
                        </div>
                    </Card.Body>
                </Card>
            </Col>
        </>
    );
};

export default CarAPI;

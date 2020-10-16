import React, { useState} from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';

function Home(){
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const emmergency = {
        color: "red"

    }

    return (
        <div>
             {/* <!-- banner part start--> */}
            <section className="banner_part" id="homeContent1">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-5 col-xl-5">
                            <div className="banner_text">
                                <div className="banner_text_iner">
                                    <h5>We are here for your care</h5>
                                    <h1>Get An
                                        Ambulance <br /><span style={emmergency}>IN A GiFi</span></h1>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing
                                        elit sed do eiusmod tempor incididunt ut labore et dolore
                                        magna aliqua. Quis ipsum suspendisse ultrices gravida.Risus cmodo viverra </p>
                                        <Button variant="danger" onClick={handleShow}>Request an Ambulance            </Button>

                                </div>
                            </div>
                        </div>
                        <div className="col-lg-7">
                            <div className="banner_img">
                                <img src="img/banner_img.png" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>


               


            <Modal size="lg" centered show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                <Modal.Title>Request An Ambulance</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                     
                        <Form.Group controlId="formBasicFirstName">
                            <Form.Label>First Name </Form.Label>
                            <Form.Control size="md" type="text" placeholder="First Name" />
                            <Form.Label>Last Name </Form.Label>
                            <Form.Control size="md" type="text" placeholder="Last Name" />
                            <Form.Label>Phone Number</Form.Label>
                            <Form.Control size="md" type="text" placeholder="08000000000" />
                        </Form.Group>
                        {/* <Form.Row>
                        <Form.Group controlId="formBasicCheckbox">
                            <Col>
                            <Form.Check type="checkbox" label="Male" />
                            </Col>
                            <Col>
                            <Form.Check type="checkbox" label="Female" />
                            </Col>
                        </Form.Group>
                        </Form.Row> */}
                        <div className="row">


                        <Form.Group as={Row}>
                            
                            <table>
                                <tbody>
                                    <tr>
                                        <td>                                            
                                            <Form.Label as="legend" column sm={2}>
                                            Sex
                                            </Form.Label>
                                        </td>
                                        <td><Form.Check
                                                type="radio"
                                                label="Male"
                                                name="formHorizontalRadios"
                                                id="formHorizontalRadios1"
                                                />
                                        </td>
                                        <td>
                                                <Form.Check
                                                type="radio"
                                                label="Female"
                                                name="formHorizontalRadios"
                                                id="formHorizontalRadios2"
                                                />
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        
                        <div className="col-4">
                            
                        </div>
                        <div className="col-4">
                            <Col >
                            
                            </Col>
                        </div>   
                        </Form.Group>
                        </div>

                        <Form.Group controlId="formBasicState">
                            <Form.Label>Full Address </Form.Label>
                            
                            <Form.Control size="md" type="text" placeholder="Address/Location " />
                            
                            <Form.Label>State </Form.Label>
                            <Col>
                            <Form.Control size="md" type="text" placeholder="State" />
                            </Col>
                            <Col>
                            <Form.Label>Country </Form.Label>
                            <Form.Control size="md" type="text" placeholder="Country" />
                            </Col>
                        </Form.Group>
                    
                        <Button variant="danger" type="submit">
                            Submit
                        </Button>
                    </Form>
                
                </Modal.Body>
                <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Close
                </Button>
                <Button variant="danger" onClick={handleClose}>
                    Save Changes
                </Button>
                </Modal.Footer>
            </Modal>

            {/* <!-- about us part start--> */}
{/*             
            <section className="about_us padding_top">
                <div className="container">
                    <div className="row justify-content-between align-items-center">
                        <div className="col-md-6 col-lg-6">
                            <div className="about_us_img">
                                <img src="img/top_service.png" alt="" />
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-5">
                            <div className="about_us_text">
                                <h2>About us</h2>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit sed
                                    do eiusmod tempor incididunt ut labore et dolore magna aliqua
                                    Quis ipsum suspendisse ultrices gravida. Risus cmodo viverra
                                    maecenas accumsan lacus vel</p>
                                <a className="btn_2 " href="#">learn more</a>
                                <div className="banner_item">
                                    <div className="single_item">
                                        <img src="img/icon/banner_1.svg" alt="" />
                                        <h5>Emergency</h5>
                                    </div>
                                    <div className="single_item">
                                        <img src="img/icon/banner_2.svg" alt="" />
                                        <h5>Appointment</h5>
                                    </div>
                                    <div className="single_item">
                                        <img src="img/icon/banner_3.svg" alt="" />
                                        <h5>Qualfied</h5>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section> */}

            {/* <!-- feature_part start--> */}
            
            {/* <section className="feature_part">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-xl-8">
                            <div className="section_tittle text-center">
                                <h2>Our services</h2>
                            </div>
                        </div>
                    </div>
                    <div className="row justify-content-between align-items-center">
                        <div className="col-lg-3 col-sm-12">
                            <div className="single_feature">
                                <div className="single_feature_part">
                                    <span className="single_feature_icon"><img src="img/icon/feature_1.svg" alt=""/></span>
                                    <h4>Call an Ambulance</h4>
                                    <p>Darkness multiply rule Which from without life creature blessed
                                        give moveth moveth seas make day which divided our have.</p>
                                </div>
                                <Button variant="primary" onClick={handleShow}>Request an Ambulance </Button>
                            </div>
                            <div className="single_feature">
                                <div className="single_feature_part">
                                    <span className="single_feature_icon"><img src="img/icon/feature_2.svg" alt=""/></span>
                                    <h4>Book an Apointment</h4>
                                    <p>Darkness multiply rule Which from without life creature blessed
                                        give moveth moveth seas make day which divided our have.</p>
                                </div>
                                <Button variant="primary" onClick={handleShow}>Book An Appointment </Button>
                            </div>
                        </div>
                        <div className="col-lg-4 col-sm-12">
                                <div className="single_feature_img">
                                    <img src="img/service.png" alt=""/>
                                </div>
                        </div>
                        <div className="col-lg-3 col-sm-12">
                            <div className="single_feature">
                                <div className="single_feature_part">
                                    <span className="single_feature_icon"><img src="img/icon/feature_1.svg" alt=""/></span>
                                    <h4>See a Doctor</h4>
                                    <p>Darkness multiply rule Which from without life creature blessed
                                        give moveth moveth seas make day which divided our have.</p>
                                </div>
                                <Button variant="primary" onClick={handleShow}>Chat with a Doctor </Button>
                            </div>
                            <div className="single_feature">
                                <div className="single_feature_part">
                                    <span className="single_feature_icon"><img src="img/icon/feature_2.svg" alt=""/></span>
                                    <h4>Health Insurrance</h4>
                                    <p>Darkness multiply rule Which from without life creature blessed
                                        give moveth moveth seas make day which divided our have.</p>
                                </div>
                                <Button variant="primary" onClick={handleShow}>Get Insured Now</Button>
                                
                            </div>
                        </div>
                    </div>
                </div>
            </section> */}
            {/* <!-- feature_part start--> */}


        </div>
    )
}

export default Home;
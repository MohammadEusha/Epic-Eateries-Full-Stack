import { Button, Col, Container, Row } from 'react-bootstrap';
import React, { useContext, useState } from 'react';
import Appbar from '../../HomePage/Appbar/Appbar';
import Swal from 'sweetalert2';
import './OrderedFood.css'
import { useSelector } from 'react-redux';

import OrderedFoodsCard from '../OrderedFoodsCard/OrderedFoodsCard';
import Payment from '../Payments/Payment/Payment';
import { UserContext } from '../../../App';

const OrderedFood = () => {
    const foods = useSelector((state) => {
        return state.foods.orderedList;
    })
    // const { foodName } = useParams();

    // const order = fakeData.find(food => food.foodName === foodName)

    // const [loggedInUser, setLoggedInUser] = useContext(UserContext);

    const [loggedInUser, setLoggedInUser] = useContext(UserContext);

    const [orderFoods, setOrderFoods] = useState(false)



    let display;
    if (orderFoods) {
        display =
            <div>
                <Appbar></Appbar>
                <div>
                    <h3 className="mt-5 pt-5 text-center container">Hi <span className="text-danger">{loggedInUser.name}</span>. Please Pay For Getting Your Foods.If You Want To Update Your Information PLease Click On the Update Information Button.</h3>
                    <div className="d-grid text-center container mt-2">
                        <button onClick={() => setOrderFoods(!orderFoods)} variant="secondary" className="btn-lg  btn-block btn-danger" block>Update Information</button>
                    </div>
                </div>
                <Container style={{ paddingBottom: "210px" }} id="Contact" className=" mt-5 mb-5 pt-5" fluid>
                    <Row className=" mt-5">
                        <Col md={2}></Col>
                        <Col className="text-center " md={4}>
                            <Payment></Payment>
                        </Col>
                        <Col md={4}>
                            <lottie-player src="https://assets10.lottiefiles.com/packages/lf20_yzoqyyqf.json" background="transparent" speed="1" loop autoplay></lottie-player>
                        </Col>
                        <Col md={2}></Col>
                    </Row>
                </Container>
            </div>


    }
    else {
        display =
            <div>
                <Appbar></Appbar>
                <Container id="Contact" className=" mt-5 mb-5 pb-5" fluid>
                    <Row className=" mt-5">
                        <Col md={7}>
                            <div style={{ marginTop: "100px" }} className="row d-flex justify-content-center">
                                {
                                    foods?.length ?
                                        foods?.map(food => <OrderedFoodsCard food={food}></OrderedFoodsCard>)
                                        :
                                        <h1 className="text-light">You Didn't Ordered yet....!!!!</h1>
                                }
                            </div>
                        </Col>
                        <Col md={4} >
                            <div style={{ marginTop: "100px", marginBottom: "250px" }} id="booking-area" className="booking-form text-light">
                                <div className="input-group required">
                                    <label for="">Your Name</label>
                                    <input className="inp-style text-light" type="text" name="" placeholder="Write Your Name" />
                                </div>
                                <div className="input-group required">
                                    <label for="">Your Phone Number</label>
                                    <input className="inp-style text-light" type="text" name="" placeholder="Write Your Phone Number" />
                                </div>
                                <div className="input-group required">
                                    <label for="">Delivered Location</label>
                                    <input className="inp-style text-light" type="text" name="" placeholder="Write Your Location" />
                                </div>
                                <div className="inputs">
                                    <div className="input-group required">
                                        <label for="">Order Date</label>
                                        <input className="inp-style text-light" type="date" name="" />
                                    </div>
                                </div>
                                <Button onClick={() => setOrderFoods(!orderFoods)} variant="secondary" className="btn-lg btn-danger" block>Confirm</Button>
                            </div>


                        </Col>
                    </Row>
                </Container>
            </div>


    }


    return (
        <div style={{ backgroundColor: "#050c1a", color: "white", height: "980px" }}>
            {display}
        </div>
    );
};

export default OrderedFood;
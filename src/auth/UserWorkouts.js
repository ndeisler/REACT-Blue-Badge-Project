import React from "react";

import {Card, CardImg, CardHeader, CardText, CardBody, CardTitle, CardSubtitle, Button, Container, Col, Row} from "reactstrap";
import { Carousel } from "react-responsive-carousel";
import { FaTrashAlt } from "react-icons/fa"
import { FaEdit } from "react-icons/fa"
import trash from "../assets/images/trash2.png";
import edit from "../assets/images/edit2.png";
import "react-responsive-carousel/lib/styles/carousel.min.css";


const UserWorkouts = (props) => {
    let exercises = props.exercises;
    let workout = props.userWorkouts; 


    
    return (

        <div className="lol">
            {props.userWorkouts.map((workout, index) => {
                return (
                    <Container fluid className="cardContainer" key={index}>
                        <Row>
                            <Col sm="12" md="4" lg="4">
                                <Carousel showThumbs={false} infiniteLoop={true} className="carousel">
                                    { 
                                        workout.workouts.map((el, index) => {
                                            return (
                                                <div key={index} >
                                                    <img src={exercises[el - 1].image_url}/>
                                                </div>
                                            )
                                        })
                                    }
                                </Carousel>
                            </Col>
                            <Col sm="12" md="2" lg="2">
                                <div className="time">
                                    <h6><b>Time:</b></h6><br/>
                                    <p>{workout.time}{workout.time === null ? null : " Min"}</p>
                                </div>
                            </Col>
                            <Col sm="12" md="4" lg="4">
                                <div className="comment">
                                    <h6><b>Comments:</b></h6><br/>
                                    <p>{workout.comments}</p>   
                                </div> 
                            </Col>
                            <Col >
                                <Button className="editButton" id={workout.id} onClick={props.incomingModal}><img src={edit} id={workout.id} onClick={props.incomingModal}/></Button>
                                <Button className="deleteButton" id={workout.id} onClick={props.delete}><img src={trash} id={workout.id} onClick={props.delete}/></Button> 
                            </Col>
                            
                        </Row>
                    </Container>
                    )
                })
            }
        </div>
     )
}
export default UserWorkouts;
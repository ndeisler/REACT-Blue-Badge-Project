import React from "react";

import {Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle, Button, Container, Col, Row} from "reactstrap";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";


const UserWorkouts = (props) => {
    let exercises = props.exercises;
    let workout = props.userWorkouts; 
    
    return (

        <div className="lol">
            {props.userWorkouts.map((workout, index) => {
                
                return (
                    <Container className="cardContainer" key={index}>
                        <Row>
                            <Col sm="12" md="4">
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
                            <Col sm="12" md="4">
                                <div className="time">
                                    <h6><b>Time:</b></h6><br/>
                                    <p>{workout.time}{workout.time === null ? null : " Min"}</p>
                                </div>
                                <div className="cardButtons">
                                    <Button id={workout.id} onClick={props.incomingModal}>Edit</Button>
                                    <Button id={workout.id} onClick={props.delete} color="danger">Delete</Button>
                                    
                                </div>
                            </Col>
                            <Col sm="12" md="4">
                                <div className="comment">
                                    <h6><b>Comments:</b></h6><br/>
                                    <p>{workout.comments}</p> 
                                   
                                    
                                </div> 
                            </Col>
                        </Row>
                    </Container>
                    )
                })
            }
        </div>
        // <div className="cardbox">
        // {props.userWorkouts.map((workout, index) => {
        //     return (
        //     <Card className="card" key={index}>
                
        //         <Carousel showThumbs={false} width="80%" infiniteLoop={true} className="carousel">
        //             {
                        
        //                 workout.workouts.map((el, index) => {
        //                     return (
        //                         <div >
        //                             <img src={exercises[el - 1].image_url}/>
        //                         </div>
        //                     )
        //                 })
        //             }

        //         </Carousel>
                

        //         <CardImg top width="100%"/>
                
        //         <CardBody>
        //             <CardTitle>Workout</CardTitle>
        //             <CardSubtitle><b>Time:</b><br/> {workout.time}min</CardSubtitle>
        //             <CardText><b>Comments:</b><br/> {workout.comments}</CardText>
        //             <Button id={workout.id} onClick={props.incomingModal} color="warning">Update</Button>
        //             <Button id={workout.id} onClick={props.delete}>Delete</Button>
        //         </CardBody>
        //     </Card>
        //     )
        // })}
        // </div>
    )
}
export default UserWorkouts;
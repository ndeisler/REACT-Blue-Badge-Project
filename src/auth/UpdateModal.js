import React, {Component} from "react"
import  {Button, Form, FormGroup, Label, Input, Container, Row, Col, Modal, ModalHeader, ModalBody} from "reactstrap";


const UpdateModal = (props) => {
    
    let exercises = props.exercises;
    let workout = props.selectedWorkout; 
    let array = [];
    for(var i = 0; i < workout.workouts.length; i++) {
        for (var x = 0; x < exercises.length; x++) {
            if (workout.workouts[i] === exercises[x].id) {
                array.push(exercises[x]);
            }
        }
    }
    const closeBtn = <button className="close" onClick={props.close}>&times;</button>

    return (
        <div className="updateForm">
            <Modal isOpen={true}>
                <Container>
                    <ModalHeader toggle={props.close} close={closeBtn}>Update Your Workout</ModalHeader>
                    <br/>   
                    <div className="yourWorkouts">
                    <Container>
                        {
                            array.map((el, index) => {
                                return (
                                    <div className="generatedWorkouts" key={index}>
                                <Row>
                                    <Col md="4">
                                        <img src={el.image_url}/>
                                    </Col>
                                    <Col className="descriptionBox" md="8">
                                        <h4>{el.name}</h4>
                                        <p>{el.description}</p>
                                    </Col>
                                </Row>
                            </div>
                                )
                            })
                        }
                    </Container>
                    </div>
                    <br/>
                        <Form onSubmit={event => props.updateWorkout(event, workout)} >
                            <Row>
                                <Col>
                                <Label for="time">How long did this workout take you?</Label>
                                <Input type="number" id="time" onChange={event => props.handleChange(event)} name="time" defaultValue={workout.time}/>
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <Label for="comments">Thoughts on the workout:</Label> 
                                    <Input type="text" id="comments" onChange={event => props.handleChange(event)} name="comments" defaultValue={workout.comments}/>
                                </Col>
                            </Row>
                            <div className="modalButton">
                            <Button type="submit" color="warning">Update/Save Workout</Button>
                            </div>
                            
                        </Form>
                </Container>
            </Modal>
        </div>
    )
}
export default UpdateModal;





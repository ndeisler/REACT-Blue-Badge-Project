import React from "react";
import {Container, Row, Col} from "reactstrap";


const Randomizer = (props) => {
   
    return(
        <div id="clearDiv">
        <Container>
        {   
        props.generatedWorkouts.map((exercise, index) => {
            return (
                <div className="generatedWorkouts" key={index}>
                <Row>
                    <Col md="4">
                        <img src={exercise.image_url}/>
                    </Col>
                    <Col md="8">
                        <h4>{exercise.name}</h4>
                        <p>{exercise.description}</p>
                    </Col>
                </Row>
            </div>
            )
        })
        }
        </Container>
    </div>
    )
}

export default Randomizer;
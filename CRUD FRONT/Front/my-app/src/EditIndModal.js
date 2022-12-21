import React,{Component} from 'react';
import {Modal, Button,Row,Col,Form} from 'react-bootstrap';

export class EditIndModal extends Component{
    constructor(props){
        super(props);
        this.handleSubmit=this.handleSubmit.bind(this);
    }

    handleSubmit(event){
        event.preventDefault();
        fetch(process.env.REACT_APP_API+'individe',{
            method:'PUT',
            headers:{
                'Accept':'application/json',
                'Content-Type':'application/json'
            },
            body:JSON.stringify({
                IndivideId:event.target.IndivideId.value,
                IndivideName:event.target.IndivideName.value
        })
    })
    .then(res=>res.json())
    .then((result)=>{
        alert(result);
    },
    (error)=>{
        alert('Failed');
    })
}

    render(){
        return(
            <div className="container">

<Modal
{...this.props}
size="lg"
aria-labelledby="contained-modal-title-vcenter"
centered
>
    <Modal.Header clooseButton>
        <Modal.Title id="contained-modal-title-vcenter">
            Edit Individe
        </Modal.Title>
    </Modal.Header>
    <Modal.Body>


        <Row>
            <Col sm={6}>
                <Form onSubmit={this.handleSubmit}>
                <Form.Group cotrolId="IndivideId">
                        <Form.Label>IndivideId</Form.Label>
                        <Form.Control type="text" name="IndivideId" required
                        disabled
                        defaultValue={this.props.indid}
                        placeholder="IndivideName"/>
                    </Form.Group>

                    <Form.Group cotrolId="IndivideName">
                        <Form.Label>IndivideName</Form.Label>
                        <Form.Control type="text" name="IndivideName" required
                        defaultValue={this.props.indname}
                        placeholder="IndivideName"/>
                    </Form.Group>

                    <Form.Group>
                        <Button variant="primary" type="submit">
                            Update Individe
                        </Button>
                    </Form.Group>
                </Form>
            </Col>
        </Row>
    </Modal.Body>

    <Modal.Footer>
        <Button variant="danger" onClick={this.props.onHide}>Close</Button>
    </Modal.Footer>




</Modal>

           </div>
        )
    }
}
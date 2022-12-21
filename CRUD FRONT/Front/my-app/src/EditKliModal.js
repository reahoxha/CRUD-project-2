import React,{Component} from 'react';
import {Modal, Button,Row,Col,Form} from 'react-bootstrap';

export class EditKliModal extends Component{
    constructor(props){
        super(props);
        this.state={inds:[]};
        this.handleSubmit=this.handleSubmit.bind(this);
    }

    handleSubmit(event){
        event.preventDefault();
        fetch(process.env.REACT_APP_API+'klienti',{
            method:'PUT',
            headers:{
                'Accept':'application/json',
                'Content-Type':'application/json'
            },
            body:JSON.stringify({
                KlientiId:event.target.KlientiId.value,
                EmriKlientit:event.target.EmriKlientit.value,
                LlojiSigurimit:event.target.LlojiSigurimit.value
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
            Edit Klienti
        </Modal.Title>
    </Modal.Header>
    <Modal.Body>


        <Row>
            <Col sm={6}>
                <Form onSubmit={this.handleSubmit}>
                <Form.Group cotrolId="KlientiId">
                        <Form.Label>KlientiId</Form.Label>
                        <Form.Control type="text" name="KlientiId" required
                        placeholder="KlientiId"
                        disabled
                        defaultValue={this.props.kliid}/>
                    </Form.Group>

                    <Form.Group cotrolId="EmriKlientit">
                        <Form.Label>EmriKlientit</Form.Label>
                        <Form.Control type="text" name="EmriKlientit" required
                        defaultValue={this.props.kliname}
                        placeholder="EmriKlientit"/>
                    </Form.Group>

                   <Form.Group cotrolId="LlojiSigurimit">
                        <Form.Label>LlojiSigurimit</Form.Label>
                        <Form.Control as="select" defaultValue={this.props.indls}>
                        {this.state.inds.map(ind=>
                         <option key={ind.IndivideId}>{ind.IndivideName}</option>)}
                        </Form.Control>
                    </Form.Group>

                    <Form.Group>
                        <Button variant="primary" type="submit">
                            Update Klienti
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
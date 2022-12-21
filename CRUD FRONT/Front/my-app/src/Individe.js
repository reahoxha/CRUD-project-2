import React,{Component} from 'react';
import {Table} from 'react-bootstrap';

import {Button,ButtonToolbar} from 'react-bootstrap';
import {AddIndModal} from './AddIndModal';
import {EditIndModal} from './EditIndModal';

export class Individe extends Component{

    constructor(props){
        super(props);
        this.state={inds:[], addModalShow:false, editModalShow:false}
    }

    refreshList(){
        fetch(process.env.REACT_APP_API+'individe')
        .then(response=>response.json())
        .then(data=>{
            this.setState({inds:data});
        });
    }

    componentDidMount(){
        this.refreshList();
    }

    componentDidUpdate(){
        this.refreshList();
    }

    deleteInd(indid){
        if(window.confirm('Are you sure')){
            fetch(process.env.REACT_APP_API+'individe/'+indid,{
                method:'DELETE',
                header:{'Accept':'application/json',
            'Content-Type':'application/json'}
            })
        }
    }

    render(){
        const {inds, indid, indname}=this.state;
        let addModalClose=()=>this.setState({addModalShow:false});
        let editModalClose=()=>this.setState({editModalShow:false});
        return(
            <div>
               <Table className="mt-4" striped borderd hover size="sm">
                   <thead>
                       <tr>
                        <th>IndivideId</th>
                       <th>IndivideName</th>
                       <th>Options</th>
                       </tr>
                   </thead>
                   <tbody>
                       {inds.map(ind=>
                         <tr key={ind.IndivideId}>
                             <td>{ind.IndivideId}</td>
                             <td>{ind.IndivideName}</td>
                             <td>
<ButtonToolbar>
    <Button className="mr-2" variant="info"
    onClick={()=>this.setState({editModalShow:true,
        indid:ind.IndivideId,indname:ind.IndivideName})}>
           Edit
        </Button>

        <Button className="mr-2" variant="danger"
    onClick={()=>this.deleteInd(ind.IndivideId)}>
           Delete
        </Button>

    <EditIndModal show={this.state.editModalShow}
    onHide={editModalClose}
    indid={indid}
    indname={indname}/>

</ButtonToolbar>
                             </td>
                         </tr>)}
                   </tbody>
               </Table>

               <ButtonToolbar>
                   <Button variant='primary'
                   onClick={()=>this.setState({addModalShow:true})}>
                    Shto Individe</Button>

                    <AddIndModal show={this.state.addModalShow}
                    onHide={addModalClose}/>
               </ButtonToolbar>
            </div>
        )
    }
}
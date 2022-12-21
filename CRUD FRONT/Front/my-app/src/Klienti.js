import React,{Component} from 'react';
import {Table} from 'react-bootstrap';

import {Button,ButtonToolbar} from 'react-bootstrap';
import {AddKliModal} from './AddKliModal';
import {EditKliModal} from './EditKliModal';

export class Klienti extends Component{

    constructor(props){
        super(props);
        this.state={klis:[], addModalShow:false, editModalShow:false}
    }

    refreshList(){
        fetch(process.env.REACT_APP_API+'klienti')
        .then(response=>response.json())
        .then(data=>{
            this.setState({klis:data});
        });
    }

    componentDidMount(){
        this.refreshList();
    }

    componentDidUpdate(){
        this.refreshList();
    }

    deleteKli(kliid){
        if(window.confirm('Are you sure')){
            fetch(process.env.REACT_APP_API+'klienti/'+kliid,{
                method:'DELETE',
                header:{'Accept':'application/json',
            'Content-Type':'application/json'}
            })
        }
    }

    render(){
        const {klis, kliid, kliname, indls}=this.state;
        let addModalClose=()=>this.setState({addModalShow:false});
        let editModalClose=()=>this.setState({editModalShow:false});
        return(
            <div>
               <Table className="mt-4" striped borderd hover size="sm">
                   <thead>
                       <tr>
                        <th>KlientiId</th>
                       <th>EmriKlientit</th>
                       <th>LlojiSigurimit</th>
                       <th>Options</th>
                       </tr>
                   </thead>
                   <tbody>
                       {klis.map(kli=>
                         <tr key={kli.KlientiId}>
                             <td>{kli.KlientiId}</td>
                             <td>{kli.EmriKlientit}</td>
                             <td>{kli.LlojiSigurimit}</td>
                             <td>
<ButtonToolbar>
    <Button className="mr-2" variant="info"
    onClick={()=>this.setState({editModalShow:true,
        kliid:kli.KlientiId,kliname:kli.EmriKlientit,indls:kli.LlojiSigurimit})}>
           Edit
        </Button>

        <Button className="mr-2" variant="danger"
    onClick={()=>this.deleteKli(kli.KlientiId)}>
           Delete
        </Button>

    <EditKliModal show={this.state.editModalShow}
    onHide={editModalClose}
    kliid={kliid}
    kliname={kliname}
    indls={indls}/>

</ButtonToolbar>
                             </td>
                         </tr>)}
                   </tbody>
               </Table>

               <ButtonToolbar>
                   <Button variant='primary'
                   onClick={()=>this.setState({addModalShow:true})}>
                    Shto Klientin</Button>

                    <AddKliModal show={this.state.addModalShow}
                    onHide={addModalClose}/>
               </ButtonToolbar>
            </div>
        )
    }
}
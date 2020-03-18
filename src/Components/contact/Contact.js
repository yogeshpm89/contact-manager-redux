import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { deleteContact } from '../../Actions/ContactActions';
import PropTypes from 'prop-types';


class Contact extends React.Component {

    constructor() {
        super();
        this.state = {
            name: 'Yogesh',
            age: 32
        }
    }

    showAge = () => {
        this.setState({
            "showAge": !this.state.showAge
        });
    }

    onDelete = (contact, dispatch) => {
        this.props.deleteContact(contact.id);
    }
    

    render() {
        const arrowClass = !this.state.showAge ? "fa fa-angle-double-down" : "fa fa-angle-double-up" ;
        const contact = this.props.contact;
        return <div>
                {contact && 
                    <div className="row text-left">
                        <div className="col-sm-10" onClick={this.showAge}>
                            <strong>
                                {contact.name}
                                &nbsp;&nbsp;
                                <span onClick={this.showAge}>
                                    <i className={arrowClass}></i>
                                </span>
                            </strong>
                            
                            { this.state.showAge ?  
                                <div className="card-body">
                                    <p>Email address: {contact.email}</p>
                                    <p>phone: {contact.phone}</p> 
                                </div>
                            : null }
                        </div>
                        
                        <div className="col-sm-1">
                            <Link to={`contact/edit/${contact.id}`}>
                                <i className="fa fa-pencil fa-2x"
                                    style={{
                                        cursor: 'pointer',
                                        color: 'black'
                                    }}></i>
                            </Link>
                            &nbsp;&nbsp;
                            <i className="fa fa-remove fa-2x" 
                            style={{
                                cursor: 'pointer',
                                color: 'red'
                            }}
                            onClick={this.onDelete.bind(this, contact)}></i>
                        </div>
                    </div>
                }
                
    
            </div>
    }
}
Contact.prototypes = {
    deleteContact: PropTypes.func.isRequired
}

export default connect(null, 
    {deleteContact}
    )(Contact);
import React from 'react'
import TextInputGroup from '../forms/TextInputGroup';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { updateContact, getContacts } from '../../Actions/ContactActions';

class EditContact extends React.Component {

    state = {
        name: '',
        email: '',
        phone: '',
        errors: {}
    }

    componentDidMount() {
        const {id} = this.props.match.params;
        const contactList = this.props.contactList;
        const contact = contactList.find(contact => contact.id === parseInt(id));
        this.setState({
            name: contact.name,
            email: contact.email,
            phone: contact.phone
        })
    }

    onChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    onSubmit = (event) => {
        event.preventDefault();
        const { name, email, phone } = this.state;
        let { id } = this.props.match.params;
        id = parseInt(id);
        let isValid = true;

        if (!name) {
            this.setState({errors: {name: 'Name is required'}});
            isValid = false;
        }
        if (!email) {
            this.setState({errors: {age: 'Email is required'}});
            isValid = false;
        }

        if (!phone) {
            this.setState({errors: {age: 'Phone is required'}});
            isValid = false;
        }

        if (!isValid) return;

        const updatedContact = { 
            id, 
            name, 
            email, 
            phone 
        };
        ;
        this.props.updateContact(updatedContact);
        this.setState({name: '',age: '', errors: {}});
        this.props.history.push("/");
    }

    render() {
        const { name, email, phone, errors} = this.state;
        return (
            <div className="card mb-3">
            <div className="card-header">Edit Contact</div>
            <div className="card-body">
                <form onSubmit={this.onSubmit.bind(this)}>
                    <TextInputGroup 
                        name="name" label="Name"
                        placeholder="Enter Name..."
                        value={name}
                        onChange={this.onChange}
                        error={errors.name}
                    />
                    <TextInputGroup 
                        name="email" label="Email Address"
                        type="email"
                        placeholder="Enter Email..."
                        value={email}
                        onChange={this.onChange}
                        error={errors.email}
                    />
                     <TextInputGroup 
                        name="phone" label="Phone"
                        placeholder="Enter Phone..."
                        value={phone}
                        onChange={this.onChange}
                        error={errors.phone}
                    />
                    <input className="btn btn-dark btn-block" type="submit" value="Update Contact"></input>
                </form>
            </div>

        </div>
    
        )
    }
}

EditContact.prototypes = {
    updateContact: PropTypes.func.isRequired,
    getContacts: PropTypes.func.isRequired,
    contactList: PropTypes.array.isRequired,
}

const mapStateToProps = (state) => ({
    contactList: state.contact.contactList
});

export default connect(mapStateToProps, {
    updateContact,
    getContacts
})(EditContact);
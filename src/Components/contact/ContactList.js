import React from 'react';
import Contact from './Contact';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getContacts } from '../../Actions/ContactActions';

class ContactList extends React.Component {

    componentDidMount() {
        this.props.getContacts();
    }

    render() {
        const { contactList } = this.props;
        const deleteContact = (contact) => {
            const contactList = this.state.contactList.filter((item) => {
                return (item.name !== contact.name && item.age !== contact.age);
            })
            this.setState({ contactList: contactList });
        }

        const onSearch = (event) => {
            const contactList = this.state.masterContactList.filter((item) => {
                return item.name.indexOf(event.target.value) > -1;
            })
            this.setState({ contactList: contactList });
        }
        return (
            <div>
                <h4 className="">Contact List ({contactList && contactList.length})</h4>
                <div className="form-group m-sm-2">
                    <input type="text" className="form-control p-sm-1" placeholder="search..." id="search" onChange={onSearch} />
                </div>
                <ul className="list-group m-sm-2">
                    {contactList.map((contact, index) => {
                        return <li key={index.toString()} className="list-group-item">
                            <Contact contact={contact} deleteContact={deleteContact}></Contact>
                        </li>
                    })}
                </ul>
            </div>
        )
    }
}

ContactList.prototypes = {
    contactList: PropTypes.array.isRequired,
    getContacts: PropTypes.func.isRequired
}

const mapStateToProps = (state) => ({
    contactList: state.contact.contactList
});

export default connect(mapStateToProps, 
    {getContacts}
)(ContactList);
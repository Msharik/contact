import React, { useState, useEffect } from 'react';
import { getContacts, deleteContact } from '../Services/apiservice';
import ContactForm from './ContactForm';

const ContactList = () => {
    const [contacts, setContacts] = useState([]);
    const [selectedContact, setSelectedContact] = useState(undefined);

    useEffect(() => {
        fetchContacts();
    }, []);

    const fetchContacts = async () => {
        const contacts = await getContacts();
        setContacts(contacts);
    };

    const handleDelete = async (id) => {
        await deleteContact(id);
        fetchContacts();
    };

    const handleEdit = (contact) => {
        setSelectedContact(contact);
    };

    const handleSave = () => {
        setSelectedContact(undefined);
        fetchContacts();
    };

    return (
        <div>
            <ContactForm contact={selectedContact} onSave={handleSave} />
            <ul>
                {contacts.map((contact) => (
                    <li key={contact.id}>
                        <div className="contact-details">
                            {contact.name} - {contact.email} - {contact.phone}
                        </div>
                        <div>
                            <button className="edit" onClick={() => handleEdit(contact)}>Edit</button>
                            <button className="delete" onClick={() => handleDelete(contact.id)}>Delete</button>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ContactList;

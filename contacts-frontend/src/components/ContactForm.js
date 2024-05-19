import React, { useState, useEffect } from 'react';
import { createContact, updateContact } from '../Services/apiservice';

const ContactForm = ({ contact, onSave }) => {
    const initialFormData = {
        name: '',
        email: '',
        phone: ''
    };
    
    const [formData, setFormData] = useState(initialFormData);
    const [errors, setErrors] = useState({});

    useEffect(() => {
        if (contact) {
            setFormData(contact);
        } else {
            setFormData(initialFormData);
        }
    }, [contact]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        if (name === "phone" && !/^\d*$/.test(value)) {
            return; // Prevent non-numeric input
        }
        setFormData((prevState) => ({
            ...prevState,
            [name]: value
        }));
    };

    const validate = () => {
        const errors = {};
        if (!formData.name) {
            errors.name = 'Name is required';
        }
        if (!formData.email) {
            errors.email = 'Email is required';
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            errors.email = 'Email address is invalid';
        }
        if (!formData.phone) {
            errors.phone = 'Phone number is required';
        } else if (formData.phone.length !== 10) {
            errors.phone = 'Phone number must be exactly 10 digits';
        }
        return errors;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const validationErrors = validate();
        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
            return;
        }

        if (contact && contact.id) {
            await updateContact(contact.id, formData);
        } else {
            await createContact(formData);
        }
        setFormData(initialFormData); // Clear form inputs
        setErrors({});
        onSave();
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>Name:</label>
                <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                />
                {errors.name && <p className="error">{errors.name}</p>}
            </div>
            <div>
                <label>Email:</label>
                <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                />
                {errors.email && <p className="error">{errors.email}</p>}
            </div>
            <div>
                <label>Phone:</label>
                <input
                    type="text"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    maxLength="10"
                />
                {errors.phone && <p className="error">{errors.phone}</p>}
            </div>
            <button className="save" type="submit">Save</button>
        </form>
    );
};

export default ContactForm;

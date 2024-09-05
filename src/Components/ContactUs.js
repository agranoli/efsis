import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

export const ContactUs = () => {
    const form = useRef();
    const [buttonText, setButtonText] = useState('Send');
    const [buttonDisabled, setButtonDisabled] = useState(false);
    const [buttonColor, setButtonColor] = useState('bg-amber-400');
    const [validationErrors, setValidationErrors] = useState({
        user_name: '',
        user_email: '',
        message: ''
    });

    const validateForm = () => {
        let isValid = true;
        const errors = {
            user_name: '',
            user_email: '',
            message: ''
        };

        if (!form.current.user_name.value.trim()) {
            isValid = false;
            errors.user_name = 'Jāievada vārds';
        }

        if (!form.current.user_email.value.trim()) {
            isValid = false;
            errors.user_email = 'Jāievada epasts';
        } else if (!/\S+@\S+\.\S+/.test(form.current.user_email.value.trim())) {
            isValid = false;
            errors.user_email = 'Email is invalid';
        }

        if (!form.current.message.value.trim()) {
            isValid = false;
            errors.message = 'Jāievada ziņa';
        }

        setValidationErrors(errors);
        return isValid;
    };

    const sendEmail = (e) => {
        e.preventDefault();

        if (!validateForm()) {
            return;
        }

        emailjs
            .sendForm('service_odncl0t', 'template_3zxtazx', form.current, {
                publicKey: 'N7C7vAl1Dn7sdNRxn',
            })
            .then(
                () => {
                    console.log('SUCCESS!');
                    setButtonText('Message Sent!');
                    setButtonColor('bg-green-500');
                    setButtonDisabled(true);
                },
                (error) => {
                    console.log('FAILED...', error.text);
                },
            );
    };

    return (
        <form ref={form} onSubmit={sendEmail} className="flex flex-col space-y-4 p-4 w-2/3">
            <div className="relative ">
                <input
                    className={`bg-gray-600 text-white rounded px-4 py-2 w-full focus:outline-none ${validationErrors.user_name ? 'border-red-500' : 'border-gray-300'}`}
                    placeholder="Vārds"
                    type="text"
                    name="user_name"
                />
                {validationErrors.user_name && (
                    <span className="text-red-500 text-xs">{validationErrors.user_name}</span>
                )}
            </div>
            <div className="relative">
                <input
                    placeholder="Epasts"
                    className={`bg-gray-600 text-white rounded px-4 py-2 w-full focus:outline-none ${validationErrors.user_email ? 'border-red-500' : 'border-gray-300'}`}
                    type="email"
                    name="user_email"
                />
                {validationErrors.user_email && (
                    <span className="text-red-500 text-xs">{validationErrors.user_email}</span>
                )}
            </div>
            <div className="relative ">
                <textarea
                    placeholder="Ziņa"
                    className={`bg-gray-600 text-white rounded px-4 py-2 w-full focus:outline-none ${validationErrors.message ? 'border-red-500' : 'border-gray-300'}`}
                    name="message"
                />
                {validationErrors.message && (
                    <span className="text-red-500 text-xs">{validationErrors.message}</span>
                )}
            </div>
            <input
                type="submit"
                className={`${buttonColor} text-white py-2 px-4 rounded`}
                value={buttonText}
                disabled={buttonDisabled}
            />
        </form>
    );
};

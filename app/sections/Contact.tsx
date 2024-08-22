"use client"
import Heading from '@/Components/Heading';
import React from 'react'
import { useState, ChangeEvent, FormEvent } from 'react';

export default function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const [status, setStatus] = useState('');

    const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();

        setStatus('Sending...');

        const res = await fetch('/api/contact', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
        });

        const { success, message } = await res.json();

        if (success) {
            setStatus('Message sent successfully!');
            setFormData({
                name: '',
                email: '',
                message: ''
            });
        } else {
            setStatus(`Failed to send message: ${message}`);
        }
    };
    return (
        <section className='w-full z-50'>
            <Heading heading='Contact Me' />
            <div className='flex '>
                <form onSubmit={handleSubmit} className='p-4 bg-gray-500 w-max mx-auto rounded-md '>
                    <div className='flex flex-col'>
                        <InputFeild id='name' placeholder='Name' handleChange={handleChange} />
                    </div>
                    <div>
                        <InputFeild id='email' placeholder='Email' handleChange={handleChange} />
                    </div>
                    <div>
                        <textarea
                            id="message"
                            name="message"
                            onChange={handleChange}
                            required
                            className='text-black bg-gray-700 w-96 rounded-md min-h-32 px-1 py-1.5'
                            placeholder='Message'
                        ></textarea>
                    </div>
                    <button className='w-full bg-white py-2 rounded-md mt-2' type="submit">Send</button>
                    <p>{status}</p>
                </form>
                <div>
                    <p>
                        I&apos;d love to hear from you! Whether you have a question, feedback, or just want to connect, feel free to reach out using the form below
                    </p>
                </div>
            </div>
        </section>
    )
}

interface InputFeildProps {
    id: string;
    placeholder: string;
    handleChange: (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void
}

function InputFeild({ id, handleChange, placeholder }: InputFeildProps) {
    return (
        <input
            type="text"
            id={id}
            name={id}
            onChange={handleChange}
            required
            className='text-black w-96 px-1 py-1.5 mb-2 rounded-md bg-gray-700'
            placeholder={placeholder}
        />
    )
}
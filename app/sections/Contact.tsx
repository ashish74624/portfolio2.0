"use client"
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
            <form onSubmit={handleSubmit} className='space-y-4'>
                <div>
                    <label className='text-white' htmlFor="name">Name</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        onChange={handleChange}
                        required
                        className='text-black'
                    />
                </div>
                <div>
                    <label className='text-white' htmlFor="email">Email</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        onChange={handleChange}
                        required
                        className='text-black'
                    />
                </div>
                <div>
                    <label className='text-white' htmlFor="message">Message</label>
                    <textarea
                        id="message"
                        name="message"
                        onChange={handleChange}
                        required
                        className='text-black'
                    ></textarea>
                </div>
                <button type="submit">Send</button>
                <p>{status}</p>
            </form>
        </section>
    )
}

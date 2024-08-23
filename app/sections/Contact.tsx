"use client"
import Heading from '@/Components/Heading';
import Github from '@/Icons/Github';
import Linkedin from '@/Icons/Linkedin';
import Mail from '@/Icons/Mail';
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
        <section id='contact' className='w-full z-50 pb-10'>
            <Heading heading='Contact Me' />
            <div className='flex flex-col lg:flex-row w-max mx-auto gap-16 mt-8'>
                <form onSubmit={handleSubmit} className='p-4 bg-black/60 border border-white/[0.2] w-max mx-auto rounded-2xl'>
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
                            className='text-white bg-gray-900 w-72 md:w-96 rounded-md min-h-32 px-2 py-1.5'
                            placeholder='Message'
                        ></textarea>
                    </div>
                    <button className='w-full bg-white py-2 rounded-2xl mt-2' type="submit">Send</button>
                    <p>{status}</p>
                </form>
                <div className='text-gray-200 w-screen px-4 lg:px-0 max-w-[500px] '>
                    <p className='text-justify'>
                        I&apos;d love to hear from you! Whether you have a question, feedback, or just want to connect, feel free to reach out.
                    </p>
                    <div className='mt-2'>
                        <p className='flex gap-2 h-max items-center'><Mail /> ashish74624@gmail.com</p>
                        <a href='https://www.linkedin.com/in/ashish74624' target="_blank" className='flex gap-2 h-max items-center'><Linkedin />  www.linkedin.com/in/ashish74624</a>
                        <a href='https://github.com/ashish74624' target='_blank' className='flex gap-2 h-max items-center'><Github /> github.com/ashish74624</a>
                    </div>
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
            className='text-white w-72 md:w-96 px-2 mb-2 rounded-2xl h-10 bg-gray-900'
            placeholder={placeholder}
        />
    )
}
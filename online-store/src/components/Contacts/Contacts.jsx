import React, { useRef } from 'react'
import { Formik } from 'formik'
import { FormmSchema } from '../../validations/FormSchema'
import TextField from '../../validations/TextField'
import emailjs from '@emailjs/browser'
import { HiMailOpen } from 'react-icons/hi'
import { FaFacebookMessenger } from 'react-icons/fa'
import { AiFillInstagram } from 'react-icons/ai'
import './contacts.css'

const Contacts = () => {
    const form = useRef();

    const sendEmail = (e) => {
        // e.preventDefault();

        // email sending 
        emailjs.sendForm(
            'service_73iae6b',
            'template_e4c03jm',
            form.current,
            'l1Wzka_six5DNkzSB'
        )
            .then((result) => {
                console.log(result.text);
                console.log('message sent');
            }, (error) => {
                console.log(error.text);
            });
    };

    return (
        <div className='container-contact'>
            <section id='contact'>
                <center><h2>Feel free to contact us </h2></center> <br />
                <div className='contact-icons'>
                    <HiMailOpen className='contact-card-icon' />
                    <a href="https://mail.google.com/mail/u/0/#inbox" target='_blank'></a>

                    <FaFacebookMessenger className='contact-card-icon' />
                    <a href="https://m.me/yunika.shakya.5" target='_blank'></a>

                    <AiFillInstagram className='contact-card-icon' />
                    <a href="https://www.instagram.com/_yunika_shakya/" target='_blank'></a>
                </div>


                <Formik
                    initialValues={{ name: "", email: "", message: "" }}
                    validationSchema={FormmSchema}>
                    {({ error, handleChange, handleSubmit, values }) => {
                        return (
                            <div className='box-contact'>
                                <span className='borderLine'></span>
                                <form ref={form} onSubmit={sendEmail}>
                                    <div className="inputBox">
                                        <span>Name</span>
                                        <TextField name='name' />
                                    </div>
                                    <div className="inputBox">
                                        <span>Email</span>
                                        <TextField name='email' />

                                    </div>
                                    <div className="inputBox">
                                        <span span>Message</span>
                                        <TextField type="text" name='message' />
                                    </div>
                                    <center>
                                        <input type="submit" />
                                    </center>

                                </form>
                            </div>


                        )
                    }}

                </Formik>
            </section >
        </div >

    )
}

export default Contacts
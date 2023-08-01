import React, { useRef } from 'react'
import { Formik } from 'formik'
import { FormmSchema } from '../../validations/FormSchema'
import TextField from '../../validations/TextField'
import emailjs from '@emailjs/browser'

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
        <div>
            <div className='container-contact'>
                <h2>Feel free to contact us </h2>
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
            </div>
        </div>
    )
}

export default Contacts
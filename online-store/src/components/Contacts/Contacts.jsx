import React, { useRef } from 'react'
import { Formik } from 'formik'
import { FormmSchema } from '../../validations/FormSchema'
import TextField from '../../validations/TextField'
import emailjs from '@emailjs/browser'

const Contacts = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

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
            <Formik
                initialValues={{ name: "", email: "", message: "" }}
                validationSchema={FormmSchema}>
                {({ error, handleChange, handleSubmit, values }) => {
                    return <form ref={form} onSubmit={sendEmail}>
                        <label htmlFor="">Name : </label>
                        <TextField name='name' placeholder="Name" />
                        <label htmlFor="">Email : </label>
                        <TextField name='email' placeholder="Email" />
                        {/* <input type="text" name='email' onChange={handleChange} /> {errors.email}<br /> */}
                        <label htmlFor="">Message : </label>
                        <TextField type="text" placeholder="Send Message" name='message' />
                        <input type="submit" /> <br />
                    </form>
                }}

            </Formik>
        </div>
    )
}

export default Contacts
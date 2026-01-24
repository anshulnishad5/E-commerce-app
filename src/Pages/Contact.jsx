import { useState } from "react";

function Contact ()
{
    const [ success, setSuccess ] = useState( false );

    const handleSubmit = ( e ) =>
    {
        e.preventDefault();

        // simulate successful submit
        setSuccess( true );

        // reset form
        e.target.reset();

        // hide message after 3 seconds
        setTimeout( () =>
        {
            setSuccess( false );
        }, 3000 );
    };

    return (
        <div className="container">
            <h1>Contact Us</h1>
            <p style={ { marginBottom: "20px" } }>
                We'd love to hear from you. Please fill out the form below.
            </p>

            { success && (
                <div className="success-msg">
                    ✅ Message sent successfully!
                </div>
            ) }

            <form className="contact-form" onSubmit={ handleSubmit }>
                <input type="text" placeholder="Full Name" required />
                <input type="email" placeholder="Email Address" required />
                <input type="text" placeholder="Subject" required />
                <textarea placeholder="Your Message" rows="5" required></textarea>

                <button type="submit">Send Message</button>
            </form>

            <div className="contact-info">
                <h3>Our Contact Details</h3>
                <p>📞 Phone: 1800-123-4567</p>
                <p>📧 Email: support@shopeasy.com</p>
                <p>📍 Address: 123 Commerce St, New York, NY 10001</p>
            </div>
        </div>
    );
}

export default Contact;

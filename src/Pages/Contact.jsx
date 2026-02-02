import { useState } from "react";

function Contact ()
{
    const [ success, setSuccess ] = useState( false );

    const handleSubmit = ( e ) =>
    {
        e.preventDefault();

        setSuccess( true );
        e.target.reset();

        setTimeout( () =>
        {
            setSuccess( false );
        }, 3000 );
    };

    return (
        <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
            <div className="w-full max-w-3xl bg-white rounded-xl shadow-lg p-8">
                {/* Heading */ }
                <h1 className="text-3xl font-bold text-gray-800 mb-2">
                    Contact Us
                </h1>
                <p className="text-gray-600 mb-6">
                    We'd love to hear from you. Please fill out the form below.
                </p>

                {/* Success Message */ }
                { success && (
                    <div className="mb-6 rounded-md bg-green-100 border border-green-300 text-green-700 px-4 py-3">
                        ✅ Message sent successfully!
                    </div>
                ) }

                {/* Form */ }
                <form onSubmit={ handleSubmit } className="space-y-4">
                    <input
                        type="text"
                        placeholder="Full Name"
                        required
                        className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-500"
                    />

                    <input
                        type="email"
                        placeholder="Email Address"
                        required
                        className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-500"
                    />

                    <input
                        type="text"
                        placeholder="Subject"
                        required
                        className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-500"
                    />

                    <textarea
                        placeholder="Your Message"
                        rows="5"
                        required
                        className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-500 resize-none"
                    />

                    <button
                        type="submit"
                        className="w-full bg-orange-500 text-white py-2 rounded-md font-semibold hover:bg-orange-600 transition duration-200"
                    >
                        Send Message
                    </button>
                </form>

                {/* Contact Info */ }
                <div className="mt-10 border-t pt-6">
                    <h3 className="text-xl font-semibold text-gray-800 mb-3">
                        Our Contact Details
                    </h3>
                    <p className="text-gray-600 mb-1">📞 Phone: 1800-123-4567</p>
                    <p className="text-gray-600 mb-1">📧 Email: support@shopeasy.com</p>
                    <p className="text-gray-600">
                        📍 Address: 123 Commerce St, New York, NY 10001
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Contact;

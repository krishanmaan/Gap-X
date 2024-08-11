import React, { useRef, useState } from 'react';
import bannerShape from '../../public/assets/img/banner/banner_shape01.png';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';

export default function ContactForm() {
    const formRef = useRef();
    const [form, setForm] = useState({
        name: "",
        email: "",
        message: "",
    });
    const [loading, setLoading] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm({
            ...form,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setLoading(true);

        emailjs
            .send(
                'service_wfu91va',
                'template_31d2kpb',
                {
                    from_name: form.name,
                    to_name: "Gap-x",
                    from_email: form.email,
                    to_email: "gapxbit@gmail.com",
                    message: form.message,
                },
                'jOfy5fijPW7lYjGIz'
            )
            .then(
                () => {
                    setLoading(false);
                    alert("Thank you. I will get back to you as soon as possible.");

                    setForm({
                        name: "",
                        email: "",
                        message: "",
                    });
                },
                (error) => {
                    setLoading(false);
                    console.error(error);

                    alert("Ahh, something went wrong. Please try again.");
                }
            );
    };

    return (
        <>
            <h2 className="text-center text-white font-bold font-Grandstander pt-10 text-5xl lg:text-7xl">
                Contact <span className="text-[#0EE9A0]">Form</span>
            </h2>
            <div className="max-w-screen-xl mx-auto md:flex items-center justify-center align-middle text-white font-Lotata pt-0 pb-0">
                <motion.img
                    src={bannerShape}
                    alt="Banner"
                    className="w-[800px]"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                />
                <div className="w-full p-6 pt-0 rounded-lg shadow-md md:p-6 lg:pr-24">
                    <form ref={formRef} onSubmit={handleSubmit}>
                        <div className="mb-4">
                            <label className="block">Name</label>
                            <input
                                type="text"
                                name="name"
                                value={form.name}
                                onChange={handleChange}
                                placeholder="Your Name"
                                className="w-full mt-2 px-4 py-2 border rounded-full bg-transparent focus:outline-none focus:ring-1 focus:ring-[#0EE89F]"
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block">Email</label>
                            <input
                                type="email"
                                name="email"
                                value={form.email}
                                onChange={handleChange}
                                placeholder="Your Email"
                                className="w-full mt-2 px-4 py-2 border rounded-full bg-transparent focus:outline-none focus:ring-1 focus:ring-[#0EE89F]"
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block">Message</label>
                            <textarea
                                name="message"
                                value={form.message}
                                onChange={handleChange}
                                rows="4"
                                placeholder="Your Message"
                                className="w-full mt-2 px-4 py-2 border rounded-lg bg-transparent focus:outline-none focus:ring-1 focus:ring-[#0EE89F]"
                            ></textarea>
                        </div>
                        <div className="flex items-center justify-between">
                            <button
                                type="submit"
                                className="text-sm text-black bg-[#0EE89F] border-2 border-black rounded-full px-5 py-3 font-Grandstander transition duration-300"
                            >
                                {loading ? "Sending..." : "Send Message"}
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
}

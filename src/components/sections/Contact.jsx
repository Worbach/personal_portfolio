import {RevealOnScroll} from "../RevealOnScroll.jsx";
import emailjs from '@emailjs/browser';
import {useState} from "react";

export const Contact = () => {

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",

    })

    const SERVICE_ID = "service_kn0me1s";
    const TEMPLATE_ID = "template_ncgb818";
    const PUBLIC_KEY = "HXEsBubvbBVBZazrj";

    const handleSubmit = (evt) => {
        evt.preventDefault();

        emailjs
            .sendForm(SERVICE_ID, TEMPLATE_ID, evt.target, PUBLIC_KEY)
            .then(() => {
            alert("Message received successfully.");
            setFormData({name:"", email:"", message:""})
        }).catch(() => {
            alert("Oops! Something went wrong! Please try again");
        });
    }

    return (
        <section
            id="contact"
            className="min-h-screen flex items-center justify-center py-20"
        >

            <RevealOnScroll>
                <div className="w-full sm:w-full md:w-[600px] px-4 md:px-10 mx-auto">

                    <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text
                text-transparent text-center"> Get In Touch</h2>
                    <form className="space-y-6" onSubmit={handleSubmit}>
                        <div className="relative">
                            <input
                                type="text"
                                id="name"
                                name="name"
                                required
                                value={formData.name}
                                className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white
                                              transition focus:outline-none focus:border-blue-500 focus:bg-blue-500/5"
                                placeholder="Name.."
                                onChange={evt => setFormData({...formData, name: evt.target.value})}
                            />
                        </div>

                        <div className="relative">
                            <input
                                type="email"
                                id="email"
                                name="email"
                                required
                                value={formData.email}
                                className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white
                                              transition focus:outline-none focus:border-blue-500 focus:bg-blue-500/5"
                                placeholder="EnterEmail123@example.com"
                                onChange={evt => setFormData({...formData, email: evt.target.value})}
                            />
                        </div>

                        <div className="relative">
                            <textarea
                                id="message"
                                name="message"
                                required
                                value={formData.message}
                                rows = {5}
                                className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white
                                              transition focus:outline-none focus:border-blue-500 focus:bg-blue-500/5"
                                placeholder="Write your message here"
                                onChange={evt => setFormData({...formData, message: evt.target.value})}
                            />
                        </div>
                        <button type="submit" className="w-full bg-blue-500 text-white py-3 px-6 rounded font-medium
                                                        transition relative overflow-hidden hover:translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.4)]">
                            Send Message
                        </button>
                    </form>
                </div>
            </RevealOnScroll>
        </section>
    )
}
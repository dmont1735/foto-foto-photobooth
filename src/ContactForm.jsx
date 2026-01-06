import { useState } from "react";
import "./contactform.css";

export default function ContactForm() {
    const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    });

    const [result, setResult] = useState("");

    const handleSubmit = async (event) => {
        event.preventDefault();

        const formDataToSend = new FormData(event.target);
        formDataToSend.append(
            "access_key",
            import.meta.env.VITE_WEB3FORMS_ACCESS_KEY
        );

        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            body: formDataToSend,
        });

        const data = await response.json();

        setResult(data.success ? "Success!" : data.message || "Error");
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
        };

    return (
        <section id="contact" className="contact-container">
            <form className="contact-form" onSubmit={handleSubmit}>
            <h2>Leave a Message!</h2>

            <input type="hidden" name="from_name" value="FotoFoto Message"/>
            <input type="hidden" name="subject" value="New Message from FotoFoto Photobooth" />
            <input type="hidden" name="botcheck" />

            <div className="form-group">
                <label>Name</label>
                <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                />
            </div>

            <div className="form-group">
                <label>Email</label>
                <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                />
            </div>

            <div className="form-group">
                <label>Message</label>
                <textarea
                name="message"
                rows="4"
                value={formData.message}
                onChange={handleChange}
                required
                />
            </div>

            <button type="submit">Send Message</button>

            {result && <p className="status">{result}</p>}
            </form>
        </section>
    );
}

import { useState } from "react"
import NewsletterForm from "../components/shared/NewsletterForm";

const Contact = () => {
    // State for contact form
    const [ formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form submitted:', formData);
        // Reset form after submission
        setFormData({ 
            name: '',
            email: '',
            message: ''
        });
    };

    // Handle form changes
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    return (
        <section>
            <h1>Contact Me</h1>

            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="name">Name:</label>
                    <input  
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                    />
                </div>
                    
                <div>
                <label htmlFor="name">Email:</label>
                    <input  
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                    />
                </div>
                    
                <div>
                <label htmlFor="name">Message:</label>
                    <textarea  
                        type="message"
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        required
                    />
                </div>
                <button type="submit">Send Message</button>
            </form>

            <NewsletterForm />
        </section>
    );
};

export default Contact;
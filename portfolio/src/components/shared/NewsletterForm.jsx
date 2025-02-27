import { useState } from 'react';

const NewsletterForm = () => {
    const [email, setEmail] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email);
        setEmail('');
    };

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="email">Subscribe to our Newsletter:</label>
            <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                required
            />
            <button type="submit">Subscribe</button>
        </form>

    );
};

export default NewsletterForm;
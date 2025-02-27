import { useState } from "react"

export const SubscribeForm = () => {
    const [email, setEmail] = useState('');
    const [status, setStatus] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log('Subscribed email:', email);

        try {
            setStatus('pending');
            await new Promise(resolve => setTimeout(resolve, 1000));
            setStatus('success');
            setEmail('');
        } catch {
            setStatus('error');
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="email">Email:</label>
            <input 
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                required 
            />
            <button type="submit">
                {status === 'pending' ? 'Submitting...' : 'Subsribe'}
            </button>
            {status === 'success' && <p>Thanks for subscribing</p>}
            {status === 'error' && <p>Error occurred. Please try again</p>}
        </form>
    );
};

export default SubscribeForm;
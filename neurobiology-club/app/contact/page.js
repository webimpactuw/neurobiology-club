export default function ContactPage() {
    const handleSubmit = (e) => {
        e.preventDefault();
        const name = e.target.name.value;
        const email = e.target.email.value;
        alert(`Thank you for your message, ${name}!\nWe'll get back to you at ${email}.`);
        e.target.reset();
    };

    return (
        <div>
            <Header />

            <main style={{ padding: '2rem', background: 'linear-gradient(to bottom, #ffffff, #f3ffe3)', textAlign: 'center' }}>
                <div style={{
                    maxWidth: '500px',
                    margin: '2rem auto',
                    background: '#fefefe',
                    padding: '2rem',
                    borderRadius: '12px',
                    boxShadow: '0 4px 10px rgba(0,0,0,0.08)'
                }}>
                    <h2 style={{ color: '#0025ff' }}>Contact Us</h2>
                    <form onSubmit={handleSubmit}>
                        <input type="text" name="name" placeholder="Full Name" required style={inputStyle} />
                        <input type="email" name="email" placeholder="Your Email Address" required style={inputStyle} />
                        <textarea name="message" rows="4" placeholder="Message" required style={inputStyle} />
                        <button type="submit" style={buttonStyle}>Submit</button>
                    </form>
                </div>

                <div style={{
                    maxWidth: '500px',
                    margin: '2rem auto',
                    background: '#fefefe',
                    padding: '2rem',
                    borderRadius: '12px',
                    boxShadow: '0 4px 10px rgba(0,0,0,0.08)'
                }}>
                    <h3 style={{ color: '#0025ff' }}>Join Our Mailing List</h3>
                    <p style={{ fontSize: '0.9rem', color: '#666' }}>Get updates about events and meetings.</p>
                    <input type="email" placeholder="Enter your email" disabled style={inputStyle} />
                    <a
                        href="https://mailman21.u.washington.edu/mailman/listinfo/nbio-club"
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{ ...buttonStyle, textDecoration: 'none', display: 'inline-block' }}
                    >
                        Subscribe
                    </a>
                </div>
            </main>

            <Footer />
        </div>
    );
}

const inputStyle = {
    width: '100%',
    padding: '12px',
    marginTop: '10px',
    border: '1px solid #ccc',
    borderRadius: '6px',
    fontSize: '1rem'
};

const buttonStyle = {
    marginTop: '1rem',
    padding: '10px 20px',
    backgroundColor: '#0025ff',
    color: 'white',
    border: 'none',
    borderRadius: '6px',
    cursor: 'pointer',
    fontSize: '1rem'
};

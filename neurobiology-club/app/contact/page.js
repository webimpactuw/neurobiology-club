"use client"
import { useState } from 'react';
import Image from "next/image";
import Header from "../components/Header";
import Footer from "../components/Footer";

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
      <div className="ml-[200px] flex items-center">
        <div className="flex flex-col">
          <div className="flex">
            <p id="big-text">G</p>
            <p id="big-text">E</p>
            <p id="big-text">T</p>
          </div>
          <div className="flex">
            <p id="big-text">I</p>
            <p id="big-text">N</p>
          </div>
          <div className="flex">
            <p id="big-text">T</p>
            <p id="big-text">O</p>
            <p id="big-text">U</p>
            <p id="big-text">C</p>
            <p id="big-text">H</p>
            <div className="flex">
              <Hover
                src="/ellipse.svg"
                hoverSrc="/hover-ellipse.svg" 
                alt="ellipse1"
                width={20}
                height={20}
                className="ml-14 mr-6"/>
              <Hover
                src="/ellipse.svg"
                hoverSrc="/hover-ellipse.svg" 
                alt="ellipse2"
                width={20}
                height={20}
                className="mr-6"/>
              <Hover
                src="/ellipse.svg"
                hoverSrc="/hover-ellipse.svg" 
                alt="ellipse3"
                width={20}
                height={20}
                className="mr-14"/>
            </div>
            <div className="mt-4 mr-6" id="hover-wrapper">
              <Hover 
                src="/email.svg"
                hoverSrc="/hover-email.svg"                                
                alt="email"
                width={115}
                height={115}
                className="transition-color duration-200 ease-in"/>
              <div id="hover-bubble">nbio-club@u.washington.edu</div>
            </div>
                            
            <div className="mt-4" id="hover-wrapper">
              <Hover 
                src="/insta.svg"
                hoverSrc="/hover-insta.svg"
                alt="email"
                width={115}
                height={115}
                className="transition-color duration-200 ease-in"/> 
            <div id="hover-bubble">@uwneurobiologyclub</div>
          </div>
        </div> 
      </div>
      
      <main
        style={{
          padding: '2rem',
          background: 'linear-gradient(to bottom, #ffffff, #f3ffe3)',
          textAlign: 'center',
        }}
      >
        {/* Contact Us Section */}
        <div
          style={{
            maxWidth: '500px',
            margin: '2rem auto',
            background: '#fefefe',
            padding: '2rem',
            borderRadius: '12px',
            boxShadow: '0 4px 10px rgba(0,0,0,0.08)',
          }}
        >
          <h2 style={{ color: '#0025ff' }}>CONTACT US</h2>
          <p style={{ color: '#666', marginBottom: '1.5rem' }}>
            Feel free to contact us anytime through our socials or using the form below
          </p>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              required
              style={inputStyle}
            />
            <p style={hintStyle}>Please write your First name and Last name</p>

            <input
              type="email"
              name="email"
              placeholder="Your Email Address"
              required
              style={inputStyle}
            />
            <p style={hintStyle}>Please write your Email Address</p>

            <textarea
              name="message"
              rows="4"
              placeholder="Message"
              required
              style={inputStyle}
            />
            <p style={hintStyle}>Message starts from here</p>

            <button type="submit" style={buttonStyle}>
              SUBMIT
            </button>
          </form>
        </div>

        {/* Mailing List Section */}
        <div
          style={{
            maxWidth: '500px',
            margin: '2rem auto',
            background: '#fefefe',
            padding: '2rem',
            borderRadius: '12px',
            boxShadow: '0 4px 10px rgba(0,0,0,0.08)',
          }}
        >
          <h3 style={{ color: '#0025ff', marginBottom: '0.5rem' }}>JOIN OUR MAILING LIST</h3>
          <p style={{ fontSize: '0.9rem', color: '#666', marginBottom: '1rem' }}>
            If you are interested in getting involved with our club or just want more information,
            consider joining our mailing list to be the first to learn about upcoming events,
            mentorship program application releases and fun socials!
          </p>
          <form
            action="https://mailman21.u.washington.edu/mailman/subscribe/nbio-club"
            method="POST"
            target="_blank"
            style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}
          >
            <input
              type="email"
              name="email"
              placeholder="Enter Your Email"
              required
              style={{ ...inputStyle, flex: '1', minWidth: '200px', marginTop: 0 }}
            />
            <p style={hintStyle}>Please write your Email Address</p>
            <button type="submit" style={{ ...buttonStyle, marginTop: 0 }}>
              SUBSCRIBE
            </button>
          </form>
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
  fontSize: '1rem',
};

const buttonStyle = {
  marginTop: '1rem',
  padding: '10px 20px',
  backgroundColor: '#0025ff',
  color: 'white',
  border: 'none',
  borderRadius: '6px',
  cursor: 'pointer',
  fontSize: '1rem',
};

const hintStyle = {
  textAlign: 'left',
  fontSize: '0.8rem',
  color: '#777',
  marginTop: '5px',
  marginBottom: '10px',
};

function Hover({ src, hoverSrc, alt, ...props }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Image src={isHovered ? hoverSrc : src}
      alt={alt}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      {...props}
    />
  );
}

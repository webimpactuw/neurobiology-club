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
    <div className="overflow-x-hidden">
        <Header />
        <div className="flex items-center justify-center md:justify-start md:ml-[200px] mb-4 md:mb-10">
            <div className="flex flex-col">
                <div className="flex justify-center md:justify-start">
                    <p id="big-text">G</p>
                    <p id="big-text">E</p>
                    <p id="big-text">T</p>
                    <p id="big-text" className="md:hidden ml-4">I</p>
                    <p id="big-text" className="md:hidden">N</p>
                </div>
                <div className="hidden md:flex justify-center md:justify-start">
                    <p id="big-text">I</p>
                    <p id="big-text">N</p>
                </div>
                <div className="flex items-center justify-center md:justify-start md:ml-0 ml-6">
                    <p id="big-text">T</p>
                    <p id="big-text">O</p>
                    <p id="big-text">U</p>
                    <p id="big-text">C</p>
                    <p id="big-text">H</p>
                    <div className="hidden md:flex">
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
                    <div className="mt-4 mr-6 hidden md:block" id="hover-wrapper">
                        <Hover 
                            src="/email.svg"                        
                            hoverSrc="/hover-email.svg"                                
                            alt="email"
                            width={115}
                            height={115}
                            className="transition-color duration-200 ease-in md:block hidden"/>
                        <div id="hover-bubble">nbio-club@u.washington.edu</div>
                    </div>
                                
                    <div className="mt-4 hidden md:block" id="hover-wrapper">
                        <Hover 
                            src="/insta.svg"
                            hoverSrc="/hover-insta.svg"
                            alt="instagram"
                            width={115}
                            height={115}
                            className="transition-color duration-200 ease-in md:block hidden"/> 
                        <div id="hover-bubble">@uwneurobiologyclub</div>
                    </div>
                </div> 
            </div>
        </div>
        
        {/* Mobile Contact Icons */}
        <div className="flex justify-center items-start mb-4 md:hidden w-full">
            <div className="mr-8 flex flex-col items-center">
                <Hover 
                    src="/email.svg"                        
                    hoverSrc="/hover-email.svg"                                
                    alt="email"
                    width={100}
                    height={100}
                    className="transition-color duration-200 ease-in"/>
                <p className="text-sm text-[#164EFF] text-center">nbio-club@u.washington.edu</p>
            </div>
                        
            <div className="flex flex-col items-center">
                <Hover 
                    src="/insta.svg"
                    hoverSrc="/hover-insta.svg"
                    alt="instagram"
                    width={100}
                    height={100}
                    className="transition-color duration-200 ease-in"/> 
                <p className="text-sm text-[#164EFF] text-center mt-1.5">@uwneurobiologyclub</p>
            </div>
        </div>
      
        <main
            style={{
            padding: '1rem',
            background: 'linear-gradient(to bottom, #F4F3F2, #F3FF99)',
            textAlign: 'center',
            }}
            className="md:p-8">
            {/* Contact Us Section */}
            <div
            style={{
                maxWidth: '655px',
                margin: '2rem auto',
                padding: '1rem',
            }}
            className="md:p-8"
            >
            <p id="blue-header-contact" className="font-extrabold pb-4">CONTACT US</p>
            <p style={{ color: '#164EFF', marginBottom: '1.5rem' }}>
                Feel free to contact us anytime through our socials or using the form below!
            </p>
            <form onSubmit={handleSubmit}>
                <p id="form-header">Full Name</p>
                <input
                type="text"
                name="name"
                placeholder="Please write your first name and last name"
                required
                style={inputStyle}
                />
                
                <p id="form-header" className="pt-4">Your Email Address</p>
                <input
                type="email"
                name="email"
                placeholder="Please write your email address"
                required
                style={inputStyle}
                />

                <p id="form-header" className="pt-4">Message</p>
                <textarea
                name="message"
                rows="8"
                placeholder="Message starts from here"
                required
                style={inputStyle}/>

                <div className="pt-8">
                    <button type="submit" id="submit" className="font-semibold">SUBMIT</button>
                </div>
            </form>
            </div>
        </main>

        {/* Mailing List Section */}
        <div
          style={{
            maxWidth: '500px',
            margin: '2rem auto',
            background: '#fefefe',
            border: '0.75px solid grey',
            padding: '1rem',
            borderRadius: '12px',
          }}
          className="mx-4 md:mx-auto w-11/12 md:w-auto md:p-6"
        >
            <div className="flex">
                <p className="mr-4 text-2xl">✉️</p>
                <p id="contact-header">JOIN OUR MAILING LIST</p>
            </div>
            <p style={{ fontSize: '0.9rem', color: 'black', marginBottom: '1rem' }}>
                If you are interested in getting involved with our club or just want more information,
                consider joining our mailing list to be the first to learn about upcoming events,
                mentorship program application releases and fun socials!
            </p>
            <form
                action="https://mailman21.u.washington.edu/mailman/subscribe/nbio-club"
                method="POST"
                target="_blank"
                style={{ gap: '10px', flexWrap: 'wrap' }}
            >
                <p className="pb-2">Enter Your Email</p>
                <input
                type="email"
                name="email"
                placeholder="Please enter your email address"
                required
                style={{ ...subscribeInput, flex: '1', minWidth: '200px', marginTop: 0 }}
                />
                <div className="flex justify-center pt-4">
                    <button type="submit" id="subscribe" className="font-semibold">SUBSCRIBE</button>
                </div>
          </form>
        </div>
      <Footer />
    </div>
  );
}

const inputStyle = {
    width: '100%',
    padding: '12px',
    marginTop: '10px',
    border: '0.75px solid grey',
    borderRadius: '12px',
    fontSize: '1rem',
    textAlign: 'center',
};

const subscribeInput = {
    width: '100%',
    paddingTop: '12px',
    paddingBottom: '4px',
    paddingLeft: '4px',
    borderBottom: '0.75px solid grey',
    fontSize: '0.9rem',
    textAlign: 'left',
}

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

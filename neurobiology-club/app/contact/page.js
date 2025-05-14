"use client"
import { useState } from 'react';
import Image from "next/image";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function Home() {
    return (
        <div>
            <Header />
            <div className="ml-[142px] flex items-center">
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
                        <div className="mt-4"id="hover-wrapper">
                            <Hover src="/email.svg"
                                hoverSrc="/hover-email.svg"
                                alt="email"
                                width={115}
                                height={115}
                                className="transition-color duration-200 ease-in"/>
                            <div id="hover-bubble">nbio-club@u.washington.edu</div>
                        </div>
                        
                        <div className="mt-4" id="hover-wrapper">
                            <Hover src="/insta.svg"
                                hoverSrc="/hover-insta.svg"
                                alt="email"
                                width={115}
                                height={115}
                                className="transition-color duration-200 ease-in"/> 
                            <div id="hover-bubble">@uwneurobiologyclub</div>
                        </div>
                        
                    </div> 
                </div>
            </div>
            <Footer/>
        </div> 
    )
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
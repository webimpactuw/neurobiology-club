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
                    </div> 
                </div>
            </div>
            <Footer/>
        </div> 
    )
}
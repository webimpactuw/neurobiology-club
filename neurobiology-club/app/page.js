import Image from "next/image";
import Header from "./components/Header";
import Footer from "./components/Footer";

export default function Home() {
    return (
        <div>
            <Header />
            <div className="flex items-center justify-center">
                <div className="ml-8">
                    <div className="flex items-center">
                        <p id="big-text">N</p>
                        <p id="big-text">E</p>
                        <p id="big-text">U</p>
                        <p id="big-text">R</p>
                        <p id="big-text">O</p>
                    </div>
                    <div className="flex items-center">
                        <p id="big-text">B</p>
                        <p id="big-text">I</p>
                        <p id="big-text">O</p>
                        <p id="big-text">L</p>
                        <p id="big-text">O</p>
                        <p id="big-text">G</p>
                        <p id="big-text">Y</p>
                    </div>
                    <div className="flex items-center">
                        <p id="big-text">C</p>
                        <p id="big-text">L</p>
                        <p id="big-text">U</p>
                        <p id="big-text">B</p>
                    </div>
                </div>
                <Image src = "/Neuron-home.png"
                    alt = "Neuron"
                    width = {550}
                    height = {550}
                    className = ""
                />
            </div>
            
            <div className="flex items-center justify-center">
                <button id="who-we-are" className="mt-16"> WHO WE ARE</button>
                <p></p>
            </div>

            <div className="flex items-center justify-center">
                <p className="color-#164EFF font-bold">OUR MISSION</p>
                <Image
                    src = "/brain-logo.svg"
                    alt = "old neurobiology club logo"
                    width = {220}
                    height = {220}
                    id=""
                />
                <p></p>
            </div>

            <div className="flex items-center">
                <div>
                    {/* events */}
                </div>
                <div>
                    {/* photo slideshows */}
                </div>
            </div>
            <Footer/>
        </div> 
    );
}
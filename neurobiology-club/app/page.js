import Image from "next/image";
import Header from "./components/Header";
import Footer from "./components/Footer";

export default function Home() {
    return (
        <div>
            <Header />
            {/* <p> home page!</p> */}
            <Footer/>
        </div> 
    );
}
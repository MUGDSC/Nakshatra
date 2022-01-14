import { useEffect } from "react";
import Judges from "../components/HackathonPage/Judges";
import Launching from "../components/HackathonPage/Launching";
import Prizes from "../components/HackathonPage/Prizes";
import Rules from "../components/HackathonPage/Rules";
import SpecialPrizes from "../components/HackathonPage/Special-Prizes";
import Tracks from "../components/HackathonPage/Tracks";
import Footer from "../components/UI/Footer";
import Navbar from "../components/UI/Navbar";
import StarsBackground from "../components/UI/Stars"

const Hackathon = () => {
    useEffect(() => {
        const script = document.createElement('script');
        script.src = 'https://apply.devfolio.co/v2/sdk.js';
        script.async = true;
        script.defer = true;
        document.body.appendChild(script);
        return () => {
            document.body.removeChild(script);
        }
    }, [])

    return (<>
        <StarsBackground />
        <Navbar />
        <main style={{ position: 'relative', zIndex: 2 }}>
            <Launching />
            <Tracks />
            <Prizes />
            <SpecialPrizes />
            <Judges />
        </main>
        <Rules />
        <Footer />
    </>)
}
export default Hackathon;
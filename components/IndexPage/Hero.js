import classes from './Hero.module.css';
import Image from 'next/image';
import Button from './Button';
import RegisterButtons from './RegisterButtons';
import { useState } from 'react';

const Hero = () => {
    const [showModal, setShowModal] = useState(false);
    function removeModal() {
        setShowModal(false);
    }
    return (
        <section className={classes.hero} id="Home">

            <h1>
                <p> Google Developer Student Club </p>
                <p>Medi-Caps Univeristy</p>
            </h1>

            <div className={classes.hero_logo}>
                <Image width={500} height={300} layout="responsive" src="/nakshatra.webp" alt="Nakshatra Logo" />
            </div>


            {showModal && <RegisterButtons onClose={removeModal} />}
            <Button onClick={() => setShowModal(true)}>Register</Button>



            <div className={classes.hero_year}>
                <Image width={200} height={81} layout="responsive" src="/2022.png" alt="2022 Neon Text" />
            </div>
        </section>
    )
}
export default Hero;

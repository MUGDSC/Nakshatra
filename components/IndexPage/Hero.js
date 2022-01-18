import classes from './Hero.module.css';
import Image from 'next/image';
import Button from './Button';

const Hero = () => {
    return (
        <section className={classes.hero} id="Home">

            <h1>
                <p> Google Developer Student Club </p>
                <p>Medi-Caps Univeristy</p>
            </h1>

            <div className={classes.hero_logo}>
                <Image width={500} height={300} layout="responsive" src="/nakshatra.webp" alt="Nakshatra Logo" />
            </div>
            <a href="https://gdsc.community.dev/medi-caps-university-indore/" target="_blank" rel="noopener noreferrer">
                <Button>Register!</Button>
            </a>
            <div className={classes.hero_year}>
                <Image width={200} height={81} layout="responsive" src="/2022.png" alt="2022 Neon Text" />
            </div>
        </section>
    )
}
export default Hero;
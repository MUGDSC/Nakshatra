import classes from './About.module.css';
import Fade from 'react-reveal/Fade';

const About = () => {
    return (
        <section className={classes.about} id="About">
            <Fade bottom distance="30px" duration={1000}>
                <h2>About</h2>
                <div>
                    <p>
                        <span>“Nakshatra”</span>  is an enormous technical fest organized by <span> Google Developers Student Club of Medi-Caps University</span> . The quintessence of this fest is to spread knowledge among the tech enthusiastic folks. It’s a three-day event from 11th Feb to 13th Feb. This platform gives everyone a chance to enlighten their ideologies and a chance to work upon them. There will be different workshops by talented speakers and several other sub-events. Hackathons and different competitions are designed to bring up the competitive spirit and a zest to learn something new yet informative. From workshops to competitions everything will be like rocket fuel to give your technical journey a good thrust.
                    </p>
                </div>
            </Fade>
        </section>
    )
}
export default About;
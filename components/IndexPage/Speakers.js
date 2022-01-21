import SpeakerCard from './SpeakerCard';
import classes from './Speakers.module.css';

const speakers = [
    {
        name: "Manvi Tyagi",
        role1: "SWE @ Twitter",
        role2: "Founder @ Girl Code It",
        image: "manvi_tyagi.jpg",
        linkedin: "https://www.linkedin.com/in/manvi-tyagi-108464147/",
        twitter: "https://twitter.com/ManviTyagi9?s=20"
    },
    {
        name: "Vaishnavi Dwivedi",
        role1: "Founder & Creator",
        role2: "MichiSpotlight",
        image: "vaishnavi_dwivedi.jfif",
        linkedin: "https://www.linkedin.com/in/dwvicy/",
        twitter: " https://twitter.com/dwvicy?s=20"
    },
    {
        name: "Ankit Mahato",
        role1: "Founder",
        role2: "Real World Python",
        image: "ankit_mahato.jpg",
        linkedin: "https://www.linkedin.com/in/ankitmahato/",
        twitter: "https://twitter.com/ankitmahato?s=20"
    },
    {
        name: "Bharat S",
        role1: "Cloud Engineer",
        role2: "Deloitte",
        image: "bharat.jfif",
        linkedin: "https://www.linkedin.com/in/thebharaths/",
        twitter: "https://twitter.com/TheBharathS"
    },
    {
        name: "Coming Soon...",
        role1: "Coming Soon...",
        role2: "Coming Soon...",
        image: "",
        linkedin: "https://www.linkedin.com/in/",
        twitter: "https://twitter.com/"
    },
    {
        name: "Coming Soon...",
        role1: "Coming Soon...",
        role2: "Coming Soon...",
        image: "",
        linkedin: "https://www.linkedin.com/in/",
        twitter: "https://twitter.com/"
    },
    {
        name: "Coming Soon...",
        role1: "Coming Soon...",
        role2: "Coming Soon...",
        image: "",
        linkedin: "https://www.linkedin.com/in/",
        twitter: "https://twitter.com/"
    },
]
const Speakers = () => {
    return (
        <section className={classes.speakers} id="Speakers">
            <h2>Speakers</h2>
            <div className={classes.speakers_cards}>
                {speakers.map((speaker, index) => {
                    return (
                        <SpeakerCard
                            key={index}
                            name={speaker.name}
                            role1={speaker.role1}
                            role2={speaker.role2}
                            image={speaker.image}
                            linkedin={speaker.linkedin}
                            twitter={speaker.twitter}
                        />
                    )
                })}
            </div>
        </section>
    )
}
export default Speakers;
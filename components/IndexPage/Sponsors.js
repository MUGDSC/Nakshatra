import Image from 'next/image';
import classes from './Sponsors.module.css';

const goldSponsors = [
    {
        image: "devfolio.svg",
        alt: "Devfolio",
        link: "https://devfolio.co/home/"
    },
    {
        image: "polygon.svg",
        alt: "Polygon",
        link: "https://polygon.technology/"
    },
    {
        image: "gfg.png",
        alt: "Geeks For Geeks",
        link: "https://www.geeksforgeeks.org/"
    },
    {
        image: "wolfram.png",
        alt: "Wolfram",
        link: "https://www.wolfram.com/language/"
    },
]

const silverSponsors = [
    {
        image: "celo.svg",
        alt: "Celo",
        link: "https://celo.org/"
    },
    {
        image: "filecoin.svg",
        alt: "Filecoin",
        link: "https://filecoin.io/",
    },
    {
        image: "tezos.svg",
        alt: "Tezos",
        link: "https://tezos.com/"
    },
    {
        image: "gmc.png",
        alt: "GMC",
        link: "https://givemycertificate.com/"
    },
    {
        image: "cognizance.png",
        alt: "Cognizance",
        link: "https://www.cognizance.org.in/"
    },
    {
        image: "echo3d.png",
        alt: "Echo3d",
        link: "https://www.echo3d.co/",
        height: "30px"
    },
]

const bronzeSponsors = [
    {
        image: "jetbrains.svg",
        alt: "Jetbrains",
        link: "https://www.jetbrains.com/"
    },
    {
        image: "taskade.png",
        alt: "Taskade",
        link: "https://www.taskade.com/"
    },
    {
        image: "mule.png",
        alt: "Sticker Mule",
        link: "https://www.stickermule.com/en-in"
    }
]

const Sponsors = () => {
    return (
        <section className={classes.sponsors} id="Sponsors">
            <h2>Sponsors</h2>
            <div className={classes.sponsors_conatiner}>
                <div className={classes.sponsors_details}>
                    <div className={classes.sponsor_div}>

                        {/* GOLD SPONSORS */}
                        <div className={classes.star}>
                            <Image width={50} height={50} src="/sponsors/gold.png" alt="Star" />
                            <Image width={50} height={50} src="/sponsors/gold.png" alt="Star" />
                            <Image width={50} height={50} src="/sponsors/gold.png" alt="Star" />
                        </div>
                        <div className={classes.sponsor_images}>
                            {goldSponsors.map((item, index) => {
                                return (
                                    <a href={item.link} target="_blank" rel="noopener noreferrer" key={index}>
                                        <div className={classes.sponsor_images_container}>
                                            <img src={`/sponsors/gold/${item.image}`} alt={item.alt} loading='lazy' />
                                        </div>
                                    </a>
                                )
                            })}
                        </div>
                    </div>

                    {/* SILVER SPONSORS */}
                    <div className={classes.sponsor_div}>
                        <div className={classes.star}>
                            <Image width={50} height={50} src="/sponsors/silver.png" alt="Star" />
                            <Image width={50} height={50} src="/sponsors/silver.png" alt="Star" />
                            <Image width={50} height={50} src="/sponsors/silver.png" alt="Star" />
                        </div>
                        <div className={classes.sponsor_images}>
                            {silverSponsors.map((item, index) => {
                                return (
                                    <a href={item.link} target="_blank" rel="noopener noreferrer" key={index}>
                                        <div className={classes.sponsor_images_container}>
                                            <img src={`/sponsors/silver/${item.image}`} alt={item.alt} loading='lazy' />
                                        </div>
                                    </a>
                                )
                            })}
                        </div>
                    </div>

                    {/* Bronze SPONSORS */}
                    <div className={classes.sponsor_div}>
                        <div className={classes.star}>
                            <Image width={50} height={50} src="/sponsors/bronze.png" alt="Star" />
                            <Image width={50} height={50} src="/sponsors/bronze.png" alt="Star" />
                            <Image width={50} height={50} src="/sponsors/bronze.png" alt="Star" />
                        </div>
                        <div className={classes.sponsor_images}>
                            {bronzeSponsors.map((item, index) => {
                                return (
                                    <a href={item.link} target="_blank" rel="noopener noreferrer" key={index}>
                                        <div className={classes.sponsor_images_container}>
                                            <img src={`/sponsors/bronze/${item.image}`} alt={item.alt} loading='lazy' />
                                        </div>
                                    </a>
                                )
                            })}

                        </div>
                    </div>
                </div>
                <div className={classes.sponsors_subheading}>
                    <p>Interested in sponsoring Nakshatra? Send us the mail <a href="mailto:mugdsc@gmail.com" target="_blank" rel="noopener noreferrer">mugdsc@gmail.com</a> </p>
                </div>
            </div>
        </section>
    )
}
export default Sponsors;
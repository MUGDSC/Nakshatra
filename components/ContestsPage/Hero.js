import classes from './Hero.module.css';

const Hero = () => {
    return (<>
        <section className={classes.hero}>
            <h1>
                Contests
            </h1>
            <div>
                <p>
                    Competitions are always the best platforms to showcase talent and skills and work upon the fresh ideas brewing in mind. Competing with the best escalates the confidence level up and revamp our quest for learning new ideologies.
                    And to blow up the competitive spirits, there are exciting prizes for every competition.
                </p>
                <p>So get ready for all your adrenaline to pump up with the
                    roller coaster of events presented by Nakshatra</p>
            </div>
            <div className={classes.area51}>
                <h2>Area 51</h2>
                <div className={classes.container}>
                    <div className={classes.area51_text_container}>
                        <p>To test up your learned coding skills while competing with people of different calibers is the main essence of learning. Competitive coding will consist of coding rounds where people can participate according to their experience level.</p>
                    </div>
                    <div className={classes.ufo_img}>
                        <img src="/contests/ufo.png" alt="UFO" />
                        <div className={classes.reg_btn}>
                            <a href="#" aria-disabled>
                                <button className={classes.btn}>
                                    Registrations Opening Soon...
                                </button>
                            </a>
                            <div className={classes.date_time}>
                                <p>12th Feb</p>
                                <p>6:00pm - 8:00pm</p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    </>
    )
}
export default Hero;
import classes from './Involved.module.css';

const Involved = () => {
    return (
        <section className={classes.involved} id="get-involved">
            <h2>Get Involved</h2>
            <div className={classes.involved_container}>
                <p className={classes.container_subheading}>A constellation involves multiple stars to come together,  so make nakshatra reach every possible corner and shine bright !</p>
                <div className={classes.involved_actions}>
                    <a href="https://forms.gle/66utAWpJaaiX4qqg8" target="_blank" rel="noopener noreferrer">
                        <div className={`${classes.action_button}`}>
                            <img src="/partner.svg" alt="Partner" />
                            <p>Become community partner</p>
                        </div>
                    </a>
                    <a href="https://forms.gle/C5GoEtH3jnFaP8CMA" target="_blank" rel="noopener noreferrer">
                        <div className={` ${classes.action_button}`}>
                            <img src="/community.svg" alt="Community" />
                            <p>Become community manager</p>
                        </div>
                    </a>
                    <a href="https://forms.gle/PgfGXuyKgEdjf5Av9" target="_blank" rel="noopener noreferrer">
                        <div className={` ${classes.action_button}`}>
                            <img src="/mentor.svg" alt="Community" />
                            <p>Become hackathon Mentor</p>
                        </div>
                    </a>
                </div>
            </div>
        </section>
    )
}
export default Involved;
import classes from './Hero.module.css'

const Hero = () => {
    return (
        <section className={classes.hero}>
            <div className={classes.hero_img}>
                <img src="/session_head.png" alt="Astronout Head" />
            </div>
            <div className={classes.hero_heading}>
                <h1>Doordarshan</h1>
                <p>The most imperative thing about learning is to learn from the best. The speakers are experts and are connected globally with different organizations and communities. All of them are excited to share their experiences with all.</p>
            </div>
        </section>

    )
}
export default Hero
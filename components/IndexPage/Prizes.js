import classes from './Prizes.module.css'
const Prizes = () => {
    return (
        <section className={classes.pages}>
            <h2>
                Prizes
            </h2>
            <div className={classes.prizes_container}>
                <img src="/coming_soon.png" alt="Coming soon" width={300} />
            </div>
        </section>
    )
}
export default Prizes;
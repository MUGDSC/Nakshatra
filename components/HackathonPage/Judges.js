import classes from './Judges.module.css';

const judges = [
    {
        name: "Coming Soon...",
        image: "",
        org: "Coming Soon...",
        desig: "Coming Soon...",
    },
    {
        name: "Coming Soon...",
        image: "",
        org: "Coming Soon...",
        desig: "Coming Soon...",
    },
    {
        name: "Coming Soon...",
        image: "",
        org: "Coming Soon...",
        desig: "Coming Soon...",
    },
]
const Judges = () => {
    return (
        <section className={classes.judges}>
            <h2>Judges</h2>
            <div className={classes.judges_container}>
                {judges.map((judge, index) => {
                    return (
                        <div className={classes.card} key={index}>
                            <div className={classes.card_img}>
                                {/* <img src="" alt="" /> */}
                            </div>
                            <div className={classes.card_details}>
                                <p className={classes.name}>{judge.name}</p>
                                <p className={classes.org}>{judge.org}</p>
                                <p className={classes.designation}>{judge.desig}</p>
                            </div>
                        </div>
                    )
                })}


            </div>
        </section>
    )
}
export default Judges;
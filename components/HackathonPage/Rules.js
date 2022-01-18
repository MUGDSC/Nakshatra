import classes from './Rules.module.css';

const rules = [
    "You may have a team of 1- 4 people.",
    "If you submit a hack that wasn’t started during the hackathon, we will only consider the changes made during hackathon timings.",
    "We will not accept any projects that have already been presented to any past hackathons.",
    "You must submit your project under a particular track with which it relates the most.",
    "Submit the GitHub link of your publicly visible source code of the hack on Devfolio. Submissions with broken links will be marked ineligible for prizes.", ,
    "Make a brief video demonstration of the hack and post it on any video-sharing site like YouTube. Also share the link on your Devfolio Submission.",
    "Finalist teams will be invited to give a presentation in front of judges.",
    "Remember: We do not tolerate any type of prejudice on the Nakshatra platform. If you are causing a negative experience for anyone, we can and will remove you, and we will take additional action if necessary."

]
const Rules = () => {
    return (
        <section className={classes.rules}>
            <h2>Rules</h2>
            <div className={classes.rules_container}>
                <ul>
                    {rules.map(rule => <li> <img src="/list_style.png" alt="list style" />{rule}</li>)}

                </ul>
            </div>
        </section>
    )
}
export default Rules;
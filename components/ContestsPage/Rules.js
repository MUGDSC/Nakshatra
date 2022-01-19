import classes from './Rules.module.css';

const rules1 = [
    "Our contest is open for all",
    "The duration of the coding contest would be 2 hours.",
    "You can code in any language of your choice. For Debugging Round C++ is preferred.",
    "You have to register separately for the coding contest, in case you are facing issue you can   ping us on our discord.",
]
const rules2 = [
    "There are 3 levels [BEGINNER, INTERMEDIATE, EXPERT] and a candidate can only participate in one based on his skills.",
    "Avoid sharing formulae, logic, or any other significant aspect of your code during a contest. If our plagiarism algorithm finds striking similarities between your code and someone else’s, you and your friend will be disqualified.",
    "No penalty for incorrect submission.",
    "In case of a tie, priority is given to early submission."
]

const Rules = () => {
    return (
        <section className={classes.rules}>
            <h2>Rules</h2>
            <div className={classes.rules_container}>
                <ul>
                    {rules1.map((rule, index) => <li key={index}> <img src="/contests/cone.png" alt="list style" />{rule}</li>)}
                    <li> <img src="/contests/cone.png" alt="list style" />
                        <ul className={classes.list_2}>
                            Each Level has 3 Sections You can switch among these sections anytime during the contest :
                            <li>10 MCQs [1 point each]</li>
                            <li>7 Debugging [3 points each]</li>
                            <li>3 Problem Statements [5 points each]</li>
                        </ul>
                    </li>
                    {rules2.map((rule, index) => <li key={index}> <img src="/contests/cone.png" alt="list style" />{rule}</li>)}

                </ul>
            </div>
        </section>
    )
}
export default Rules;
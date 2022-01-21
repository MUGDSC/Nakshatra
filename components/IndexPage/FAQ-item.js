import { useState } from 'react';
import classes from './FAQ-item.module.css';
import QuestionMarkIcon from '@mui/icons-material/QuestionMark';
import ArrowCircleDownIcon from '@mui/icons-material/ArrowCircleDown';
import Fade from 'react-reveal/Fade';


const FAQItem = ({ question, answer, email }) => {
    const [showAnswer, setShowAnswer] = useState(false);

    const showAnswerHandler = () => {
        setShowAnswer((prevState) => !prevState);
    }
    return (
        <div className={classes.faq}>
            <div onClick={showAnswerHandler} className={classes.question_container} >
                <div className={classes.question}>
                    <div className={classes.icons} >
                        <QuestionMarkIcon />
                    </div>
                    <p>{question}</p>
                </div>
                <ArrowCircleDownIcon className={`${classes.arrow} ${showAnswer && classes.rotate}`} />
            </div>
            {showAnswer && <Fade distance="10px" bottom duration={500} > <div className={classes.answer}>
                <div className={classes.icons}>
                    <img src="/tick.svg" alt="Question" />
                </div>
                <p>{answer} {email && <a href="mailto:mugdsc@gmail.com" target="_blank" rel="noopener noreferrer">mugdsc@gmail.com</a>}</p>
            </div>
            </Fade>}

        </div>
    )
}
export default FAQItem;
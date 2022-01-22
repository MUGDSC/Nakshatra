import Link from 'next/link';
import Button from './Button';
import classes from './Event-Card.module.css';
const EventCard = ({ img, heading, description, chapterPageRedirect, link }) => {

    function newTab() {
        if (!chapterPageRedirect) {
            return;
        }
        let handle = window.open("https://gdsc.community.dev/e/m5dzhr/");
        window.focus()
    }
    return (
        <>
            <a href="" className={classes.link}>
                <div className={classes.card}>
                    <div className={classes.heading}>
                        <h3>{heading}</h3>
                        <img src={`${img}.svg`} alt={heading} />
                    </div>
                    <div className={classes.description}>
                        <p>{description}</p>
                    </div>
                    <div className={classes.btn_wrapper}>
                        <Link href={`/${link}`}>
                            <a href={`${link}`} onClick={newTab}>
                                <Button>Register</Button>
                            </a>
                        </Link>
                    </div>
                </div>
            </a>
        </>
    )
}
export default EventCard;
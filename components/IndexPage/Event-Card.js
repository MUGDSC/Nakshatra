import Link from 'next/link';
import Button from './Button';
import classes from './Event-Card.module.css';
const EventCard = ({ img, heading, description, chapterPageRedirect, link }) => {

    return (
        <>

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
                        <a href={`${link}`}>
                            <Button>Register</Button>
                        </a>
                    </Link>
                </div>
            </div>

        </>
    )
}
export default EventCard;
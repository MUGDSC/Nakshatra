import classes from './SessionItem.module.css';
import Fade from 'react-reveal/Fade';

const SessionItem = ({ heading, speaker, description, points, date, time, image }) => {
    return (
        <div className={classes.session_item}>
            <Fade distance="20px" bottom duration={1000} >
                <div className={classes.left}>
                    <div className={classes.speaker_img}>
                        {image && <img src={`/speakers/${image}`} alt={speaker.name} />}
                        {!image && <img src="/session_head.png" alt="Astronout Head" />}
                    </div>
                    <div className={classes.speaker_details}>
                        <p className={classes.name}>{speaker.name}</p>
                        <p className={classes.org}>{speaker.role1}</p>
                        <p className={classes.designation}>{speaker.role2}</p>
                    </div>
                    <a href=""><button className={classes.btn}>Join Here</button></a>
                </div>
            </Fade>

            <div className={classes.right}>
                <Fade distance="10px" bottom duration={1000}>
                    <h2>{heading}</h2>
                    <p>{description}</p>
                </Fade>
                <ul>
                    <Fade distance="5px" bottom delay={100}>
                        {points.map((item, index) => <li key={index}>{item}</li>)}
                    </Fade>
                    {/* <li>Blah</li>
                    <li>Blah</li>
                <li>Blah</li> */}
                </ul>
                <div className={classes.time}>
                    <Fade distance="5px" bottom delay={100}>
                        <p>{date}</p>
                        <p>{time}</p>
                    </Fade>
                </div>
            </div>
        </div>

    )
}

export default SessionItem;
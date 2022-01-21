import classes from './Timeline-item.module.css';
import Fade from 'react-reveal/Fade'
import ADD_to_cal from './Add_to_cal'

const TimelineItem = ({ time, title, speaker, idd,am }) => {

    return (
        <Fade top cascade duration={500} distance="50px" >
            <div className={classes.timeline_item}>
                <div className={classes.time} >
                <p>{time} {am ? 'am':'pm'}</p>
                </div>
                <div className={classes.description}>
                    <div>
                        <p >{title}</p>
                        <p>{speaker}</p>
                    </div>
                    {/* <img src="/add-event.png" alt="Add to calendar" className={classes.add} /> */}
                </div>
                <ADD_to_cal id={idd} />
            </div>

        </Fade>
    )
}
export default TimelineItem;
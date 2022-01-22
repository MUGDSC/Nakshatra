import classes from './Timeline-item.module.css';
import EventIcon from '@mui/icons-material/Event';
import Fade from 'react-reveal/Fade'
import { useState } from 'react'
import CalendarModal from './CalendarModal';

const TimelineItem = ({ time, title, speaker, idd, am }) => {
    const [showCalendar, setShowCalendar] = useState(false);
    function removeModal() {
        setShowCalendar(false);
    }
    return (
        <>
            <Fade top cascade duration={500} distance="50px" >
                <div className={classes.timeline_item} >
                    <div className={classes.time} >
                        <p>{time} {am ? 'am' : 'pm'}</p>
                    </div>
                    <div className={classes.description}>
                        <div>
                            <p >{title}</p>
                            {speaker && <p>{speaker}</p>}
                        </div>
                        <EventIcon className={classes.scheduleIcon} onClick={() => setShowCalendar(true)} />
                    </div>
                </div>
            </Fade>
            {showCalendar && <CalendarModal id={idd} onClose={removeModal} />}
        </>
    )
}
export default TimelineItem;
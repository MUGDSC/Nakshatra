import { useState } from 'react';
import TimelineItem from './Timeline-item';
import classes from './Timeline.module.css';


const day1 = [
    { time: '4:30', speaker: 'Coming Soon...', title: 'Opening Session', },
    { time: '5:00', speaker: 'Coming Soon...', title: 'Hackathon Announcement' },
    { time: '5:30', speaker: 'Coming Soon...', title: 'DevOps' },
    { time: '7:30', speaker: 'Coming Soon...', title: 'Blog Writing & Poster/Digital Art Announcement' },
    { time: '7:30', speaker: 'Coming Soon...', title: 'Networking' },
    { time: '8:30', speaker: 'Coming Soon...', title: 'End Of Day 1' },
    { time: '10:00', speaker: 'Coming Soon...', title: 'Gaming Night' },];

const day2 = [
    { time: '10:30', speaker: 'Manvi Tyagi', title: "Women's Opportunity", active: true },
    { time: '12:35', speaker: 'Coming Soon', title: 'Break' },
    { time: '1:00', speaker: 'Coming Soon', title: 'DSA Webinar GFG' },
    { time: '3:30', speaker: 'Vaishnavi Dwivedi', title: 'UX-UI Session' },
    { time: '6:00', speaker: 'Coming Soon', title: 'Coding Competition' },];

const day3 = [
    { time: '10:30', speaker: 'Ankit Mahato', title: 'AI/ML Session With Brainstorming', active: true },
    { time: '12:30', speaker: 'Coming Soon', title: 'Break' },
    { time: '1:30', speaker: 'Coming Soon', title: 'Crypto/Blockchain' },
    { time: '4:00', speaker: 'Coming Soon', title: 'Internship / Remote Job Session' },
    { time: '7:00', speaker: 'Coming Soon', title: 'Ending Ceremony With Winners Announcement ' },];


const Timeline = () => {
    const [activeDate, setActiveDate] = useState(1);

    const changeDateHandler = (date) => {
        setActiveDate(date)
        window.navigator.vibrate(10);
    }

    return (
        <section className={classes.timeline} id="Timeline">
            <h2>
                Timeline
            </h2>
            <div className={classes.timeline_container}>
                <p className={classes.container_subheading}>Mark your calendar, to not miss any event!</p>
                <div className={classes.dates}>
                    <p className={`${activeDate === 1 && classes.active}`} onClick={() => changeDateHandler(1)}>Day 1</p>
                    <p className={`${activeDate === 2 && classes.active}`} onClick={() => changeDateHandler(2)}>Day 2</p>
                    <p className={`${activeDate === 3 && classes.active}`} onClick={() => changeDateHandler(3)}>Day 3</p>
                </div>
                <div className={classes.timeline_items}>
                    {activeDate === 1 && day1.map((item, i) => <TimelineItem key={i} time={item.time} speaker={item.speaker} title={item.title} active={item.active} />)}
                    {activeDate === 2 && day2.map((item, i) => <TimelineItem key={i} time={item.time} speaker={item.speaker} title={item.title} active={item.active} />)}
                    {activeDate === 3 && day3.map((item, i) => <TimelineItem key={i} time={item.time} speaker={item.speaker} title={item.title} active={item.active} />)}
                </div>

            </div>
        </section>
    )
}
export default Timeline;

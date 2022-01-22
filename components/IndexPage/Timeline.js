import { useState } from 'react';
import TimelineItem from './Timeline-item';
import classes from './Timeline.module.css';


const day1 = [
    { time: '4:30', speaker: '', title: 'Nakshatra - Opening Session', idd:"Bb11510073" },
    { time: '5:00', speaker: '', title: 'Hakosphere - The Global Hackathon', idd:"oF11510097" },
    { time: '5:30', speaker: '', title: 'OpStar - Session on DevOps',idd:"JA11510103" },
    { time: '7:30', speaker: '', title: 'CallistO - Blog Writing Competition',idd:"JQ11510123" },
    { time: '7:30', speaker: '', title: 'Kalpana - Poster/Digital Art Competition',idd:"wa11514041" },
    { time: '10:00', speaker: '', title: 'Gaming Night' ,idd:""}];

const day2 = [
    { time: '10:30', speaker: '', title: "Phoenix - Session on Women In Tech",active: true , idd:"Nf11510131",  am:true },
 
    { time: '1:00', speaker: '', title: 'DSA Webinar GFG' , idd:"BK11510142"},
    { time: '3:30', speaker: '', title: 'Stellar - Session On UI-UX', idd:"fJ11510147"},
   { time: '6:00', speaker: '', title: 'Area51 - Coding Competition',idd:"PH11510153" }];

const day3 = [
    { time: '10:30', speaker: '', title: 'MAven - Session on AI/ML', active: true ,idd:"Fb11510167",am:true },
  
    { time: '1:30', speaker: '', title: 'CryptoNova - Session on Cryptocurrency / Blockchain', idd:"tX11510171" },
    { time: '4:00', speaker: '', title: 'Fly me to the moon- Session On Internship / Remote Jobs' ,idd:"Sk11510183" },
    { time: '7:00', speaker: '', title: 'Ending Ceremony Of Nakshatra' ,idd:"uJ11510362"}];

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
                    {activeDate === 1 && day1.map((item, i) => <TimelineItem key={i} time={item.time} speaker={item.speaker} title={item.title} active={item.active} am={item.am} idd={item.idd} />)}
                    {activeDate === 2 && day2.map((item, i) => <TimelineItem key={i} time={item.time} speaker={item.speaker} title={item.title} active={item.active} am={item.am} idd={item.idd} />)}
                    {activeDate === 3 && day3.map((item, i) => <TimelineItem key={i} time={item.time} speaker={item.speaker} title={item.title} active={item.active} am={item.am} idd={item.idd}/>)}
                </div>

            </div>
        </section>
    )
}
export default Timeline;

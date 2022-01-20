import EventCard from './Event-Card';
import classes from './Events.module.css';

const Events = () => {
    return <section className={classes.events} id="Events">
        <h2>Events</h2>
        <div className={classes.events_card}>

            <EventCard heading="Sessions" description="The workshops are on some of the hot topics of today’s time, which will improve your intellectual skills along with technical skills. The speakers of the workshops are experts who will be sharing their valuable knowledge with all." img="/session" card="1" link="sessions" />

            <EventCard heading="Hackathons" description="Hackathon is an event where the coding craftsmanship and endurance of an individual can be tested. The hackathon consists of the problems related to some of the social issues prevailing in society. Test your teamwork, problem-solving, and zeal to crack the code!" img="/hackathon" card="2" link="hackathon" />

            <EventCard heading="Contests" description="The motive of the competitions is to test knowledge and skills and increase the same. These competitions will give you a gist of real-world and will test your impulsive creativity and decision-making. So get ready to have an adrenaline rush by the competitions " img="/contest" card="3" link="contests" />

        </div>
    </section>
}
export default Events;
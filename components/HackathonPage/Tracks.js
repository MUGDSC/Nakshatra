import TrackItems from './Track-items';
import classes from './Tracks.module.css';

const tracks = [
    {
        title: "Physical Well-Being",
        subheading: "Technology has evolved, so should Health. Build something to modernize Well Being.",
        points: ["Build a code to optimize the exercise routine by observing the body landmarks using the default device camera.", "Inspire individuals to create nutritious, enjoyable cuisine at home with the supplies provided, while also keeping track of their eating habits."]
    },
    {
        title: "Indian Wisdom",
        subheading: "Indian ancient wisdom is an ocean of treasure, dig it up!",
        points: ["Design an application for improving ease in living with Yoga, meditation, or scriptures.", "How can you use various technologies to help in promoting tourism sites with cultural significance?"]
    },
    {
        title: "Generation Gap",
        subheading: `“Every Generation needs Regeneration”, how can you help?`,
        points: ["How can you bridge the generation gap between generations X, Y, and Z and introduce various technologies as well as ideologies between people of various generations?", "Virtual health assistant for senior citizens with chronic medical conditions to regularly monitor their health parameters and vitals in order to live a healthy life."]
    },
    {
        title: "Offbeat",
        subheading: "Let’s break the ice on these off-the-beat issues.",
        points: ["With the existence of Social stigmas and Taboos, our society can’t prosper. Come up with a hack to crack the problem.", "How can the negative impacts of social media be overcome?"]
    },
    {
        title: "Machine Learning",
        subheading: " Train, Test, Predict; Come up with impressive models.",
        points: ["How can you help in the agricultural /medical industry by building an image classification model using CNN? Predict the output of a new picture, when dragged and dropped to the website.", "Work out a hack to build a facial recognition system using a camera for easing employees' attendance in Covid times."]
    },
    {
        title: "Open Innovative",
        subheading: "Every one of us has our own capabilities and strengths. Don’t hesitate to show off your idea.",
        points: [],
    },
]


const Tracks = () => {
    return (
        <section className={classes.tracks}>
            <h2>Tracks</h2>
            <div className={classes.tracks_text}>
                <p>

                </p>
            </div>
            <div className={classes.tracks_grid}>
                {tracks.map((item, index) => { return <TrackItems key={index} title={item.title} subheading={item.subheading} points={item.points} /> })}
            </div>
        </section>
    )
}
export default Tracks;
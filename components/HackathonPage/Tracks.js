import TrackItems from './Track-items';
import classes from './Tracks.module.css';

const tracks = [
    {
        title: "Physical Well-Being",
        subheading: "Technology has evolved, so should Health. Build something to modernize Well Being.",
        points: ["Build a code to optimize the exercise routine by observing the body landmarks using the default device camera.", "Inspire individuals to create nutritious, enjoyable cuisine at home with the supplies provided, while also keeping track of their eating habits."],
        image: ""
    },
    {
        title: "Indian Wisdom",
        subheading: "Indian ancient wisdom is an ocean of treasure, dig it up!",
        points: ["Design an application for improving ease in living with Yoga, meditation, or scriptures.", "How can you use various technologies to help in promoting tourism sites with cultural significance?"],
        image: "wisdom.png"
    },
    {
        title: "Generation Gap",
        subheading: `“Every Generation needs Regeneration”, how can you help?`,
        points: ["How can you bridge the generation gap between generations X, Y, and Z and introduce various technologies as well as ideologies between people of various generations?", "Virtual health assistant for senior citizens with chronic medical conditions to regularly monitor their health parameters and vitals in order to live a healthy life."],
        image: "generation_gap.png"
    },
    {
        title: "Offbeat",
        subheading: "Let’s break the ice on these off-the-beat issues.",
        points: ["With the existence of Social stigmas and Taboos, our society can’t prosper. Come up with a hack to crack the problem.", "How can the negative impacts of social media be overcome?"],
        image: "offbeat.png"
    },
    {
        title: "Machine Learning",
        subheading: " Train, Test, Predict; Come up with impressive models.",
        points: ["How can you help in the agricultural /medical industry by building an image classification model using CNN? Predict the output of a new picture, when dragged and dropped to the website.", "Work out a hack to build a facial recognition system using a camera for easing employees' attendance in Covid times."],
        image: "machine_learning.png"
    },
    {
        title: "Open Innovative",
        subheading: `Every one of us has our own capabilities and strengths. Don't hesitate to show off your idea.`,
        points: null,
        image: "innovative.png"
    },
]


const Tracks = () => {
    return (
        <section className={classes.tracks}>
            <div className={classes.container}>
                <h2>Tracks</h2>
                <div className={classes.tracks_text}>
                    <p>
                        We&apos;ve included &quot;Bring on&#40;s&#41;&quot; as samples for each category to help you come up with ideas for these tracks. If hackers have a new Bring on &#40;for the particular track&#41;, they can move along with it but remember while submitting, choose that specific track.
                        <p> You must apply to only one of these prize tracks below and there will be only one winner for each track.</p>
                    </p>
                </div>
            </div>
            <div className={classes.tracks_grid}>
                {tracks.map((item, index) => { return <TrackItems key={index} title={item.title} subheading={item.subheading} points={item.points} image={item.image} /> })}
            </div>
        </section>
    )
}
export default Tracks;
import classes from './SpeakerCard.module.css'

const SpeakerCard = (props) => {
    return (
        <div className={classes.speaker_card}>
            <div className={classes.speaker_img}>
                {props.image && <img src={`/speakers/${props.image}`} alt={props.name} />}
            </div>
            <div className={classes.speaker_about}>
                <p className={classes.name}>{props.name}</p>
                <p className={classes.about_1}>{props.role1}</p>
                <p className={classes.about_2}>{props.role2}</p>
                <div className={classes.speaker_links}>
                    <a href={props.linkedin} target="_blank" rel="noopener noreferrer">
                        <img src="linkedin.svg" alt={`${props.name}'s linkedin`} />
                    </a>
                    <a href={props.twitter} target="_blank" rel="noopener noreferrer">
                        <img src="twitter.svg" alt={`${props.name}'s twitter`} />
                    </a>
                </div>
            </div>

        </div>
    )
}
export default SpeakerCard;
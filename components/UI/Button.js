import classes from './Button.module.css'
export default function Button(props) {
    return (
        <div className={classes.div}>
            <a href={props.link} rel={props.rel && 'noreferrer noopener'} target={props.blank && "_blank"}>
                <p><span className={classes.bg}></span><span className={classes.base}></span><span className={classes.text}>{props.children}</span></p >
            </a >
        </div >
    )
}
import classes from './Button.module.css'
export default function Button(props) {
    return (
        <button className="btn">
            {props.children}
        </button>
    )
}
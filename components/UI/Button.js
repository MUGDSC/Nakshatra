import classes from './Button.module.css'
export default function Button(props) {
    return (
        <button class="btn">
            {props.children}
        </button>
    )
}
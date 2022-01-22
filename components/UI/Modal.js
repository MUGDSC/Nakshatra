import ReactDOM from 'react-dom';
import classes from './Modal.module.css';

export default function Modal(props) {

    if (typeof window === 'object') {
        return ReactDOM.createPortal(
            <>
                <div className={classes.overlay}>
                </div>
                <div className={classes.modal}>
                    {props.children}
                </div>
            </>,

            document.getElementById('modal')
        );
    }
    return (
        <></>
    )
}
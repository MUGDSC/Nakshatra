import classes from './RegisterButtons.module.css';
import Modal from '../UI/Modal';
import Link from 'next/link';
import CancelIcon from '@mui/icons-material/Cancel';
import { Fade } from 'react-reveal';

const RegisterButtons = (props) => {
    return (


        <Modal top="50%">
            <Fade top distance="5px">
                <div className={`${classes.div}`}>
                    <div className={classes.closeModal}><CancelIcon className={classes.cancel_icon} onClick={props.onClose} /></div>
                    <div className={classes.heading}>
                        <p>Register For</p>
                    </div>
                    <Link href="/hackathon">
                        <a >
                            <p>
                                <span className={classes.bg}></span><span className={classes.base}></span>
                                <span className={classes.text}>Hackathon</span>
                            </p>
                        </a>
                    </Link>
                    <Link href="/sessions">
                        <a className={classes.white} >
                            <p>
                                <span className={classes.bg}></span><span className={classes.base}></span>
                                <span className={classes.text}>Sessions</span>
                            </p>
                        </a>
                    </Link>
                    <Link href="/contests">
                        <a className={classes.transparent} >
                            <p>
                                <span className={classes.bg}></span><span className={classes.base}></span>
                                <span className={classes.text}>Contests</span>
                            </p>
                        </a>
                    </Link>
                </div>
            </Fade>
        </Modal>

    )
}
export default RegisterButtons;
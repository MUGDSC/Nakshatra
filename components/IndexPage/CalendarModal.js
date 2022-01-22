import classes from './CalendarModal.module.css';
import CancelIcon from '@mui/icons-material/Cancel';
import Modal from '../UI/Modal';

const CalendarModal = (props) => {
    return (
        <Modal>
            <div className={classes.calendar}>
                <h2>Add To Calendar</h2>
                <div className={classes.closeModal}><CancelIcon className={classes.cancel_icon} onClick={props.onClose} /></div>
                <div className={classes.calendar_list}>
                    <a href={`https://www.addevent.com/event/${(props.id)}+apple`} target={"_blank"} rel="noreferrer" title="Apple" >
                        <img src="https://cdn.addevent.com/libs/imgs/icon-emd-share-apple-t1.png" alt="Apple" width="35" border="0" />
                        <p >Apple</p>
                    </a>
                    <a href={`https://www.addevent.com/event/${(props.id)}+google`} target={"_blank"} rel="noreferrer" title="Google" >
                        <img src="https://cdn.addevent.com/libs/imgs/icon-emd-share-google-t1.png" alt="Google" width="35" border="0" />
                        <p>Google</p>
                    </a>
                    <a href={`https://www.addevent.com/event/${(props.id)}+office365`} target={"_blank"} rel="noreferrer" title="Office 365" >
                        <img src="https://cdn.addevent.com/libs/imgs/icon-emd-share-office365-t1.png" alt="Office 365" width="35" border="0" />
                        <p>Office</p>
                    </a>
                    <a href={`https://www.addevent.com/event/${(props.id)}+outlook`} target={"_blank"} rel="noreferrer" title="Outlook" >
                        <img src="https://cdn.addevent.com/libs/imgs/icon-emd-share-outlook-t1.png" alt="Outlook" width="35" border="0" />
                        <p> Outlook </p>
                    </a>
                    {/* <a href={`https://www.addevent.com/event/${(props.id)}+outlookcom`} target={"_blank"} rel="noreferrer" title="Outlook.com" >
                        <img src="https://cdn.addevent.com/libs/imgs/icon-emd-share-outlookcom-t1.png" alt="Outlook.com" width="35" border="0" />
                        <p>Outlook</p>
                    </a> */}
                    <a href={`https://www.addevent.com/event/${(props.id)}+yahoo`} target={"_blank"} rel="noreferrer" title="Yahoo">
                        <img src="https://cdn.addevent.com/libs/imgs/icon-emd-share-yahoo-t1.png" alt="Yahoo" width="35" border="0" />
                        <p>Yahoo</p>
                    </a>
                </div>
            </div>
        </Modal>
    )
}
export default CalendarModal;
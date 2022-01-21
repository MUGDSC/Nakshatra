import classes from './Add_to_cal.module.css';
import Head from 'next/head';

function calend(props){
    return(
        <div>
            <Head>
                
                 <script type="text/javascript" src="https://cdn.addevent.com/libs/atc/1.6.1/atc.min.js" async defer></script></Head>
           
            <div className={classes.dropdown}>
           
  
  
        <button className={classes.dropbtn}   >
        <img src='calender.jpeg' className={classes.image}></img>
      </button>
  {props.id=="" ?"":
  <div className={classes.dropdown_content}>
            <a href={`https://www.addevent.com/event/${(props.id)}+apple`} target={"_blank"} rel="noreferrer" title="Apple" ><img src="https://cdn.addevent.com/libs/imgs/icon-emd-share-apple-t1.png" alt="Apple" width="35" border="0"  /><div >Apple</div></a>
            <a href={`https://www.addevent.com/event/${(props.id)}+google`} target={"_blank"} rel="noreferrer" title="Google" ><img src="https://cdn.addevent.com/libs/imgs/icon-emd-share-google-t1.png" alt="Google" width="35" border="0"  /><div>Google</div></a>
            <a href={`https://www.addevent.com/event/${(props.id)}+office365`} target={"_blank"} rel="noreferrer" title="Office 365" ><img src="https://cdn.addevent.com/libs/imgs/icon-emd-share-office365-t1.png" alt="Office 365" width="35" border="0"   /><div>Office</div></a>
            <a href={`https://www.addevent.com/event/${(props.id)}+outlook`} target={"_blank"} rel="noreferrer" title="Outlook" ><img src="https://cdn.addevent.com/libs/imgs/icon-emd-share-outlook-t1.png" alt="Outlook" width="35" border="0"  /><div> Outlook </div></a>
            <a href={`https://www.addevent.com/event/${(props.id)}+outlookcom`} target={"_blank"} rel="noreferrer" title="Outlook.com" ><img src="https://cdn.addevent.com/libs/imgs/icon-emd-share-outlookcom-t1.png" alt="Outlook.com" width="35" border="0"  /><div>Outlook</div></a>
            <a href={`https://www.addevent.com/event/${(props.id)}+yahoo`} target={"_blank"} rel="noreferrer" title="Yahoo"><img src="https://cdn.addevent.com/libs/imgs/icon-emd-share-yahoo-t1.png" alt="Yahoo" width="35" border="0"  /><div>Yahoo</div></a>
            
  </div>
}
</div>
       </div>
    )
}
export default calend;
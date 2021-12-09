import classes from "./send_data.module.css";
import Image from 'next/image';
import iconsave from "../public/assets/save_solid.svg";
import iconshare from "../public/assets/share_solid.svg";
import iconmail from "../public/assets/mail_solid.svg";



function Send_data(props){
    return(
        <div className={classes.container_general}>
            <Image src={iconmail}alt="icon"width={60}height={60}/>
            <div>
                <h1>Thank you for your Reservation</h1>
            </div>
            <p>we have sent a confirmation email!</p>
            
        <div className={classes.container_icons_save}>
          <Image src={iconsave}alt="icon"width={20}height={20}/>
          <Image src={iconshare}alt="icon"width={25}height={25}/>
          </div>
        </div>
    )
};
    
export default Send_data;
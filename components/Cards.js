import classes from "./cards.module.css";
import Image from 'next/image';
import iconcard from "../public/assets/icon_cards.svg";



function Cards(props) {
  return (
    <div className={classes.container_general}>
      <div className={classes.container_title}>
        <h1>Medical Products</h1>
        <p>Access the best health plans and services and improve your quality of life</p>
      </div>
      <div className={classes.responsive_container}>
        <div className={classes.container_card}>
          <div className={classes.container_icon}>
            <Image src={iconcard}alt="icon"width={50}height={50}/>
            <h4>Standard Medicine Services</h4>
          </div>
            <ul>
              <li>-Emergency services 24/7</li>
              <li>-Hospitalization services</li>
              <li>-Basic dental care</li>
              <li>-Medical care with 300 professionals attached to the network</li>
              <li>-Special procedures</li>
              <li>-Telemedicine</li>
          </ul>
        </div>   

      <div className={classes.container_card}>
        <div className={classes.container_icon}>
          <Image src={iconcard}alt="icon"width={50}height={50}/>
          <h4>Complementary Medicine Services</h4>
        </div>
          <ul>
            <li>-Access to an exclusive hospital network </li>
            <li>-Care network: Doctor of free choice </li>
            <li>-Preventive dentistry </li>
            <li>-Care network: Doctor of free choice </li>
            <li>-Gynecology emergencies</li>
            <li>-Dermatological services</li>
          </ul>     
      </div>

      <div className={classes.container_card}>
        <div className={classes.container_icon}>
          <Image src={iconcard}alt="icon"width={50}height={50}/>
          <h4>Special Medicine Services</h4>
        </div>
          <ul>
            <li>-Direct access to more than 100 medical specialties </li>
            <li>-Home health care 24/7, 365 days a year </li>
            <li>-Hospitalization in a single room </li>
            <li>-Travel assistance </li>
            <li>-Access to an exclusive hospital network</li>
          </ul>       
      </div>
    </div>
  </div>     
  
  );
}

export default Cards;

import Image from 'next/image';
import iconconfirmation from '../public/assets/check_double.svg';
import classes from './confirm.module.css';
import Link from 'next/link';
import send_data from '../pages/confirm_data';


function Confirm_data(props){
    return (
      <div className={classes.container_confirm}>
        <Image src={iconconfirmation}alt="icon"width={50}height={50}/>
        <h1>Please confirm your information details!</h1>
          <div className={classes.container_info_details}>
            <ul className={classes.list_left}>
              <li>Name</li>
              <li>Last Name</li>
              <li>Birthday</li>
              <li></li>
              <li>Identification</li>
              <li></li>
              <li>Email Address</li>
              <li></li>
              <li>Phone Number</li>
              <li></li>
              <li>Medical speciality</li>
              <li></li>
              <li>Professional</li>
              <li></li>
              <li>Location</li>
              <li></li>
              <li>Reservation date and time</li>
              <li></li>
            </ul>
            <ul className={classes.list_right}>
            <li>Name</li>
              <li>Last Name</li>
              <li>Birthday</li>
              <li></li>
              <li>Identification</li>
              <li></li>
              <li>Email Address</li>
              <li></li>
              <li>Phone Number</li>
              <li></li>
              <li>Medical speciality</li>
              <li></li>
              <li>Professional</li>
              <li></li>
              <li>Location</li>
              <li></li>
              <li>Reservation date and time</li>
              <li></li>
            </ul>
          </div> 
          <button>
          <Link href="/send_data"><a>submit</a></Link>
          </button>
      </div>
    )
  };
  
  export default Confirm_data;
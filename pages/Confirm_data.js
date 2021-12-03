import Image from 'next/image';
import iconconfirmation from '../public/assets/check_confirmation.svg';
import classes from './confirm.module.css';


function Confirm_data(props){
    return (
      <div className={classes.container_confirm}>
      <Image src={iconconfirmation}alt="icon"width={50}height={50}/>
        <h1>Please confirm your information details!</h1>

      </div>
    )
  };
  
  export default Confirm_data;
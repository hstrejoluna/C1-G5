import classes from './plans.module.css';
import Image from 'next/image'
import iconactive from '../public/assets/icn-circle circle-xs secondary-color-1.svg';
import iconinactive from '../public/assets/icn-circle circle-xs mute.svg';

function Plans(props){
    return(
        <div className={classes.container_plans}>
            <div className={classes.container_title}>
                <h2>Pricing</h2>
                <p>Access the best health plans and services and improve your quality of life</p>
            </div>
            <div className={classes.subcontainer}>
                <h3>STANDARD</h3>
                <h5>Healthcare at your fingertips</h5>
                <div className={classes.container_price}>
                    <h2>50</h2>
                    <p className={classes.price}>$</p>
                    <p className={classes.amount}>Per Month</p>   
                </div>
                <div className={classes.container_details}>
                    <div className={classes.item}>
                        <Image src={iconactive} alt="icon"/>
                        <p>Emergency services 24/7</p>
                    </div>
                    <div className={classes.item}>
                        <Image src={iconactive} alt="icon"/>
                        <p>Hospitalization services</p>
                    </div>
                    <div className={classes.item}>
                        <Image src={iconactive} alt="icon"/>
                        <p>Basic dental care</p>
                    </div>
                    <div className={classes.item}>
                        <Image src={iconinactive} alt="icon"/>
                        <p>Special procedures</p>
                    </div>
                    <div className={classes.item}>
                        <Image src={iconinactive} alt="icon"/>
                        <p>Email and community support</p>
                    </div>                
                </div>
               <button className={classes.button_plans}>Get Plan now</button>      
            </div> 
        </div>
    );
}

export default Plans;
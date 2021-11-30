import classes from './plans.module.css';
import Image from 'next/image'
import iconactive from '../public/assets/icn-circle circle-xs secondary-color-1.svg';
import iconinactive from '../public/assets/icn-circle circle-xs mute.svg';

function Plans(props){
    const service_list = props.info_services.services.map( service => 
        <div key={service.id} className={classes.item}>
            <Image src={service.active ? iconactive:iconinactive } alt="icon"/>
            <p>{service.name}</p>
        </div>
    )

    return(
        <div className={classes.container_plans}>
            <div className={classes.container_title}>
                <h2>Pricing</h2>
                <p>Access the best health plans and services and improve your quality of life</p>
            </div>
            <div className={classes.subcontainer}>
                <h3>{props.info_services.name}</h3>
                <h5>{props.info_services.slogan}</h5>
                <div className={classes.container_price}>
                    <h2>{props.info_services.price}</h2>
                    <p className={classes.price}>$</p>
                    <p className={classes.amount}>Per Month</p>   
                </div>
                <div className={classes.container_details}>
                    { service_list }
                </div>
               <button className={classes.button_plans}>Get Plan now</button>      
            </div> 
        </div>
    );
}

export default Plans;
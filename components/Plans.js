import classes from './plans.module.css';
import Image from 'next/image'
import iconactive from '../public/assets/icn-circle circle-xs secondary-color-1.svg';
import iconinactive from '../public/assets/icn-circle circle-xs mute.svg';

function Plans(props){
    const info_plan = {
        "name": "Standard",
        "slogan": "Healthcare at your fingerprints",
        "price": 50,
        "services": [
            {
                "id":1,
                "name": "Emergency services 24/7",
                "active": true
            }, 
            {  
                 "id":2,
                "name": "Hospitalization services",
                "active": true
            },
            {
                "id":3,
                "name": "Basic dental services",
                "active": true
            },
            {   
                "id":4,
                "name": "Special procedures",
                "active": false
            },
            {
                "id":5,
                "name": "Email and community support",
                "active": false
            },
        ]
    }

    const service_list = info_plan.services.map( service => 
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
                <h3>{info_plan.name}</h3>
                <h5>{info_plan.slogan}</h5>
                <div className={classes.container_price}>
                    <h2>{info_plan.price}</h2>
                    <p className={classes.price}>$</p>
                    <p className={classes.amount}>Per Month</p>   
                </div>
                <div className={classes.container_details}>
                    { service_list }
                    
                    {/* <div className={classes.item}>
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
                    </div> */}

                </div>
               <button className={classes.button_plans}>Get Plan now</button>      
            </div> 
        </div>
    );
}

export default Plans;
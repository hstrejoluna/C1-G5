import classes from './plans.module.css';


function Plans(props){
    return(
        <div className={classes.container_plans}>
            <div>
            <h2>Pricing</h2>
                <p>Problems trying to resolve 
                the conflict between the two major 
                realms of Classical physics: 
                Newtonian mechanics</p>
            </div>
            <div className={classes.subcontainer}>
                <h3>FREE</h3>
                <h5>Organize across all 
                apps by hand</h5>
                    <div>
                        <h2>0</h2>
                            <div>
                                <p>$</p>
                                <p>Per Month</p>
                            </div>
                <p>Unlimited product updates</p>
                <p>Unlimited product updates</p>
                <p>Unlimited product updates</p>
                <p>1GB  Cloud storage</p>
                <p>Email and community support</p>
                <button>Try for free</button>
            </div>   
       </div>
            
        </div>
    );
}

export default Plans;
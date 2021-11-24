import classes from './main.module.css';
import Image from 'next/image';


function Main(props){
    return(
        <div className={classes.container}>
            <div>
                <h1 className={classes.title}>Meet the Best Hospital</h1>
                <h4 className={classes.subtitle}>We know how large objects will act, but things on a small scale.</h4>
            </div>
            <div className={classes.container_btn}>
                <button className={classes.first_btn}>Get Quote Now</button>
                <button className={classes.second_btn}>Learn More</button>
            </div>
        </div>
    );
}

export default Main;
import classes from './form.module.css';
import Link from 'next/link';
import Confirm_data from '../pages/confirm_data';

function Form(props){

    return(
        <div>
            <form className={classes.container_form}>
                <div>
                <h1>BOOK APPOINTMENT</h1>
                </div>
                <label htmlFor="name">Name*</label>
                <input type="text" id="name" name="name" required
                minLength="4" maxLength="8" size="10" placeholder="Enter First Name"/>

                <label htmlFor="lastname">Last name*</label>
                <input type="text" id="lastname" name="lastname" required
                minLength="4" maxLength="10" size="12" placeholder="Enter Last Name"/>

                <label htmlFor="birthday">Birthday*</label>
                <input type="date" id="birthday" name="birthday"/>
                

                <label htmlFor="SSN">Social Security Number or ID*</label>
                <input type="number" id="SSN" name="SSN" placeholder="Enter Id Number"/>

                <label htmlFor="email">Enter your email*</label>
                <input type="email" id="email" name="email" placeholder="example@gmail.com"/>

                <label htmlFor="phone">Enter phone number*</label>
                <input type="tel" id="phone" name="phone" placeholder="Enter Phohe Number"/>

                <label htmlFor="speciality">Choose a Medical speciality*</label>
                <select id="speciality" name="speciality">
                <option value="Select">please Select</option>
                <option value="Cardiology">Cardiology</option>
                <option value="Ginecology">Ginecology</option>
                <option value="Orthopedics">Orthopedics</option>
                <option value="General Medicine">General Medicine</option>
                </select>

                <label htmlFor="professional">Choose a Professional*</label>
                <select id="professional" name="professional">
                <option value="">Please Select</option>
                <option value="Default">Available</option>
                <option value="Alfredo Peréz Cifuentes">Alfredo Peréz Cifuentes</option>
                <option value="Jimena Gómez Aristizabal">Jimena Gómez Aristizabal</option>
                <option value="Ernesto Hernández Santacruz">Ernesto Hernández Santacruz</option>
                <option value="Natalia Marín Díaz">Natalia Marín Díaz</option>
                </select>

                <label htmlFor="location">Choose a Location*</label>
                <select id="location" name="location">
                <option value="">Please Select</option>
                <option value="El tintal">El tintal</option>
                <option value="Laureles">Laureles</option>
                <option value="Castilla">Castilla</option>
                </select>

                <label htmlFor="reservationtime">Reservation date and time*</label>
                <input type="datetime-local" id="reservationtime" name="reservationtime"/>
                <button className={classes.button_confirm}>
                <Link href="/confirm_data"><a>Make Appointment</a></Link>
                </button>
            </form>
            
        </div>
    );
}

export default Form;
import classes from './form.module.css';

function Form(props){
    return(
        <div>
            <form className={classes.container_form}>
                <div>
                <h1>BOOK APPOINTMENT</h1>
                </div>
                <label for="name">Name*</label>
                <input type="text" id="name" name="name" required
                minlength="4" maxlength="8" size="10" placeholder="Enter First Name"/>

                <label for="lastname">Last name*</label>
                <input type="text" id="lastname" name="lastname" required
                minlength="4" maxlength="10" size="12" placeholder="Enter Last Name"/>

                <label for="birthday">Birthday*</label>
                <input type="date" id="birthday" name="birthday"/>
                

                <label for="SSN">Social Security Number or ID*</label>
                <input type="number" id="SSN" name="SSN" placeholder="Enter Id Number"/>

                <label for="email">Enter your email*</label>
                <input type="email" id="email" name="email" placeholder="example@gmail.com"/>

                <label for="phone">Enter phone number*</label>
                <input type="tel" id="phone" name="phone" placeholder="Enter Phohe Number"/>

                <label for="speciality">Choose a Medical speciality*</label>
                <select id="speciality" name="speciality">
                <option value="Select">please Select</option>
                <option value="Default">Default</option>
                <option value="Cardiology">Cardiology</option>
                <option value="Ginecology">Ginecology</option>
                <option value="Orthopedics">Orthopedics</option>
                <option value="General Medicine">General Medicine</option>
                </select>

                <label for="professional">Choose a Professional*</label>
                <select id="professional" name="professional">
                <option value="">Please Select</option>
                <option value="Default">Default</option>
                <option value="Alfredo Peréz Cifuentes">Alfredo Peréz Cifuentes</option>
                <option value="Jimena Gómez Aristizabal">Jimena Gómez Aristizabal</option>
                <option value="Ernesto Hernández Santacruz">Ernesto Hernández Santacruz</option>
                <option value="Natalia Marín Díaz">Natalia Marín Díaz</option>
                </select>

                <label for="location">Choose a Location*</label>
                <select id="location" name="location">
                <option value="">Please Select</option>
                <option value="El tintal">El tintal</option>
                <option value="Laureles">Laureles</option>
                <option value="Castilla">Castilla</option>
                </select>

                <label for="reservationtime">Reservation date and time*</label>
                <input type="datetime-local" id="reservationtime" name="reservationtime"/>
                <button className={classes.button_confirm}>Make Appointment</button>
            </form>
            
        </div>
    );
}

export default Form;
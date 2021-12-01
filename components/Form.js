import classes from './form.module.css';

function Form(props){
    return(
        <div>
            <div>
                <h1>BOOK APPOINTMENT</h1>
            </div>
            <form>
                <label for="name">Name*:</label>
                <input type="text" id="name" name="name" required
                minlength="4" maxlength="8" size="10" placeholder="Enter First Name"/>

                <label for="lastname">Lastname*:</label>
                <input type="text" id="lastname" name="lastname" required
                minlength="4" maxlength="10" size="12" placeholder="Enter LastName"/>

                <label for="birthday">Birth day:</label>
                <input type="date" id="birthday" name="birthday"/>
                

                <label for="SSN">Social Security Number or ID*:</label>
                <input type="number" id="SSN" name="SSN" min="1" max="10"/>

                <label for="email">Enter your email*:</label>
                <input type="email" id="email" name="email"></input>

                <label for="phone">Enter your phone number*:</label>
                <input type="tel" id="phone" name="phone" pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"></input>

                <label for="speciality">Choose a Medical speciality*:</label>
                <select id="speciality" name="speciality">
                <option value="">--</option>
                <option value="Default">Default</option>
                <option value="Cardiology">Cardiology</option>
                <option value="Ginecology">Ginecology</option>
                <option value="Orthopedics">Orthopedics</option>
                <option value="General Medicine">General Medicine</option>
                </select>

                <label for="professional">Choose a Professional*:</label>
                <select id="professional" name="professional">
                <option value="">--</option>
                <option value="Default">Default</option>
                <option value="Alfredo Peréz Cifuentes">Alfredo Peréz Cifuentes</option>
                <option value="Jimena Gómez Aristizabal">Jimena Gómez Aristizabal</option>
                <option value="Ernesto Hernández Santacruz">Ernesto Hernández Santacruz</option>
                <option value="Natalia Marín Díaz">Natalia Marín Díaz</option>
                </select>

                <label for="location">Choose a Location*:</label>
                <select id="location" name="location">
                <option value="">--</option>
               <option value="El tintal">El tintal</option>
                <option value="Laureles">Laureles</option>
                <option value="Castilla">Castilla</option>
                </select>

                <label for="reservationtime">Reservation date and time*:</label>
                <input type="datetime-local" id="reservationtime" name="reservationtime"></input>

            </form>
        </div>
    );
}

export default Form;
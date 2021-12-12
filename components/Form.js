import classes from './form.module.css';
import Router from 'next/router'

function Form(props){
    function handleSubmit(e) {
        e.preventDefault();
        const birthday = new Date(e.target.birthday.value);
        const reservation = new Date(e.target.reservationtime.value);
        const formdata = {
            "client_name": e.target.name.value,
            "client_lastname": e.target.lastname.value,
            "client_birthday_day": birthday.getDate(),
            "client_birthday_month": birthday.getMonth(),
            "client_birthday_year": birthday.getFullYear(),
            "client_ssnorid": e.target.SSN.value,
            "client_email": e.target.email.value,
            "client_phone": e.target.phone.value,
            "professional": e.target.professional.value,
            "specialty": e.target.speciality.value,
            "location": e.target.location.value,
            "reservation_time_hour": reservation.getHours(),
            "reservation_time_minute": reservation.getMinutes(),
            "reservation_day": reservation.getDate(),
            "reservation_month": reservation.getMonth(),
            "reservation_year": reservation.getFullYear()
        };        
        Router.push({
            pathname:'/confirm_data',
            query: formdata
        });
    }

    return(
        <div>
            <form onSubmit={handleSubmit} className={classes.container_form}>
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

                <label htmlFor="location">Choose a Location*</label>
                <select id="location" name="location">
                <option value="">Please Select</option>
                <option value="El tintal">El tintal</option>
                <option value="Laureles">Laureles</option>
                <option value="Castilla">Castilla</option>
                </select>

                <label htmlFor="speciality">Choose a Medical specialities*</label>
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
                <option value="Alfredo Peréz Cifuentes">Alfredo Peréz Cifuentes</option>
                <option value="Jimena Gómez Aristizabal">Jimena Gómez Aristizabal</option>
                <option value="Ernesto Hernández Santacruz">Ernesto Hernández Santacruz</option>
                <option value="Natalia Marín Díaz">Natalia Marín Díaz</option>
                </select>

                <label htmlFor="reservationtime">Reservation date and time*</label>
                <input type="datetime-local" id="reservationtime" name="reservationtime"/>
                <button className={classes.button_confirm} type="submit">Make Appointment</button>
            </form>  
        </div>
    );
}

export default Form;
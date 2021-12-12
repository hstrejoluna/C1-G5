import Image from 'next/image';
import iconconfirmation from '../public/assets/check_double.svg';
import classes from './confirm.module.css';
import { useRouter } from 'next/router';
import Router from 'next/router'

function Confirm_data(props){
    const router = useRouter();

    const map_locations = {
      "El tintal" : "61b10b91099d249eb56776b7",
      "Laureles" : "61b10b77099d249eb56776b5",
      "Castilla" : "61b10b99099d249eb56776b9",
    }

      const map_specialities = {
        "Cardiology": "61b105e7ca04e6f9866dc344",
        "Ginecology": "61b10600ca04e6f9866dc346",
        "Orthopedics": "61b1060eca04e6f9866dc348",
        "General Medicine": "61b10619ca04e6f9866dc34a",
      }

      const map_professionals = {
        "Alfredo Peréz Cifuentes": "61b107855b19f7a6654f3e56",
        "Jimena Gómez Aristizabal": "61b106ef5b19f7a6654f3e50",
        "Ernesto Hernández Santacruz": "61b1075f5b19f7a6654f3e54",
        "Natalia Marín Díaz": "61b1073c5b19f7a6654f3e52",
      }

    const formdata = {
        "client": {
            "name": router.query.client_name,
            "lastname": router.query.client_lastname,
            "birthday": {
                "day": +router.query.client_birthday_day,
                "month": +router.query.client_birthday_month,
                "year": +router.query.client_birthday_year
            },
            "ssnorid": +router.query.client_ssnorid,
            "email": router.query.client_email,
            "phone": +router.query.client_phone
        },
        "location": map_locations[router.query.location],
        "professional": map_professionals [router.query.professional],
        "specialty": map_specialities[router.query.specialty],
        "reservation": {
            "time": {
                "hour": +router.query.reservation_time_hour,
                "minute": +router.query.reservation_time_minute
            },
            "day": +router.query.reservation_day,
            "month": +router.query.reservation_month,
            "year": +router.query.reservation_year
        }
    };

    const userConfirm = () => {
      const requestOptions = {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(formdata)
      };    
      fetch(
          'http://localhost:5000/reservations/', 
          requestOptions
      ).then(async response => {
          const isJson = response.headers.get('content-type')?.includes('application/json');
          const data = isJson && await response.json();
          if (!response.ok) {
              const error = (data && data.message) || response.status;
              console.log(error);
          }
          else {
            Router.push('send_data')
          }
      })
      .catch(error => {
          console.error('There was an error!', error);
      });
    }

    return (
      <div className={classes.container_confirm}>
        <Image src={iconconfirmation}alt="icon"width={50}height={50}/>
        <h1>Please confirm your information details!</h1>
          <div className={classes.container_info_details}>
            <ul className={classes.list_left}>
              <li>Name</li>
              <li>Last Name</li>
              <li>Birthday</li>
              <li></li>
              <li>Identification</li>
              <li></li>
              <li>Email Address</li>
              <li></li>
              <li>Phone Number</li>
              <li></li>
              <li>Medical speciality</li>
              <li></li>
              <li>Professional</li>
              <li></li>
              <li>Location</li>
              <li></li>
              <li>Reservation date and time</li>
              <li></li>
            </ul>
            <ul className={classes.list_right}>
            <li>{formdata.client.name}</li>
              <li>{formdata.client.lastname}</li>
              <li>{formdata.client.birthday.day}-{formdata.client.birthday.month}-{formdata.client.birthday.year}</li>
              <li>{formdata.client.ssnorid}</li>
              <li>{formdata.client.email}</li>
              <li>{formdata.client.phone}</li>
              <li>{router.query.specialty}</li>
              <li>{router.query.professional}</li>
              <li>{router.query.location}</li>
              <li>{formdata.reservation.time.hour}-{formdata.reservation.time.minute}:{formdata.reservation.day}-{formdata.reservation.month}-{formdata.reservation.year}</li>
            </ul>
          </div> 
          <button onClick={userConfirm}>Confirm</button>
      </div>
    )
  };
  
  export default Confirm_data;
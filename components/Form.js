import classes from "./form.module.css";
import Router from "next/router";
import { useState, useEffect } from "react";

function Form(props) {
  const [locations, setLocations] = useState(null);
  const [specialties, setSpecialties] = useState(null);
  const [professionals, setProfessionals] = useState(null);

  useEffect(() => {
    getLocations();
    getSpecialties();
    getProfessionals();

    async function getLocations() {
      const response = await fetch("localhost:5000/locations");
      const locationsdata = await response.json();
      setLocations(locationsdata);
    }

    async function getSpecialties() {
      const response = await fetch("localhost:5000/specialties");
      const specialtiesdata = await response.json();
      setSpecialties(specialtiesdata);
    }

    async function getProfessionals() {
      const response = await fetch("localhost:5000/professionals");
      const professionalsdata = await response.json();
      setProfessionals(professionalsdata);
    }
  }, []);

  function handleSubmit(e) {
    e.preventDefault();
    const birthday = new Date(e.target.birthday.value);
    const reservation = new Date(e.target.reservationtime.value);
    const formdata = {
      client: {
        name: e.target.name.value,
        lastname: e.target.lastname.value,
        birthday: {
          day: birthday.getDate(),
          month: birthday.getMonth(),
          year: birthday.getFullYear(),
        },
        ssnorid: e.target.SSN.value,
        email: e.target.email.value,
        phone: e.target.phone.value,
      },
      professional: e.target.professional.value,
      specialty: e.target.speciality.value,
      location: e.target.location.value,
      reservation: {
        time: {
          hour: reservation.getHours(),
          minute: reservation.getMinutes(),
        },
        day: reservation.getDate(),
        month: reservation.getMonth(),
        year: reservation.getFullYear(),
      },
    };
    console.log(formdata);
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formdata),
    };
    fetch("http://localhost:5000/reservations/", requestOptions)
      .then(async (response) => {
        const isJson = response.headers
          .get("content-type")
          ?.includes("application/json");
        const data = isJson && (await response.json());
        if (!response.ok) {
          const error = (data && data.message) || response.status;
          console.log(error);
        } else {
          Router.push("/confirm_data");
        }
      })
      .catch((error) => {
        console.error("There was an error!", error);
      });
  }

  return (
    <div>
      <form onSubmit={handleSubmit} className={classes.container_form}>
        <div>
          <h1>BOOK APPOINTMENT</h1>
        </div>
        <label htmlFor="name">Name*</label>
        <input
          type="text"
          id="name"
          name="name"
          required
          minLength="4"
          maxLength="8"
          size="10"
          placeholder="Enter First Name"
        />

        <label htmlFor="lastname">Last name*</label>
        <input
          type="text"
          id="lastname"
          name="lastname"
          required
          minLength="4"
          maxLength="10"
          size="12"
          placeholder="Enter Last Name"
        />

        <label htmlFor="birthday">Birthday*</label>
        <input type="date" id="birthday" name="birthday" />

        <label htmlFor="SSN">Social Security Number or ID*</label>
        <input
          type="number"
          id="SSN"
          name="SSN"
          placeholder="Enter Id Number"
        />

        <label htmlFor="email">Enter your email*</label>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="example@gmail.com"
        />

        <label htmlFor="phone">Enter phone number*</label>
        <input
          type="tel"
          id="phone"
          name="phone"
          placeholder="Enter Phohe Number"
        />

        <label htmlFor="location">Choose a Location*</label>
        <select id="location" name="location">
          <option value="">Please Select</option>
          <option value="61b10b91099d249eb56776b7">El tintal</option>
          <option value="61b10b77099d249eb56776b5">Laureles</option>
          <option value="61b10b99099d249eb56776b9">Castilla</option>
        </select>

        <label htmlFor="speciality">Choose a Medical specialities*</label>
        <select id="speciality" name="speciality">
          <option value="Select">please Select</option>
          <option value="61b105e7ca04e6f9866dc344">Cardiology</option>
          <option value="61b10600ca04e6f9866dc346">Ginecology</option>
          <option value="61b1060eca04e6f9866dc348">Orthopedics</option>
          <option value="61b10619ca04e6f9866dc34a">General Medicine</option>
        </select>

        <label htmlFor="professional">Choose a Professional*</label>
        <select id="professional" name="professional">
          <option value="">Please Select</option>
          <option value="61b107855b19f7a6654f3e56">
            Alfredo Peréz Cifuentes
          </option>
          <option value="61b106ef5b19f7a6654f3e50">
            Jimena Gómez Aristizabal
          </option>
          <option value="61b1075f5b19f7a6654f3e54">
            Ernesto Hernández Santacruz
          </option>
          <option value="61b1073c5b19f7a6654f3e52">Natalia Marín Díaz</option>
        </select>

        <label htmlFor="reservationtime">Reservation date and time*</label>
        <input
          type="datetime-local"
          id="reservationtime"
          name="reservationtime"
        />
        <button className={classes.button_confirm} type="submit">
          Make Appointment
        </button>
      </form>
    </div>
  );
}

export default Form;

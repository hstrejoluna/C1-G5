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
      const response = await fetch("http://localhost:5000/locations");
      const locationsdata = await response.json();
      setLocations(locationsdata);
    }

    async function getSpecialties() {
      const response = await fetch("http://localhost:5000/specialties");
      const specialtiesdata = await response.json();
      setSpecialties(specialtiesdata);
    }

    async function getProfessionals() {
      const response = await fetch("http://localhost:5000/professionals");
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
        {locations && (
          <select id="location" name="location">
            <option value="">Please Choose a Location</option>
            {locations.map((location, index) => (
              <option key={index} value={location._id}>
                {location.location}
              </option>
            ))}
          </select>
        )}

        <label htmlFor="speciality">Choose a Medical specialties*</label>
        {specialties && (
          <select id="specialty" name="specialty">
            <option value="">Please Choose a Specialty</option>
            {specialties.map((specialty, index) => (
              <option key={index} value={specialty._id}>
                {specialty.specialty}
              </option>
            ))}
          </select>
        )}

        <label htmlFor="professional">Choose a Professional*</label>
        {professionals && (
          <select id="professional" name="professional">
            <option value="">Please Choose a Professional</option>
            {professionals.map((professional, index) => (
              <option key={index} value={professional._id}>
                {professional.name + " " + professional.lastname}
              </option>
            ))}
          </select>
        )}

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

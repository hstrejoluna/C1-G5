import classes from "./cards.module.css";
//import Image from "../public/assets/icn-circle circle-md primary-color.svg";
import React, { Fragment, useState } from "react";

function Cards(props) {

  return (
    <Fragment>
      <div className={classes.container}>
        <div>
          <h1 className={classes.title}>Leading Medicine</h1>
          <p className={classes.text}>
            Problems trying to resolve the conflict between the two major realms
            of Classical physics: Newtonian mechanics
          </p>
        </div>

        <div className={classes.card}>
          <div className={classes.classContainertitle}>
            <svg
              width="73"
              height="72"
              viewBox="0 0 73 72"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect x="0.5" width="72" height="72" rx="36" fill="white" />
              <g clipPath="url(#clip0_1579_50)">
                <clipPath
                  d="M46.6818 36.1765H43.7727V40.5686H39.4091V43.4967H46.6818V36.1765ZM29.2273 31.7843H33.5909V28.8562H26.3182V36.1765H29.2273V31.7843ZM49.5909 23H23.4091C22.6376 23 21.8976 23.3085 21.3521 23.8576C20.8065 24.4067 20.5 25.1515 20.5 25.9281V46.4249C20.5 47.2014 20.8065 47.9462 21.3521 48.4953C21.8976 49.0445 22.6376 49.353 23.4091 49.353H49.5909C50.3624 49.353 51.1024 49.0445 51.6479 48.4953C52.1935 47.9462 52.5 47.2014 52.5 46.4249V25.9281C52.5 25.1515 52.1935 24.4067 51.6479 23.8576C51.1024 23.3085 50.3624 23 49.5909 23ZM49.5909 46.4249H23.4091V25.9281H49.5909V46.4249Z"
                  fill="#23A6F0"
                />
              </g>
              <defs>
                <clipPath id="clip0_1579_50">
                  <rect
                    width="32"
                    height="26.353"
                    fill="white"
                    transform="translate(20.5 23)"
                  />
                </clipPath>
              </defs>
            </svg>
            <h4 style={{ marginLeft:'15px', width:'218px' }}>Standard Medicine Services</h4>
          </div>
          <div className={classes.classContainertext}>
            <ul>
              <li> Emergency services 24/7 </li>
              <li> Hospitalization services </li>
              <li> Basic dental care </li>
              <li> Medical care with 300 professionals attached to the network </li>
              <li> Special procedures</li>
              <li> Telemedicine</li>
              <a href="#">
                <li>
                  {" "}
                  <span style={{ color: "#23A6F0" }}> Learn More </span>
                </li>
              </a>
            </ul>
          </div>
        </div>

        <div className={classes.card}>
          <div className={classes.classContainertitle}>
            <svg
              width="73"
              height="72"
              viewBox="0 0 73 72"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect x="0.5" width="72" height="72" rx="36" fill="white" />
              <g clip-path="url(#clip0_1579_50)">
                <path
                  d="M46.6818 36.1765H43.7727V40.5686H39.4091V43.4967H46.6818V36.1765ZM29.2273 31.7843H33.5909V28.8562H26.3182V36.1765H29.2273V31.7843ZM49.5909 23H23.4091C22.6376 23 21.8976 23.3085 21.3521 23.8576C20.8065 24.4067 20.5 25.1515 20.5 25.9281V46.4249C20.5 47.2014 20.8065 47.9462 21.3521 48.4953C21.8976 49.0445 22.6376 49.353 23.4091 49.353H49.5909C50.3624 49.353 51.1024 49.0445 51.6479 48.4953C52.1935 47.9462 52.5 47.2014 52.5 46.4249V25.9281C52.5 25.1515 52.1935 24.4067 51.6479 23.8576C51.1024 23.3085 50.3624 23 49.5909 23ZM49.5909 46.4249H23.4091V25.9281H49.5909V46.4249Z"
                  fill="#23A6F0"
                />
              </g>
              <defs>
                <clipPath id="clip0_1579_50">
                  <rect
                    width="32"
                    height="26.353"
                    fill="white"
                    transform="translate(20.5 23)"
                  />
                </clipPath>
              </defs>
            </svg>


            <h4 style={{ marginLeft:'15px', width:'218px' }}>Complementary Medicine Services</h4>
          </div>
          <div className={classes.classContainertext}>
            <ul>
              <li> Access to an exclusive hospital network </li>
              <li> Care network: Doctor of free choice </li>
              <li> Preventive dentistry </li>
              <li> Care network: Doctor of free choice </li>
              <li> Gynecology emergencies</li>
              <li> Dermatological services</li>
              <a href="#">
                <li>
                  {" "}
                  <span style={{ color: "#23A6F0" }}> Learn More </span>
                </li>
              </a>
            </ul>
          </div>
        </div>

        <div className={classes.card}>
          <div className={classes.classContainertitle}>
        
          <svg
              width="73"
              height="72"
              viewBox="0 0 73 72"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect x="0.5" width="72" height="72" rx="36" fill="white" />
              <g clip-path="url(#clip0_1579_50)">
                <path
                  d="M46.6818 36.1765H43.7727V40.5686H39.4091V43.4967H46.6818V36.1765ZM29.2273 31.7843H33.5909V28.8562H26.3182V36.1765H29.2273V31.7843ZM49.5909 23H23.4091C22.6376 23 21.8976 23.3085 21.3521 23.8576C20.8065 24.4067 20.5 25.1515 20.5 25.9281V46.4249C20.5 47.2014 20.8065 47.9462 21.3521 48.4953C21.8976 49.0445 22.6376 49.353 23.4091 49.353H49.5909C50.3624 49.353 51.1024 49.0445 51.6479 48.4953C52.1935 47.9462 52.5 47.2014 52.5 46.4249V25.9281C52.5 25.1515 52.1935 24.4067 51.6479 23.8576C51.1024 23.3085 50.3624 23 49.5909 23ZM49.5909 46.4249H23.4091V25.9281H49.5909V46.4249Z"
                  fill="#23A6F0"
                />
              </g>
              <defs>
                <clipPath id="clip0_1579_50">
                  <rect
                    width="32"
                    height="26.353"
                    fill="white"
                    transform="translate(20.5 23)"
                  />
                </clipPath>
              </defs>
            </svg>

            <h4 style={{ marginLeft:'15px', width:'218px' }}>Special Medicine Services</h4>
          </div>
          <div className={classes.classContainertext}>
            <ul>
              <li> Direct access to more than 100 medical specialties </li>
              <li> Home health care 24/7, 365 days a year </li>
              <li> Hospitalization in a single room </li>
              <li> Travel assistance </li>
              <li> Access to an exclusive hospital network</li>
              <a href="#">
                <li>
                  {" "}
                  <span style={{ color: "#23A6F0" }}> Learn More </span>
                </li>
              </a>
            </ul>
          </div>
        </div>


      </div>

    </Fragment>
  );
}

export default Cards;

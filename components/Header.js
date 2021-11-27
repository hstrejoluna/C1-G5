import classes from "./header.module.css";
import React, { Fragment, useState } from "react";

function Header(props) {
  const [active, setActive] = useState();

  const handleClick = () => {

    
  };

  return (
    <Fragment>
      <nav className={classes.container}>
        <div className={classes.nav}>
          <h3 className={classes.logo}>NombreEmpresa</h3>
          <div className={classes.icons}>
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className={classes.svg}
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M17.1901 15.478L23.6458 21.9337C23.8727 22.1608 24.0001 22.4687 24 22.7897C23.9999 23.1107 23.8723 23.4185 23.6452 23.6455C23.4181 23.8724 23.1102 23.9998 22.7892 23.9997C22.4682 23.9995 22.1604 23.8719 21.9335 23.6448L15.4778 17.1892C13.5479 18.6839 11.1211 19.3873 8.69104 19.1563C6.26097 18.9253 4.01018 17.7772 2.39656 15.9455C0.782936 14.1139 -0.0723147 11.7364 0.00479537 9.29657C0.0819054 6.85677 1.08558 4.53797 2.81165 2.8119C4.53771 1.08584 6.85651 0.082161 9.29632 0.00505095C11.7361 -0.0720591 14.1137 0.783191 15.9453 2.39682C17.7769 4.01044 18.925 6.26123 19.156 8.6913C19.387 11.1214 18.6836 13.5482 17.1889 15.478H17.1901ZM9.60045 16.7992C11.5099 16.7992 13.3412 16.0406 14.6914 14.6904C16.0416 13.3402 16.8001 11.509 16.8001 9.5995C16.8001 7.69003 16.0416 5.85877 14.6914 4.50857C13.3412 3.15837 11.5099 2.39984 9.60045 2.39984C7.69098 2.39984 5.85971 3.15837 4.50951 4.50857C3.15932 5.85877 2.40078 7.69003 2.40078 9.5995C2.40078 11.509 3.15932 13.3402 4.50951 14.6904C5.85971 16.0406 7.69098 16.7992 9.60045 16.7992Z"
                fill="#737373"
              />
            </svg>

            <svg
              width="24"
              height="18"
              viewBox="0 0 24 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className={classes.svg}
            >
              <path
                d="M22.4 4.00016H4.656L4 0.640163C3.9626 0.456742 3.86206 0.292245 3.71589 0.175305C3.56971 0.0583653 3.38716 -0.00361159 3.2 0.000162751H0V1.60016H2.544L5.6 16.9602C5.6374 17.1436 5.73794 17.3081 5.88411 17.425C6.03029 17.542 6.21284 17.6039 6.4 17.6002H20.8V16.0002H7.056L6.4 12.8002H20.8C20.9849 12.8047 21.1657 12.745 21.3116 12.6312C21.4574 12.5174 21.5594 12.3566 21.6 12.1762L23.2 4.97616C23.2268 4.85746 23.2262 4.73421 23.1982 4.61579C23.1702 4.49737 23.1155 4.38689 23.0384 4.29278C22.9612 4.19867 22.8636 4.12339 22.753 4.07268C22.6424 4.02198 22.5217 3.99717 22.4 4.00016ZM20.16 11.2002H6.096L4.976 5.60016H21.4L20.16 11.2002Z"
                fill="#737373"
              />
            </svg>

            <a className={classes.ham}>
              <svg width="30" height="30" viewBox="0 0 100 100">
                <path
                  className={classes.line}
                  d="M 20, 29.000046 H 80.000231 C 80.000231"
                />
                <path className={classes.line} d="M 20, 50 H 80" />
                <path
                  className={classes.line}
                  d="M 20, 70.999954 H 80.000231 C 80.000231"
                />
              </svg>
            </a>
          </div>
        </div>
        <ul className={classes.listado}>
          <a href="#">
            <li className={classes.list} onClick={handleClick}>
              Home
            </li>
          </a>
          <a href="#">
            <li className={classes.list} onClick={handleClick}>
              Product
            </li>
          </a>
          <a href="#">
            <li className={classes.list} onClick={handleClick}>
              Pricing
            </li>
          </a>
          <a href="#">
            <li className={classes.list} onClick={handleClick}>
              Contact
            </li>
          </a>
        </ul>
      </nav>
    </Fragment>
  );
}

export default Header;

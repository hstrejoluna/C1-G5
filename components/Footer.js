import classes from "./footer.module.css";
import Image from 'next/image';
import facebook from "../public/assets/facebook.svg";
import instagram from "../public/assets/instagram.svg";
import twitter from "../public/assets/twitter.svg";

function Footer(props) {
  return (
    <div className={classes.footer_container}>
      <ul className={classes.first_seccion}>
        <h2>Get In Touch</h2>
        <li>Contact us</li>
        <div className={classes.container_icons}>
          <li>
          <Image src={facebook}alt="icon"width={25}height={25}/>
          </li>
          <li>
          <Image src={instagram}alt="icon"width={25}height={25}/>
          </li>
          <li>
          <Image src={twitter}alt="icon"width={25}height={25}/>
          </li>
        </div>
      </ul>

      <ul>
        <h2>Company info</h2>
        <li>About Us</li>
        <li>We are hiring</li>
        <li>Blog</li>
      </ul>

      <ul>
        <h2>Features</h2>
        <li>Business Marketing</li>
        <li>User Analytic</li>
        <li>Live Chat</li>
        <li>Unlimited Support</li>
      </ul>

      <ul>
        <h2>Resources</h2>
        <li>IOS & Android</li>
        <li>Demo</li>
        <li>Customers</li>
        <li>API</li>
      </ul>
    </div>
  );
}

export default Footer;

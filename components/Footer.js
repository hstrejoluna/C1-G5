import classes from "./footer.module.css";
import Image from 'next/image';
import facebook from "../public/assets/facebook.svg";
import instagram from "../public/assets/instagram.svg";
import twitter from "../public/assets/twitter.svg";

function Footer(props) {
  return (
    <div className={classes.footer_container}>
      <div>
        <h2>Get In Touch</h2>
        <p>Contact us</p>
        <div className={classes.container_icons}>
          <div>
          <Image src={facebook}alt="icon"width={22}height={22}/>
          </div>
          <div>
          <Image src={instagram}alt="icon"width={22}height={22}/>
          </div>
          <div>
          <Image src={twitter}alt="icon"width={22}height={22}/>
          </div>
        </div>
      </div>

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

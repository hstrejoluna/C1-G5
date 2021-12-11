import classes from "./header.module.css";
import Image from 'next/image';
import slogan from "../public/assets/slogan.svg";
import iconsearch from "../public/assets/icon_search.svg";
import iconshopping from "../public/assets/icon_shopping.svg";
import iconmenu from "../public/assets/icon_menu.svg";


function Header(props) {
  return(
      <div className={classes.container_header}>
        <div>
          <h1>Colmedicine</h1>
        </div>
        <div className={classes.icon_search}>
          <Image src={iconsearch}alt="icon"width={24}height={24}/>
        </div>
        <div className={classes.icon_shopping}>
        <Image src={iconshopping}alt="icon"width={24}height={24}/>
        </div>
        <div className={classes.icon_menu}>
        <Image src={iconmenu}alt="icon"width={24}height={24}/>
        </div>
          <ul className={classes.navbar}>
            <li>Home</li>
            <li>Products</li>
            <li>Pricing</li>
            <li>Contact</li>
          </ul> 
    </div>
  );
}



export default Header;

import Facebook from './images/facebook.png';
import Instagram from './images/instagram.png';
import Twitter from './images/twitter.png';



const Footer = () => {
    return ( 
        <div className="footer-container">
               <ul>
                <li><img src={Facebook} alt="" height={"50px"} width={"50px"} /> </li>
                <li><img src={Instagram} alt="" height={"50px"} width={"50px"} /></li>
                <li><img src={Twitter} alt=""  height={"50px"} width={"50px"} /></li>

               </ul>
        </div>
     );
}
 
export default Footer;
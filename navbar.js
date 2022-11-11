import './App.css';

const Navbar = () => {
    return ( 
        <div className="navbar">
             <div className="logo">
               <img src="https://t4.ftcdn.net/jpg/02/54/70/31/240_F_254703157_y8jORvJPP8l4iDEt2ZxKPpV1JoG4NUMB.jpg" alt="" height="90px" />
               
             </div>
            <div className="navlinks">
                <ul>
                    <li><a href="">Home</a></li>
                    <li><a href="http://localhost:3000/deals">Deals</a></li>
                    <li><a href="">Order</a></li>
                    <li><a href="http://localhost:3000/steps">Steps</a></li>
                    <button><a href="http://localhost:3000/login">LOGIN</a></button>
                </ul>
            </div>
        </div>
     );
}
 
export default Navbar;
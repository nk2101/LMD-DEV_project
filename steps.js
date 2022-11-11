import './App.css';
import  Contact from './images/contact.png';
import  Phone from './images/smartphone.png';
import Location from './images/location.png';
import Order from './images/order.png';

const Steps = () => {
    return (
        <div className="row">
          <div className="col-3">
            <div className="logo1">
              <img src={Contact} alt="" width="50px " height="50px " />
            </div>
            <h1>STEP 1</h1>
            <p>create a account and get access to discounted deals</p>
          </div>
          <div className="col-3">
          <div className="logo1">
          <img src={Phone} alt="" width="50px " height="50px " />
          
          </div>
            <h1>STEP 2</h1>
            <p>select your deal and place your order to reserve your bag at the restaurant</p>
          </div>
          <div className="col-3">
          <div className="logo1">
          <img src={Location} alt="" width="50px " height="50px " />

          </div>
            <h1>STEP 3</h1>
            <p>collect the deal yourself or have
              any third party pick it for you by
              sharing yout OTP with them ,Just before
              handling the merchant will ask you click a 
              button to verify tht you have collect the bag
            </p>
          </div>
          <div className="col-3">
          <div className="logo1">
          <img src={Order} alt="" width="50px " height="50px " />

          </div>
            <h1>STEP 4</h1>
            <p>
              sit back and enjoy the delicious 
               food that you have bought 
               please make sure to rate the
               merchant and give feedback on
              the quality and taste of the food
            </p>
          </div>

        </div>
      );
}
 
export default Steps;
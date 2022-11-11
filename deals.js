import './App.css';
import Up from './images/up.png';
import Down from './images/down.png';
import Plus from'./images/plus.png';
import Minus from './images/minus.png';


const Deals = () => {
  let count=0;
  function increaseValue() {  
     
          let inc =document.getElementById("head");
          count+=1;
          inc.innerText=count; 

  }
  function decreaseValue()
  {
      let inc =document.getElementById("head");
      count-=1;
      inc.innerText=count; 
  }

    const  myFunction1 = () => {
        document.getElementById("first").style.display ='block';
        document.getElementById("second").style.display ='none'
        document.getElementById("third").style.display ='none';
        document.getElementById("four").style.display='none'
        document.getElementById("five").style.display='none'
        document.getElementById("six").style.display='none'
        document.getElementById("main-img").style.display='none';
      }
      
      const myFunction2 = () => {
        document.getElementById("second").style.display ='block'
        document.getElementById("first").style.display ='none'
        document.getElementById("third").style.display ='none'
        document.getElementById("four").style.display='none'
        document.getElementById("five").style.display='none'
        document.getElementById("six").style.display='none'
        document.getElementById("main-img").style.display='none';
      }
      
      const myFunction3 = () => {
        document.getElementById("third").style.display ='block'
        document.getElementById("first").style.display ='none'
        document.getElementById("second").style.display ='none'
        document.getElementById("four").style.display='none'
        document.getElementById("five").style.display='none'
        document.getElementById("six").style.display='none'
        document.getElementById("main-img").style.display='none';
      }
      const myFunction4 = () => {
        document.getElementById("four").style.display='block'
        document.getElementById("third").style.display ='none'
        document.getElementById("first").style.display ='none'
        document.getElementById("second").style.display ='none'
        document.getElementById("five").style.display='none'
        document.getElementById("six").style.display='none'

        document.getElementById("main-img").style.display='none';
      }
      const myFunction5 = () => {
        document.getElementById("third").style.display ='none'
        document.getElementById("first").style.display ='none'
        document.getElementById("second").style.display ='none'
        document.getElementById("four").style.display='none'
        document.getElementById("five").style.display='block'
        document.getElementById("six").style.display='none'
        document.getElementById("main-img").style.display='none';
       
      }
      const myFunction6 = () => {
        document.getElementById("third").style.display ='none'
        document.getElementById("first").style.display ='none'
        document.getElementById("second").style.display ='none'
        document.getElementById("four").style.display='none'
        document.getElementById("five").style.display='none'
        document.getElementById("six").style.display='block'
        document.getElementById("main-img").style.display='none';
      }


    return ( 
        <div className='container-deals'>
            <div className="title">
                <h1>Our Deals</h1>
                
              
                
            </div>
        <div className="list-buttons">
            <div class="container">
             <button class="b1" onClick={myFunction1}>All</button>
             <button class="b2" onClick={myFunction2}>Break Fast</button>
             <button class="b3" onClick={myFunction3}>Lunch</button>
             <button class="b4" onClick={myFunction4}>Dinner</button>
             <button class="b5" onClick={myFunction5}>Desserts</button>
             <button class="b6" onClick={myFunction6}>Fast Food</button>

             
            </div>
         </div>

<div class="content">
             <div id="first"><img src="https://cdn.pixabay.com/photo/2015/01/21/13/21/special-offer-606691__340.png"/> 
             
             </div>
           <div id="second"><img src=""  />
            <h1>BreakFast</h1>
            <div className="row">
              <div className="col-3">
              <img src="https://t3.ftcdn.net/jpg/05/27/75/50/240_F_527755056_9DwpPpiKF5hvbRbooJxhgS0fw7wfVGvW.jpg" alt="" width={"100px"} height={"70px"}/>
              <h3>Idly</h3>
              <img src={Plus} alt=""  width={"10px"} height={"10px"} id="up" onClick={increaseValue}/>
              <p id='head'  value={"1"}>1</p> 
              <img src={Minus} alt=""  width={"15px"} height={"15px"} id="down" onClick={decreaseValue}/> <br />
              <button>order</button>
              </div>
              
              
              <div className="col-3">
               <img src="https://t3.ftcdn.net/jpg/04/11/12/40/240_F_411124011_pMqoD3GYyhCAqHb6hTLT0iukvR9O3Gyi.jpg" alt="" width={"100px"} height={"70px"} />
               <h3>Dosa</h3>
               <img src={Plus} alt=""  width={"10px"} height={"10px"} id="up" onClick={increaseValue}/>
              <p id='head'  value={"1"}>1</p> 
              <img src={Minus} alt=""  width={"15px"} height={"15px"} id="down" onClick={decreaseValue}/> <br />
              <button>order</button>

              </div>
              <div className="col-3">
                <img src="https://t3.ftcdn.net/jpg/05/02/69/22/240_F_502692298_pf5ARpn1uPRFq2CukLYnDR9UIggrrVne.jpg" alt=""  width={"100px"} height={"70px"} />
                <h3>Poori</h3>
                <img src={Plus} alt=""  width={"10px"} height={"10px"} id="up" onClick={increaseValue}/>
              <p id='head'  value={"1"}>1</p> 
              <img src={Minus} alt=""  width={"15px"} height={"15px"} id="down" onClick={decreaseValue}/> <br />
                <button>order</button>
              </div>
              <div className="col-3">
                <img src="https://t4.ftcdn.net/jpg/03/34/43/11/240_F_334431113_6jdPt76mMbmu6unEAhuQ0iW0CikogBDc.jpg" alt=""  width={"100px"} height={"70px"} />
                <h3>Chappathy</h3>
                <img src={Plus} alt=""  width={"10px"} height={"10px"} id="up" onClick={increaseValue}/>
              <p id='head'  value={"1"}>1</p> 
              <img src={Minus} alt=""  width={"15px"} height={"15px"} id="down" onClick={decreaseValue}/> <br />
                <button>order</button>
              </div>

            </div>

            <div className="row">
              <div className="col-3">
                <img src="https://cdn-icons-png.flaticon.com/512/3806/3806539.png" alt=""  width={"100px"} height={"70px"}  />
                <h3>Pongal</h3>
                <img src={Plus} alt=""  width={"10px"} height={"10px"} id="up" onClick={increaseValue}/>
              <p id='head'  value={"1"}>1</p> 
              <img src={Minus} alt=""  width={"15px"} height={"15px"} id="down" onClick={decreaseValue}/> <br />
                <button>order</button>
              </div>
              <div className="col-3">
                <img src="https://cdn-icons-png.flaticon.com/128/3168/3168628.png" alt=""  width={"100px"} height={"70px"} />
                <h3>Bread Omlet</h3>
                <img src={Plus} alt=""  width={"10px"} height={"10px"} id="up" onClick={increaseValue}/>
              <p id='head'  value={"1"}>1</p> 
              <img src={Minus} alt=""  width={"15px"} height={"15px"} id="down" onClick={decreaseValue}/> <br />
                <button>order</button>
              </div>
              <div className="col-3">
                <img src="https://t4.ftcdn.net/jpg/02/13/63/29/240_F_213632963_nrJElQo8Mm5BUtpfdF7hdz6bOypM8kVl.jpg" alt=""   width={"100px"} height={"70px"}/>
                <h3>Tomato Rice</h3>
                <img src={Plus} alt=""  width={"10px"} height={"10px"} id="up" onClick={increaseValue}/>
              <p id='head'  value={"1"}>1</p> 
              <img src={Down} alt=""  width={"15px"} height={"15px"} id="down" onClick={decreaseValue}/> <br />
                <button>order</button>
              </div>
              <div className="col-3">
                <img src="https://cdn-icons-png.flaticon.com/128/3226/3226564.png" alt="" width={"100px"} height={"70px"} />
                <h3>Curd Rice</h3>
                <img src={Plus} alt=""  width={"10px"} height={"10px"} id="up" onClick={increaseValue}/>
              <p id='head'  value={"1"}>1</p> 
              <img src={Minus} alt=""  width={"15px"} height={"15px"} id="down" onClick={decreaseValue}/> <br />
                <button>order</button>
              </div>

            </div>

            </div>
           <div id="third"><img src="" />
           <h1>Lunch</h1>
            <div className="row">
              <div className="col-3">
                <img src="https://cdn-icons-png.flaticon.com/512/2515/2515271.png" alt="" width={"100px"} height={"70px"}/>
                <h3>Meals</h3>
                <img src={Plus} alt=""  width={"10px"} height={"10px"} id="up" onClick={increaseValue}/>
              <p id='head'  value={"1"}>1</p> 
              <img src={Minus} alt=""  width={"15px"} height={"15px"} id="down" onClick={decreaseValue}/> <br />
                <button>order</button>

              </div>
              <div className="col-3">
                <img src="https://cdn-icons-png.flaticon.com/128/3274/3274099.png" alt=""  width={"100px"} height={"70px"} />
                <h3>Chicken Briyani</h3>
                <img src={Plus} alt=""  width={"10px"} height={"10px"} id="up" onClick={increaseValue}/>
              <p id='head'  value={"1"}>1</p> 
              <img src={Minus} alt=""  width={"15px"} height={"15px"} id="down" onClick={decreaseValue}/> <br />
                <button>order</button>
              </div>
              <div className="col-3">
                <img src="https://cdn-icons-png.flaticon.com/128/783/783097.png" alt="" width={"100px"} height={"70px"} />
                <h3>Mini Meals</h3>
                <img src={Plus} alt=""  width={"10px"} height={"10px"} id="up" onClick={increaseValue}/>
              <p id='head'  value={"1"}>1</p> 
              <img src={Minus} alt=""  width={"15px"} height={"15px"} id="down" onClick={decreaseValue}/> <br />
                <button>order</button>
              </div>
              <div className="col-3">
                <img src="https://cdn-icons-png.flaticon.com/512/5351/5351476.png" alt=""  width={"100px"} height={"70px"} />
                <h3>Egg Rice</h3>
                <img src={Plus} alt=""  width={"10px"} height={"10px"} id="up" onClick={increaseValue}/>
              <p id='head'  value={"1"}>1</p> 
              <img src={Minus} alt=""  width={"15px"} height={"15px"} id="down" onClick={decreaseValue}/> <br />
                <button>order</button>
              </div>

            </div>
            
           
           
            </div>
           <div id="four"><img src="" />
           <h1>Dinner</h1>
           <div className="row">
              <div className="col-3">
                <img src="https://cdn-icons-png.flaticon.com/128/3778/3778570.png" alt=""  width={"100px"} height={"70px"}/>
                <h3>Grilled Chicken</h3>
                <img src={Plus} alt=""  width={"10px"} height={"10px"} id="up" onClick={increaseValue}/>
              <p id='head'  value={"1"}>1</p> 
              <img src={Minus} alt=""  width={"15px"} height={"15px"} id="down" onClick={decreaseValue}/> <br />
                <button>order</button>
              </div>
              <div className="col-3">
                <img src="https://cdn-icons-png.flaticon.com/128/3014/3014550.png" alt=""  width={"100px"} height={"70px"} />
                <h3>Rotti</h3>
                <img src={Plus} alt=""  width={"10px"} height={"10px"} id="up" onClick={increaseValue}/>
              <p id='head'  value={"1"}>1</p> 
              <img src={Minus} alt=""  width={"15px"} height={"15px"} id="down" onClick={decreaseValue}/> <br />
                <button>order</button>
              </div>
              <div className="col-3">
                <img src="https://cdn-icons-png.flaticon.com/512/3274/3274099.png" alt="" width={"100px"} height={"70px"}  />
                <h3>Mutton Briyani</h3>
                <img src={Plus} alt=""  width={"10px"} height={"10px"} id="up" onClick={increaseValue}/>
              <p id='head'  value={"1"}>1</p> 
              <img src={Minus} alt=""  width={"15px"} height={"15px"} id="down" onClick={decreaseValue}/> <br />
                <button>order</button>
              </div>
              <div className="col-3">
                <img src="https://t3.ftcdn.net/jpg/04/08/32/76/240_F_408327667_HpBlBIJGAGRnIwqwfeIBJQz1IR5HnSSu.jpg" alt=""  width={"100px"} height={"70px"}/>
                <h3>Parotta</h3>
                <img src={Plus} alt=""  width={"10px"} height={"10px"} id="up" onClick={increaseValue}/>
              <p id='head'  value={"1"}>1</p> 
               <img src={Minus} alt=""  width={"15px"} height={"15px"} id="down" onClick={decreaseValue}/> <br />
                <button>order</button>
              </div>

            </div>
           </div>
           <div id="five"><img src=""/>
           <h1>Desserts</h1>
            <div className="row">
              <div className="col-3">
                <img src="https://cdn-icons-png.flaticon.com/128/817/817318.png" alt=""    width={"100px"} height={"70px"}/>
                <h3>Cake</h3>
                <img src={Plus} alt=""  width={"10px"} height={"10px"} id="up" onClick={increaseValue}/>
              <p id='head'  value={"1"}>1</p> 
               <img src={Minus} alt=""  width={"15px"} height={"15px"} id="down" onClick={decreaseValue}/> <br />
                <button>order</button>
              </div>
              <div className="col-3">
                <img src="https://cdn-icons-png.flaticon.com/128/2002/2002690.png" alt=""   width={"100px"} height={"70px"}/>
                <h3>Donuts</h3>
               < img src={Plus} alt=""  width={"10px"} height={"10px"} id="up" onClick={increaseValue}/>
              <p id='head'  value={"1"}>1</p> 
               <img src={Minus} alt=""  width={"15px"} height={"15px"} id="down" onClick={decreaseValue}/> <br />
                <button>order</button>
              </div>
              <div className="col-3">
                <img src="https://cdn-icons-png.flaticon.com/128/5075/5075294.png" alt=""  width={"100px"} height={"70px"}/>
                <h3>Ice Cream</h3>
                < img src={Plus} alt=""  width={"10px"} height={"10px"} id="up" onClick={increaseValue}/>
              <p id='head'  value={"1"}>1</p> 
               <img src={Minus} alt=""  width={"15px"} height={"15px"} id="down" onClick={decreaseValue}/> <br />
                <button>order</button>
              </div>
              <div className="col-3">
              <img src="https://cdn-icons-png.flaticon.com/128/541/541732.png" alt="" width={"100px"} height={"70px"} />
              <h3>Cookies</h3>
              < img src={Plus} alt=""  width={"10px"} height={"10px"} id="up" onClick={increaseValue}/>
              <p id='head'  value={"1"}>1</p> 
               <img src={Minus} alt=""  width={"15px"} height={"15px"} id="down" onClick={decreaseValue}/> <br />
                <button>order</button>
              </div>
              
            </div>
           
           
           </div>
           <div id="six"><img src=""/>
            <h1>Fast Food</h1>

            <div className="row">
              <div className="col-3">
                  <img src="https://cdn-icons-png.flaticon.com/128/3075/3075977.png" alt="" width={"100px"} height={"70px"}  />
                  <h3>Burger</h3>
                  < img src={Plus} alt=""  width={"10px"} height={"10px"} id="up" onClick={increaseValue}/>
                <p id='head'  value={"1"}>1</p> 
               <img src={Minus} alt=""  width={"15px"} height={"15px"} id="down" onClick={decreaseValue}/> <br />
                <button>order</button>
              </div>
              <div className="col-3">
                <img src="https://cdn-icons-png.flaticon.com/128/1404/1404945.png" alt=""   width={"100px"} height={"70px"}/>
                <h3>Pizza</h3>
                < img src={Plus} alt=""  width={"10px"} height={"10px"} id="up" onClick={increaseValue}/>
                <p id='head'  value={"1"}>1</p> 
               <img src={Minus} alt=""  width={"15px"} height={"15px"} id="down" onClick={decreaseValue}/> <br />
                <button>order</button>
              </div>
              <div className="col-3">
                <img src="https://cdn-icons-png.flaticon.com/128/2912/2912292.png" alt=""  width={"100px"} height={"70px"}/>
                <h3>French Fries</h3>
                < img src={Plus} alt=""  width={"10px"} height={"10px"} id="up" onClick={increaseValue}/>
                <p id='head'  value={"1"}>1</p> 
               <img src={Minus} alt=""  width={"15px"} height={"15px"} id="down" onClick={decreaseValue}/> <br />
                <button>order</button>

              </div>
              <div className="col-3">
                <img src="https://cdn-icons-png.flaticon.com/512/541/541769.png" alt=""  width={"100px"} height={"70px"}/>
                <h3>Shawerma</h3>
                < img src={Plus } alt=""  width={"10px"} height={"10px"} id="up" onClick={increaseValue}/>
                <p id='head'  value={"1"}>1</p> 
               <img src={Minus} alt=""  width={"15px"} height={"15px"} id="down" onClick={decreaseValue}/> <br />
                <button>order</button>

              </div>

            </div>
           
           </div>

</div>



            

            <div className="menu">
                 <img src="https://cdn.pixabay.com/photo/2016/03/31/21/15/bread-1296280__340.png" alt=""  height={"400px"} id="main-img" />
                
            </div>


        </div>
     );
}
 
export default Deals;
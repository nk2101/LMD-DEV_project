

const Login = () => {

  fetch('http://localhost:8002/loginList')

       .then(response => response.json())
       .then(data=>console.log(data))

    function logIn()
    {
      if(document.getElementById('text').value!="" && (document.getElementById('password2').value!=""))
      {
        

        alert("Login")
      }
    }
   

    return ( 
        <div className='loginn'>
          <div className="heading">LOGIN PORTAL</div>
            <div className="inputs">
                <input type="text" name="text" id="text" placeholder="name"/><br /> <br />
                <input type="password" name="pass" id="password2"  placeholder="Password"/><br /><br />
               <a href='http://localhost:3000/deals'> <input type="submit" name="" id="login" onClick={logIn} /></a> <br /> <br />

               <a href="">Forget Password</a>
            </div>
        </div>
     );
}
 
export default Login;
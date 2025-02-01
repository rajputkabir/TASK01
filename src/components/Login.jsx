import React from 'react'
import { use } from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Login = () => {
  const navigate = useNavigate();
  function handlelick(){
    navigate('/register');
  }
  return (
   <>

    <div className="container2" >
      <div className="images">
      <div className="secondimage">
        <img src="4463_sPACKtacular_N-02 1.png">
        </img>
      </div>
      <div className="firstimage">
      <img src="4463_sPACKtacular_N-02 2.png"/>
      </div>
      </div>
      <div className="whitebox">
        <div className='form'>
        <form action="#">
  <div className="form-group">
    <label for="email" style={{ color: '#01162B' }}>Log In</label>
    <input type="email" className="form-control" id="email" placeholder='Enter Email'/>
  </div>
  <div className="form-group">
    <input type="password" className="form-control" id="pwd" placeholder='Password'/>
    <div className='pass'>
    <label for="Forget Password">Forget Password</label></div><br></br>
  </div>
 
    
</form>
</div>
<div className='maincheckbox'>
<div className='checkbox' >
      <div className='checkimg'>
<img src="Checkbox.png"></img>
      </div>
      <div className='textrobo'>
        <p>I'm not a robot</p>
      </div>
      <div className='recyclelogo'>
       
<img src="Logo.png" className='logos'></img>
<p className='privacy'>
  Privacy-Terms
</p>
      </div>
      </div>
       
      </div>  
      
      <div className='btn'>
<button className='logintext' >Log In</button>
      </div>
      <div className='lastpara'>
<p>Don't have an account? <span className='registernow' onClick={handleclick}>Register Now</span></p>
      </div>
      </div>
      </div>
      
    
    </>
   
  )
}

export default Login

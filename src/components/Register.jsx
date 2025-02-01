import React from 'react'
import { use } from 'react'
import { useNavigate } from 'react-router-dom'

function Register() {
    const navigate= useNavigate();
    function gologin(){
navigate('/logiin');
    }
    const navigates= useNavigate();
    function welcome(){
        navigate('/');
    }
  return (
    <div className='regmain'>
      <div className='firstbox'>
      <div className="secondimage">
        <img src="4463_sPACKtacular_N-02 1.png">
        </img>
      </div>
      <div className="firstimage">
      <img src="4463_sPACKtacular_N-02 2.png"/>
      </div>
      </div>
      <div className='secondbox'>
<div className='formcontents'>
    <div className='regbegin'>
        <p className='regtext'>Register Yourself</p>
    </div>
    <div className='formfill'>
    <form action="#">
  <div class="form-groups">
       <input type="email"  id="email" placeholder='Enter your email*'/>
  </div>
  <div class="form-groups">
    <input type="password"  id="pwd" placeholder='Enter Password'/>
    </div>
    <div class="form-groups">
       <input type="reenter"  id="reenter" placeholder='Re-Enter Password'/><br></br>
  </div>
</form>
    </div>
</div>
<div className='btns'>
<button className='registers' onClick={welcome} >Register</button>
      </div>
      <div className='lastparas'>
<p className='regparas'>Already have an account? <span className='registernow' onClick={gologin}>Log In</span></p>
      </div>
      </div>
    </div>
  )
}

export default Register

import React from 'react'
import { useNavigate } from 'react-router-dom';

function Registersub() {
    const navigate= useNavigate();
    function gotologin(){
navigate('/logiin');
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
<div className="form-groups">
     <input type="email"  id="email" placeholder='sample@yopmail.com'/>
</div>
<div className="form-groups">
  <input type="password"  id="pwd" placeholder='********'/>
  </div>
  <div className="form-groups">
     <input type="reenter"  id="reenter" placeholder='********'/><br></br>
</div>
</form>
  </div>
</div>
<div className='btns'>
<button className='registers' >Register</button>
    </div>
    <div className='lastparas'>
<p className='regparas'>Already have an account? <span className='registernow' onClick={gotologin}>Log In</span></p>
    </div>
    </div>
  </div>
  )
}

export default Registersub

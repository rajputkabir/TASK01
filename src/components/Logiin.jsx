import React from 'react'

const Logiin = () => {
  return (
    <div className='outermost'>
      <div className='bluebox'>
      <div className="images">
      <div className="secondimage">
        <img src="4463_sPACKtacular_N-02 1.png">
        </img>
      </div>
      <div className="firstimage">
      <img src="4463_sPACKtacular_N-02 2.png"/>
      </div>
      </div>
      </div>
      <div className='whiteone'>
      <div className='formcontents'>
  <div className='regbegin'>
      <p className='regtext'>Log In</p>
  </div>
  <div className='formfill'>
  <form action="#">
<div className="form-groups">
     <input type="enteremail"  id="enteremail" placeholder='Enter E-mail'/>
</div>
<div className="form-groups">
<input type="pass"  id="pass" placeholder='Password'/>
  </div>
  
</form>
  </div>
</div>
<p className='passwordlost'>Forget Password</p>
<div className='subboxcheck'>
<div className='boxcheck'>
    <div className='checkboxs'>
</div>
<div className='paras'>
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
<div className='btns'>
<button className='registers' >Log In</button><br></br><br/>
      </div>
      <div className='lastparass'>
<p className='regparass'>Don't have an account? <span className='registernow' >Register Now</span></p>
      </div>
</div>
      </div>
    
  )
}

export default Logiin

import React from "react";
import './pt.css'

const Rithik=()=>{
    return(
        <>
        <div style={{background:'black'}}>
        <nav class="navbar navbar-expand-lg" style={{height:'150px'}}>
  <div class="container-fluid" style={{paddingRight:'0'}}>
    <a class="navbar-brand" href="/" style={{padding:'30px 50px 30px 100px',fontWeight:'600',color:'#fff'}}>Rithik.K</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse d-flex ptback"  style={{justifyContent:'flex-end',height:'150px',paddingBottom:'40px'}} id="navbarSupportedContent">
   
      <ul class="navbar-nav " style={{marginRight:'80px'}}>
        <li class="nav-item" style={{padding:'40px 20px' }}>
          <a class="nav-link active" aria-current="page" href="#Exper" style={{color:'#fff'}}>Experience</a>
        </li>
        <li class="nav-item" style={{padding:'40px 30px'}}>
          <a class="nav-link" href="#Work" style={{color:'#fff'}}>Work</a>
        </li>
        <li class="nav-item" style={{padding:'40px 20px',background:'#0b0b46'}}>
          <a class="nav-link" href="/" style={{color:'#fff'}}>Contact</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
<div>
    <div className="row" style={{marginLeft:'50px'}}>
        <div className="col-md-5" style={{paddingRight:'0'}}>
            <img src="/rithik3.jpg" alt="rithik" style={{width:'100%'}}/>
            </div>
            <div className="col-md-7 ptback2" style={{paddingBottom:'70px'}}>
<h1 className="pthed" style={{marginTop:'8%'}}> I'm Rithik Kuvvarapu</h1>
<h1 className="pthed" >A Full Stack Developer</h1>
<p className="pthed" style={{color:'grey'}}>based in India</p>
<p className="para18">I’m probably the most passionate developer you will ever get to work with. <br/> If you have a great project that needs some amazing skills, I’m your guy.</p>
            </div>
    </div>
    <div className="experience-section" id="Exper">
      <h5 className="wkexp">WORK EXPERIENCE</h5>
      <h1 className="wkhed">Companies I have been working in past and present.</h1>
      <div className="experience-grid">
<div className="experience-block">
  <p className="expnumber">01</p>
  <h3 className="exphead1">
  <span className="green">Agmay</span>, Full Stack Developer
  </h3>
  <p className="exphdpara">I started my Full Stack career with Agmay Technologies. I was the one who Designed and Developed Dronesapp.</p>
</div>
      </div>
    </div>
    <div className="pormidpg">
<div className="row" style={{height:'600px'}}>
  <div className="col-md-6" style={{background:'#316969'}}>
    <div style={{padding:'120px 76px'}}>
<h2 style={{fontSize:'60px',fontFamily:'Sen',color:'#000000'}}>Philosophy & values</h2>
<p className="phtext">I think everyone wants the same thing - Love and Peace, But the true Love and Peace comes from the one how loves us unconditinal, JESUS Loves us unconditinal So he died for our sins</p>
</div>
  </div>
  <div className="col-md-6" style={{paddingLeft:'0'}}>
    <img src="https://www.success.com/wp-content/uploads/2015/10/fearquotes.png" alt="walk" style={{width:'100%',height:'100%'}}/>
  </div>
</div>
    </div>
    <div style={{padding:'120px 76px'}}>
<div className="row" id="Work">
  <div className="col-md-3" style={{paddingRight:'5px'}}>
<h2 className="skh2">Skillset</h2>
<p className="skp">With skills in over 4 different fields, I am the perfect person to hire when it comes to a full fledged project. Whatever your needs are, I can pretty much take on any challenge.</p>
  </div>
  <div className="col-md-9" style={{paddingLeft:'38px',paddingTop:'10px'}}>
    <div className="row" >
      <div className="col-md-6 heff" style={{paddingRight:'20px'}}>
        <img src="https://uploads-ssl.webflow.com/5eb98b2079b4fc247b5a89f3/5ebaa6bcfb08c90d4a2ace0c_Product%20Design.svg" className="imgsk" alt="desg"/>
     <h2 className="skprth">Frontend Development</h2>
     <p className="skdesc">Working on Dronesapp has taught me a lot about how to develop the frontend as user friendly and to  solve problems and build greater websites.</p>
      </div>
     
      <div className="col-md-6 heff"  style={{paddingRight:'20px'}}>
      <img src="https://uploads-ssl.webflow.com/5eb98b2079b4fc247b5a89f3/5ebaa6bc97b08981085342e0_Visual%20Design.svg" className="imgsk" alt="desg"/>
 <h2 className="skprth">Database</h2>
     <p className="skdesc">While working with the data in the database i got experience with structuring the data of the user according to the necessity by securing data</p>
      </div>
      <div className="col-md-6 heff"  style={{paddingRight:'20px',paddingTop:'30px'}}>
      <span class="material-symbols-outlined" style={{marginLeft:'0',fontSize:'48px',color:'#3e3ea3'}}>
api
</span>
     <h2 className="skprth">Backend Developemnt</h2>
     <p className="skdesc">Desgining the Dronesapp have helped me to develop my web designing skills and to produce the best in class designings for websites.</p>
      </div>
       <div className="col-md-6 heff"  style={{paddingRight:'20px',paddingTop:'30px'}}>
        <img src="https://uploads-ssl.webflow.com/5eb98b2079b4fc247b5a89f3/5ebaa6bc3ed003f0d41a7ce4_Motion%20Design.svg" className="imgsk" alt="desg"/>
     <h2 className="skprth">Website Design</h2>
     <p className="skdesc">Desgining the Dronesapp have helped me to develop my web designing skills and to produce the best in class designings for websites.</p>
      </div>
    </div>
  </div>
</div>
    </div>
</div>
        </div>
        </>
    )
}
export default Rithik
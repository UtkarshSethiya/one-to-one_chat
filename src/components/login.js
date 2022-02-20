import React from 'react';

import firebase from 'firebase';
import {auth} from "../firebase"


const Login=()=>{
return(
    <div id='login-page'>
<div id='login-card'>
<h1 ><span style={{color:'orangered'}}>Biz</span><span style={{color:'navy'}}>Chat</span></h1>
    <h3>Welcome to One-to-One Chat</h3>
    <div>
    <button class="btn btn-primary" onClick={()=>auth.signInWithPopup(new firebase.auth.GoogleAuthProvider())} type="submit">Chat Admin</button>
    </div><pre></pre><pre></pre>
    <form >
<div class="input-group mb-3">
  <input type="text" className="inputform"  placeholder="Enter Your Name" required />
  <div class="input-group-append">
    <button class="btn btn-primary" onClick={()=>auth.signInAnonymously()}  type="submit">Proceed as Attende</button>
  </div>
</div>
</form>
    
</div>
    </div>
);
}

export default Login;
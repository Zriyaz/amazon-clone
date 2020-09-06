import React, {useState} from 'react';
import {Link, useHistory} from "react-router-dom"
import {auth} from "./firebase"



import "./Login.css"
const Login = (props) => {

	
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')
	const history = useHistory()

	const login =(e) =>{
		e.preventDefault()

		auth.signInWithEmailAndPassword(email, password)
		.then((auth) =>{
			// logged in , redirect the url to Home page
			history.push('/')
		}).catch((err)=>{
			alert(err.message)
		})
	}

	const register =(e) =>{
		e.preventDefault()

		auth.createUserWithEmailAndPassword(email, password)
		.then((auth)=>{

			// create a user and logged in 
      history.push("/");
		}).catch((err)=>alert(err.message))
	}


  return (
    <div className="login">
       <Link>
       	  <img 
       	  	className ="login_logo"
       	    src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png"
       	     alt="" />	
       </Link>

       <div className="login_container">
       	  <h1>Sign In</h1>
       	  <form>
       	  	<h5>E-mail : </h5>
       	  	<input 
       	  	  onChange = {event => setEmail(event.target.value)}
       	  	  value = {email}
       	  	  type="email" 
       	  	  />
       	  	<h5>Password : </h5>
       	  	<input 
       	  	  onChange = {event => setPassword(event.target.value)}	
       	  	  value = {password}	
       	  	  type = "password" 
       	  	 />
       	  	<button 
       	  	   className="login_signInButton" 
       	  	   onClick = {login}
       	  	   type="submit">Sign In</button>
       	  </form>	
       	  <p>By signing-in here, you agree to Adam's Fake Amazon Page Terms & Conditions</p>
       	  <button 
       	  	 onClick = {register}	
       	     className="login_registerButton">Create your Amazon account</button>
       </div>
    </div>
  )
}

export default Login;
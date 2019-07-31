import React from 'react'
import {Button} from 'react-bootstrap'
import './login.css';

class Login extends React.Component {
     constructor(){
		 super()
		this.state = {
			 username : '',
			 password : ''
		 }
	 }
	 
	 handleClick(event){
		 console.log(this.state.username)
	 }

render(){
    return(
<div>
    <div className="container">
	<div className="d-flex justify-content-center h-100 centered">
		<div className="card">
			<div className="card-header">
				<h3>Sign In</h3>
				<div className="d-flex justify-content-end social_icon centered">
					<span><i className="fab fa-facebook-square"></i></span>
					<span><i className="fab fa-google-plus-square"></i></span>
					<span><i className="fab fa-twitter-square"></i></span>
				</div>
			</div>
			<div className="card-body">
				<form>
					<div className="input-group form-group">
						<div className="input-group-prepend">
							<span className="input-group-text"><i className="fas fa-user"></i></span>
						</div>
						<input type="text" className="form-control" placeholder="username"
						onChange = {(event,newValue) => this.setState({username:newValue})} />
						
					</div>
					<div className="input-group form-group">
						<div className="input-group-prepend">
							<span className="input-group-text"><i className="fas fa-key"></i></span>
						</div>
						<input type="password" className="form-control" placeholder="password"
						onChange = {(event,newValue) => this.setState({password:newValue})}/>
					</div>
					<div className="row align-items-center remember">
						<input type="checkbox"/>Remember Me
					</div>
					<div className="form-group">
                    
                    <Button variant="primary" onClick={(event) => this.handleClick(event)}>Login</Button>
                    
					</div>
				</form>
			</div>
			<div className="card-footer">
				<div className="d-flex justify-content-center links">
					{/* Don't have an account?<a href="#">Sign Up</a> */}
				</div>
				<div className="d-flex justify-content-center">
					{/* <a>Forgot your password?</a> */}
				</div>
			</div>
		</div>
	</div>
</div>
</div>
    )
}
}

export {Login}
import React from 'react'
import { Button,FormControl,FormGroup } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import './login.css';

class Login extends React.Component {
	constructor(){
         super()
        this.state = {
             username : '',
             password : ''
         };
	}

     validateForm(){
        return this.state.username.length > 0 && this.state.password.length > 0;
      }
      handleChange = event => {
        this.setState({
          [event.target.id]: event.target.value
        });
      }
      handleSubmit = event => {
        event.preventDefault();
      }
      handleClick = event => {
          if((this.state.username === 'Sneha') && (this.state.password === 'sneha')){
            return (
            <Link to={'./home/home.js'}> </Link>)
          }
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
								<FormGroup controlId="username">
								<FormControl placeholder='username'
								autoFocus
								type="text"
								value={this.state.username}
								onChange={this.handleChange}
								/>
								</FormGroup>
								<FormGroup controlId="password">
								<FormControl placeholder= 'password'
								autoFocus
								type="password"
								value={this.state.password}
								onChange={this.handleChange}
								/>
								</FormGroup>

							</div>
							<div className="row align-items-center remember">
								<input type="checkbox"/>Remember Me
							</div>
							<div className="form-group">
						<Button variant="primary" disabled={!this.validateForm()} onClick={this.handleClick}>Login</Button>
							</div>
						</form>
					</div>
					<div className="card-footer">
						<div className="d-flex justify-content-center links">

						</div>
						<div className="d-flex justify-content-center">
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
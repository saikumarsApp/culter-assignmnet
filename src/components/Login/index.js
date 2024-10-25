import {Component} from "react";
import "./index.css";

class Login extends Component {
	state = {
		isLogin : true,
		name: "",
		email: "",
		message: ""
	}
	onClickSub = event => {
		event.preventDefault();
		const {isLogin, name, email, message} = this.state 
		this.setState(preState => ({isLogin : !preState.isLogin}));
	}
	onChangeName = event => {
		this.setState({name : event.target.value});
	}

	onChangeEmail = event => {
		this.setState({email : event.target.value});
	}
	onchangeMessage = event => {
		this.setState({message: event.target.value});
	}
	
	onClickAddbtn = () => {
		this.setState(preState => ({isLogin : !preState.isLogin}))
	}

	succesFrom = () => {
		return(
			<>
				<div className="success-form-card">
					<h1 className="main-heading">SUCCESS</h1>
					<button type="click" onClick={this.onClickAddbtn} className="sub-button">Add Another</button>
				</div>
			</>
		)
	}

	loginForm = () =>{
		return(
		<>
			<form className="login-card">
				<h1 className="main-heading">Register your self here</h1>
				<lable className="lable-style" htmlFor="name">NAME</lable>
				<input onChange={this.onChangeName} className="input-element" type="text" id="name" placeholder="Enter Here.." />
				<lable className="lable-style" htmlFor="email">EMAIL</lable>
				<input className="input-element" type="text" id="email" placeholder="Enter Here.." />
				<lable className="lable-style" htmlFor="message">MESSAGE</lable>
				<textarea rows="6" className="input-element" type="text" id="message" placeholder="Enter Here..." />
				<button className="sub-button" type="submit" onClick={this.onClickSub}>SUBMIT</button>
			</form>

		</>
		)
	}
	
	render(){
		const {isLogin} = this.state
		return(
			<>
				<div className="main-hero">
					<div className="white-card">
						{isLogin ? this.loginForm() : this.succesFrom()}
					</div>
				</div>
			</>
		)
	}
}

export default Login;
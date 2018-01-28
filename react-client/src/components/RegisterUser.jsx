import React from 'react';

class RegisterUser extends React.Component {
  constructor(props){
    super (props)
    this.state = {
      signup: false,
      username: '',
      email: '',
      password: '',
      passwordConfirm: '',
      passwordMissmatch: false,  //displays error if user has password and confirmed password that don't match
      submitError: false, //displays an error if the server returns a user/password error
    }
    if (this.props.signup === true) {
      this.state.signup = true;
    }
    this.handleRegisterUserClick = this.props.handleRegisterUserClick.bind(this)
  }

  syncUserInput (e) {
    //saves the input from the user into a state
    //to check if passwords match
    var newState = {};
    var passwordMissmatch;
    var oldPasswordMissmatch = this.state.passwordMissmatch;

    this.state[e.target.id] = e.target.value;

    if (this.props.view === 'signup' && (e.target.id === 'password' || e.target.id === 'passwordConfirm')) {
      if (this.state.password === this.state.passwordConfirm) {
        this.state.passwordMissmatch = false;
      } else {
        this.state.passwordMissmatch = true;
      }
    }
    this.forceUpdate(); //was forced to do this so react would stay in sync with the inputed variables
    //checks if the password and password confirmation are the same
}

  render() {
    return (
      <div>
        <div>
          Please register to create a sweep event or post additional information
        </div>
        <div>
          <span>Username:</span>
          <input id='username'
            type='text'
            value={this.state.username}
            onChange={(e) => this.syncUserInput(e)}
          />
        </div>
        <div>
          <span>Email:</span>
          <input id='email'
            type='text'
            value={this.state.email}
            onChange={(e) => this.syncUserInput(e)}
          />
        </div>
        <div>
          <span>Password:</span>
          <input id='password'
            type='text'
            value={this.state.password}
            onChange={(e) => this.syncUserInput(e)}
          />
        </div>
        <div>
          <span>Confirm Password:</span>
          <input id='passwordConfirm'
            type='text'
            value={this.state.passwordConfirm}
            onChange={(e) => this.syncUserInput(e)}
          />
        </div>
        <div>
          <button
            onClick={() =>
              this.handleRegisterUserClick(
                this.state.username,
                this.state.email,
                this.state.password)}
          >
            Submit!
          </button>
        </div>
      </div>
    )
  }
}

export default RegisterUser;
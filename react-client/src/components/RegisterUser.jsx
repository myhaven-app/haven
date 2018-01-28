import React from 'react';

class RegisterUser extends React.Component {
  constructor(props){
    super (props)
    this.state = {
      signup: false,
      username: '',
      password: '',
      passwordConfirm: '',
    }
    if (this.props.signup === true) {
      this.state.signup = true;
    }
    this.handleRegisterUserClick = this.props.handleRegisterUserClick.bind(this)
  }

  // password matching method

  render() {
    return (
      <div>
        Please register to create a sweep event or post additional information

        <input className='UserName'
          type="text"
          value={this.state.username}
          onChange={event => this.handleUsernameEntry(event)}
        />
        <input className='Email'/>
        <input className='Password'/>
        <input className='passwordConfirm'/>
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
    )
  }
}

export default RegisterUser;
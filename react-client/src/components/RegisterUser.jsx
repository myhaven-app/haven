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
    this.handleCreateUserClick = this.handleCreateUserClick.bind(this)
  }

  // password matching method

  render() {
    return (
      <div>
        Please register to create a sweep event or post additional information

        <input className='UserName'/>
        <input className='Email'/>
        <input className='Password'/>
        <input className='passwordConfirm'/>
        <button
          onClick={() =>
            this.handleCreateUserClick(
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
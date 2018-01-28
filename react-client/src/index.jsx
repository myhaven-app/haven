import React from 'react';
import ReactDOM from 'react-dom';
import RegisterUser from './components/RegisterUser.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      registrationMode: false
    }

    this.handleCreateUserClick = this.handleCreateUserClick.bind(this);
  }

  handleCreateUserClick(username, email) {
    (async () => {
      try {
        const response = await axios.post('/items', { username, email });
        const data = response.data;

        if (data) {
          this.setState({
            registrationMode: true
          })
        }
      } catch (error) {
        console.error(error);
      }
    })();
  }


  render () {
    if (registrationMode) {
      return (
        <div>
          <RegisterUser handleCreateUserClick={this.handleCreateUserClick}/>
        </div>
      )
    } else {
    return (<div>
      <h1>Item List</h1>
      <List items={this.state.items}/>
    </div>)
    }
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
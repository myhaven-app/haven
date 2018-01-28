import React from 'react';

class Upload extends React.Component {
	constructor(props){
		super(props);

		this.state = {
			files: []
		}

		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleChange(e) {
		this.state.files = e.target.files;
	}

	handleSubmit(e){
		e.preventDefault();
		console.log('files', this.state.files);
	}

	render(){
		return (<div>
			<form onSubmit={this.handleSubmit}>
				<input type="file" multiple  onChange={this.handleChange}></input>
				<input type="submit" value="upload"/>
			</form>
		</div>)
	}
}

export default Upload;
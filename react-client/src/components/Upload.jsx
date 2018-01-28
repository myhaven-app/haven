import React from 'react';

class Upload extends React.Component {
	constructor(props){
		super(props);

		this.state = {
			files: []
		}
	}

	handleChange(e) {
		e.preventDefault();

		this.state.files = e.target.files;
	}

	handleSubmit(){
		console.log('files', this.state.files);
	}

	render(){
		return (<div>
			<form onChange>
				<input type="file" multiple></input>
				<input type="submit" value="upload"/>
			</form>
		</div>)
	}


}
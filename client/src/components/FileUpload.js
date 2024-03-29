import React, { Component } from 'react'
import axios from 'axios'
export default class FilesUpload extends Component {
	constructor(props) {
		super(props)
		this.onFileChange = this.onFileChange.bind(this)
		this.onSubmit = this.onSubmit.bind(this)
		this.state = {
			profileImg: '',
		}
	}
	onFileChange(e) {
		this.setState({ profileImg: e.target.files[0] })
	}
	onSubmit(e) {
		e.preventDefault()
		const formData = new FormData()
		formData.append('profileImg', this.state.profileImg)
		axios
			.post('http://localhost:5000/api/file', formData, {
				headers: {
					'Content-type': 'application/json',
					'x-auth-token':
						'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjNiYmY5YjM2OTJiZGEyODg5MjNiZGNkIn0sImlhdCI6MTY3MzI2NTQ2MH0.Y3FpU2ef1EIEpj5JL7HCADm-uG2aFjVFFSS8ZhUTnM8',
				},
			})
			.then((res) => {
				console.log(res)
			})
	}

	render() {
		return (
			<div className='container'>
				<div className='row'>
					<form onSubmit={this.onSubmit}>
						<div className='form-group'>
							<input type='file' onChange={this.onFileChange} />
						</div>
						<div className='form-group'>
							<button className='btn btn-primary' type='submit'>
								Upload
							</button>
						</div>
					</form>
				</div>
			</div>
		)
	}
}

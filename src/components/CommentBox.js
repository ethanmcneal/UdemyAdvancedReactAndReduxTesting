import React from "react";

class CommentBox extends React.Component {
	state = { comment: "" };

    handleChange = (event) => {
        this.setState({ comment: event.target.value })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        this.setState({comment: ''})
    }
	render() {
		return (
			<form onSubmit={this.handleSubmit}>
				<h4>Add a comment</h4>
				<textarea onChange={this.handleChange} value={this.state.comment}/>
				<div>
					<button>Submit</button>
				</div>
			</form>
		);
	}
}
export default CommentBox;

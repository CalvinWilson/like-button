import React from "react";

export default React.createClass ({
	getInitialState: function (){
		return {
			count: 0,
			text: "Likes"
		}
	},
	handleChange: function() {
		var text;
		var count = this.state.count + 1;
		if (count === 1) {
			text = "like";
		} else {
			text = "likes";
		}
		this.setState ({
			count: count,
			text: text
		});

	},

	render: function() {
		return (
			<div id="button" >
				<button id="like" onClick={this.handleChange}>{this.state.count} {this.state.text}</button>
			</div>
		)
	}
})
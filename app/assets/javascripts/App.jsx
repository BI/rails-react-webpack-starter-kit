
var React = require('react');

var App = React.createClass({
	propTypes: {
		who: React.PropTypes.string
	},
	render: function() {
		return (
			<span>
				Hello {this.props.who}!
			</span>
		);
	}
});

module.exports = App;
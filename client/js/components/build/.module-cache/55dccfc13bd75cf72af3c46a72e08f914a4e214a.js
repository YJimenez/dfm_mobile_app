SectionFront = React.createClass({displayName: "SectionFront",
	mixins: [ReactMeteor.Mixin],

	startMeteorSubscriptions: function() {
		Meteor.subscribe("feeds");
	},

	getMeteorState: function() {
		return {
			feeds: Feeds.find().fetch(),
		}
	},
	
	render : function() {
		console.log(this.state);
		return React.createElement("p", null, "Foo");
	}

});
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

SectionItem = React.createClass({displayName: "SectionItem",
	render : function(){
		var image = 'background-image:url(' + this.props.story.image + ');background-size: cover;';
		
		return (
			React.createElement("li", {class: "Xli", style: "overflow:hidden;"}, 
				React.createElement("div", {class: "list_story_image", style: image}), 

			React.createElement("div", {class: "list_story_title"}, this.props.story.title), 

			React.createElement("div", {class: "list_story_time"}, 
			 this.props.story.lastUpdated
			)
			)
		);
	}
});
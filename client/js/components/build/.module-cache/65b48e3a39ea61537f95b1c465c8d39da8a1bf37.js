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
		console.log(this.state.feeds);
		return (
			React.createElement("ul", {id: "xLister", className: "list Xul"}, 
				this.state.feeds.map(function(story, i){
					//console.log(story);
					return React.createElement(SectionItem, {story: story, index: i});
				})
			)
		);
	}

});

SectionItem = React.createClass({displayName: "SectionItem",
	render : function(){
		var image = 'background-image:url(' + this.props.story.image + ');background-size: cover;';
		
		return (
			React.createElement("li", {className: "Xli", style: {overflow: "hidden"}, key: this.props.index}, 
				React.createElement("div", {className: "list_story_image", style: {backgroundImage : "url(" + this.props.story.image + ")", backgroundSize: "cover"}}), 

			React.createElement("div", {className: "list_story_title"}, this.props.story.title), 

			React.createElement("div", {className: "list_story_time"}, 
			 this.props.story.lastUpdated
			)
			)
		);
	}
});
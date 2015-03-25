SectionFront = React.createClass({displayName: "SectionFront",
	mixins: [ReactMeteor.Mixin],

	startMeteorSubscriptions: function() {
		Meteor.subscribe("feeds");
	},

	getMeteorState: function() {
		return {
			feeds: Feeds.find().fetch()
		}
	},
	
	render : function() {
		var feeds = [];
		if (this.state.feeds.length) {
			feeds = this.state.feeds[0].feeds;
			return (
				React.createElement("ul", {id: "xLister", className: "list Xul"}, 
					feeds.map(function(story, i){
						console.log(story);
						return React.createElement(SectionItem, {story: story, key: i});
					})
				)
			);
		}
		else return null;
	}

});

SectionItem = React.createClass({displayName: "SectionItem",
	render : function(){

		return (
			React.createElement("li", {className: "Xli", style: {overflow: "hidden"}}, 
				React.createElement("div", {className: "list_story_image", style: {backgroundImage : "url(" + this.props.story.image + ")", backgroundSize: "cover"}}), 

				React.createElement("div", {className: "list_story_title"}, this.props.story.title), 

				React.createElement("div", {className: "list_story_time"}, this.props.story.lastUpdated)
			)
		);
	}
});
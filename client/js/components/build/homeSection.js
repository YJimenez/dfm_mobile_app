SectionFront = React.createClass({displayName: "SectionFront",
	/*mixins: [ReactMeteor.Mixin],

	startMeteorSubscriptions: function() {
		Meteor.subscribe("feeds");
	},

	getMeteorState: function() {
		return {
			feeds: Feeds.find().fetch()
		}
	},*/
	
	getInitialState : function() {
		return {
			feeds: Feeds.find().fetch()
		}
	},
	
	render : function() {
		var feeds = [];
		if (this.state.feeds.length) {
			feeds = this.state.feeds[0].feeds;
			return (
				React.createElement("div", null, 
					React.createElement("div", {className: "list_header"}, 
						"Breaking News"
					), 
					React.createElement("ul", {id: "xLister", className: "list Xul"}, 
						feeds.map(function(story, i){
							Meteor.call('getArticle', story.id);
							return React.createElement(SectionItem, {story: story, key: i});
						})
					)
				)
			);
		}
		else return React.createElement("p", null, "No feeds");
	}

});

SectionItem = React.createClass({displayName: "SectionItem",
	
	clickArticle : function() {
		React.render(React.createElement(Article, {id: this.props.story.id}), document.getElementById('the-content'));
	},
	
	render : function(){

		return (
			React.createElement("li", {className: "Xli", style: {overflow: "hidden"}, onClick: this.clickArticle}, 
				React.createElement("div", {className: "list_story_image", style: {backgroundImage : "url(" + this.props.story.image + ")", backgroundSize: "cover"}}), 

				React.createElement("div", {className: "list_story_title"}, this.props.story.title), 

				React.createElement("div", {className: "list_story_time"}, this.props.story.lastUpdated)
			)
		);
	}
});
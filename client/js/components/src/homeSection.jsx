SectionFront = React.createClass({
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
				<ul id="xLister" className="list Xul">
					{feeds.map(function(story, i){
						return <SectionItem story={story} key={i}/>;
					})}
				</ul>
			);
		}
		else return null;
	}

});

SectionItem = React.createClass({
	render : function(){

		return (
			<li className="Xli" style={{overflow: "hidden"}}>
				<div className="list_story_image" style={{backgroundImage : "url(" + this.props.story.image + ")", backgroundSize: "cover"}}></div>

				<div className="list_story_title">{this.props.story.title}</div>

				<div className="list_story_time">{this.props.story.lastUpdated}</div>
			</li>
		);
	}
});
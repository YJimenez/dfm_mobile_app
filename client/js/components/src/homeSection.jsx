SectionFront = React.createClass({
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
				<div>
					<div className="list_header">
						Breaking News
					</div>
					<ul id="xLister" className="list Xul">
						{feeds.map(function(story, i){
							Meteor.call('getArticle', story.id);
							return <SectionItem story={story} key={i}/>;
						})}
					</ul>
				</div>
			);
		}
		else return <p>No feeds</p>;
	}

});

SectionItem = React.createClass({
	
	clickArticle : function() {
		React.render(<Article id={this.props.story.id} />, document.getElementById('the-content'));
	},
	
	render : function(){

		return (
			<li className="Xli" style={{overflow: "hidden"}} onClick={this.clickArticle}>
				<div className="list_story_image" style={{backgroundImage : "url(" + this.props.story.image + ")", backgroundSize: "cover"}}></div>

				<div className="list_story_title">{this.props.story.title}</div>

				<div className="list_story_time">{this.props.story.lastUpdated}</div>
			</li>
		);
	}
});
Article = React.createClass({displayName: "Article",

	getInitialState : function(){
		// Still need to get this timing right
		var article = Articles.find({id : this.props.id}).fetch();
		if (article) {
			return article[0].data.article[0];
		}
	},
	
	clickBreadCrumb : function() {
		React.render(React.createElement(SectionFront, null), document.getElementById('the-content'));
	},
	
	render : function() {
		return (
			React.createElement("div", {className: "story_content"}, 
				React.createElement("ul", {className: "breadcrumb"}, 
					React.createElement("li", null, React.createElement("a", {href: "javascript:void(0);", onClick: this.clickBreadCrumb}, "Home")), 

					React.createElement("li", null, React.createElement("a", {href: "javascript:void(0);"}, "Breaking News"))
				), 
				React.createElement("h1", {className: "story_headline"}, this.state.title), 
				React.createElement("p", {className: "story_author", dangerouslySetInnerHTML: {__html: this.state.byline}}), 
				React.createElement("p", {className: "story_pubdate"}, this.state.createDate), 
				React.createElement("div", {className: "image_box_container"}, 
					React.createElement("div", {className: "main_image"}, 
						React.createElement("img", {src: this.state.images.image[0].url})
					)
				), 
				React.createElement("div", {dangerouslySetInnerHTML: {__html: this.state.body}})
			)
		);
	}
	
});


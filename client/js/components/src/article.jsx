Article = React.createClass({

	getInitialState : function(){
		// Still need to get this timing right
		var article = Articles.find({id : this.props.id}).fetch();
		if (article) {
			return article[0].data.article[0];
		}
	},
	
	clickBreadCrumb : function() {
		React.render(<SectionFront />, document.getElementById('the-content'));
	},
	
	render : function() {
		return (
			<div className="story_content">
				<ul className="breadcrumb">
					<li><a href="javascript:void(0);" onClick={this.clickBreadCrumb}>Home</a></li>

					<li><a href="javascript:void(0);">Breaking News</a></li>
				</ul>
				<h1 className="story_headline">{this.state.title}</h1>
				<p className="story_author">{this.state.byline}</p>
				<p className="story_pubdate">{this.state.createDate}</p>
				<div className="image_box_container">
					<div className="main_image">
						<img src={this.state.images.image[0].url} />
					</div>
				</div>
				{this.state.body}
			</div>
		);
	}
	
});


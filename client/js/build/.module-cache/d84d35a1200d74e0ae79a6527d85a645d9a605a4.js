Meteor.subscribe('articles');
Meteor.subscribe('feeds');
Meteor.call('getFeed', 'http://delivery.digitalfirstmedia.com/ConvergencePublisher/?format=genericxml2spreed&uri=http://rss.denverpost.com/mngi/rss/CustomRssServlet/36/237705.xml', 'breaking');
$(function(){
	var interval;
	interval = setInterval(function(){
		if (Feeds.find().fetch().length) {	
			React.render(React.createElement(SectionFront, null), document.getElementById('the-content'));
			clearTimeout(interval);
			Meteor.call('getFeed', 'http://delivery.digitalfirstmedia.com/ConvergencePublisher/?format=genericxml2spreed&uri=http://rss.denverpost.com/mngi/rss/CustomRssServlet/36/237705.xml', 'breaking');
		}
		else {
			React.render(React.createElement(Test, null), document.getElementById('the-content'));
		}
	}, 10);
});

Test = React.CreateClass({
	render : function() {
		return React.createElement("p", null, "Foo")
	}
});




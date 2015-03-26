Meteor.subscribe('articles');
Meteor.subscribe('feeds');
Meteor.call('getFeed', 'http://delivery.digitalfirstmedia.com/ConvergencePublisher/?format=genericxml2spreed&uri=http://rss.denverpost.com/mngi/rss/CustomRssServlet/36/237705.xml', 'breaking');
alert('foo');
$(function(){
	var interval;
	interval = setInterval(function(){
		alert(typeof React);
		if (Feeds.find().fetch().length) {	
			React.render(React.createElement(SectionFront, null), document.getElementById('the-content'));
			clearTimeout(interval);
			//Meteor.call('getFeed', 'http://delivery.digitalfirstmedia.com/ConvergencePublisher/?format=genericxml2spreed&uri=http://rss.denverpost.com/mngi/rss/CustomRssServlet/36/237705.xml', 'breaking');
		}
	}, 10);
});






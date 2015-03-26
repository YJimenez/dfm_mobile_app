Meteor.subscribe('articles');
Meteor.subscribe('feeds');
Meteor.call('getFeed', 'http://delivery.digitalfirstmedia.com/ConvergencePublisher/?format=genericxml2spreed&uri=http://rss.denverpost.com/mngi/rss/CustomRssServlet/36/237705.xml', 'breaking');
$(function(){
	
	var interval;
	interval = setInterval(function(){
		if (Feeds.find().fetch().length) {	
			React.render(<SectionFront />, document.getElementById('the-content'));
			$('.app_loading').hide();
			clearTimeout(interval);
			//Meteor.call('getFeed', 'http://delivery.digitalfirstmedia.com/ConvergencePublisher/?format=genericxml2spreed&uri=http://rss.denverpost.com/mngi/rss/CustomRssServlet/36/237705.xml', 'breaking');
		}
	}, 10);
});






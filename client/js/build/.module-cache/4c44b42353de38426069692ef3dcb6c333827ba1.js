Meteor.call('getFeed', 'http://delivery.digitalfirstmedia.com/ConvergencePublisher/?format=genericxml2spreed&uri=http://rss.denverpost.com/mngi/rss/CustomRssServlet/36/237705.xml', 'breaking');
//Meteor.subscribe('feeds');
Meteor.subscribe('articles');
$(function(){
Meteor.subscribe('feeds', 
	{
		onReady : function(){
			React.render(React.createElement(SectionFront, null), document.getElementById('the-content'));
		}
	}
);
});




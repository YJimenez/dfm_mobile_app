//Meteor.subscribe('feeds');
Meteor.subscribe('articles');
$(function(){
Meteor.subscribe('feeds', 
	{
		onReady : function(){
			var timeout;
			timeout = setTimeout(function(){
				alert('foo');
				if (Feeds.find().fetch().length) {
					React.render(React.createElement(SectionFront, null), document.getElementById('the-content'));
					clearTimeout(timeout);
				}
			}, 10);
			
		}
	}
);
});




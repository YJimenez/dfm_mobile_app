//Meteor.subscribe('feeds');
Meteor.subscribe('articles');
Meteor.subscribe('feeds');

$(function(){
	var timeout;
	timeout = setTimeout(function(){
		if (Feeds.find().fetch().length) {
			console.log(Feeds.find().fetch().length);
			React.render(React.createElement(SectionFront, null), document.getElementById('the-content'));
			clearTimeout(timeout);
		}
	}, 10);
});




//Meteor.subscribe('feeds');

	// get the width of the textarea minus scrollbar
$(function(){
	var textareaWidth = document.getElementById("home").scrollWidth;

// width of our wrapper equals width of the inner part of the textarea
	document.getElementById("dfm_mobile").style.width = textareaWidth + 'px';
});

React.render(React.createElement(SectionFront, null), document.getElementById('test'));


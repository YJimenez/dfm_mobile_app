Meteor.publish('feeds');
	
//console.log({foo : "woo", methodN : function(){}});

/*HTTP.get('http://delivery.digitalfirstmedia.com/ConvergencePublisher/?format=genericxml2spreed&uri=http://rss.denverpost.com/mngi/rss/CustomRssServlet/36/237705.xml', [], function(error, result){
	//console.log(result.content);
	xml2js.parseString(result.content, function (err, result) {
    	console.log(result.rss.channel[0].item[0]);
	});
	
});*/

Meteor.methods({
	
	getFeed : function(url, section){
		//var promise = new Promise(); // Use Promises here?
		var feeds = [];
		var feedDocument = {};
		var that = this;
		var counter = 0;
		HTTP.get(url, [], function(error, result){
			if (!error) {
				xml2js.parseString(result.content, function (err, result) {
				//callback(result.rss.channel[0].item[0]);
					//callback(result);
					if (!err) {
						_.each(result.rss.channel[0].item, function(item){
							//console.log(item.guid[0]._);
							var feed = {};
							var meta = item.meta;
							var image;
							//if (counter === 0) {
								_.each(meta, function(item){
									if (item.url) {
										image = Utils.thumbnailUrl(item.url[0]);
									}
								});
							//}
							feed.title = item.title[0];
							feed.description = item.description[0];
							feed.pubDate = item.pubDate[0];
							feed.lastUpdated = item.lastUpdated[0];
							feed.id = Utils.feedId(item.guid[0]._);
							//feed.meta = item.meta;
							feed.image = image;
							feed.author = item.author[0];
							feeds.push(feed);
							//counter++;
						});
						feedDocument = {created: Date.now(), section: section, feeds: feeds};
						//console.log(Feeds.find({section : section}).fetch());
						if (!Feeds.find({section : section}).fetch().length) {
							Feeds.insert(feedDocument);
						}
						else {
							Feeds.update({section : section}, feedDocument);
						}
					}
					else {
						error = true;
					}
				});
			}

		});
	},
	
	getArticle : function(id){
		var url = 'http://www.denverpost.com/mngi/servletDispatch/JsonArticleServlet.dyn?ci=' + id + '&includeBody=true&cleanBody=true&related=true';
		var articleDocument = {};
		HTTP.get(url, [], function(error, result){
			if (!error) {
				articleDocument = {created: Date.now(), id: id, data: JSON.parse(result.content)};
				if (!Articles.find({id : id}).fetch().length) {
					Articles.insert(articleDocument);
				}
				else {
					//Articles.update({id : id}, articleDocument);
				}
			}
		});
	}
	
});

Utils = {
	thumbnailUrl : function(url){
		return url.replace(/\.jpg/, '_100.jpg');
	},
	
	feedId : function(url) {
		if (url) {
			return url.match(/ci_(\d+)/)[1];
		}
	}
}
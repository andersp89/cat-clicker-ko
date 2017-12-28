var ViewModel = function() {
	this.clickCount = ko.observable(0);
	this.name = ko.observable('Tabby');
	this.imgSrc = ko.observable('img/434164568_fea0ad4013_z.jpg');
	this.imgAttribution = ko.observable('https://www.flickr.com');
	this.levels = ko.observable('Beginner');

	this.incrementCounter = function() {
		this.clickCount(this.clickCount() + 1);

	this.findLevel = function() {
		if (this.clickCount() > 5 && 10) {		
			this.levels('Advanced');
		}
		if (this.clickCount() > 10) {		
			this.levels('Expert');
		}
	}
	};
}


ko.applyBindings(new ViewModel())
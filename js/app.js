var Cat = function() {
	this.clickCount = ko.observable(0);
	this.name = ko.observable('Tabby');
	this.imgSrc = ko.observable('img/434164568_fea0ad4013_z.jpg');
	this.imgAttribution = ko.observable('https://www.flickr.com');
	this.levels = ko.observable('Beginner');
	this.nickNames = ko.observableArray([
		{ name: 'Catty cat' },
		{ name: 'Plabby poo' },
		{ name: 'Anderschen' }
	]);
}

var ViewModel = function() {
	var self = this;
	this.currentCat = ko.observable( new Cat() );

	this.incrementCounter = function() {
		self.currentCat().clickCount(self.currentCat().clickCount() + 1);
	}

	self.updateLevel = function(x) {
		self.currentCat().levels(x);
	}

	this.findLevel = function() {
		var clicks = this.currentCat().clickCount(); 

		if (clicks > 5 && clicks < 11) {		
			this.updateLevel('Intermediate');
		} else if (clicks > 10 && clicks < 16) {
			this.updateLevel('Expert');
		}
	}

}



ko.applyBindings(new ViewModel())
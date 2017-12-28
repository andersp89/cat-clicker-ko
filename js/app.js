var ViewModel = function() {
	this.clickCount = ko.observable(0);
	this.name = ko.observable('Tabby');
	this.imgSrc = ko.observable('img/434164568_fea0ad4013_z.jpg');
	this.imgAttribution = ko.observable('https://www.flickr.com');
	this.levels = ko.observable();

	this.incrementCounter = function() {
		this.clickCount(this.clickCount() + 1);
	}

	this.findLevel = function() {
		var clicks = this.clickCount();
		if (clicks < 6) {		
			this.levels('Beginner');
		} else if (clicks < 11) {		
			this.levels('Intermediate');
		} else if (clicks < 16) {
			this.levels('Expert')
		}
	}

	this.nickNames = [
		{ name: 'Catty cat' },
		{ name: 'Plabby poo' },
		{ name: 'Anderschen' }
	];
}


ko.applyBindings(new ViewModel())
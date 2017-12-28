var Cat = function() {
	this.clickCount = ko.observable(0);
	this.name = ko.observable('Tabby');
	this.imgSrc = ko.observable('img/434164568_fea0ad4013_z.jpg');
	this.imgAttribution = ko.observable('https://www.flickr.com');
	this.levels = ko.observable();
	this.nickNames = ko.observableArray([
		{ name: 'Catty cat' },
		{ name: 'Plabby poo' },
		{ name: 'Anderschen' }
	]);
}

var ViewModel = function() {

	this.currentCat = ko.observable( new Cat() );

	this.incrementCounter = function() {
		this.currentCat().clickCount(this.currentCat().clickCount() + 1);
	}

	this.findLevel = function() {
		var clicks = this.currentCat().clickCount();
		
		if (clicks < 6) {		
			this.currentCat().levels('Beginner');
		} else if (clicks < 11) {		
			this.currentCat().levels('Intermediate');
		} else if (clicks < 16) {
			this.currentCat().levels('Expert')
		}
	}

}



ko.applyBindings(new ViewModel())
// Data, eventually from DB
var initialCats = [
	{
		clickCount: 0,
		name: 'Tabby1',
		imgSrc: 'img/434164568_fea0ad4013_z.jpg',
		levels: 'Beginner',
		nickNames: [ 'Catty cat', 'Plabby poo', 'Anderschen' ]
	},
	{
		clickCount: 0,
		name: 'Tabby2',
		imgSrc: 'img/434164568_fea0ad4013_z.jpg',
		levels: 'Beginner',
		nickNames: [ 'Catty cat', 'Plabby poo', 'Anderschen' ]
	},
	{
		clickCount: 0,
		name: 'Tabby3',
		imgSrc: 'img/434164568_fea0ad4013_z.jpg',
		levels: 'Beginner',
		nickNames: [ 'Catty cat', 'Plabby poo', 'Anderschen' ]
	}
]

// Model
var Cat = function(data) {
	this.clickCount = ko.observable(data.clickCount);
	this.name = ko.observable(data.name);
	this.imgSrc = ko.observable(data.imgSrc);
	this.levels = ko.observable(data.levels);
	this.nickNames = ko.observableArray(data.nickNames);
}

// Control flow
var ViewModel = function() {
	var self = this;
	
	// Initiate catList and Current Cat
	this.catList = ko.observableArray([]);
	initialCats.forEach(function(catItem) {
		self.catList.push( new Cat(catItem) );
	});
	this.currentCat = ko.observable( this.catList()[0] );

	this.setCurrentCat = function(newCat) {
		self.currentCat(newCat)
	}

	this.incrementCounter = function() {
		self.currentCat().clickCount(self.currentCat().clickCount() + 1);
	}

	self.updateLevel = function(newLevel) {
		self.currentCat().levels(newLevel);
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
(function(){

var app = angular.module("madLibApp");
// .value is a method that takes 2 parameters. The first parameter would be the name of what I'm making, second can be an object or an array

app.value('wordLists', 

	{
		verbs: ["scream", "plug", "contatenate", "confuse"],
		nouns: ["stethoscope", "hammer", "feline", "marsupial"],
		adverbs: ["truly", "quietly", "gently", "mainly"],
		adjectives: ["horrendous", "lovely", "meticulous", "passive"]
	});
})(angular);

(function(){

	var app = angular.module('madLibApp', []);

	app.controller("madLibCtrl", function(arrLength, wordLists){
		var global = this;
		global.title = "Madlib with Angular";
		global.instructions = "Submit 4 different Adverbs, Nouns, Verbs and Adjectives in their respective fields separated by a coma.";
		global.verbString = '';
		global.nounString = '';
		global.adverbString = '';
		global.adjectiveString = '';
		global.verbArr = [];
		global.nounArr = [];
		global.adverbArr = [];
		global.adjectiveArr =[];

		global.StoryBtn = { value: '' };
	
		global.christmasStorybtn = false;
		global.shoppingStorybtn = false;
		global.submitted = false;

// The elements I get from .value, in this case an object.

		global.backUpVerb = wordLists.verbs;
		global.backUpAdverb = wordLists.adverbs;
		global.backUpNoun = wordLists.nouns;
		global.backUpAdjective = wordLists.adjectives;
		

		global.listArr = function(){

			global.verbArr = global.verbString.split(',');
			global.checkArrLength(global.verbArr, global.backUpVerb);
			arrLength.shuffleArr(global.verbArr);
			global.nounbArr = global.nounString.split(',');
			global.checkArrLength(global.nounArr, global.backUpNoun);
			arrLength.shuffleArr(global.nounArr);
			global.adverbArr = global.adverbString.split(',');
			global.checkArrLength(global.adverbArr, global.backUpAdverb);
			arrLength.shuffleArr(global.adverbArr);
			global.adjectiveArr = global.adjectiveString.split(',');
			global.checkArrLength(global.adjectiveArr, global.backUpAdjective);
			arrLength.shuffleArr(global.adjectiveArr);
			
		};

		global.checkArrLength = function(arr, backupArr){

			for(var i=arr.length-1; i > -1 ; i--){
				if(arr[i] === ""){
					arr.splice(i,1);
				}
			}

			if(arr.length < 4){
				while(arr.length < 4){
					var temp = Math.floor(Math.random()*4);
					if(arr.indexOf(backupArr[temp]) === -1){
						arr.push(backupArr[temp]);
					}
				}
			}
		};

		

		

		global.story = function(){

			global.christmasStory = "Christmas Tree: \nEvery Christmas we "  +  global.verbArr[0] +  " to a "  + global.adjectiveArr[0]  +  "  tree farm far away. This is not just any " +  global.adjectiveArr[1]  + " tree farm. My dad and I " +   global.verbArr[3] + "  onto the " + global.nounArr[0] + " to  " +  global.verbArr[1] + "  for the perfect " +  global.nounArr[1] + ".  Some people like them" +  global.adjectiveArr[2]  + ", but I prefer them " +  global.adjectiveArr[3] + " . After  searching for hours I usually " +  global.adverbArr[3] + "  exclaim \"Dad! The perfect tree is over   there!\" Off we" +   global.verbArr[2]  + " to get the tree. The problem is we always forget the " + global.nounArr[3] + "  and the" + global.nounArr[2] + " . But at the end of the day we " +  global.adverbArr[0] + "  get the tree and head home " +   global.adverbArr[1] + " . \"I wish it was Christmas all year round\"  I " +   global.adverbArr[2] + " think to myself.";

			global.shoppingStory = "Today I went shopping. When I arrived at the store I saw a"  + global.adjectiveArr[0]  +   global.nounArr[0] + ", who upon noticing me"   + global.adverbArr[0]  +  "said \"I need to " + global.verbArr[0] + " \". \"Well,   that was" +   global.adjectiveArr[1]  + "\" I thought to myself and walked in the store. The store had rearranged it is inventory, so I felt" +   global.adverbArr[1] + " lost. I   walked up to store clerk and said" +   global.adverbArr[2] + "  \"I am looking for a" +  global.adjectiveArr[2]  +   global.nounArr[1] + "that doesn’t"  +  global.verbArr[1] + "as often as the last one I had.\" The store clerk  looked at me with a" +  global.adjectiveArr[3] + " look in his eye and said, \"What you are looking for can be found by the" +  global.nounArr[2] + ", if you see a" +  global.nounArr[3] + " that " +   global.adverbArr[3] +  " can " +   global.verbArr[2] + " , then you have gone too far.\" As I tried to understand his directions, I thought to myself, \"I should have just ordered it    on amazon.com, Their products seem to " +  global.verbArr[3] + " the perfect amount\"";
		};






		global.isChecked = function(){

			if(global.StoryBtn === 'christmas'){
				global.christmasStorybtn = true;
				global.shoppingStorybtn = false;
			}else{
				global.shoppingStorybtn = true;
				global.christmasStorybtn = false;
			}

		};


		global.submitBtn = function(){
			global.listArr();
			global.story();
			global.isChecked();
			global.submitted = true;
			
		};

	});


})(angular)
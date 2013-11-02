var poker = function(){
	var analyse = function(hand){
		console.log(hand);
		};

	return {
		analyse: analyse
	};
}.call(this);

poker.analyse('Ah As Ad Ac 2c');
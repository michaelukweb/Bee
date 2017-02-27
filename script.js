/*
Bee Slap Game 
Date: Feburary 2017
Developer: Michael 
*/

//Inform user which bee was hit and points lost 
var beehit = document.getElementById("beehit").innerHTML = "";

//Load function on page load 
window.addEventListener('load', function() { 

	Bee(); 

}, false);

//Show Queen Bees value to user 
function Bee () {

	var bees = getBees();

	for (let i = 1; i < 4; i++) {

		//Shows Bee's values 
		var queen = document.getElementById("queen"+i).innerHTML = bees[i-1];

		//Shows Bee's Status 
		document.getElementById("queen"+ i +"_status").innerHTML = "Alive";
	}

	for (let i = 1; i < 6; i++) {

		document.getElementById("worker"+ i).innerHTML = bees[i+2];
		document.getElementById("worker"+ i+ "_status").innerHTML = "Alive";

	}

	for (let i = 1; i < 8; i++) {

		document.getElementById("drone" + i).innerHTML = bees[i+7];
		document.getElementById("drone"+ i +"_status").innerHTML = "Alive";
	
	}
}

//Random Generator 
function random () {

	var bees = getBees();
	var buttonIndex = Math.floor(Math.random() * bees.length);

	console.log("The array index is " +buttonIndex);

	return buttonIndex;


}


//Function for button hit 
function newHit() {


	//Call to random generator 
	random();

	//Bee function 
	function btnIndex (index, pointsLost, idName, idIncrement) {



		var counter = 0;
		var buttonIndex = random();
		var bees = getBees();

		if (buttonIndex == index) {

			bees[index] -= pointsLost;
			counter += pointsLost;                                                                           
			document.getElementById(idName+idIncrement).innerHTML = bees[index];                                          
			document.getElementById("beehit").innerHTML =  idName + " " + idIncrement+ " was hit and lost " + counter + " points";

		} 

		if (bees[index] < 1) {

			document.getElementById(idName+idIncrement+"_status").innerHTML = "Dead";
			document.getElementById(idName+idIncrement).style.display = "none";
		
		}

		// if (bees[0] < 1 && bees[1] < 1 && bees[2] < 1) {

		// 	document.getElementById("main").style.display = "none";
  //       	document.getElementById("beehit").innerHTML =  "Game over all queens are dead";
  //       	document.getElementById("btnHit").disabled = true;

		// }
	}




	//Call to fuctions 
	for (let i = 0; i < 15; i++) {

		if (i < 3) {
			var points = 7;
			btnIndex(i, points, "queen", i+1);

		}

		if (i > 2 && i < 8) {
			var points2 = 12;
			var num = 1;
			btnIndex(i, points2, "worker", num);
			num++;
		}

		if (i > 7 && i < 15) {
				
			var points3 = 18;
			var num2 = 1; 
			btnIndex(i, points3, "drone", num2);
			num2++;

		}

	}
	
} 

//Function to reset values
function reset () {

	document.getElementById("beehit").innerHTML = "";
	document.getElementById("main").style.display = "block";
	getBees();
	queenBee();
	workerBee();
	droneBee();

}

//Array Function 
function getBees () {

	var bees = [100, 100, 100, 75, 75, 75, 75, 75, 50, 50, 50, 50, 50, 50, 50];

	return bees;

}

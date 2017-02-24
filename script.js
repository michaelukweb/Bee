/*
Bee Slap Game 
Date: Feburary 2017
Developer: Michael 
*/

//Load function on page load 
window.addEventListener('load', function() { 
	
	queenBee(); 
	workerBee(); 
	droneBee();

}, false);

//Array to store bee default values 
var bees = [100, 100, 100, 75, 75, 75, 75, 75, 50, 50, 50, 50, 50, 50, 50];


//Show Queen Bees value to user 
function queenBee () {
	var count = 0;
	var num = 1;
	var queen_status = 1;
	
	for (let i = 0; i < 3; i++) {

		//Shows Bee's values 
		document.getElementById("queen"+num).innerHTML = bees[count];
		//Shows Bee's Status 
		document.getElementById("queen"+queen_status+"_status").innerHTML = "Alive";
		num++;
		count++;
		queen_status++;

	}
}



function workerBee () {
	var count2 = 3;
	var num2 = 1;
	var worker_status = 1;
	for (let i = 0; i < 5; i++) {

		document.getElementById("worker"+num2).innerHTML = bees[count2];
		document.getElementById("worker"+worker_status+"_status").innerHTML = "Alive";
		num2++;
		count2++;
		worker_status++;

	}
}

function droneBee () {
	var count3 = 8;
	var num3 = 1;
	var drone_status = 1;
	for (let i = 0; i < 7; i++) {

		document.getElementById("drone"+num3).innerHTML = bees[count3];
		document.getElementById("drone"+drone_status+"_status").innerHTML = "Alive";
		num3++;
		count3++;
		drone_status++;

	}
}

//Inform user which bee was hit and points lost 
document.getElementById("beehit").innerHTML = "";


//Function for button hit 
function newHit() {


	//Random Generator 
	var buttonIndex = Math.floor(Math.random() * bees.length);
	//document.getElementById("result").innerHTML = "Array index being shown is " + buttonIndex;


	//Bee function 
	function btnIndex (index, pointsLost, idName, idIncrement) {

		var counter = 0;

		if (buttonIndex == index) {

			bees[index] -= pointsLost;
			counter += pointsLost;                                                                           
			document.getElementById(idName+idIncrement).innerHTML = bees[index];                                          
			document.getElementById("beehit").innerHTML =  idName + " " + idIncrement+ " was hit and lost " + counter + " points";

		} 

		if (bees[index] < 1) {

			document.getElementById(idName+idIncrement+"_status").innerHTML = "Dead";
			document.getElementById(idName+idIncrement).style.display = "none";

			bees.splice(bees[index], "Not availible");
			console.log(bees);
		
		}

		if (bees[0] < 1 && bees[1] < 1 && bees[2] < 1) {

			document.getElementById("main").style.display = "none";
        	document.getElementById("beehit").innerHTML =  "Game over all queens are dead";
        	document.getElementById("btnHit").disabled = true;

		}
	}



	//Queen 1
	btnIndex(0, 7, "queen", 1);
	//Queen 2
	btnIndex(1, 7, "queen", 2);
	//Queen 3
	btnIndex(2, 7, "queen", 3);

	//Worker 1
	btnIndex(3, 12, "worker", 1);
	//Worker 2
	btnIndex(4, 12, "worker", 2);
	//Worker 3
	btnIndex(5, 12, "worker", 3);
	//Worker 4
	btnIndex(6, 12, "worker", 4);
	//Worker 5
	btnIndex(7, 12, "worker", 5);

	//Drone 1
	btnIndex(8, 18, "drone", 1);
	//Drone 2
	btnIndex(9, 18, "drone", 2);
	//Drone 3
	btnIndex(10, 18, "drone", 3);
	//Drone 4
	btnIndex(11, 18, "drone", 4);
	//Drone 5
	btnIndex(12, 18, "drone", 5);
	//Drone 2
	btnIndex(13, 18, "drone", 6);
		//Drone 2
	btnIndex(14, 18, "drone", 7);
}

//Function to reset values
function reset () {

	 bees = [100, 100, 100, 75, 75, 75, 75, 75, 50, 50, 50, 50, 50, 50, 50];

	array(bees);
	document.getElementById("beehit").innerHTML = "";
	document.getElementById("main").style.display = "block";
	queenBee();
	workerBee();
	droneBee();

}

//Array Function 
function array (bees) {

	var bees = [100, 100, 100, 75, 75, 75, 75, 75, 50, 50, 50, 50, 50, 50, 50];

	return bees;

}

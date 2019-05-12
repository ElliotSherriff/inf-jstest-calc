// self executing main function
(function() {
  console.log('Welcome to the calculator app');

  //--------------- put your code below this line -------------

  // input field for the calculator screen
 let output = document.getElementById('output');
 let buttons = document.getElementsByClassName('btn');

 let calculation = null;

 for (let i = 0; i <buttons.length; i++) {
 	let button = buttons[i];

 		button.addEventListener('click', function(){

 		if (button.id === 'n1'){
 				value = 1
 				output.placeholder = 1;
 		}
 		if (button.id === 'n2'){
 				value = 2
 				output.placeholder = 2;
 		}
 		if (button.id === 'n3'){
 				value = 3
 				output.placeholder = 3;
 		}
 		if (button.id === 'n4'){
 				value = 4
 				output.placeholder = 4;
 		}
 		if (button.id === 'n5'){
 				value = 5
 				output.placeholder = 5;
 		}
 		if (button.id === 'n6'){
 				value = 6
 				output.placeholder = 6;
 		}
 		if (button.id === 'n7'){
 				value = 7
 				output.placeholder = 7;
 		}
 		if (button.id === 'n8'){
 				value = 8
 				output.placeholder = 8;
 		}
 		if (button.id === 'n9'){
 				value = 9
 				output.placeholder = 9;
 		}
 		if (button.id === 'n0'){
 				value = 0
 				output.placeholder = 0;
 		}
 		if (button.id === 'oplus'){
 				operand = '+'
 				output.placeholder = '+';
 		}
 		if (button.id === 'ominus'){
 				operand = '-'
 				output.placeholder = '-';
 		}
 		if (button.id === 'omultiply'){
 				operand = '*'
 				output.placeholder = '*';
 		}
 		if (button.id === 'oclear'){
 				value = 0
 				output.placeholder = 0;
 		}
 		//equals
 		if (button.id === 'oequals'){
 				calculation = value + value;


 				console.log(oequals)

 		}

 	})	

 }
 	console.log(buttons)

})();
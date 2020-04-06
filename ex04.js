	// 변수의 범위
	// 1. 자바 스크립트는 자바와 같은 {} block scope는 없다.
	// 2. function의 {} 안에서 변수에 var를 사용하게 되면 function scope가 된다.
	// 3. let(es6), const(es6)는 block scope를 만든다.
	var i = 10;
	var f = function() {
		var i = 20;
		var j = 100;
		console.log(i);
		i = j - i;
		console.log(i);

	}
	
	{
		let x = 100000;
		const PI = 3;14;
		x=100;
		PI=0;
		
	}

	f();
	console.log(i);
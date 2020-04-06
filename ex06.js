	/*
	 자바스크립트의 객체는 function 타입과 object타입 2가지가 있다.
	 그런데, 보통 function 타입 객체는 함수라 부른다.
	 따라서, 자바스크립트 객체라 부르는 것은 object 타입의 객체를 가리킨다.
	
	
	 */

	// 생성 방법 1 - new + 생성자 함수를 사용하는 방법 (거의 X)
	var o1 = new Object();
	o1.name = '둘리';
	o1.age = 10;
	o1.another = new Object();
	o1.another.name = '마이콜';
	o1.another.age = 26;

	console.log(o1);

	// 생성 방법 2 - {} literal 사용하는 방법
	var o2 = {};
	o2.name = '둘리';
	o2.age = 11;
	o2.another = {};
	o2.another.name = '마이콜';
	o2.another.age = 27;

	console.log(o2);

	// 생성 방법 3 - (J)ava (S)cript (O)bject (N)otation : 자바스크립트 객체 표기법
	var o3 = {
		name : '둘리',
		age : 12,
		another : {
			name : '마이콜',
			age : 30
		}
	};
	console.log(o3);

	// XmlHttpRequest 호스트 객체를 사용해서 통신한다.
	var response = '{ "no": 1, "name": "김은엽", "email": "dmsduqzz@gmail.com" }';
	var userVo = eval("(" + response + ")");
	console.log(userVo.no + ":" + userVo.name + ":" + userVo.email);
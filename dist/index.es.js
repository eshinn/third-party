// const sayHi = (msg = 'World') => console.log(`Hello, ${msg}`)

// export default sayHi
// export { sayHi as SayHi }
function SayHi (msg) {
	if ( msg === void 0 ) msg = 'World';

	return console.log(("Hello, " + msg));
}

// const sayBye = (msg = "World") => console.log(`Bye, ${msg}`)

// export default sayBye
// export { sayBye as SayBye }
function SayBye (msg) {
	if ( msg === void 0 ) msg = "World";

	return console.log(("Bye, " + msg));
}

export { SayHi, SayBye };

module.exports = function print(msg) {

	console.log('*'.repeat(msg.length));
	console.log(msg);
	console.log(Array(msg.length + 1).join('*')); //if there is no repeat used to do it this way
}



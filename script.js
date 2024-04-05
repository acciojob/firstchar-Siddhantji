function firstChar(text) {
  // your code here
	let trimed = text.trim();
	return trimed.charAt(0);
}

// Do not change the code below

const text = prompt("Enter text:");
alert(firstChar(text));

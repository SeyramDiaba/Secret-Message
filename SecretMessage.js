let secretMessage = ['Learning', 'is', 'not', 'about', 'what', 'you', 'get', 'easily', 'the', 'first', 'time,', 'it', 'is', 'about', 'what', 'you', 'can', 'figure', 'out.', '-2015,', 'Chris', 'Pine,', 'Learn', 'JavaScript'];
console.log(secretMessage.length);
// remove last string from array
secretMessage.pop();
console.log(secretMessage.length);

// add words 'to' and 'Program' to the end of array
secretMessage.push('to','Program');
console.log(secretMessage.length);

// change word 'easily' to 'right'
console.log(secretMessage.indexOf('easily'));
secretMessage[7] = 'right';
//console.log(secretMessage);

// remove first element in string //
secretMessage.shift();
console.log(secretMessage.length);

// add 'Programming' to the beginning of array.
secretMessage.unshift('Programming');
console.log(secretMessage.length);

// remove string 'get', 'right', 'the', 'first','time' with know.
console.log(secretMessage.length);
secretMessage.splice(6,5,'know');
console.log(secretMessage.length);

// print secret message
console.log(secretMessage.join());






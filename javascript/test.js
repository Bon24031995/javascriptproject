
// reverse sequnce

var t = 11;

for (var i = t; i >= 1; i -= 2) {
    console.log(i);
}

for (let i = 3; i <= 21; i += 2) {
    console.log(i);
}

for (let i = 3; i <= 21; i++) {
    console.log(i += 2);
}

for (var i = 10; i >= 1; i -= 2) {
    console.log(i);
}

for (var i = 11; i >= 1; i--) {
    console.log(i -= 1)
}

function Aplha(str) {
    let aplhabet = 0;
    for (let i = 1; i <= str.length; i++) {
        aplhabet++;
    }
    console.log('Number of alphabet is:'+aplhabet);
}
Aplha('Hellos world');

function Alpha(str) {
    let wordCount = 0;
    for (let i = 0; i < str.length; i++) {
        // Check if the current character is not a space
        if (str[i] !== ' ') {
            wordCount++;
        } 
    }
    console.log('Number of words is: ' + wordCount);
}

// Example usage
Alpha('Hello world');                // Output: Number of words is: 2
Alpha('  This is a test string.  '); // Output: Number of words is: 5
Alpha('');                           // Output: Number of words is: 0
Alpha('One');                        // Output: Number of words is: 1

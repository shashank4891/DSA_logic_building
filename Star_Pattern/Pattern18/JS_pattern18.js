function pattern18(N) {
    for (let i = 0; i < N; i++) {
        let row = "";
        
        // Inner loop for printing the alphabets
        for (let ch = String.fromCharCode('A'.charCodeAt(0) + N - 1 - i); ch <= String.fromCharCode('A'.charCodeAt(0) + N - 1); ch = String.fromCharCode(ch.charCodeAt(0) + 1)) {
            row += ch + " ";
        }
        
        // Print the row
        console.log(row);
    }
}

// Take input from the user
let N = parseInt(prompt("Enter the value of N:"));
pattern18(N);


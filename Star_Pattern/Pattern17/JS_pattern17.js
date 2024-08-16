function pattern17(N) {
    for (let i = 0; i < N; i++) {
        let row = "";
        
        // Print spaces before characters
        for (let j = 0; j < N - i - 1; j++) {
            row += " ";
        }
        
        // Print characters
        let ch = 'A'.charCodeAt(0);
        let breakpoint = Math.floor((2 * i + 1) / 2);
        for (let j = 1; j <= 2 * i + 1; j++) {
            row += String.fromCharCode(ch);
            if (j <= breakpoint) ch++;
            else ch--;
        }
        
        // Print spaces after characters
        for (let j = 0; j < N - i - 1; j++) {
            row += " ";
        }
        
        // Print the row
        console.log(row);
    }
}

// Take input from the user
let N = parseInt(prompt("Enter the value of N: "));
pattern17(N);


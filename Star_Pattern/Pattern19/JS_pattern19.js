function pattern19(N) {
    let iniS = 0;
    
    // Upper half of the pattern
    for (let i = 0; i < N; i++) {
        let row = "";
        
        // Print stars
        for (let j = 1; j <= N - i; j++) {
            row += "*";
        }
        
        // Print spaces
        for (let j = 0; j < iniS; j++) {
            row += " ";
        }
        
        // Print stars
        for (let j = 1; j <= N - i; j++) {
            row += "*";
        }
        
        console.log(row);
        
        // Increase spaces by 2 for the next row
        iniS += 2;
    }
    
    // Lower half of the pattern
    iniS = 2 * N - 2;
    for (let i = 1; i <= N; i++) {
        let row = "";
        
        // Print stars
        for (let j = 1; j <= i; j++) {
            row += "*";
        }
        
        // Print spaces
        for (let j = 0; j < iniS; j++) {
            row += " ";
        }
        
        // Print stars
        for (let j = 1; j <= i; j++) {
            row += "*";
        }
        
        console.log(row);
        
        // Decrease spaces by 2 for the next row
        iniS -= 2;
    }
}

// Take input from the user
let N = parseInt(prompt("Enter the value of N: "));
pattern19(N);


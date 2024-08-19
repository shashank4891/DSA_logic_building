function pattern20(n) {
    // Initializing the spaces
    let spaces = 2 * n - 2;
    
    // Outer loop for printing rows
    for (let i = 1; i <= 2 * n - 1; i++) {
        let stars = i;
        
        // Adjust stars for the second half
        if (i > n) stars = 2 * n - i;
        
        // Print stars
        let row = "";
        for (let j = 1; j <= stars; j++) {
            row += "*";
        }
        
        // Print spaces
        for (let j = 1; j <= spaces; j++) {
            row += " ";
        }
        
        // Print stars again
        for (let j = 1; j <= stars; j++) {
            row += "*";
        }
        
        // Print the row and move to the next line
        console.log(row);
        
        // Adjust spaces for the next row
        if (i < n) spaces -= 2;
        else spaces += 2;
    }
}

// Take input from the user
let N = parseInt(prompt("Enter the value of N: "));
pattern20(N);


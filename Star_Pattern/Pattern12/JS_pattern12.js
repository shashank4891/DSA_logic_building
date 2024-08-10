function pattern12(N) {
    let spaces = 2 * (N - 1);
    
    for (let i = 1; i <= N; i++) {
        // Print numbers in ascending order
        let row = "";
        for (let j = 1; j <= i; j++) {
            row += j;
        }
        
        // Print spaces
        for (let j = 0; j < spaces; j++) {
            row += " ";
        }
        
        // Print numbers in descending order
        for (let j = i; j >= 1; j--) {
            row += j;
        }
        
        // Print the row
        console.log(row);
        
        // Decrease the number of spaces
        spaces -= 2;
    }
}

const N = parseInt(prompt("Enter the number of rows:"));
pattern12(N);


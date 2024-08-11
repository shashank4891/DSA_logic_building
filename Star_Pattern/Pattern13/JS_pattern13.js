function pattern13(N) {
    let num = 1;
    
    for (let i = 1; i <= N; i++) {
        let row = "";
        
        for (let j = 1; j <= i; j++) {
            row += num + " ";
            num += 1;
        }
        
        console.log(row);
    }
}

const N = parseInt(prompt("Enter the number of rows:"));
pattern13(N);


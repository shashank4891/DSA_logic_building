function pattern11(N) {
    for (let i = 0; i < N; i++) {
        let start = i % 2 === 0 ? 1 : 0;
        let row = "";
        
        for (let j = 0; j <= i; j++) {
            row += start;
            start = 1 - start;
        }
        
        console.log(row);
    }
}

const N = parseInt(prompt("Enter the number of rows:"));
pattern11(N);


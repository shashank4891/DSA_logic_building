function pattern16(N) {
    for (let i = 0; i < N; i++) {
        let row = "";
        for (let j = 0; j <= i; j++) {
            row += String.fromCharCode('A'.charCodeAt(0) + i) + " ";
        }
        console.log(row);
    }
}

const N = parseInt(prompt("Enter the number of rows:"));

pattern16(N);


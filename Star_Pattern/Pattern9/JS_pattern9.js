function erectPyramid(N) {
    for (let i = 0; i < N; i++) {
        let row = "";
        row += " ".repeat(N - i - 1);
        row += "*".repeat(2 * i + 1);
        row += " ".repeat(N - i - 1);
        console.log(row);
    }
}

function invertedPyramid(N) {
    for (let i = 0; i < N; i++) {
        let row = "";
        row += " ".repeat(i);
        row += "*".repeat(2 * N - (2 * i + 1));
        row += " ".repeat(i);
        console.log(row);
    }
}

const N = parseInt(prompt("Enter the number of rows:"));

erectPyramid(N);
invertedPyramid(N);


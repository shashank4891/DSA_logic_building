
def pattern8(N):
    for i in range(N):
        row = ""
        row += " " * i
        row += "*" * (2 * N - (2 * i + 1))
        row += " " * i
        print(row)

N = int(input("Enter the number of rows: "))
pattern8(N)

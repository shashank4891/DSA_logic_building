def pattern6(N):
    for i in range(N):
        row = ""
        for j in range(N, i, -1):
            row += str(N - j + 1) + " "
        print(row)

N = int(input("Enter the number of rows: "))
pattern6(N)


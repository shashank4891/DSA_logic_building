def pattern3(N):
    for i in range(1, N + 1):
        row = ""
        for j in range(1, i + 1):
            row += str(j) + " "
        print(row)

N = int(input("Enter the number of rows: "))
pattern3(N)


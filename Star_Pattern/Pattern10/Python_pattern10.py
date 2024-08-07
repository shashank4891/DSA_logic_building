def pattern10(N):
    for i in range(1, 2 * N):
        stars = i
        if i > N:
            stars = 2 * N - i

        row = "*" * stars
        print(row)

N = int(input("Enter the number of rows: "))
pattern10(N)


def pattern15(N):
    for i in range(N):
        row = ""
        for ch in range(ord('A'), ord('A') + (N - i)):
            row += chr(ch) + " "
        print(row)

N = int(input("Enter the number of rows:"))

pattern15(N)


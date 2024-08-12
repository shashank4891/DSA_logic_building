def pattern14(N):
    for i in range(N):
        row = ""
        for ch in range(ord('A'), ord('A') + i + 1):
            row += chr(ch) + " "
        print(row)

N = int(input("Enter the number of rows:"))

pattern14(N)


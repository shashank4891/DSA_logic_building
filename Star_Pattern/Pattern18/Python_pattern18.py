def pattern18(N):
    for i in range(N):
        row = ""
        
        # Inner loop for printing the alphabets
        for ch in range(ord('A') + N - 1 - i, ord('A') + N):
            row += chr(ch) + " "
        
        # Print the row
        print(row)

# Take input from the user
N = int(input("Enter the value of N: "))
pattern18(N)


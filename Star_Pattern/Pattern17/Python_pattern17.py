def pattern17(N):
    for i in range(N):
        # Print spaces before characters
        row = " " * (N - i - 1)
        
        # Print characters
        ch = ord('A')
        breakpoint = (2 * i + 1) // 2
        for j in range(1, 2 * i + 2):
            row += chr(ch)
            if j <= breakpoint:
                ch += 1
            else:
                ch -= 1
        
        # Print spaces after characters
        row += " " * (N - i - 1)
        
        # Print the row
        print(row)

# Take input from the user
N = int(input("Enter the value of N: "))
pattern17(N)


def pattern12(N):
    spaces = 2 * (N - 1)
    
    for i in range(1, N + 1):
        # Print numbers in ascending order
        for j in range(1, i + 1):
            print(j, end="")
        
        # Print spaces
        for _ in range(spaces):
            print(" ", end="")
        
        # Print numbers in descending order
        for j in range(i, 0, -1):
            print(j, end="")
        
        # Move to the next line
        print()
        
        # Decrease the number of spaces
        spaces -= 2

N = int(input("Enter the number of rows: "))
pattern12(N)


def erect_pyramid(N):
    for i in range(N):
        row = " " * (N - i - 1)
        row += "*" * (2 * i + 1)
        row += " " * (N - i - 1)
        print(row)

def inverted_pyramid(N):
    for i in range(N):
        row = " " * i
        row += "*" * (2 * N - (2 * i + 1))
        row += " " * i
        print(row)

N = int(input("Enter the number of rows: "))

erect_pyramid(N)
inverted_pyramid(N)


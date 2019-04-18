# The Game of Life

Write some code that evolves generations through the "game of
life". The input will be a game board of cells, either alive (1) or dead
(0).

The code should take this board and create a new board for the
next generation based on the following rules:
1) Any live cell with fewer than two live neighbours dies (underpopulation)
2) Any live cell with two or three live neighbours lives on to
the next generation (survival)
3) Any live cell with more than three live neighbours dies
(overcrowding)
4) Any dead cell with exactly three live neighbours becomes a
live cell (reproduction)

As an example, this game board as input:

```
0 1 0 0 0
1 0 0 1 1
1 1 0 0 1
0 1 0 0 0
1 0 0 0 1
```

Will have a subsequent generation of:

```
0 0 0 0 0
1 0 1 1 1
1 1 1 1 1
0 1 0 0 0
0 0 0 0 0
```

# Ranking Poker Hands

Write code that will evaluate a poker hand and determine its
rank.

Example:

Hand: Ah As 10c 7d 6s (Pair of Aces)

Hand: Kh Kc 3s 3h 2d (2 Pair)

Hand: Kh Qh 6h 2h 9h (Flush)

# Converting a Number to a String

Write code that will accept a number and convert it to the
appropriate string representation.

Basic Requirements:

* Represent numbers to the hundredth position
* Represent numbers as high as one billion

Examples:

Convert 2523.04
to "Two thousand five hundred twenty-three and 04/100 dollars"

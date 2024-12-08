# Closure Issue in TypeScript with setTimeout

This repository demonstrates a common issue with closures in JavaScript and TypeScript when using `setTimeout` within loops.  The issue arises because of how variables are captured in closures.

## The Problem

The `printNumbers1` function intends to print numbers 1 through 5 with a slight delay using `setTimeout`. However, due to the way closures work, by the time `setTimeout` executes the callback function, the loop has already completed, and `i` will be its final value (6).

## The Solution

The solution involves creating a new scope for each iteration using an immediately invoked function expression (IIFE) or a more modern approach such as `let` with `setTimeout`

## How to reproduce

1. Clone the repository.
2. Navigate to the repository's root directory.
3. Run `tsc bug.ts` to compile the TypeScript code.
4. Run `node bug.js` to execute the code and observe the unexpected output.
5. Run `tsc bugSolution.ts` to compile the TypeScript code.
6. Run `node bugSolution.js` to execute the code and observe the corrected output. 
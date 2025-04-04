## TS Calculator Walk-through

## Project Breakdown

## HTML

- [ ] Grid
  - [ ] 4 columns, 6 rows.
  - [ ] Using grid positions
  - [ ] Each cell contains a button
- [ ] Buttons
  - [ ] Numbers (0 to 9) => 10 btns
  - [ ] Operations (+, -, /, x) => 4 btns
  - [ ] AC -> Clear => 1 btn
  - [ ] Delete (DEL) => 1 btn
  - [ ] Plus/Minus (+/-) => 1 btn
  - [ ] Percentage (%) => 1 btn
  - [ ] Decimal point (.) => 1 btn
  - [ ] Equals (=) => 1 btn
    - [ ] Total 20 btns
- [ ] Display(s) - A display to show the numbers and operators, plus a display to show the result of the operation.

- [ ] Numbers to be grouped together.
- [ ] AC and DEL positioned above the numbers.
- [ ] Operators positioned on the right side.

## SCSS

- [ ] Add spacing around the buttons.
- [ ] Circular buttons.
- [ ] Add colours to different buttons.

## TS Logic

- [ ] eventListeners to listen for clicks.
  - [ ] Update display when a number button is pressed.
  - [ ] Update display when an operator button is pressed.
    - [ ] Not allow more than one operator ("CF").
  - [ ] Clear display when the AC button is pressed.
  - [ ] Calculate equation when the equals button is pressed ("func").
  - [ ] Add decimal point to the display when the decimal point button is presed.
    - [ ] Not allow more than one decimal point ("CF").
  - [ ] Delete the last character when the delete button is pressd.

## Edge Cases

- [ ] Handle operations with negative numbers as the second part of the equation ("CF").
- [ ] Division by zero.

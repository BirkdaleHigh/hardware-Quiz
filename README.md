# Hardware Club
## Quiz Project

## Parts

- Controller (arduino in this case)
- x4 Buttons
- x1 Resistor (2.2Kohm)
- Some wires and connectors

## Code

- Example server
- Example event listeners

This project requires node.js to run.

## Steps

### 0. Read a button

First of lets see what kind of input a button can give. There is example code in the  [\[Buttons folder\]](buttons/buttons.ino)

The gist being; 
 
* Setup the inputs
* Setup the outputs (in this case the serail connection to tell us what the board is reading)
* read the button

### 1. Read 4 buttons

Now read 4 buttons and print something different depending on the button pressed. An example can be found in [template4buttons folder\]](template4buttons/template4buttons.ino)

### 2. Make a simon says game

You'll have to do some research for this one.

Using the proided website in the `public` folder you could generate a sequence the buttons must be clicked in and validate the user input of the order.

### 3. Add Scores to Simon

Once you've got user input being validated you can start scoring progress. There is code included for this but you'll have to look at [raceClicks](https://github.com/BirkdaleHigh/raceClicks) for examples.

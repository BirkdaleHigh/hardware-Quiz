void setup() {
  // put your setup code here, to run once:
  // List the button input pins AS inputs
  pinMode(8, INPUT);
  pinMode(9, INPUT);
  pinMode(10, INPUT);
  pinMode(11, INPUT);

  // Turn the pins on so when the button completes the circuit, there is a signal to detect. 
  digitalWrite(8, HIGH);
  digitalWrite(9, HIGH);
  digitalWrite(10, HIGH);
  digitalWrite(11, HIGH);

  // For debugging, we'll use the serial consol to have the board tell us what is pressed
  Serial.begin(9600);
}

void loop() {
  // put your main code here, to run repeatedly:
  //Keep checking the buttons and print information if they are pressed
  if(check( 8)){ Serial.println(1); }
  if(check( 9)){ Serial.println(2); }
  if(check(10)){ Serial.println(3); }
  if(check(11)){ Serial.println(4); }
}

// Abstract checking the buttons to save typing
int lastpin; // Keep track of the last pin checked to tell if it is being held down.
bool check(int pin){ //bool here means this function expect to return only true or false, nothing else.
  if( digitalRead(pin) == LOW ){
    if(lastpin == pin){ return false; } //Using the return keyword exits the function right here and does nothing else.
    lastpin = pin;
    return true;
  } else {
    if(lastpin == pin){ lastpin = 0; }
    return false;
  }
}


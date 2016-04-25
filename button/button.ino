int button = 8;

void setup() {
  pinMode(button, INPUT);
  digitalWrite(button, HIGH);
  Serial.begin(9600);
}

void loop() {
  Serial.println( !digitalRead(button) );
}

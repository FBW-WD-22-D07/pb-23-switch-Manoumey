// // write your code here
// # Switch if...

// **Arbeite in solution.js**

// ## 1. Color Analyzer

// Erstelle eine Switch-Anweisung, die für jede Farboption einen anderen Kommentar ausgibt. (red, blue, green, yellow).

// ### Erstelle eine Variable mit dem Namen `color` und gib folgendes aus, wenn `color`:
//     -   "red" => Ausgabe: "Q1: Red's a great color on you."
//     -   "blue" => Ausgabe: "Q1: Blue? Great choice."
//     -   "green" => Ausgabe: "Q1: Ok. Green it is."
//     -   "yellow" => Ausgabe: "Q1: Not what I would have picked, but yellow is fine."
//     -   Wenn der Wert keinem der oben genannten entspricht => Ausgabe: "Q1: The aim of the game is to pick a color."

let color="blue";

switch(color){
case "red" : 
    console.log("Q1: Red's a great color on you.");
    break;
case "blue" : 
    console.log("Q1: Blue? Great choice.");
    break;
case "green" : 
    console.log("Q1: Ok. Green it is.");
    break;
case "yellow" : 
    console.log("Q1: Not what I would have picked, but yellow is fine.");
    break;
default : console.log("Q1: The aim of the game is to pick a color."
);


}




// ## 2. Benotung

// Erstelle eine Switch-Anweisung, die je nach Note unterschiedliche Kommentare ausgibt.

// ### Erstelle eine Variable namens `grade` und gib folgendes abhängig von dem Wert aus, den `grade` annimmt:
//     -   "A" => Ausgabe: "Q2: A - Well done!"
//     -   "B" => Ausgabe: "Q2: B - Good on you!"
//     -   "C" => Ausgabe: "Q2: C - Good effort"
//     -   "D" => Ausgabe: "Q2: D - Try harder next time..."
//     -   Wenn der Wert keinem der oben genannten entspricht => Ausgabe: "Q2: Yikes..."


let grade="Aggg";

switch(grade){

case "A" :
    console.log("Q2: A - Well done!");
    break;

case "B" :
    console.log("Q2: B - Good on you!");
    break;

case "C" :
    console.log("Q2: C - Good effort");
    break;

case "D" :
        console.log("Q2: D - Try harder next time...");
        break;
default :
        console.log("Q2: Yikes...");        
    

    
}

// ## 3. Früchte

// Erstelle eine Switch-Anweisung, die für verschiedene Früchte (banana, orange, strawberry, apple) unterschiedliche Kommentare ausgibt.

// ### Erstelle eine Variable mit dem Namen `fruit`" und gib folgendes abhängig von dem Wert aus, den `fruit` animmt:
//     -   "apple" => Ausgabe "Q3: An apple a day keeps the doctor away."
//     -   "banana" => Ausgabe "Q3: Bananas are full of potassium."
//     -   "orange" => Ausgabe "Q3: Yep, oranges. Great choice."
//     -   "strawberry" => Ausgabe "Q3: Mmmm...nothing better than strawberries."
//     -   Wenn der wert keiner der oben genannten ist => Ausgabe "Q3: PICK A FRUIT"


let fruit="orange";

switch(fruit){

    case "apple" : 
        console.log("Q3: An apple a day keeps the doctor away.");
        break;
    case "banana" : 
        console.log("Q3: Bananas are full of potassium.");
        break;
    case "orange" : 
        console.log("Q3: Yep, oranges. Great choice.");
        break;
    case "strawberry" : 
        console.log("Q3: Mmmm...nothing better than strawberries.");
        break; 
    default :
        console.log("Q3: PICK A FRUIT");           

}




// ## 4. Abgeschlossener Anteil

// ### Erstelle eine Variable namens `percentageComplete` und gib folgendes aus:

// * Wenn `percentageComplete` unter 30 ist, Ausgabe: "Q4: Still a long way to go".
// * Ist `percentageComplete` zwischen 30 und 50, Ausgabe: "Q4: Slowly getting there".
// * Ist `percentageComplete` zwischen 51 und 80, Ausgabe: "Q4: You can do it!".
// * Wenn `percentageComplete` zwischen 81 und 99 ist, Ausgabe: "Q4: This is the last push!".
// * Wenn `percentageComplete` 100 ist, Ausgabe: "Q4: You're there. Well done!".


const percentageComplete=88;

        if(percentageComplete<30){
            console.log("Q4: Still a long way to go");
        } else if(percentageComplete>=30 && percentageComplete<=50){
            console.log("Q4: Slowly getting there");

        } else if(percentageComplete>=51 && percentageComplete<=80){
            console.log("Q4: You can do it!");
            
        } else if(percentageComplete>=81 && percentageComplete<=99){
            console.log("Q4: This is the last push!");
            
        } else if(percentageComplete===100){
            console.log("Q4: You're there. Well done!");
            
        } else { console.log("Error");
            
        }







// ### Switch case ODER If-Anweisung

// * Wann solltest du eine switch-Anweisung im Gegensatz zu einer "if else"-Anweisung verwenden? Hinterlasse deine Antwort in deiner js-Datei als Kommentar.

// Für einfache Vergleiche



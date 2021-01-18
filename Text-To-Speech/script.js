    "use strict"   
    let myText = document.getElementById('myText');
    let myImage = document.getElementById('myImage');
    let myButton = document.getElementById('myButton');
    let myReset = document.getElementById('myReset');

    myButton.addEventListener('click', function(){
        main();
    })

    myReset.addEventListener('click', function(){
        /* hier komt jouw code */
    })

    function main(){
         let dezeTextWordtHet = makeThisSentence();
         myText.innerHTML = dezeTextWordtHet;
         sayItLoud(dezeTextWordtHet); // say something nice say it loud
         selectThisImage('20200912_112025.jpg'); // show a nice image
    }
    
    
    function randomizer(range = 1){ 
        // Math.random geeft een waarde  0 <= waarde < 1 (dus exclusief 1)
        return Math.floor((Math.random() * range));
    }
    
    
    function makeThisSentence(){
        let index01 = randomizer(arrayLength);
        let index02 = randomizer(arrayLength);
        let index03 = randomizer(arrayLength);
        let woord1 = onderwerp[index01];
        let woord2 = werkwoord[index02];
        let woord3 = restwoord[index03];
        let outputString = woord1 + " " + woord2 + " " + woord3;
        return outputString;
    }
    
    function selectThisImage(){
        let index01 = randomizer(arrayLength);
        myImage.src = plaatjes[index01]; 
    }
    
    function sayItLoud (textString) {
      let message = new SpeechSynthesisUtterance(textString);
      let voices = window.speechSynthesis.getVoices();
      message.voice = voices[1];
      message.pitch = 1; // range between 0 and 2
      message.rate = 1; // range between 0.1 (lowest) and 10 (highest) 
      window.speechSynthesis.speak(message);
    }
    
    
    const onderwerp = ["Alida", "he", "Brownie"];
    const werkwoord = ["falls", "eats", "laughs"];
    const restwoord = ["hard", "at work", "bread"];
        
    let plaatjes = ['chick.jpg', 'framboos.jpg', 'Klaverblauwtje-2.jpg']
    let arrayLength = onderwerp.length;

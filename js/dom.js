/*
    * Traversing the DOM with JavaScript
    * View the output in the console
    * Comment all, except the the one your want to show
*/

// 1. Selecteer .characters met document.querySelector

    let characters = document.querySelector('.characters');
    //console.log(characters.innerHTML);


// 2. Selecteer .humans uit .characters (Start from characters)
    let humans = characters.querySelector(".humans");
    //console.log(humans.innerHTML);

// 3. Selecteer alle mensen met querySelectorAll, beginnend bij .humans
    let filtered = characters.querySelectorAll('.humans, .hobbits, .elves');
    console.log(filtered);

// 4. Selecteer alle hobbits met kinderen


// 5. Selecteer de Merry (de hobbit)


// 6. Selecteer .vijanden uit Sauron


// 7. Selecteer de .characters div van Nazgûl


// 8. Selecteer Elrond uit Glorfindel


// 9. Selecteer Legolas uit Glorfindel


// 10. Selecteer Arwen uit Glorfindel
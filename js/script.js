let pokemonList = ["Bulbasaur","Ivysaur","Venusaur","Charmander","Charmeleon","Charizard","Squirtle","Wartortle","Blastoise","Caterpie","Metapod","Butterfree","Weedle","Kakuna","Beedrill","Pidgey","Pidgeotto","Pidgeot","Rattata","Raticate","Spearow","Fearow","Ekans","Arbok","Pikachu","Raichu","Sandshrew","Sandslash","Nidoran","Nidorina","Nidoqueen","Nidoran","Nidorino","Nidoking","Clefairy","Clefable","Vulpix","Ninetales","Jigglypuff","Wigglytuff","Zubat","Golbat","Oddish","Gloom","Vileplume","Paras","Parasect","Venonat","Venomoth","Diglett","Dugtrio","Meowth","Persian","Psyduck","Golduck","Mankey","Primeape","Growlithe","Arcanine","Poliwag","Poliwhirl","Poliwrath","Abra","Kadabra","Alakazam","Machop","Machoke","Machamp","Bellsprout","Weepinbell","Victreebel","Tentacool","Tentacruel","Geodude","Graveler","Golem","Ponyta","Rapidash","Slowpoke","Slowbro","Magnemite","Magneton","Farfetch'd","Doduo","Dodrio","Seel","Dewgong","Grimer","Muk","Shellder","Cloyster","Gastly","Haunter","Gengar","Onix","Drowzee","Hypno","Krabby","Kingler","Voltorb","Electrode","Exeggcute","Exeggutor","Cubone","Marowak","Hitmonlee","Hitmonchan","Lickitung","Koffing","Weezing","Rhyhorn","Rhydon","Chansey","Tangela","Kangaskhan","Horsea","Seadra","Goldeen","Seaking","Staryu","Starmie","Mr. Mime","Scyther","Jynx","Electabuzz","Magmar","Pinsir","Tauros","Magikarp","Gyarados","Lapras","Ditto","Eevee","Vaporeon","Jolteon","Flareon","Porygon","Omanyte","Omastar","Kabuto","Kabutops","Aerodactyl","Snorlax","Articuno","Zapdos","Moltres","Dratini","Dragonair","Dragonite","Mewtwo","Mew"];

// Answers

// Question 1
document.getElementById("host-name").innerHTML = "Jess"
document.getElementById("collaborator-name").innerHTML = "Celine"



// Question 2
// You can also create their own CSS classes in style.css file and use that. 
document.addEventListener("DOMContentLoaded", function() {
    const instructions = document.querySelectorAll(".instructions");
    const toggleButton = document.getElementById("toggleButton");

    toggleButton.addEventListener("click", toggleInstructions);
    document.addEventListener("keydown", function(event) {
        if (event.key === "i") {
            toggleInstructions();
        }
    });

    function toggleInstructions() {
        instructions.forEach(function(instruction) {
            instruction.style.display = instruction.style.display === "none" ? "block" : "none";
        });

        toggleButton.textContent = toggleButton.textContent === "Hide Instructions (Press 'i')" ? "Show Instructions (Press 'i')" : "Hide Instructions (Press 'i')";
    }
});



// Question 3
// Try change event first
// There is another event which fires for every character. This is what we want to use.

document.addEventListener("DOMContentLoaded", function() {
    const firstNameInput = document.getElementById("first_name");
    const lastNameInput = document.getElementById("last_name");

    firstNameInput.addEventListener("input", function() {
        if (firstNameInput.value.toLowerCase() === "john") {
            lastNameInput.value = "Doe";
        } else {
            lastNameInput.value = ""; // Clear last name if first name is not 'John'
        }
    });
});

// Question 4
// Try change event first
// There is another event which fires for every character. This is what we want to use.



// Question 5
// Try change event first
// There is another event which fires for every character. This is what we want to use.
const passwordInput = document.getElementById('password');
const confirmPasswordInput = document.getElementById("confirm_password");
const passwordAlert = document.getElementById("password-alert");
const hidePasswordButton = document.getElementById('hide-password');

function passwordMatch(){
    const password = passwordInput.value;
    const confirmPassword = confirmPasswordInput.value;
            
    if (password === confirmPassword) {
        passwordAlert.textContent = 'Password Matches';
    } else {
        passwordAlert.textContent = 'Password does not match';
    }
}

passwordInput.addEventListener('input', checkPasswordMatch);
confirmPasswordInput.addEventListener('input', checkPasswordMatch);



//Question 6





//Question 7 





//Question 8





//Question 9 




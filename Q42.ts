// Great Magicians: Start with a copy of your program from Exercise 39. Write a function called make_great() that modifies the array of magicians by adding the phrase the Great to each magician’s name. Call show_magicians() to see that the list has actually been modified.

function show_magicians(magicians: string[]): void{
    for (const magician of magicians){
        console.log(magician + " " + "The Great");
        
    }
}
const magicians: string[] = ["David Copperfield", "Houdini", "Dynamo", "Penn & Teller"];
show_magicians(magicians)
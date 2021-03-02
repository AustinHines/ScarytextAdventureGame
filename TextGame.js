const enter = "please enter 1 or 2 for your answer";
const gameOver = "Have you not see a Horror movie before?";
const start = `Welcome to the scariest game in the world. Click 'OK' to start... If you dare!!!`
const q1 = `You are walking down the road on a dark and scary night with your friends and you hear a scream of someone in the broken abandoned mansion at the end of your road. What do you do???
1. call the cops immediately and wait for them to show
OR
2. Investigate with your friends and head towards the sound of screams
${enter}`;
const gameOver1 = `Are you serious you dont want to be a hero?
${gameOver}`;
const q2 = `As you open the door and step your feet through the ground sqeaks and the screaming stops as well as the door slams shut behind you locking you inside. What is your next move???
1. Split up your 4 friends into groups of 2 one group taking upstairs and one the basement
OR
2. Search the house together while looking for the exit and protecting each other
${enter}`;
const gameOver2 = `Why stick together when you can cover more ground split
${gameOver}`;
const q3 = `As you continue your way upstairs you see a light at the end of the hall in a small room. What is your next move???
1. Slowly make your way to the light and peek through the door 
OR
2.Sneak the other way avoiding contact with anyone or anything that maybe be in that room
${enter}`;
const gameOver3 = `You have to know what your up against go take a look!
${gameOver}`;
const q4 = `As you peek through the key hole the door slings open and a large man towers over you, you shriek and sprint the other way your friends hear and run with you away from the Man, As you run a unknown animal is beside you what do you do???
1.ignore the animal and run as fast as you can
OR
2.kick the unknown animal away from you
${enter}`;
const gameOver4 = `You dont want to ensure your safety and not get bitten by whatever is running beside you?
${gameOver}`;
const q5 = `You have escaped and hid from the Gigantic man and Unknown animal you see blue lights through the window and hear the front door open with yells of "It's the police show yourself" Do you???
1. Head to the safety of other humans
OR
2. Stay and hide in the house with the Maniacs
${enter}`;
const gameOver5 = `You want to run away from safety?
${gameOver}`;
const win = `As you head to the police you are put into handcuffs and arrested for tresspassing, Stalkng, And animal abuse The normal man stubed his toe and screamed so you procced to break his front door, spy on him in his room, and kick his dog? You should have just called the cops.`;

//Start of game
alert(start);

//user input to the number
let userInput = prompt(q1)

//1st statement
if (userInput == 2) {
    userInput = prompt(q2);
    //2nd statement
    if (userInput == 1) {
        userInput = prompt(q3);
        //3rd statement
        if (userInput == 1) {
            userInput = prompt(q4);
            //4th statement
            if (userInput == 2) {
                userInput = prompt(q5);
                //fifth statement
                if (userInput == 1) {
                    alert(win);
                }else[
                    alert(gameOver5)
                ]
            }else {
                alert(gameOver4)
            }

        }else {
            alert(gameOver3)
        }
    }else{
        alert(gameOver2);
    }
}else{
    alert(gameOver1);
}
    
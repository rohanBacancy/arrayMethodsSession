class Person{
    staticVar = 'Static1'
    constructor(name, age, hobbies, languages, isGaming){
        this.name = name
        this.age = age
        this.hobbies = hobbies
        this.languages = languages
        this.isGaming = isGaming
    }
    printPerson(){
        console.log(this)
    }
    startPlaying(){
        this.isGaming = true
    }
    login(){
        console.log("Person class's login")
    }
    complicatedBusinessLogic(){
        console.log('100 lines of complicated code')
    }
}

const rohan = new Person('Rohan', 24, ['Gaming'], ['Gujarati', 'Hindi', 'English'], true)
// const anish = new Person('Anish', 22, ['Singing'], ['Bengali', 'Hindi', 'English'], false)
// rohan.printPerson()
// anish.printPerson()
// anish.startPlaying()
// anish.printPerson()

// rohan.login()

// Inheritance

class Gamer extends Person{
    constructor(name, age, hobbies, languages, isGaming, gamesList){
        super(name, age, hobbies, languages, isGaming)
        this.gamesList = gamesList
    }
    // child only method
    plays(){
        console.log(`${this.name} plays ${this.gamesList}.`);
    }
    // Method overriding
    login(){
        console.log("Gamer class's login")
    }
    // Super keyword
    complicatedBusinessLogic(){
        super.complicatedBusinessLogic()
        console.log('Extra logic for gamers only')
    }
}

const gamerRohan = new Gamer(
    'RohanGamer', 
    24, 
    ['Gaming'], 
    ['Gujarati', 'Hindi', 'English'], 
    true, 
    ['battlefield 2042', 'warzone 2']
)

gamerRohan.login()
gamerRohan.plays()
gamerRohan.complicatedBusinessLogic()

// Won't work since plays method only exists in Gamer class
rohan.plays()

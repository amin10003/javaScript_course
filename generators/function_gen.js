function* printName() {
    yield "my nameis Guled"
    yield "I live in Somalia"
    yield "I am a front-end developer"
}


const gen = printName()
gen.next()
gen.next()
gen.next()

let result = gen.next()
console.log(result.done)
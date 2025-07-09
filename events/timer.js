function myFunction(){
    console.log("i live in london");
    console.log("I hate it")
}



// setTimeout(
//     myFunction, 5000);
// setInterval(
//     myFunction, 1000);

let timer = setInterval(
    myFunction, 1000
)

function stop() {
    clearInterval(timer)
}

setTimeout(stop, 10000)
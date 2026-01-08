function warnTheSheep(queue){
    const wolfindex = queue.indexOf("wolf");
    const sheepinFront = queue.length - wolfindex - 1;

    if (sheepinFront === 0){
        return "Pls go away and stop eating my sheep";
    } else {
        return `Oi! Sheep number ${sheepinFront}! You are about to be eaten by a wolf!`;
    }
}

console.log (warnTheSheep(["sheep","sheep","wolf","sheep","sheep","sheep",]));
console.log (warnTheSheep(["sheep","sheep","wolf",]));
console.log (warnTheSheep(["wolf","sheep","sheep",]));
    
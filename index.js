// Code your solution in this file!
const scuberHQ = 42

const distanceFromHqInBlocks = function(location) {
    let distance = scuberHQ >= location ?  scuberHQ - location : location - scuberHQ
    return distance
}

const distanceFromHqInFeet = function(location) {
    return distanceFromHqInBlocks(location) * 264
}
const distanceTravelledInFeet = function(start, destination) {
    let distance = start >= destination ?  start - destination : destination - start
    return distance * 264
}
const calculatesFarePrice = function(start, destination) {
    const distance = distanceTravelledInFeet(start, destination)
    let farePrice;
    switch (true) {
        case distance< 400: 
            farePrice = 0;
            break;
        case (distance >= 400 && distance <= 2000):
            farePrice = (distance - 400) * 0.02;
            break;
        case (distance > 2000 && distance < 2500): 
            farePrice = 25;
            break;
        default:
            farePrice = "cannot travel that far";
    }
    return farePrice;
}
let statistics = {
    redCars: 21,
    blueCars: 45,
    greenCars: 12,
    raceCars: 5,
    blackCars: 40,
    rareCars: 2
}

for(const obj in statistics){
    if(obj.charAt(0) == 'r' || statistics[obj]%2 == 1)
    console.log(statistics[obj])
}
const batteryBatches = [4, 5, 3, 4, 4, 6, 5];

//Using reduce to sum up all the battery counts
const totalBatteries = batteryBatches.reduce((accumulator, currentValue) => {
    return accumulator + currentValue;
}, 0);

console.log(totalBatteries);

// Code your solution here

// Code your solution in this file!

function distanceFromHqInBlocks(pickupLocation){
  // Takes in a pickup location for a passenger e.g. 50.
  // Returns the number of blocks from Scuber headquarters on 42nd Street.
  return pickupLocation > 42 ? (pickupLocation - 42) : (42 - pickupLocation); 
};

function distanceFromHqInFeet(blocks){
  let distanceInBlocks = blocks > 42 ? (blocks - 42) : (42 - blocks); 
  return (distanceInBlocks * 264) // Each block in Manhattan is 264 feet long.
}

function distanceTravelledInFeet(start, destination){
  return (Math.abs(start - destination)) * 264;
}

function calculatesFarePrice(start, destination){
  // Return the fare for the customer.
  let distance = (Math.abs(start - destination)) * 264;
  let fare = "";

  if(distance <= 400){
    fare = 0;
  }else if(distance > 400 && distance < 2000){
    // 2 cents per foot
    // 1 cent ~ $100
    fare = ((distance - 400) * 2) / 100; // But arriving to this was a bit confusing.
  }else if(distance > 2000 && distance < 2500){
    fare = 25;
  }else if(distance > 2500){
    fare = "cannot travel that far";
  };

  return fare;
}
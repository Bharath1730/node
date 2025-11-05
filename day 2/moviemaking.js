// movieMaking.js
const fs = require("fs");

console.log("🎬 Scene starts.");
console.log("📞 On starting, Surya receives a call from the pilot.");

setTimeout(() => {
  console.log("💥 Surya destroys the gate and comes into the aircraft location.");

  setTimeout(() => {
    console.log("🎧 Surya attends the call — ready to land the pilot in Tambaram.");

    setTimeout(() => {
      console.log("🎤 Surya speaks his dialogue and prepares for landing.");

      setTimeout(() => {
        console.log("🛬 The pilot lands the flight safely at the aircraft location.");
        console.log("🏁 Scene ends.");
      }, 2000);

    }, 2000);

  }, 3000);

}, 2000);

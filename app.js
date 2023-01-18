window.onload = function () {
   console.log("Is Working")

   let numbers = ["A", 2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K"];
   let signs = ["♦", "♥", "♠", "♣"];

   let randomNumber = numbers[Math.floor(Math.random() * numbers.length)];
   let randomSign = signs[Math.floor(Math.random() * signs.length)];

   let finalNumber = document.querySelector("#number");
   let finalSign = document.querySelector("#top");
   let finalSign2 = document.querySelector("#bot");

   if (randomSign == signs[2] || randomSign == signs[3]) {
       document.querySelector("#top").style.color = "black";
       document.querySelector("#bot").style.color = "black";
   }
   finalNumber.innerHTML = randomNumber;
   finalSign.innerHTML = randomSign;
   finalSign2.innerHTML = randomSign;
}

//store sells vanilla or chocolate for flavor
//store serves with sprinkles or peanut
// store delivers with sugar cone or wafer cone
const flavor = "strawberry";
const topping = "sprinkles";
const vessel = "wafer cone";


if ((flavor === "vanilla" || flavor === "chocolate") && (topping === "sprinkles" || topping === "peanuts") &&(vessel === "sugar cone" || vessel === "wafer cone")){
    console.log ("Great choice! Your fruit drink is at the next window.");
} else {
    console.log ("Please check our menu and try again.");
}
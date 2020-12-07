import {onSnake, expandSnake } from "./snake.js"
import {randomGridPosition} from "./grid.js"

let food = getRandomFoodPosition();
const EXPANSION_RATE = 1;
export let score = 0;

export function update () {
    if (onSnake(food)){
        expandSnake(EXPANSION_RATE);
        food = getRandomFoodPosition();
        score += EXPANSION_RATE;
    }
}

export function draw (gameboard) {

    const foodElement = document.createElement("div");
    foodElement.style.gridRowStart = food.y;
    foodElement.style.gridColumnStart = food.x;
    foodElement.classList.add("food");
    gameboard.appendChild(foodElement);

}

function getRandomFoodPosition () {
    let newFoodPosition;
    while (newFoodPosition == null || onSnake(newFoodPosition)) {
        newFoodPosition = randomGridPosition();
    }

    return newFoodPosition;
}
import {update as updateSnake, draw as drawSnake, SNAKE_SPEED, getSnakeHead, snakeIntersection} from "./snake.js"
import {update as updateFood, draw as drawFood, score} from "./food.js"
import {outsideGrid} from "./grid.js"

window.onload = function () {

    let lastRenderTime = 0;
    const gameboard = document.getElementById("game-board")
    let gameOver = false;

    function main (currentTime) {

        if (gameOver) {
            if (confirm("Verloren!! OK zum Neustarten")) {
                window.location = "/javascriptSnake";
            }
            return;
        }

        window.requestAnimationFrame(main)
        const secondsSinceLastRender = (currentTime-lastRenderTime) / 1000

        if (secondsSinceLastRender < (1 / SNAKE_SPEED)) {
            return
        }

        lastRenderTime = currentTime

        update()
        draw()
    }

    window.requestAnimationFrame(main)

    function update () {
        updateSnake();
        updateFood();
        checkForDeath();
        printscore();
    }

    function draw () {
        gameboard.innerHTML = "";
        drawSnake(gameboard);
        drawFood(gameboard)
    }

    function checkForDeath () {
        gameOver = outsideGrid(getSnakeHead()) || snakeIntersection();
    }

    function printscore () {
        document.getElementById("scorep").innerHTML = "Score: " +score;
        console.log("updatingscore!!")
    }

}

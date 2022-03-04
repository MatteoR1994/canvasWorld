const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');

const sprites = World.build(Levels.getLevel(0));

const controller = new Controller();

setInterval(() => {
    context.clearRect(0, 0, canvas.width, canvas.height);
    for (const sprite of sprites) {
        sprite.draw(context);
        if (sprite.isPlayer) {
            let player = sprite;
            for (const wall of sprites) {
                if (!wall.isPlayer) {
                    checkCollision(player, wall);
                }
            }
        }
        sprite.update(canvas, controller);
    }
}, 30);

function checkCollision(player, wall) {
    const collidingX = player.x < (wall.x + wall.width) && (player.x + player.width) > wall.x;
    const collidingY = player.y < (wall.y + wall.height) && (player.y + player.height) > wall.y;
    if (collidingX && collidingY) {
        // if (player.x <= wall.x + wall.width && player.x + player.width >= wall.x) {
        //     player.speedX *= -1;
        //     player.speedY = 0;
        // }
        // if (player.y <= wall.y + wall.height && player.y + player.height >= wall.y) {
        //     player.speedY *= -1;
        //     player.speedX = 0;
        // }
        // if (player.x < wall.x + wall.width) {
        //     player.speedX *= -1;
        // } else if (player.x + player.width > wall.x) {
        //     player.speedX *= -1;
        // } else if (player.y < wall.y + wall.height) {
        //     player.speedY *= -1;
        // } else if (player.y + player.height > wall.y) {
        //     player.speedY *= -1;
        // }

        // if ((player.x < wall.x + wall.width || player.x + player.width > wall.x)) {
        //     player.speedX *= -1;
        // }
        // if((player.y < wall.y + wall.height || player.y + player.height > wall.y)) {
        //     player.speedY *= -1;
        //     player.speedX *= -1;
        // }

        if((player.y < wall.y + wall.height && (player.x > wall.x && player.x < wall.x + wall.width))||(player.y + player.height > wall.y && (player.x > wall.x && player.x < wall.x + wall.width))) {
            player.speedY *= -1;
        } else if((player.x < wall.x + wall.width && (player.y > wall.y && player.y < wall.y + wall.height))||(player.x + player.width > wall.x && (player.y > wall.y && player.y < wall.y + wall.height))) {
            player.speedX *= -1;
        }
    }
}
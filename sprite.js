class RectSprite {

    constructor(x, y, width, height, speedX, speedY, color) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.speedX = speedX;
        this.speedY = speedY;
        this.color = color;
    }

    update(canvas) {
        this.x = this.x + this.speedX;
        this.y = this.y + this.speedY;
        if (this.x > canvas.width - this.width || this.x < 0) {
            this.speedX = this.speedX * -1;
        }
        if (this.y > canvas.height - this.height || this.y < 0) {
            this.speedY = this.speedY * -1;
        }
    }

    draw(context) {
        context.fillStyle = this.color;
        context.fillRect(this.x, this.y, this.width, this.height);
    }

}


class CircleSprite {

    constructor(x, y, radius, speedX, speedY, color) {
        this.x = x;
        this.y = y;
        this.radius = radius;
        this.speedX = speedX;
        this.speedY = speedY;
        this.color = color;
    }

    update(canvas) {
        this.x = this.x + this.speedX;
        this.y = this.y + this.speedY;
        if (this.x > canvas.width - this.radius || this.x < this.radius) {
            this.speedX = this.speedX * -1;
        }
        if (this.y > canvas.height - this.radius || this.y < this.radius) {
            this.speedY = this.speedY * -1;
        }
    }

    randomUpdate(canvas) {
        const random = Math.random();
        if (random <= 0.05) {
            this.speedX = MathC.randomFloatFromInterval(-1, 1);
            this.speedY = MathC.randomFloatFromInterval(-1, 1);
        }
        this.x = this.x + this.speedX;
        this.y = this.y + this.speedY;
        if (this.x > canvas.width - this.radius || this.x < this.radius) {
            this.speedX = this.speedX * -1;
        }
        if (this.y > canvas.height - this.radius || this.y < this.radius) {
            this.speedY = this.speedY * -1;
        }
    }

    draw(context) {
        context.fillStyle = this.color;
        context.beginPath();
        context.arc(this.x, this.y, this.radius, 0, 2 * Math.PI); // Un cerchio intero è 2 volte Pi greco
        context.fill();
    }

}


class PlayerSprite extends RectSprite {

    constructor(x, y, width, height, speedX, speedY) {
        super(x, y, width, height, speedX, speedY, "yellow");
        this.isPlayer = true;
    }

    update(canvas, controller) {
        if (controller.isUpClicked) {
            this.speedY += -0.1;
        }
        if (controller.isDownClicked) {
            this.speedY += 0.1;
        }
        if (controller.isRightClicked) {
            this.speedX += 0.1;
        }
        if (controller.isLeftClicked) {
            this.speedX += -0.1;
        }
        super.update(canvas);
    }

}
export default class IngCircle {

    constructor(context, wcenter, hcenter, x, y, orbitradius, xspeed, yspeed, ing, noise) {
        this.noise = noise
        this.context = context;
        this.x = x;
        this.y = y;
        this.orbitradius = [orbitradius * 0.55, orbitradius * 0.3, orbitradius * 0.2];
        this.xspeed = xspeed;
        this.yspeed = yspeed;
        this.radius = 2
        this.selected = false;
        this.ing = ing;
        this.distance = this.orbitradius[0];
        this.colorArray = ['#aaaaaa22', '#68A7C0', '#D96B52']
        this.currentColor = this.colorArray[0];
        this.center = [wcenter, hcenter]
            // i=0; before selection, i=1 selected, i=2 while selected
    }

    draw() {
        this.context.beginPath();
        this.context.arc(
            this.center[0] + this.distance * Math.cos(this.x) * this.noise + Math.random() * 10,
            this.center[1] + this.distance * Math.sin(this.y) * this.noise + Math.random() * 10,
            this.radius,
            0,
            Math.PI * 2)

        this.context.fillStyle = this.currentColor
        this.context.fill()
        this.context.closePath();
    }
    move() {
        this.x += this.xspeed;
        this.y += this.yspeed
    }

}
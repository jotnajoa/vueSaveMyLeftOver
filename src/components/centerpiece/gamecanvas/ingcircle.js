export default class IngCircle {

    constructor(context, wcenter, hcenter, x, orbitradius, ing, noise, stage, biggest, finalIndex) {
        this.noise = noise
        this.context = context;
        this.x = x;
        this.y = x;
        this.rad = orbitradius;
        this.orbitradius = [];
        for (let i = 0; i < 10; i++) {
            this.orbitradius.push(this.rad * (1 - 0.15 * i))
        }
        this.checkout = false;
        this.finalIndex = finalIndex;
        this.biggest = biggest;
        this.blurIs = false;
        this.xspeed = 0.01;
        this.yspeed = 0.01;
        this.radius = [1, 2, 3, 4, 5, 6, 23, 27, 31, 35];
        this.currentRadius = 1
        this.ing = ing;
        this.selection = ing.selection;
        this.distance = this.orbitradius[0];
        this.colorArray = [];
        this.finalColor = '#7CACC0';
        this.stage = stage;
        this.colorArray = ['#7cacbf20', '#68a7c0c9'];
        this.currentColor = this.colorArray[0];
        this.center = [wcenter, hcenter];
        this.rand = Math.random() * 10
            // this.iniFrame = 0;
            // this.finalFrame = 500;
            // i=0; before selection, i=1 selected, i=2 while selected
    }

    draw() {

        this.context.beginPath();
        this.blurcheck();


        let xpos, ypos

        if (this.checkout && this.selection == this.biggest) {
            this.rand = 0;
            this.currentRadius = 5
            xpos = this.center[0] - (this.distance / 2) + ((this.finalIndex % 10) * this.distance / 8)
            ypos = this.center[1] - (this.distance / 2) + this.distance / 2 * Math.sin(this.y) * this.noise + this.rand +
                (Math.floor(this.finalIndex / 10) * this.distance / 10)

            this.currentColor = '#D96B52'
            this.context.shadowColor = '#D96B52'

            this.context.arc(
                xpos, ypos,
                this.currentRadius,
                0,
                Math.PI * 2)

            this.context.fillStyle = this.currentColor
            this.context.fill()
            this.context.closePath();
        } else {
            xpos = this.center[0] + this.distance * Math.cos(this.x) * this.noise + this.rand;
            ypos = this.center[1] + this.distance * Math.sin(this.y) * this.noise + this.rand;
        }

        if (!this.checkout) {
            this.context.arc(
                xpos, ypos,
                this.currentRadius,
                0,
                Math.PI * 2)

            this.context.fillStyle = this.currentColor
            this.context.fill()
            this.context.closePath();
        } else {
            this.context.arc(
                xpos, ypos,
                this.currentRadius,
                0,
                Math.PI * 2)

            this.context.fillStyle = '#7cacbf05'
            this.context.fill()
            this.context.closePath();
        }



        this.update()
    }
    update() {

        if (this.stage == 2 && this.selection == 2) {
            this.updateCircle(1);
        }
        if (this.stage == 3 && this.selection == 3) {
            this.updateCircle(2)
        }
        if (this.stage == 4 && this.selection == 4) {
            this.updateCircle(3)
        }
        if (this.stage == 5 && this.selection == 5) {
            this.updateCircle(4)
        }
        if (this.stage == 6 && this.selection == 6) {
            this.updateCircle(5)
        }
        if (this.stage == 7 && this.selection == 7) {
            this.updateCircle(6)
        }
        if (this.stage == 8 && this.selection == 8) {
            this.updateCircle(7)
        }
        if (this.stage == 9 && this.selection == 9) {
            this.updateCircle(8)
        }
        if (this.stage == 10 && this.selection == 10) {
            this.updateCircle(9)
        }
        if (this.biggest != 1 && this.selection == this.biggest) {
            this.blurIs = true;
        } else { this.blurIs = false }

        if (this.checkout && this.selection == this.biggest) {
            this.y = this.y / 2;
        }
    }
    move() {
        this.x += this.xspeed;
        this.y += this.yspeed
    }
    blurcheck() {
        if (this.blurIs) {
            this.context.lineWidth = 1;
            this.context.strokeStyle = '#68A7C0';
            this.context.shadowColor = '#68A7C0';
            this.context.shadowOffsetX = 0;
            this.context.shadowOffsetY = 0;
            this.context.shadowBlur = 2;
            this.currentColor = this.colorArray[1]
        } else {
            this.context.lineWidth = 0;
            this.context.strokeStyle = '#68A7C0';
            this.context.shadowColor = '#68A7C0';
            this.context.shadowOffsetX = 0;
            this.context.shadowOffsetY = 0;
            this.context.shadowBlur = 0;
            this.currentColor = this.colorArray[0]
        }
    }

    updateCircle(num) {
            this.currentRadius = this.radius[Math.floor(num / 3)]
            this.distance = this.orbitradius[num]
        }
        // endMove() {
        //     this.xspeed = 0;
        //     this.yspeed = 0;
        // }

}
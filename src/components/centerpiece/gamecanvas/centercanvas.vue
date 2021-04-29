<template>
    <div 
    v-bind:style="{ width: `${width}px`, height: `${height}px`}">
        <canvas id='interface'></canvas>
    </div>

</template>
<script>
import IngCircle from './ingcircle.js'
export default {
props:['width','height'],
inject:['allData','ingCollection','selectedIngred'],
// 전체 레시피 데이터를 받아야된다
data() {
    return {
        circlearray:[],
        canvas:null,
        context:undefined,
        orbitradius:this.width*1/3,
        speed:0.06
    }
},

mounted(){
    window.addEventListener('resize',this.canvasresize)
    let canvas = document.querySelector('#interface');
    let context = canvas.getContext('2d');
    this.canvas=canvas;
    this.context=context;
    this.canvas.width=this.width;
    this.canvas.height=this.height;

    function getRandomArbitrary(min, max) {
      return Math.random() * (max - min) + min;
    }

    // this.allData.forEach((d,i)=>{

    for (let i =0; i<10000;i++){
    var noise = getRandomArbitrary(0.8,1);
    this.circlearray.push( new IngCircle(this.context,this.width/4,this.height/2,i,i,this.orbitradius,this.speed,this.speed,this.allData[i],noise))
    }
    // })

    this.renderCircle()
    this.frameAnimate()
},
  unmounted(){
      window.removeEventListener('resize',this.canvasresize)
  },
    updated(){
            this.canvas.width=this.width;
            this.canvas.height=this.height;
            this.renderCircle()
            this.frameAnimate()
    },

    methods: {
        canvasresize(){
            this.circlearray.forEach((d)=>{
                d.center =[this.width/4,this.height/2]
            })
        },
        renderCircle(){

                this.circlearray.forEach((d)=>{
                    d.draw()
                    d.move()
                })

        },
        frameAnimate(){
            requestAnimationFrame(this.frameAnimate);
            this.context.clearRect(0,0,this.width,this.height);
            this.renderCircle()
        }

    }
}
</script>

<style scoped>

</style>

<template>
<div class="centercontainer" :class="{active:visible}">
    
    
    <div class="centerTitle bigtext">
        Choose your sleeping ingredients <p style='display:none'></p>
    </div>

    <div class='gamepiece' v-show="selectedComponent=='bottom-container'">
        <!-- <center-canvas v-if="selectedComponent=='bottom-container'"
        :width='width'
        :height='height'
        > 
         </center-canvas>
        -->

        <div v-show="selectedComponent=='bottom-container'"
            style='position:relative'
            v-bind:style="{ width: `${width}px`, height: `${height}px`}">
            <canvas id='interface' style='position:absolute'></canvas>
        </div>
            <canvas-desc :clicked="clicked"
            :circleArray="circleArray"
            :width="width"
            :height="height"
            :checkedout='checkedout'
            v-if="selectedComponent=='bottom-container'"
            :max='max'
            />
        


       
        <bottom-container :checkedout='checkedout'>

        </bottom-container>
        <summary-container
        :width='width'
        :height='height'       
        ></summary-container>

    </div>

    <div class='centerPiece' v-show="selectedComponent=='ing-blocks'">

        <ing-blocks v-for="(ings,index) in ingCollection"
        :key=index
        :ingname=ings
        :index=index
        :class="{finished:stop}"
         >
        </ing-blocks>
        
    </div>

</div>
<div class="controller">

<div class="selections">
    <img @click='selectComponents("ing-blocks");toggleonSide();cleanValue()' src='goback.png' class='buttonimg'>
    <div>Go back</div>
</div>
<div class="selections" v-show="selectedComponent=='ing-blocks'">
    <img  @click='selectComponents("bottom-container"); toggleoffSide() ' src='check.png' class='buttonimg'>
    <div>Complete</div>
</div>
<div class="selections" v-show="selectedComponent!='ing-blocks'">
    <img  @click='checkout' src='checkout.png' class='buttonimg'>
    <div>Check out</div>
    </div>
</div>
</template>

<script>

import CanvasDesc from './gamecanvas/canvasDesc.vue'
import IngCircle from './gamecanvas/ingcircle.js'
import ingBlocks from './ingBlocks.vue'
import bottomContainer from './gamecanvas/bottomcontainers.vue'
import SummaryContainer from './gamecanvas/sumcontainer.vue'
// import IngCircle from './gamecanvas/ingcircle.js'
export default {
    inject:['ingCollection','selectedIngred','toggleoffSide','toggleonSide','allData','clicked'],
    props:['visibleSide'],
    data(){
        return{
            isGame:"ing-blocks",
            selectedComponent:'ing-blocks',
            width:undefined,
            height:undefined,
            noise:0,
            orbitradius:undefined,
            canvas:null,
            context:undefined,
            stage:1,
            max:1,
            checkedout:false,
            // cleanup:false
        }
    },
    methods:{
        cleanValue(){
            this.checkedout=false;
            this.cleanup=true;
            setTimeout(()=>{this.cleanup=false},500)
        },
        checkout(){
            this.checkedout=true
            this.circleArray.forEach((d)=>{
                d.checkout=true
            })

 
             let finalArray=[];


                  finalArray= this.circleArray.filter(d=>d.selection==d.biggest);
                  finalArray.forEach((d,i)=>{
                      d.finalIndex=i
                  });


                finalArray.forEach((d)=>{
                    this.circleArray.forEach((t)=>{
                        if(t.ing.id==d.ing.id){
                            t.finalIndex=d.finalIndex
                        }
                    })
                })
               
        },
        getRandomArbitrary(min, max) {
                        return Math.random() * (max - min) + min;
        },
        selectComponents(selected){
            this.selectedComponent = selected
            this.showBottomAgain();
        },
        showBottomAgain(){
            this.checkedout=false;
        },
        // resizewidth(){
        //     this.width=document.querySelector('.bottomcontainer').clientWidth;
        //     // this.height=document.querySelector('.centercontainer').clientHeight*0.6;
        // },
        renderCircle(){
                this.circleArray.forEach((d)=>{
                    d.draw()
                    d.move()
                })

        },
        frameAnimate(){
            requestAnimationFrame(this.frameAnimate);
            this.context.clearRect(0,0,this.width,this.height);
            this.renderCircle()
        }
    },
    components:{
        ingBlocks,bottomContainer,SummaryContainer,
        CanvasDesc
    },
    computed:{
        stop(){
if(this.selectedIngred.length>=10){
    return true
}else{return false}
        },
        visible(){
            return this.visibleSide==true
        },
        circleArray(){

    let ingArray = [];

    for(let i =0; i<this.allData.length;i++){
        let org = {...this.allData[i]};
        org.selection=0;
        ingArray.push(org)
    }
    // for(let i =0; i<10000;i++){
    //     ingArray.push(this.allData[i])
    // }

    if(this.selectedIngred.length>0){
        this.selectedIngred.forEach((t)=>{
            ingArray.forEach((d)=>{
                if(d.ingredients.includes(t.name)&&d.selection<11){
                    d.selection++
                }
            })
        })
    }
    let slimArr = ingArray.filter(d=>d.selection!=0)

    let circlearray=[];
    // let stage=1;

    slimArr.forEach((d,i)=>{
        circlearray.push( 
        new IngCircle(
        this.context,
        this.width/4,
        this.height/2,
        i,
        this.orbitradius,
        d,
        this.noise,
        1,
        1,
        0
        ))
    })



            return circlearray
    },
    },
  mounted(){
    this.width=document.querySelector('.centercontainer').clientWidth*(9/7);
    this.height=document.querySelector('.centercontainer').clientHeight*0.6;
    this.orbitradius=(this.height/2),
    // window.addEventListener('resize',this.resizewidth)
    this.noise = this.getRandomArbitrary(0.9,1);

    // define canvas and context
    let canvas = document.querySelector('#interface');
    let context = canvas.getContext('2d');
    this.canvas=canvas;
    this.context=context;
    this.canvas.width=this.width;
    this.canvas.height=this.height;
    //

    this.renderCircle()
    this.frameAnimate()
  },
  unmounted(){
    // window.removeEventListener('resize',this.resizewidth)
  },
  watch: {
      clicked:{
          handler:function(a){
              this.stage=a.length;

              if(a.length>1){
                  this.circleArray.forEach((d)=>{
                      d.stage=a.length;
                  })
              }

            // let selectionArr = this.circleArray.map(d=>d.selection);
            // let selects = new Set([...selectionArr]);
            // let max = Math.max(...selects)
            this.circleArray.forEach((d)=>{
                if(d.selection==d.stage){
                    let value = [];
                    value.push(d.selection);
                    let valueSet = new Set([...value]);
                    let values=Math.max(...valueSet);
                    this.max=values;
                }
            });
            this.circleArray.forEach((d)=>{d.biggest=this.max})

          },
          deep:true
      }
  }

}
</script>

<style scoped>


.centercontainer{
position:relative;
width:70%;
height:100vh;
color:#D9D1C7;
}
.active{
    width:90%;
}

.centerTitle{
    display:grid;
    width:100%;
    height:10%;
    text-align:center;
    align-items: center;
    /* border:solid 1px red; */
}
.centerPiece{
    /* border-radius:20px; */
    width:90%;
    height:70%;
    display:grid;
    grid-template-columns: repeat(5,1fr);
    grid-template-rows:auto;
    overflow-y:scroll;
    gap:55px 0px;
    justify-items:center;
    padding-top:55px;
    margin:auto;
}
.gamepiece{
    /* border:solid 1px tomato; */
    opacity:1;

}
.controller{
    width:12vw;
    height:100vh;
    right:0vw;
    position:absolute;
    display:flex;
    flex-direction:column-reverse;
    text-align:center;
    align-content:flex-end;
    gap:40px 0px;
    color:#D9D1C7;
}
.buttonimg{
    width:40px;
    height:40px;
}
.selections{
    transform:translate(0,-5vh);
    cursor: pointer;
}
.div{
    color:#7cacbf20;
    color:#68A7C0;
    color:#D96B52;

}
.finished{
    opacity:0.5;
    pointer-events: none;
}


</style>
<template>
<div class="centercontainer" :class="{active:visible}">
    
    
    <div class="centerTitle" v-show="selectedComponent!='bottom-container'">
        <div class='midtext leftshift' style='font-weight:bold'>Choose your sleeping ingredients</div>
        <div class='smalltext leftshift' style='font-weight:thin'>Select ingredients you already have and explore dishes you can make using them!</div>
            <div class='searchsection leftshift'>
            <input class="search" v-on:keyup.enter="searching" v-model='searchword'>
            <img class='searchicon' @click='searching' src='searchicon.png'>
            </div>
        <!-- </input> -->
    </div>

    <div class="sideTitle" v-if="selectedComponent=='bottom-container'">
        <div class='midtext leftshift'>Explore Dishes</div>
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
        :ingname=ings.ing
        :index=index
        :class="{finished:stop , hideIng:!ings.visible}"
         >
        </ing-blocks>
        
    </div>

</div>
<div class="controller">

<div class="selections" v-show="selectedComponent!='ing-blocks'">
    <img @click='selectComponents("ing-blocks");toggleonSide();cleanValue()' src='goback.png' class='buttonimg'>
    <div>Go back</div>
</div>
<div class="selections" v-show="selectedComponent=='ing-blocks'">
    <img  @click='selectComponents("bottom-container"); toggleoffSide() ' src='check.png' class='buttonimg'>
    <div>Complete</div>
</div>
<div class="selections" v-show="selectedComponent!='ing-blocks'">
    <img  @click='checkout' src='checkout.png' 
    class='buttonimg'
    :class="{finished:finish}"
    >
    <div :class="{finished:finish}">Check out</div>
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
            searchword:'',
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
            finish:false
            // cleanup:false
        }
    },
    methods:{
        searching(){
            this.ingCollection.forEach((d)=>{
                if(this.searchword.length>1){
                    let ings = d.ing.split(' ');
                let include = ings.includes(this.searchword);
                console.log(include)
                if(include){
                    d.visible=true
                }else{
                    d.visible=false;
                }
                }else if(this.searchword==''){
                    d.visible=true;
                }
                
            })
            console.log(this.searchword)

        },
        cleanValue(){
            this.checkedout=false;
            this.cleanup=true;
            setTimeout(()=>{this.cleanup=false},500)
            this.finish=false;
        },
        checkout(){
            this.checkedout=true
            this.circleArray.forEach((d)=>{
                d.checkout=true
            })
            this.finish=true;

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
    border-bottom:solid 1px #97979734;
    box-shadow: 0 2px 2px 0px rgba(58, 58, 58, 0.673);
    background:rgba(0, 0, 0, 0.182);
    /* display:grid; */
    width:107%;
    height:15%;
    /* text-align:center; */
    /* align-items: center; */
    /* border:solid 1px red; */
}
.sideTitle{
    height:10%;
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
    opacity:0.3;
    pointer-events: none;
}
.search{
  background: transparent;
  color: #D9D1C7;
  border: none;
  height:1.5rem;
  width:430px;
  outline: none;
  resize: none;
  border-radius:5px;
}
.searchsection{
    position:relative;
    top:1rem;
    border: solid 1px #d9d1c777;
    width: 450px;
}
.searchicon{
    width:18px;
    display:inline;
    position:absolute;
    right:2px;
    top:4px;
    cursor: pointer;
}
.hideIng{
    display:none;
}

</style>
<template>
<div class="centercontainer" :class="{active:visible}">
    
    
    <div class="centerTitle bigtext">
        Choose your sleeping ingredients
    </div>

    <div class='gamepiece' v-show="selectedComponent=='bottom-container'">
        <center-canvas v-if="selectedComponent=='bottom-container'"
        :width='width'
        :height='height'>
        </center-canvas>
        <bottom-container>

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
         >
        </ing-blocks>

    </div>

</div>
<div class="controller">

<div class="selections">
    <img @click='selectComponents("ing-blocks");toggleonSide()' src='goback.png' class='buttonimg'>
    <div>Go back</div>
</div>
<div class="selections" v-show="selectedComponent=='ing-blocks'">
    <img  @click='selectComponents("bottom-container"); toggleoffSide() ' src='check.png' class='buttonimg'>
    <div>Complete</div>
</div>
</div>
</template>

<script>
import ingBlocks from './ingBlocks.vue'
import bottomContainer from './gamecanvas/bottomcontainers.vue'
import CenterCanvas from './gamecanvas/centercanvas.vue'
import SummaryContainer from './gamecanvas/sumcontainer.vue'

export default {
    inject:['ingCollection','selectedIngred','toggleoffSide','toggleonSide'],
    props:['visibleSide'],
    data(){
        return{
            isGame:"ing-blocks",
            selectedComponent:'ing-blocks',
            width:undefined,
            height:undefined
        }
    },
    methods:{
 
        selectComponents(selected){

            this.selectedComponent = selected

        },
        resizewidth(){
            this.width=document.querySelector('.bottomcontainer').clientWidth;
            this.height=document.querySelector('.centercontainer').clientHeight*0.6;
        }
    },
    components:{
        ingBlocks,bottomContainer,CenterCanvas,SummaryContainer
    },
    computed:{
        visible(){
            return this.visibleSide==true
        }
    },
  mounted(){
    this.width=document.querySelector('.centercontainer').clientWidth*(9/7);
    this.height=document.querySelector('.centercontainer').clientHeight*0.6;
    console.log(this.height,this.width)
    window.addEventListener('resize',this.resizewidth)
  },
  unmounted(){
    window.removeEventListener('resize',this.resizewidth)
  },

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


</style>
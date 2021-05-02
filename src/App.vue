<template>
  <div class='gameinterface'>
    <transition name='slide'>
    <side-panel v-show="sideisVisible"></side-panel>
    </transition>
    <center-piece :visibleSide="!sideisVisible"></center-piece>
  </div>
</template>

<script>
import * as d3 from 'd3'
import sidePanel from './components/sidepanel/sidePanel.vue'
import centerPiece from './components/centerpiece/centerPiece.vue'
export default {

  data(){
    return{
    allData:[],
    ingCollection:[],
    selectedDish:[],
    selectedIngred:[],
    sideisVisible:true,
    clicked:[]
    }
  },

  
  mounted(){
    Promise.all([
      d3.json('data.json'),
      d3.json('ingredientsonly.json')
    ]).then((data)=>{
      data[0].forEach((d)=>{
        this.allData.push(d)
      })
      data[1].forEach((t,i)=>{
        // for ingredient selection, 
        // later on, need to sort the ingredients by
        // frequency of the ingredients in the data set
        if(i<100){
      this.ingCollection.push(t)
        }
      })

    })
  },
  components:{sidePanel,centerPiece},

  methods: {
    dishNavigate(e){

      if(!this.clicked.includes(e)){
        this.clicked.push(e)
      } else{
        let index = this.clicked.indexOf(e);
        this.clicked.splice(index,1)
      }
      
      
    },
    toggleoffSide(){
      this.sideisVisible=false;
      this.unfold=true
    },
    toggleonSide(){
      this.sideisVisible=true;
      this.unfold=false
      this.selectedDish.splice(0)
      this.selectedIngred.splice(0)
      this.clicked.splice(0)
     
     
    },
    receiveIngredients(selected,img){
      // console.log(selected)
      if(!this.selectedIngred.some(el => el.name==selected)){


      let ingobj = new Object();
      ingobj.img=img;
      ingobj.name=selected;

      this.selectedIngred.push(ingobj)

      let dishes=this.allData.filter((t)=>{return t.ingredients.includes(selected)});

      dishes.forEach((d)=>{
        if(!this.selectedDish.includes(d)){
        this.selectedDish.push(d)
        }
      })
      // console.log(this.selectedDish)

      } else{
        console.log('already has that')
      }
    },
    removeIngredient(selected){
      this.clicked.splice(0,1)
      let index;
      this.selectedIngred.forEach((d,i)=>{
        if(d.name==selected){
          index=i;
        }
      })
      this.selectedIngred.splice(index,1)
      this.clicked.push(selected)
      console.log(this.selectedIngreds)
      
    }
  },
    provide() {
    return{
    allData:this.allData,
    ingCollection:this.ingCollection,
    selectedDish:this.selectedDish,
    receiveIngredients:this.receiveIngredients,
    selectedIngred:this.selectedIngred,
    sideisVisible:this.sideisVisible,
    toggleoffSide:this.toggleoffSide,
    toggleonSide:this.toggleonSide,
    removeIngredient:this.removeIngredient,
    clicked:this.clicked,
    dishNavigate:this.dishNavigate
    }
  }
}
</script>

<style>
@import url('https://use.typekit.net/qtl2aho.css');


#app{
  font-family:Providence Sans pro;
  background:radial-gradient(#2D4059,#0E151E);
}
.gameinterface{
  display:flex;
}
.bigtext{
  font-size:2rem;
}
.midtext{
  font-size:1.2rem;
}
.smalltext{
  font-size:0.7rem;
}
.slide-enter-active{
  animation:slidein 1s reverse ease-out
}
.slide-leave-active{
  animation:slidein 1s forwards ease-out
}
@keyframes slidein {
  from{
    transform:translate(0%,0);
    opacity:1

  }
  to{
    transform:translate(-100%,0);
    opacity:0

  }
}

</style>
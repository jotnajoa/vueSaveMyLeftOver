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
    clicked:[],
    instructions:[]
    }
  },

  
  mounted(){
    Promise.all([
      d3.json('data1.json'),
      d3.json('freqIng6.json'),
      d3.json('instructions.json')
    ]).then((data)=>{
      data[0].forEach((d)=>{
        this.allData.push(d)
      })

      let arr = Object.keys(data[1]);

      data[2].forEach((d)=>{
        this.instructions.push(d)
      })

// only top 200
for(let i = 0; i<200; i++){
  let ing = arr[i];
  let visible = true;
  let obj ={ing:ing,visible:visible};
  this.ingCollection.push(obj)
}
/* having all ingredients
      arr.forEach((t)=>{
        let ing = t;
        let visible = true;
        let obj ={ing:ing,visible:visible};
        this.ingCollection.push(obj)
      })
*/

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
    dishNavigate:this.dishNavigate,
    instructions:this.instructions
    }
  }
}
</script>

<style>
@import url('https://use.typekit.net/qtl2aho.css');

/* font-family: acumin-pro, */
#app{
  font-family:Providence Sans pro;
  background:radial-gradient(#2D4059,#0E151E);
}
.gameinterface{
  display:flex;
}
.bigtext{
  font-family:Providence Sans pro;
  font-size:1.5rem;
}



.midtext{
  font-family:Providence Sans pro;
  font-size:1rem;
}

.smalltext{
  font-family:Providence Sans pro;
  font-size:0.7rem;
}
.tinytext{
  font-family:macho;
  font-size:0.7rem;
}
.clearbigtext{
  font-family:macho;
  font-size:1.5rem;
}
.clearmidtext{
  font-family:macho;
  font-size:1rem;
  font-weight:100;
}
.clearsmalltext{
  font-family:macho;
  font-size:0.7rem;
}
.slide-enter-active{
  animation:slidein 1s reverse ease-out
}
.slide-leave-active{
  animation:slidein 1s forwards ease-out
}
.leftshift{
  margin-left:15px;
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
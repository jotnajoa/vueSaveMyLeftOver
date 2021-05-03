<template>
<div class="template">
    <div class='orbitcontainer'
    :style="{right:`${customWidth*0.30}px`,height:`${customHeight*0.45}px`,width:`${customWidth*(3/4-0.3)}px`}"
    >
        <div v-for='stage of stageNumber' 
        :key=stage
        :style="{width:'95%',
        top:`${circleArray[0].orbitradius[0]-circleArray[0].orbitradius[stage-1]}px`        
        }"
        class='indicators clearsmalltext'
        :class="{active:stage==stageNumber,checkedout:checkedout}"
        >
            <span >{{stage}}</span><span > ingredient:</span><span style='padding-left:5px' class='clearmidtext'>{{ingCounter[stage].count}}</span>
            </div>
        <!-- {{clicked.length}},{{circleArray.length}},{{width}},{{height}} -->
    </div>
    <div v-show="checkedout" class='bottomDesc' :style="{height:`${customHeight*0.45}px`,transform:`translate(0,${0}px)`}">
        <div class="icons clearsmalltext" v-for="(final,index) of finalCheckout" :key=index 
        :style="{height:`${customHeight*0.35}px`
        ,width:`${computedWidth[index]}px`}"
         :class="{expand:finalCheckout[index].expand,hide:!finalCheckout[index].visible}" 
        >
            <img src="expandW.png" 
            v-if='collapsed'
            class='imgs'
            @click='expandSelection(index)'
            :style="{left:`${customHeight*0.16}px`,top:`${customHeight*0.10}px`}"
            >
            <img src="collapse.png" 
            v-if='!collapsed'
            class='imgs'
            @click='collapseSelection(index)'
            :style="{left:`${customHeight*0.16}px`,top:`${customHeight*0.10}px`}"
            >
            <div
            :class="{expand:finalCheckout[index].expand}" 
            class='dishTitle'
            :style="{left:`${customHeight*0}px`,
            top:`${customHeight*0.16}px`,
            width:`${finalCheckout[index].expand==true? countingWidth:150}px`
            }"
            >{{final.ing.title}} <div v-if='!collapsed' style='color:#D9D1C7;cursor:pointer;text-decoration:underline' class='clearmidtext' @click='modalOpen'>Show Details</div></div>

            <div class="ingCounting" 
            v-if='!collapsed'
            :style="{left:`${customWidth*0.3}px`,width:`${countingWidth}px`}">
                <div class="headmsg">How many you have already</div>
                <div class="countings" 
                :style="{width:`${countingWidth}px`,
                height:`${customHeight*0.3}px`
                }">
                    <!-- <div v-for='(ings,index) of totalIngs' 
                    :key=index
                    class='ings'
                    :class="{has:ings.has}"
                    > -->
                    <img v-for='(ings,index) of totalIngs' :src="require(`../../../../public/block${index%4}.png`)"
                    :key=index
                    class='ings'
                    :class="{has:ings.has}"
                    >

                    <!-- </div> -->
                </div>
            </div>

            <div class="allIngs"
            v-if='!collapsed'
            :style="{left:`${customWidth*0.55}px`,width:`${countingWidth*1.5}px`}">
            <div class="headmsg">See all ingredients</div>
            <div class="detilsIngs" 
            :style="{width:`${countingWidth*1.5}px`,
            height:`${customHeight*0.3}px`
            }">
                <div v-for='(ings,index) of totalIngs' 
                :key=index
                class='details'
                :class="{has:ings.has}"
                >{{ings.ing}}
                </div>
            </div>

            </div>

        </div>
    </div>
        <div style='position:absolute; left:0px; width:2px' v-show="checkedout"
        :style="{top:`${customHeight*7/6}px`,height:`${customHeight*0.425}px`,transform:`translate(0,${margin}px)`}"
        class='sideblock left'
        ></div>
        <div style='position:absolute; right:0px; width:2px' v-show="checkedout"
        :style="{top:`${customHeight*7/6}px`,height:`${customHeight*0.425}px`,transform:`translate(0,${margin}px)`}"
        class='sideblock right'
        ></div>
    </div>
    <div style='display:none'>{{computedWidth}}</div>


    <teleport to="body">
      <div v-if="modalVisible" class="modal" @click='modalClose'>
        <div class='article'>
        <div class='clearbigtext articleheader'>{{finalCheckout[currentSelection].ing.title}}</div>
        <div class='clearsmalltext articledesc'>{{detailInstruction}} </div>
        </div>
      </div>
    </teleport>
</template>
<script>
export default {
    props:['clicked','circleArray','width','height','checkedout','max'],
    inject:['instructions'],
    data(){
        return{
            stageNumber:0,
            customWidth:undefined,
            customHeight:undefined,
            margin:10,
            collapsed:true,
            currentSelection:undefined,
            modalVisible:false
        }
    },
    // biggestNumber를 찾아나서야 함
    // 
   watch:{
       clicked:{
           handler:function(){
               this.stageNumber=this.circleArray[0].stage
           },
           deep:true
       },
        finalCheckout:{
          handler:function(){
              console.log('finalcheck out is well monitored')
          }
      }
   },
   computed:{
       detailInstruction(){
           if(this.finalCheckout.length>0){
            let openvalue = this.modalVisible;
            console.log(openvalue)
            let selectedId=this.finalCheckout[this.currentSelection].ing.id;
            console.log(selectedId)
            let insturctionTarget=this.instructions.filter(d=>d.id==selectedId);
            console.log(insturctionTarget[0].instructions)
            let instruction = insturctionTarget[0].instructions
            // console.log(instruction)
            return instruction
           }else{
               return ''
           }

       },
       totalIngs(){
           if(this.collapsed){
               return []
           }else{
               let target =this.finalCheckout[this.currentSelection].ing.ingredients;
               let finalArr =[];
               target.forEach((d)=>{
                   finalArr.push(
                       {
                           ing:d,
                           has:false
                       }
                   )
               })
               finalArr.forEach((d)=>{
                   let clickedIngs = this.clicked.map(d=>d.name)
                   d.has=clickedIngs.includes(d.ing)
               })

               finalArr.sort(function(x, y) {
                   return (x.has === y.has)? 0 : x.has? -1 : 1;
               })

               return finalArr
           }

       },

       countingWidth(){
           return this.customWidth*0.25
       },
       computedWidth(){
           let arr = [];
           if(this.currentSelection==undefined){
               this.finalCheckout.forEach(()=>{
                arr.push(this.customHeight*0.35)
               })
                return arr
           }else{
               this.finalCheckout.forEach((d)=>{
                   if(d.expand==false){
                       arr.push(this.customHeight*0.35)
                   }else if(d.expand==true){
                       arr.push(this.customWidth*0.95)
                   }
               })
               return arr
           }
       },
       ingCounter(){

           let categoryCount=[];
           if(this.cleanup){
               return categoryCount;
           }
           for(let i=1;i<11;i++){
               categoryCount.push(
                   {category:i,count:0}
               )
           }
            
            categoryCount.forEach((d,i)=>{
                let counts = this.circleArray.filter(d=>d.selection==i).length;
                d.count=counts
            })
           return categoryCount
       },
       finalCheckout(){
           if(this.cleanup){
               let arr =[];
               return arr
           }
           let finalArr = this.circleArray.filter(d=>d.selection==this.max);
           finalArr.forEach((d)=>{
               d.expand=false,
               d.visible=true
           })
           return finalArr;
       } 
   },
   mounted() {
       this.customWidth=this.width;
       this.customHeight=this.height;
       this.margin = this.height*0.01;
       window.addEventListener('resize',this.resize)

   }, 
     unmounted(){
    window.removeEventListener('resize',this.resize)
  },
  methods: {
      modalOpen(){
          this.modalVisible=true;
      },
      modalClose(){
          this.modalVisible=false;
      },
      expandSelection(idx){
          this.finalCheckout.forEach((d,i)=>{
              if(i==idx){
                  null
              }else{
                  d.visible=false;
              }
          })

          this.collapsed=!this.collapsed
          this.currentSelection=idx;
          let swap = this.finalCheckout[idx];
          swap.expand=true;
          this.finalCheckout.splice(idx,1,swap)
      },
      collapseSelection(){
          this.finalCheckout.forEach((d)=>{
                  d.visible=true;
                  d.expand=false;
          })
          
          this.collapsed=!this.collapsed
          this.currentSelection=undefined;
        //   let swap = this.finalCheckout[idx];
        //   swap.expand=false;
        //   this.finalCheckout.splice(idx,1,swap)
      },


      resize(){
          if(!this.checkedout)
          this.customWidth=document.querySelector('.bottomcontainer').clientWidth;
          this.customHeight=document.querySelector('.bottomcontainer').clientHeight*0.6;
      }
  }
}
</script>
<style scoped>
.orbitcontainer{
    position:absolute;
    top:10%;
    text-align:right;
}
.indicators{
    border-bottom:dashed .5px rgb(217, 209, 199);
    position:absolute;
    transform:translate(0,1%);
    opacity:0.3;
    transition: all 0.5s linear;
}
.active{
    border-bottom:dashed .5px rgba(217, 209, 199, 0.459);
    color:#7CACC0;
    opacity:1;
    box-shadow: 0px 0.5px 0px 0px rgba(0, 255, 255, 0.783);
}

.active.checkedout{
    border-bottom:dashed .5px rgba(217, 209, 199, 0);
    box-shadow:none;
    opacity:1;
    color:#D96B52;
    text-decoration: underline;
}
.checkedout{
    opacity:0.1;
    border-bottom:dashed .5px rgba(217, 209, 199, 0);
}
.bottomDesc{
    background:#1F2631;
    min-width:100%;
    display: flex;
    overflow-x:scroll;
    box-shadow:inset 0 0 15px #000;
    align-items: center;

}
.icons{
    flex-shrink: 0;
    border-radius:50%;
    background:rgba(255,255,255,0.05);
    border: solid 1px #D96B52;
    position:relative;
    overflow-y:hidden;
       overflow-x:hidden;
    /* display:flex;
    flex-direction: column;
    justify-content: center; */
    align-items:center;
    margin-left:4.4%;
    transition: all 0.4s linear;
    
}
.icons:hover{
    transform:translate(0,-5px);
    box-shadow: 0px 0px 10px 1px #d96b528c;
}
.template{
    overflow:hidden
}
.sideblock{
    transform:translate(0,0);
    background:#1f2631ea;
}

.sideblock.left{
    box-shadow: 1px 0px 4px 4px #1f2631de;
}
.sideblock.right{
    box-shadow: -1px 0px 4px 4px #1f2631de;
}
.imgs{
    cursor: pointer;
    position:absolute;
    width:15px;
    transform:rotate(45deg);
    display:block;
}
.dishTitle{
    position:absolute;
    display:block;
    font-size:0.8rem;
    width:100%;
    text-align:center;
}
.expand{
    width:150px;
    text-align:start;
}
.dishTitle.expand{
    margin-left:10px;
    font-size:1rem;
    color:#D96B52;
}
.icons.expand{
    border-radius:3px;
    border:solid 1px #D96B52;
    box-shadow: 0px 0px 10px 1px #d96b528c;
}
.hide{
    display:none;
}
.ingCounting{
    position:absolute;
    
}
.headmsg{
    width:100%;
    font-size:0.8rem;
    text-decoration: underline;
}
.countings{
    /* position:absolute; */
    margin-top:10px;
    width:100%;
    height:100%;
    display:flex;
    gap:10px;
    flex-wrap: wrap;
    align-content: flex-start
}
.ings{
    width:1.5rem;
    height:1.5rem;
    /* border-radius:10px; */
    /* background:#D9D1C7; */
    flex-shrink: 0;
    /* box-shadow: 0px 0px 2px 1px #d9d1c781; */
    opacity:0.4

}
.ings.has{
    /* background-color:#D96B52; */
    /* box-shadow: 0px 0px 2px 2px #D96B52; */
    opacity:1
}
.allIngs{
    position:absolute;

}
.detilsIngs{
    width:100%;
    height:100%;
    display:flex;
    box-shadow:inset 0 0 5px #1b1b1b;
    /* border-top:1px solid #d9d1c75e; */
    gap:5px;
    flex-wrap: wrap;
    align-content: flex-start;
    overflow-y:scroll;
    padding:0.5rem;
}
.details{
    min-width:3rem;
    height:2rem;
    border-radius:2px;
    flex-shrink: 0;
    border:solid 1px #D9D1C7;
    padding:0 0.4rem;
    font-size:0.7rem;
    display:flex;
    align-items: center;
    justify-content: center
}
.details.has{
    border:solid 1px #D96B52;
}
.modal{
    position:absolute;
    top:0;
    left:0;
    text-align:center;
    width:100vw;
    height:100vh;
    background-color:rgba(24, 24, 24, 0.493);
    backdrop-filter: blur(2px);

}
.article{
    background:#1c1c1cb7;
    font-family:Providence Sans pro;
    position:absolute;
    left:50%;
    transform:translate(-50%,20%);
    color:#D9D1C7;
    width:40%;
    height:70vh;
    border:solid 1px #d9d1c76e;
    box-shadow:0 0 3px 3px #D96B52;
    padding:1rem;
}
.articleheader{
    text-align:center;
}
.articledesc{
    font-size:0.9rem;
    margin-top:2rem;
    text-align:start;
}

</style>
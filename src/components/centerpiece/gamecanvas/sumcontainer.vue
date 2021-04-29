<template>
    <div id='summaryboard' :style="{
        width : `${width*0.3}px`,
        height:`${height}px`
    }">
        <div class="headermsg midtext">Your Selection</div>
        <div class="sections">
            <div class='smalltext leftside' >Current Selection</div>
            <div class='rightside'>{{latestelement}}</div>
        </div>

        <div class="sections">
            <div class='smalltext leftside'>Ingredients Selected</div>
            <div class='rightside'><span>{{clicked.length}}</span> / {{selectedIngred.length}}</div>
        </div>

        <div class="largesection">
          
            <div class='buttoncollector'>
                <div v-for='(ing,idx) of clicked' 
                :key='idx' 
                class='smalltext ingbtn'
                @mouseover="highlight(idx)"
                @mouseout='reset'
                >
                    {{ing.name}}
                </div>
            </div>

            <div class="graphcontainer" ref="graph">

                <div v-for="(bar,idx) of dishwithIng" 
                :key=idx
                :style="{height:`${bar.count}px`, 
                width:`10px`,
                transform:`translate(0,${$refs.graph.clientHeight-bar.count-20}px)`
                }"
                class='bars'
                :class="{active:bar.highlight}"
                >
                <span style='overflow: hidden; 
                position:absolute; 
                bottom:-1rem;
                width:4rem;
                height:1rem' class='smalltext'>{{idx+1}}</span>
                </div>

                <div class="grid">
                    <div v-for="(axis,idx) of axisline"
                    class='axis smalltext'
                    :key=idx
                    :style="{height:`${0.5}px`,width:`${100}%`,transform:`translate(0,${axis.scale}px)`}"
                    >

                    <div class='gridtext' :class="{highlight:current.name}">{{Math.floor(axis.actvalue)}}</div>
                    </div>

                </div>
            </div>
            <transition name='fade'>
            <div class="tooltip" v-show='current.name'>

                <div style='width:100%' class='tooltipsub'>
                    <div class="leftside">
                        Ingredient:
                    </div>
                    <div class='rightside'>
                 {{current.name}}
                    </div>
                </div>

                <div  style='width:100%' class='tooltipsub'>

                    <div class="leftside">
                        Dish:
                    </div>
                    <div class='rightside'>
                 {{current.count}} dishesusing this.
                    </div>

                </div>
            </div>
            </transition>
        </div>
    </div>
</template>
<script>
import * as d3 from 'd3';
export default {
props:['width','height'],
inject:['allData',
        'ingCollection',
        'selectedIngred',
        'selectedDish',
        'clicked'],
data(){
    return{
        yExtent:[0,1],
        conHeight:undefined,
        dishwithIng:[],
        max:0,
        current:{},
        conWidth:undefined
    }
},
methods:{
highlight(idx){
        this.dishwithIng.forEach((d)=>{
        d.highlight=false;
    })
    // vm.items.splice(indexOfItem, 1, newValue)
    let name =this.dishwithIng[idx].name;
    let count =this.dishwithIng[idx].count;
    let newvalue = {name:name,count:count,highlight:true}
    this.current.name=name;
    this.current.count=this.dishlist[idx].count;
    // console.log(newvalue);
    this.dishwithIng.splice(idx,1,newvalue)
},
reset(){
    this.dishwithIng.forEach((d)=>{
        d.highlight=false;
    })
    this.current={}
}
},
mounted(){
    this.conHeight=this.$refs.graph.clientHeight-20
},
computed: {

    latestelement(){
        if(this.clicked.length>0){
        return this.clicked[this.clicked.length-1].name
        }else{
            return ''
        }
    },
    dishlist(){
        let dishlist =[];
        this.clicked.forEach((d)=>{
            let ing = d.name;
            let dishes =this.selectedDish.filter(t=>t.ingredients.includes(ing))
            let obj ={name:ing,count:dishes.length};
            dishlist.push(obj)
        });
        return dishlist
    },
    yScale(){
        let conHeight =this.$refs.graph.clientHeight-20
        let value = d3.max(this.dishlist.map(k=>k.count));
        let yscale = d3.scaleLinear()
                       .domain( [0,value] )
                       .range([0,conHeight])
        return yscale
    },
    axisline(){
        let gridsize = this.max/9;
        let gridarr = [];
        console.log(gridsize);
        if(this.$refs.graph){
        for (let i = 0; i<10; i++){
            gridarr.push({actvalue:gridsize*i,scale:this.yScale(gridsize*(9-i))})
        }
        }
        return gridarr
    }

},
watch:{
    dishlist:function(val){
        let arr=[];
        val.forEach((d)=>{
            let count = d.count;
            arr.push({
                name:d.name,
                count:this.yScale(count),
                highlight:false
            })
        })

            this.dishwithIng=arr;

        let value = d3.max(val.map(k=>k.count));
        this.max=value;
        console.log(value);
        
    },
    dishwithIng:function(){

        if(this.$refs.graph.clientWidth){
        this.conWidth=this.$refs.graph.clientWidth}
    }
}
}
</script>

<style scoped>
    #summaryboard{
        position:absolute;
        right:5%;
        top:10%;
        display:flex;
        flex-direction: column;
        align-items: center;
        background:#1c1c1c80
    }
    .headermsg{
        width:100%;
        text-align:center;
        background:#1C1C1C;
    }
.bars{
    background:#D8D8D8;
    border:solid 0.5px #D8D8D8;
}
    .sections{
        background:#2D4059;
        width:90%;
        height:2rem;
        display:flex;
        justify-content: space-between;
        align-items: center;
        margin-top:5px;
        border-radius:10px;
    }

    .largesection{
        width:90%;
        height:21rem;
        background:#2D4059;
        margin-top:10px;
        overflow-x:hidden;
        overflow-y:hidden;
        border-radius:10px;
    }
    .leftside{
        margin-left:10px;
    }
    .rightside{
        margin-right:10px;
    }
    .ingbtn{
        background:#1c1c1c88;
        padding:1px;
        border-radius:10px;
        height:1rem;
        overflow: hidden;   
        white-space: nowrap;
        text-overflow: ellipsis;
        margin-left:5px;
        text-align:center;
        cursor: pointer;
    }
    .ingbtn:hover{
        background:#BF3C30;
    }
    #subheader{
        width:100%;
        display:flex;
        justify-content: space-between;
    }
    .buttoncollector{
        margin-top:10px;
        display:grid;
        grid-template-columns: repeat(5,1fr);
        gap: 5px;
        height:15%;
        overflow-y:scroll;
    }
    .graphcontainer{
        min-width:100%;
        height:60%;
        position:relative;
        display:inline-flex;
        overflow-x:auto;
        justify-content: space-evenly;
        /* overflow-y:hidden; */
        /* gap:0 1rem ; */
    }

.bars:first-child {
    margin-left:25px;
}
    .active{
        background:#BF3C30;
        border:solid 1px #BF3C30;
    }
    .highlight{
        font-weight:bold;
    }
    .tooltip{
        margin-top:10px;
        height:15%;
        width:100%;
        overflow-y:hidden;
        background:#1c1c1c55;
        box-shadow: 0px -2px -2px #1c1c1c; 
        filter:blur(0.2px);
        display:flex;
        justify-content: space-around;
        flex-direction: column
    }
    .tooltipsub{
        display:flex;
        gap:10px;
    }
    .grid{
        position:absolute;
        width:100%;
        height:100%;
    }
    .axis{
        border-bottom:dashed 0.5px #d8d8d85d;
    }
.fade-enter-active {
  animation: fadein .5s;
}
.fade-leave-active {
  animation: fadein .5s;
}
.gridtext{
    transform:translate(2px,-100%)
}
@keyframes fadein {
    from{
        opacity:0
    }
    to{
        opacity:1
    }
}

    
</style>
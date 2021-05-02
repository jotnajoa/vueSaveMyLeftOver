<template>
    <div class='side'>
        <div class='midtext' style='margin:auto;top:5%;width:100%;height:25px;background:#D9D1C7;text-align:center;display:grid;align-items:center;color:#1C1C1C'>Your Selection</div>
        <div class="counter midtext">
            <div style='width:15px;height:100%'></div>
            <img src="chefhelm.png" style='display:inline-block;width:20px;height:20px;' alt="">
            <div>Selected: <span> {{ingContainer.filter(d=>d.ingName).length}}</span>/10</div>
        </div>
        <div class="sidesection">
            <ingred-container v-for='(ingred,ind) in ingContainer' 
            :key="ind"
            :index="ingred.number"
            :ingredient="ingred.ingName"
            :img="ingred.img"
            >
            </ingred-container>
        </div>
    <div style='display:none'>{{something}}</div>
    </div>
</template>

<script>
import ingredContainer from './ingredContainer.vue'
export default {
    components:{ingredContainer},
    inject:['selectedIngred','clicked'],
    data(){
        return{
            ingContainer:[]
        }
    },
    mounted(){
        for(let i=0;i<12;i++){
            let object =new Object();
            object.ingName=undefined;
            object.img=undefined;
            this.ingContainer.push(object)
        }
    },
    computed:{
        something:function(){
            this.selectedIngred.forEach((d,i)=>{
            if(!this.ingContainer[i].ingName){
                this.ingContainer[i].ingName=this.selectedIngred[i].name
                this.ingContainer[i].img=this.selectedIngred[i].img;
            }else{
                console.log('something goes wrong')
            }
        })
        return this.ingContainer
        }
    },
    watch:{
        selectedIngred:{
            handler:function(){
                let selectedLength=this.selectedIngred.length;
                let comparedLength=this.ingContainer.filter(d=>d.ingName).length;
                
                
                
                
                if(selectedLength<comparedLength){

                    this.ingContainer.forEach((d)=>{
                        // if(d.ingName==this.clicked){
                        //     let index=i;
                        //     this.ingContainer[index].ingName=undefined;
                        //     this.ingContainer[index].img=undefined;
                        // }
                        d.ingName=undefined;
                        d.img=undefined;
                    });

                }
            },
            deep:true

        }
        // clicked:{
        //     handler:function(){
        //         console.log('you just clicked',this.clicked[0])
        //     },
        //     deep:true
        // }
    }
}
</script>

<style scoped>
.side{
    width:25vw;
    height:100vh;
    background-color:#D9D1C720;
    padding-top:15px;
    text-align:center;
    overflow-y:hidden;

}
.sidesection{

    padding-top:15px;
    overflow-y:scroll;
    height:100%;
    display:grid;
    grid-template-columns: repeat(2,1fr);
    grid-template-rows:auto;
    gap:30px 10px;
    z-index:5;
}
.counter{
    width:100%;
    height:35px;
    display:flex;
    gap:0px 10px;
    align-items: center;
    color:#D9D1C7;
    margin-bottom:20px;
}
</style>


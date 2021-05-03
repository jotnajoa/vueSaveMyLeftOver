<template>
  <div class="bottomcontainer" v-show="!checkedout">
    
    <el-carousel class='carousel' height="120px"
      :autoplay="false"
      indicator-position="inside"
      arrow="always"
      >
      <el-carousel-item class='containers'
      v-for="(el,index) in ingredCollection" 
      :key="index" 
      >      
          <div class= 'elements' v-for="(e,i) in el" :key="i" @click="dishNavigate(e)" 
          :class="{selectedItm:Array.from(clicked).includes(e)}"
          >
            <div class='names smalltext'>{{e.name}} </div>
            <img class= 'ingimg' :src="e.img">
          </div> 
      </el-carousel-item>
    </el-carousel>
  </div>
  <div style='display:none'>{{updatednumber}}</div>
</template> 
<script>

export default {
   inject:['selectedIngred','dishNavigate','clicked'],
   props:['checkedout'],
  data(){
    return {
      ingredCollection:[],
      initial:0
    }
  },

  watch:{

    selectedIngred:{
    handler:function(a){
            function chunkMaxLength(arr, chunkSize, maxLength) {
              let copy = [];
              arr.forEach((d)=>{copy.push(d)})

              return Array.from(
                {length: maxLength}, () => copy.splice(0,chunkSize)
                
                );
            }
            this.ingredCollection=chunkMaxLength(a,5,4)
            let pageNumber=Math.floor(this.selectedIngred.length/5)+1;
            this.initial=pageNumber
            let filtered =this.ingredCollection.filter((d)=>!d.length==0)
            this.ingredCollection=filtered;
      },
    deep:true
    }
  }
}

</script>
<style scoped>

.ingimg{
    width:60px;
    height:65px;
  }

.carousel{

  text-align:center;
  /* position:relative; */
  width:100%;
  /* border:solid 1px green; */


}
.containers{
  display:flex;
  /* grid-auto-flow: column; */
  border-radius:50px;
  border: solid 1px #d96b5288;
  align-items: center;
  justify-content: space-around;
  height:95%;
  width:98%;
  margin-left:1%;

}
.elements{
  height:70%;
  /* min-width:200px; */
  margin-left:0%;
  position:relative;
  text-align:center;
  cursor: pointer;
}
.names{
  color:#D9D1C7;
  width:100%;
  height:20px;
  /* overflow-y:hidden; */
  overflow: hidden; 
  position:absolute;
  top:90%;
  left:50%;
  transform:translate(-50%);
  white-space: nowrap;
  text-overflow: ellipsis;
}


  .el-carousel__item:nth-child(2n),.el-carousel__item:nth-child(2n+1){
    background:#1F2631;
  }


.bottomcontainer{
  width:100%;
  position:absolute;
  bottom:5%;
}
.selectedItm{
  opacity:0.5
}



</style>
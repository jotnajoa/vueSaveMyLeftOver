<template>
<div style='position:relative'>
    <div class='blockbox smalltext'>
        <div class='names'>{{ingname}}</div>
        <img 
        @click="receiveIngredients(ingname,imgfile)"
        @mouseover="hovered=true"
        @mouseleave="hovered=false"
        :src="imgfile" 
        class='ingimg'>
    </div>
    <div class='modal' v-if='hovered'>
        {{ingname}}
    </div>
    </div>
</template>

<script>

export default {

    props:['ingname','index'],
    inject:['receiveIngredients','allData'],
    data(){
        return{
            blocks:['blblock.png','brblock.png','rdblock.png','ylblock.png'],
            hovered:false
        }
    },
    updated(){
        // console.log('hi')
        // console.log(this.blocks)
    },
    computed:{
        imgfile(){
            return (this.index%4==0 ? this.blocks[0]:
            this.index%4==1 ? this.blocks[1]:
            this.index%4==2 ? this.blocks[2]:
            this.index%4==3 ? this.blocks[3]:null
            )
        }
    }

    
}
</script>
<style scoped>
.modal{
    position:absolute;
    top:100%;
    left:0px;
    background-color:#1c1c1c84;
    border:#BFA863 solid 1px;
}
.blockbox{
    color:#D9D1C7;
    width:120px;
    height:100px;
}
img{
    display:block;
    width:70px;
    height:70px;
    cursor: pointer;
}
.names{
    /* overflow:hidden; */
    border-left:solid 1px #D9D1C7;
    padding-left:5px;
    height:50px;
    width:80%;
    overflow: hidden;   
    white-space: nowrap;
    text-overflow: ellipsis;
}
</style>
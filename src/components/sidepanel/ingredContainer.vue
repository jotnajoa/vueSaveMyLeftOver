<template>
    <div class='container' :class="{ active: img }">
    <img class='blockimg' v-if="ingredient"
    @click='removeIngredient(ingredient)'
    :src="img">
    <div class='smalltext ingname' v-if="ingredient">{{ingredient}}</div>
    </div>
</template>

<script>
export default {
    inject:['removeIngredient'],
    data(){
        return{isFull:false}
    },
    props:['index','ingredient','img']
}
</script>

<style scoped>
.container{
    width:100px;
    height:100px;
    border-radius: 100%;
    background:rgba(255,255,255,0.05);
    box-shadow: 0px 0px 2px 4px #00000023;
    position:relative;
    margin:auto;
}
.blockimg{
    width:70px;
    height:75px;
    position:absolute;
    left:50%;
    top:50%;
    transform:translate(-50%,-50%);
    cursor:pointer;
    animation:slidedown 1s
}
.active{
    /* border:solid 0.5px #BFA863;
    box-shadow: 0 0 8px 8px #bfa86381; */
    border:solid 2px #d96b52b6;
    box-shadow: 0 0 8px 8px #d96b5283;
    animation:halo 2s
    }

.ingname{
    width:150%;
    height:50px;
    text-align:start;
    position:absolute;
    color:#D9D1C7;
    z-index:3;
    top:100%;
    left:50%;
    transform:translate(-50%,0%);
    text-align:center;
    /* background-color:#1c1c1c6c; */
    /* border:solid #BFA863 0.5px */
}
 @keyframes slidedown {
    from{
        transform:translate(-50%,-60%)
    }    
    to{
        transform:translate(-50%,-50%)
    }
}
@keyframes halo{
        from{
        box-shadow: 0 0 1px 1px #d96b5233;
    }    
    to{
        box-shadow: 0 0 8px 8px #d96b5283;
    }
} 
</style>
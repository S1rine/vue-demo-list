<template>
    <div class="goodsDesc-container">
        <h1 class="title">{{ info.title }}</h1>
        <hr>

        <div class="content" v-html="info.content">
        </div>

    </div>
</template>
<script>
export default {
    data(){
        return {
            id: this.$route.params.id,
            info: {}
        }
    },
    created(){
        this.getGoodsDesc();
    },
    methods: {
        getGoodsDesc(){
            this.$http.get('api/goods/getdesc/'+this.id).then(result => {
                if(result.body.status === 0){
                    this.info = result.body.message[0];
                }
            })
        }
    }
}
</script>
<style lang="scss" scoped>
.goodsDesc-container{
    .title {
        font-size: 16px;
        color: #226aff;
        text-align: center;
        padding: 10px 0;
    }
    .content {
        padding: 0 5px;
        font-size: 13px;
        line-height: 15px;
    }
    /deep/ img {
        width: 100%;
        height: auto;
    }
}
</style>
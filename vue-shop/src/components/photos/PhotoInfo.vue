<template>
    <div class="photo-info">
        <h3 class="title">{{ msg.title }}</h3>
        <p class="subtitle">
            <span>发表时间：{{ msg.add_time | dateFormat }}</span>
            <span>点击：{{ msg.click }}次</span>
        </p>
        <hr>
        <vue-preview class="photo-view" :slides="list" @close="handleClose"></vue-preview>

        <div class="content" v-html="msg.content">
           
        </div>
        <cmt-box :id="id"></cmt-box>
    </div>
</template>
<script>
import comment from '../subcomponents/comment.vue';
export default {
    data(){
        return {
            id: this.$route.params.id,
            msg: {},
            list: [],
        }
    },
    created(){
        this.getPhotoInfo();
        this.getThumbs();
    },
    methods: {
        getPhotoInfo(){
            this.$http.get('api/getimageInfo/'+this.id).then(result => {
                if(result.body.status === 0){
                    this.msg = result.body.message[0];
                }
            })
        },
        getThumbs(){
            this.$http.get('api/getthumimages/'+this.id).then(result => {
                if(result.body.status === 0){
                    result.body.message.forEach(item => {
                        item.w = 600;
                        item.h = 400;
                        item.msrc = item.src;
                    })
                }
                this.list = result.body.message;
            })
        },
        handleClose () {
            console.log('close event')
        }
    },
    components: {
        'cmt-box': comment
    }
}
</script>
<style lang="scss" scoped>
.photo-info{
    .title{
        font-size: 16px;
        color: #26a2ff;
        text-align: center;
        padding: 5px 0;
    }
    .subtitle{
        padding: 0 5px;
        font-size: 12px;
        display: flex;
        justify-content: space-between;
    }
    .content{
        padding: 10px;
        font-size: 14px;
    }
    .photo-view {
        /deep/ .my-gallery {
            
            figure {
                width: 100px;
                height: 100px;
                display: inline-block;
                margin: 10px;
                box-shadow: 0px 0px 8px #999;
            }
            img {
                width: 100%;
            }
        }
    }
}
</style>
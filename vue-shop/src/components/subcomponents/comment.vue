<template>
    <div class="cmt-container">
        <h3>发表评论</h3>
        <hr>
        <textarea v-model="newcomment" placeholder="请输入评论(最多吐槽120字)" maxlength="120"></textarea>

        <mt-button @click="postcomment" type="primary" size="large">发表评论</mt-button>

        <div class="cmt-list">
            <div class="cmt-item" v-for="(item,index) in comments" :key="item.add_time">
                <div class="cmt-title">
                    第{{ index+1 }}楼&nbsp;&nbsp;用户：{{ item.user_name }}&nbsp;&nbsp;发表时间：{{ item.add_time | dateFormat }}
                </div>
                <div class="cmt-body">
                    {{ item.content }}
                </div>
            </div>
        </div>

        <mt-button @click="getMore" type="danger" size="large" plain>加载更多</mt-button>
    </div>
</template>

<script>
import { Toast } from 'mint-ui';
export default {
    data(){
        return {
            comments: [],
            pageIndex: 1, //默认展示第一页
            newcomment: ''
        }
    },
    created(){
        this.getComments();
    },
    methods: {
        getComments(){
            this.$http.get('api/getcomments/'+this.id+'?pageindex='+this.pageIndex).then(result => {
                if(result.body.status === 0){
                    if(this.comments.length){
                        // 如果 this.comments包含数据(即不是第一次加载)
                        // 则判断是否有页面上新增的评论数据，将请求回来的数据删去对应个数
                        var len = this.comments.length - (this.pageIndex-1)*10;
                        result.body.message.splice(0,len);
                    }
                    this.comments = this.comments.concat(result.body.message);
                }else{
                    Toast('获取评论失败');
                }
            })
        },
        postcomment(){
            if(this.newcomment.trim().length === 0){
                return Toast('评论内容不能为空');
            }
            this.$http.post('api/postcomment/'+this.id,{content:this.newcomment.trim()}).then(result => {
                if(result.body.status === 0){
                    var cmt = { user_name: '匿名用户', add_time: Date.now(), content: this.newcomment.trim()};

                    Toast('评论成功');
                    this.newcomment = '';
                    this.comments.unshift(cmt);
                }else{
                    Toast('评论失败');
                }
            })
        },
        getMore(){
            this.pageIndex++;
            this.getComments()
        }
    },
    props: ['id']
}
</script>

<style lang="scss" scoped>
.cmt-container {
    h3{
        font-size: 18px;
    }
    textarea{
        font-size: 14px;
        height: 85px;
        margin: 0;
    }
    .cmt-list{
        margin: 5px 0;
        .cmt-item{
            font-size: 13px;
            .cmt-title{
                line-height: 30px;
                background-color: #ccc;
                padding-left: 5px;
            }
            .cmt-body{
                line-height: 35px;
                text-indent: 2em;
            }
        }
    }
}
</style>
<template>
    <div class="goods-list">
        <!-- <router-link tag="div" class="goods-item" v-for="item in goodslist" :key="item.id" :to="'/home/goodsinfo/'+item.id">
            <img :src="item.img_url" :alt="item.zhaiyao">
            <h1 class="title">{{ item.title }}</h1>
            <div class="info">
                <p class="price">
                    <span class="now">￥{{ item.sell_price }}</span>
                    <span class="old">￥{{ item.market_price }}</span>
                </p>
                <p class="sell">
                    <span>热卖中</span>
                    <span>剩{{ item.stock_quantity }}件</span>
                </p>
            </div>
        </router-link> -->


        <!-- 跳转方式1 使用 a 标签 -->
        <!-- 跳转方式2 使用 window.location.href  -->
        <div class="goods-item" v-for="item in goodslist" :key="item.id" @click="goDetail(item.id)">
            <img :src="item.img_url" :alt="item.zhaiyao">
            <h1 class="title">{{ item.title }}</h1>
            <div class="info">
                <p class="price">
                    <span class="now">￥{{ item.sell_price }}</span>
                    <span class="old">￥{{ item.market_price }}</span>
                </p>
                <p class="sell">
                    <span>热卖中</span>
                    <span>剩{{ item.stock_quantity }}件</span>
                </p>
            </div>
        </div>


        <mt-button @click="getmore" type="danger" size="large">加载更多</mt-button>
    </div>
</template>
<script>
export default {
    data(){
        return {
            pageIndex: 1,
            goodslist: [],
        }
    },
    created(){
        this.getGoodsList();
    },
    methods: {
        getGoodsList(){
            this.$http.get('api/getgoods?pageindex='+this.pageIndex).then(result => {
                if(result.body.status === 0){
                    this.goodslist = this.goodslist.concat(result.body.message);
                }
            })
        },
        getmore(){
            this.pageIndex++;
            this.getGoodsList();
        },
        goDetail(id){
            // 1. 传递字符串形式
            // this.$router.push('/home/goodsinfo/'+id);
            // 2. 传递对象
            // this.$router.push({path:'/home/goodsinfo/'+id});
            // 3. 传递命名的路由
            this.$router.push({name:'goodsinfo',params: {id}});
            // 4. 传递参数
            // this.$router.push({path:'/home/goodsinfo/',query: {id: 88}});

        }
    }
}
</script>

<style lang="scss" scoped>
.goods-list {
    display: flex;
    flex-wrap: wrap;
    padding: 5px;
    justify-content: space-between;
    .goods-item {
        width: 49%;
        border: 1px solid #ccc;
        box-shadow: 0 0 8px #ccc;
        margin-bottom: 7px;
        padding: 2px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        min-height: 243px;
        img {
            width: 100%;
        }
        .title {
            font-size: 18px;
        }
        .info {
            background: #eee;
            p {
                margin: 0;
                padding: 5px;
            }
            .price {
                .now {
                    color: red;
                    font-weight: bold;
                    font-size: 16px;
                }
                .old {
                    text-decoration: line-through;
                    font-size: 12px;
                    margin-left: 10px;
                }
            }
            .sell {
                display: flex;
                justify-content: space-between;
                font-size: 13px;
            }
        }
    }
}
</style>
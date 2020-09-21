<template>
    <div class="shopcart">
        <!-- 商品列表 -->
       <div class="goodlist">
           <div class="mui-card" v-for="(item,i) in goodsList" :key="item.id">
				<div class="mui-card-content">
					<div class="mui-card-content-inner">
						<mt-switch @change="selectedChange(item.id,$store.getters.getGoodsSelected[item.id])" v-model="$store.getters.getGoodsSelected[item.id]"></mt-switch>
                        <img :src="item.thumb_path" alt="">
                        <div class="info">
                            <h1>{{ item.title }}</h1>
                            <p>
                                <span class="price">￥{{ item.sell_price }}</span>
                                <numbox :goodsID="item.id" :count="$store.getters.getGoodsCount[item.id]"></numbox>
                                <a href="" @click.prevent="remove(item.id,i)">删除</a>
                            </p>
                        </div>
					</div>
				</div>
			</div>
       </div>
       <!-- 结算区域 -->
       <div class="mui-card">
				<div class="mui-card-content">
					<div class="mui-card-content-inner check">
						<div class="left">
                            <p>总计（不含运费）</p>
                            <p>已勾选商品 <span class="red">{{ $store.getters.getGoodsCountAmount.count }}</span> 件，总价<span class="red">￥{{ $store.getters.getGoodsCountAmount.amount }}</span></p>
                        </div>
                        <mt-button type="danger">结算</mt-button>
					</div>
                    
				</div>
			</div>
    </div>
</template>

<script>
import numbox from '../subcomponents/cartNumbox.vue';
export default {
    data(){
        return {
            goodsList:[],
            newcount:0,
        }
    },
    created(){
        this.getGoodsList();
    },
    methods: {
        getGoodsList(){
            var idArr = [];
            this.$store.state.cart.forEach(item => idArr.push(item.id));
            if(idArr.length <= 0){
                return;
            }
            this.$http.get('api/goods/getshopcarlist/'+idArr.join(',')).then(result => {
                if(result.body.status === 0){
                    this.goodsList = result.body.message;
                    // this.newcount = 
                }
            })
        },
        remove(id,index){
            this.goodsList.splice(index,1);
            this.$store.commit('removeCart',id);
        },
        selectedChange(id,val){
            this.$store.commit('updateGoodsSelected',{id,selected:val});
        }
    },
    components: {
        numbox
    }
}
</script>

<style lang="scss" scoped>
.shopcart{
    background: #eee;
    overflow: hidden;
    .goodlist {
        img {
            width: 60px;
            height: 60px;
        }
        h1 {
            font-size: 13px;
        }
        .info {
            display:flex;
            flex-direction: column;
            .price {
                color: red;
                font-weight: bold;
            }
        }
        .mui-card-content-inner {
            display: flex;
            align-items: center;
            justify-content: space-between;
        }
    }
    .check {
        display: flex;
        justify-content: space-between;
        align-items: center;
        .red {
            color: red;
            font-weight: bold;
            font-size: 16px;
        }
    }
}
</style>
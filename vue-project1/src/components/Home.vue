<template>
    <div class="content">
        <Slider></Slider>
        <div class="newsList">
            <ul>
                <li v-for="(item,index) in arrList">
                    <router-link :to="'/article/'+item.id">
                        <h2>{{index+1}} . {{item.title}}</h2>
                        <p>{{item.detail}}</p>
                    </router-link>

                </li>
            </ul>
        </div>
    </div>
</template>

<script>
    import Slider from './Slider.vue'

    export default{
        data(){
            return {
                arrList:[]
            }
        },
        components:{
            Slider
        },
        mounted(){
            this.fetchData();
        },
        methods:{
            fetchData(){
                var _this = this;
                this.$http.get('src/data/index.data').then(function(res){
                   _this.arrList =  res.data;
                }).catch(function(err){
                    console.log(err);
                });
            }
        }
    }
</script>
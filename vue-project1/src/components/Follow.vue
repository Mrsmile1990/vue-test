<template>
    <div class="content">
        <Slider></Slider>
        <div class="newsList">
            <ul>
                <li v-for="(item,index) in arrList">

                    <h2>{{index+1}} . {{item.title}}</h2>
                    <p>{{item.detail}}</p>

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
        mounted(){
            this.fetchData();
        },
        methods:{
            fetchData(){
                var _this = this;
                this.$http.get('src/data/follow.data').then(function(res){
                    _this.arrList = res.data;
                }).catch(function(err){
                    console.log(err);
                });
            }
        },
        components:{
            Slider
        }
    }
</script>
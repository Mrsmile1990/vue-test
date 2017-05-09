<template>
  <div id="app">
    <loading v-show="load"></loading>
    <NavView v-show="headerShow"></NavView>
    <router-view></router-view>
    <FooterView></FooterView>
  </div>
</template>

<script>
  import NavView from './components/Nav.vue'
  import FooterView from './components/Footer.vue'
  import loading from './components/loading/Loading.vue'
  import {mapGetters,mapActions} from 'vuex'


  export default{
    computed:mapGetters([
            'headerShow',
            'load'
    ]),
    watch:{
        $route(to,from){
            if(to.path == '/user-info'){
                this.$store.dispatch('hideHeader');
            }else{
                this.$store.dispatch('showHeader');
            }
        }
    },
    components:{
      loading,
      NavView,
      FooterView
    },

  }
</script>

<style>
  @import './assets/css/base.css';
  @import './assets/css/index.css';
</style>

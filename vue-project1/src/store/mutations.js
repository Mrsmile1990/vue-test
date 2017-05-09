import getters from './getters'

const state ={
    headerShow:true,
    loading:true
}

const mutations = {
    showHeader(state){
        state.headerShow = true
    },
    hideHeader(state){
        state.headerShow = false
    },
    showLoading(state){
        state.loading = true;
    },
    hideLoading(state){
        state.loading = false;
    }
}




export default{
    state,
    mutations,
    getters
}
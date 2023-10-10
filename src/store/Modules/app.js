const state = {
    loading_modal:false,
}

const getters = {
    

    get_modal_status: (state)=>{
        return state.loading_modal;
    }
}

const actions = {
   

    set_modal_status(ctx, payload){
        ctx.commit("update_modal_status", payload)
    }
}

const mutations = {
  
    update_modal_status(state, item){
        state.loading_modal = item
    }

}
export default { state, getters, actions, mutations }
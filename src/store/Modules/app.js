const state = {
    count: 0,
    list: [
        {
            name: "Jamshid",
            id: 1,
        },
        {
            name: "Jamshid 2",
            id: 2,
        },

    ]
}

const getters = {
    filter_list: (state)=>(id)=>{
        console.log(id);
        return state.list.filter(item => item.id ==id);
    }
}

const actions = {
    set_count(ctx, payload) {
        ctx.commit('increment', payload)
    },
    set_deccount(ctx, payload) {
        ctx.commit('decrement', payload)
    },
}

const mutations = {
    increment(state, item) {
        state.count = state.count + item;
    },
    decrement(state, item) {
        state.count = state.count - item;

    }
}
export default { state, getters, actions, mutations }
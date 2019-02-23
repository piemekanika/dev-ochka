import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        mouse: {
            x: null,
            y: null
        }
    },

    mutations: {
        setMousePosition (state, payload) {
            state.mouse.x = payload.x
            state.mouse.y = payload.y
        }
    },
    
    actions: {
        updateMousePosition (mouseEvent) {
            store.commit('setMousePosition', {
                x: mouseEvent.pageX,
                y: mouseEvent.pageY
            })
        }
    }
})

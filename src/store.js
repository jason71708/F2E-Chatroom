import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
export default new Vuex.Store({
    state: {
        userName: '匿名',
        avatarNum: 1,
        messages: [
<<<<<<< HEAD
=======
        {
            avatar: 5,
            user: '林勁90909090990呈',
            time: '16:27',
            isMe: false,
            mesg: '不要'
        },
        {
            isConnect: true,
            user:'林勁呈',
            time: '16:28',
            isIn:false,
        },
        {
            avatar: 2,
            user: 'Ken',
            time: '16:30',
            isMe: false,
            mesg: '不要\n我才不要  不要'
        },
>>>>>>> devolop
        ],
    },
    mutations: {
        CHANGE_AVATAR (state, obj) {
            state.avatarNum = obj.num
        },
        USERNAMEINPUT (state, obj) {
            if(obj.name){
                let legalName = obj.name.slice(0,8)
                state.userName = legalName
            }else{
                const num = Math.floor(Math.random()*99)+1;
                state.userName = '匿名'+ num;
            }
        },
        NEW_MESSAGE (state, obj) {
            state.messages.push(obj)
        },
        // updateGroupState (state, obj) {
        // state.groupState = obj
        // }
    },
    actions: {
        // changeSideBarState (context, status) {
        //   context.commit('changeSideBarState', status)
        // }
        // es6解构写法
        // updateChatState ({commit}, obj) {
        // commit('updateChatState', obj)
        // },
        // updateGroupState ({commit}, obj) {
        // commit('updateGroupState', obj)
        // }
    },
    getters: {
        // getChatState (state) {
        // return state.chatState
        // },
        // getGroupState (state) {
        // return state.groupState
        // }
    }
})

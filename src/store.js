import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
export default new Vuex.Store({
    state: {
        userName: '匿名',
        avatarNum: 1,
        messages: [
        {
            avatar: 6,
            user: '煞氣a小莊',
            time: '12:24',
            isMe: false,
            mesg: '今天出來玩好不好～'
        },
        {
            avatar: 6,
            user: '煞氣a小莊',
            time: '16:24',
            isMe: false,
            mesg: '都沒人理我ＱＱ'
        },
        {
            avatar: 4,
            user: '蘇義翔',
            time: '16:25',
            isMe: false,
            mesg: '不要'
        },
        {
            isConnect: true,
            user:'蔡昀澤',
            time: '16:25',
            isIn:true,
        },
        {
            avatar: 1,
            user: '蔡昀澤',
            time: '16:26',
            isMe: false,
            mesg: '不要'
        },
        {
            avatar: 7,
            user: '匿名',
            time: '16:27',
            isMe: true,
            mesg: '不要'
        },
        {
            avatar: 5,
            user: '林勁呈',
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
            mesg: '不要'
        },
        ],
    },
    mutations: {
        CHANGE_AVATAR (state, obj) {
            state.avatarNum = obj.num
        },
        USERNAMEINPUT (state, obj) {
            if(obj.name){
                state.userName = obj.name
            }else{
                const num = Math.floor(Math.random()*99)+1;
                return '匿名'+ num;
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

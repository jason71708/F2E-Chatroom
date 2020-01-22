<template>
  <v-row no-gutters justify="center" class="flex-nowrap">
    <v-navigation-drawer width="300" absolute :permanent="isDesktop" :hide-overlay="true" v-model="drawerPopUp">
      <v-list-item>  
          <v-list-item-icon>
            <AvatarIcon :outer="60" :inner="40" :avatar="userAvatar" :space="2"></AvatarIcon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title class="title">{{userName}}</v-list-item-title>
          </v-list-item-content>
          <!-- <v-list-item-icon class="j-icon">
            <v-icon>mdi-plus-thick</v-icon>
          </v-list-item-icon> -->
          <v-list-item-action>
            <v-btn icon>
              <v-icon>mdi-plus-thick</v-icon>
            </v-btn>
          </v-list-item-action>
      </v-list-item>

      <v-divider></v-divider>

      <v-list>
        <v-list-item v-for="(i,n) in groups" :key="n" @click="noting()">  
          <v-list-item-icon>
            <AvatarIcon :outer="60" :inner="40" :avatar="i.avatar" :space="2"></AvatarIcon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>{{i.name}} ({{i.members}})</v-list-item-title>
            <v-list-item-subtitle>{{i.subTitle}}</v-list-item-subtitle>
          </v-list-item-content>
          <v-list-item-avatar
            v-if="i.noSees!==0"
            color="normal" 
            max-height="20" 
            max-width="20" 
            min-width="20" 
            class="mr-6 reverse--text caption">{{i.noSees}}</v-list-item-avatar>
        </v-list-item>
        <v-list-item class="j-list-item">
          <v-list-item-action class="mr-4">
            <v-btn icon>
              <v-img
                  :src="require(`@/assets/icon/setting.svg`)"
                  max-height="24"
                  max-width="24"
              ></v-img>
            </v-btn>
          </v-list-item-action>
          <v-list-item-subtitle class="subtitle-1 normal--text">設定</v-list-item-subtitle>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-col class="j-col" v-if="isDesktop"></v-col>
    <v-col class="j-col2">
       <v-app-bar
          height="85"
          color="transparent"
          class="border-bottom"
        >        
        <v-app-bar-nav-icon @click.stop="drawerPopUp=!drawerPopUp" v-if="!isDesktop"></v-app-bar-nav-icon>

        <v-toolbar-title class="ml-8">大廳聊天～～ (10)</v-toolbar-title>
        <v-spacer></v-spacer>
        <v-menu
          bottom
          left>
          <template v-slot:activator="{ on }">
            <v-btn
              icon
              v-on="on"
            >
              <v-icon>mdi-dots-horizontal</v-icon>
            </v-btn>
          </template>

          <v-list>
            <v-list-item
              v-for="(item, i) in items"
              :key="i"
            >
              <v-list-item-title>{{ item.title }}</v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>
      </v-app-bar>
      <v-divider class="j-divdider text-center mb-6"></v-divider>

      <v-sheet id="messageBox" tile class="j-sheet j-sheet-bgc">
        <template v-for="(message, index) in messageLog">
          <JUserInOutMessage
            v-if="message.isConnect"
            :key="index"
            :userName="message.user"
            :time="message.time"
            :isIn="message.isIn">
          </JUserInOutMessage>
          <JMessage 
            v-else
            :key="index" 
            :userName="message.user"
            :avatar="message.avatar"
            :time="message.time"
            :isMe="message.isMe"
            :mesgText="message.mesg">
          </JMessage>
        </template>
      </v-sheet>

      <v-footer padless max-height="125" class="j-mesg-input">
         <v-card
            flat
            width="100%"
            class="bgc lighten-1"
            max-height="54"
          >
            <v-card-text class="py-0 px-2">
              <v-btn v-for="(icon, index) in btns" :key="index" class="my-3 mx-1" icon>
                <v-img 
                  max-width="28" 
                  max-height="28" 
                  :src="require(`@/assets/icon/${icon}.svg`)">
                </v-img>
              </v-btn>
            </v-card-text>
         </v-card>
        <v-text-field hide-details filled placeholder="說點什麼吧～" color="normal" height="70px" v-model.trim="inputMessage" @keyup.enter="sendMessageHandler()">
          <template v-slot:append>
            <v-btn icon @click="sendMessageHandler()">
              <img width="30" height="30" :src="require(`@/assets/icon/send.svg`)">
            </v-btn>
          </template>
        </v-text-field>
      </v-footer>
    </v-col>
   
  </v-row>
</template>

<script>
import AvatarIcon from '@/components/smallCP/AvatarIcon';
import JMessage from '@/components/smallCP/JMessage';
import JUserInOutMessage from '@/components/smallCP/JUserInOutMessage';

import io from "socket.io-client";
// const socket = io("http://localhost:5000/");
const socket = io("https://f2e-week7-2019.herokuapp.com:5000");

export default {
  name: 'chat',
  components: {
    AvatarIcon,
    JMessage,
    JUserInOutMessage,
  },
  data: () => ({
    items: [
      { title: "example1" },
      { title: "example2" },
      { title: "example3" },
      { title: "example4" },
    ],
    groups: [
      {
        avatar: 1,
        members: 9,
        name: '八卦版',
        subTitle: '我不知道',
        noSees: 123
      },
      {
        avatar: 2,
        members: 156,
        name: '閒聊區',
        subTitle: '這邊要做成',
        noSees: 92
      },
      {
        avatar: 3,
        members: 46,
        name: '遊戲攻略',
        subTitle: '群組資訊',
        noSees: 12
      },
      {
        avatar: 4,
        members: 1234,
        name: '靠北高師大',
        subTitle: '還是',
        noSees: 0
      },{
        avatar: 5,
        members: 6,
        name: '脖子和單身狗群聚地',
        subTitle: '最新未讀訊息',
        noSees: 4
      },
    ],
    btns: [
      'information',
      'picture',
      'attachment'
    ],
    inputMessage: '',
    drawerPopUp: false,
  }),
  computed: {
    isDesktop() {
      switch (this.$vuetify.breakpoint.name) {
        case 'xs': return false
        case 'sm': return false
        case 'md': return true
        case 'lg': return true
        case 'xl': return true
      }
    },
    userName() {
      return this.$store.state.userName
    },
    userAvatar() {
      return this.$store.state.avatarNum
    },
    messageLog() {
      return this.$store.state.messages
    }
  },
  methods: {
    noting() {
      return
    },
    convertTime() {
      const date = new Date();
      const hours = ('0'+date.getHours()).slice(-2);
      const mins = ('0'+date.getMinutes()).slice(-2);
      return hours+':'+mins
    },
    autoSrcoll() {
      const box = this.$el.querySelector('#messageBox');
      box.scrollTop = box.scrollHeight - box.clientHeight;
    },
    sendMessageHandler() {
      if(this.inputMessage=='')return;
      const mesgData = {
        avatar: this.userAvatar,
        user: this.userName,
        time: this.convertTime(),
        isMe: false,
        mesg: this.inputMessage
      }
      socket.emit('sendMessage', mesgData);
      mesgData.isMe = true;
      this.$store.commit('NEW_MESSAGE', mesgData);
      this.inputMessage = '';
      this.autoSrcoll();
    }
  },
  mounted() {
    socket.open();
    socket.emit('userInOut', {
      isConnect: true,
      user: this.userName,
      time: this.convertTime(),
      isIn: true,
    });
    socket.on('userInoutMessage', data => {
      this.$store.commit('NEW_MESSAGE', data);
    })
    socket.on('newMessage', data => {
      this.$store.commit('NEW_MESSAGE', data);
    })
  },
  watch: {
    messageLog() {
      const box = this.$el.querySelector('#messageBox')
      if(box.scrollHeight - 90 > box.scrollTop + box.clientHeight)return
      this.$nextTick(() => { //用 $nextTick 確保 dom 是更新後狀態
        box.scrollTop = box.scrollHeight - box.clientHeight
      })
    }
  },
  beforeDestroy() {
    socket.emit('userInOut', {
      isConnect: true,
      user: this.userName,
      time: this.convertTime(),
      isIn: false,
    });
    socket.off('userInoutMessage');
    socket.off('newMessage');
    socket.close();
  }
};
</script>

<style scoped>
.v-content{
  height: 100vh;
}
.col.j-col{
  width: 300px;
  max-width: none;
  flex: 0 0 auto;
}
.col.j-col2{
  max-width: 100%;
  height: 100vh;
  flex: 1 1 auto;
}
.v-divider.theme--dark.j-divdider{
  border-color: rgb(255, 255, 255, 0.6);
}
.v-list-item__icon.j-icon{
  align-self: auto;
}
.v-list-item.theme--dark.j-list-item{
  background-color: #4a4a4a;
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
}
.v-list-item.theme--light.j-list-item{
  background-color: #eee;
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
}
.v-footer.j-mesg-input{
  position: absolute;
  bottom: 0;
  right: 8px;
  width: calc(100% - 300px - 16px);
}
.v-sheet.j-sheet{
  width: 100%;
  height: calc(100% - 130px - 85px - 24px);
  overflow: scroll;
  -ms-overflow-style: none;
  overflow: -moz-scrollbars-none;
}
.v-sheet.j-sheet::-webkit-scrollbar { width: 0 !important }
.theme--dark.v-sheet.j-sheet-bgc{
  background-color: #303030
}
.theme--light.v-sheet.j-sheet-bgc{
  background-color: #fafafa
}
@media (max-width:961px) {
  .v-footer.j-mesg-input{
      width: 100%;
      right: 0;
  }
}
</style>

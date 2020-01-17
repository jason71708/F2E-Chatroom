<template>
  <v-row no-gutters justify="center" class="flex-nowrap">
    <v-navigation-drawer width="300" absolute :permanent="isDesktop" :hide-overlay="true" v-model="drawerPopUp">
      <v-list-item>  
          <v-list-item-icon>
            <AvatarIcon :outer="60" :inner="40" :avatar="7" :space="2"></AvatarIcon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title class="title">匿名</v-list-item-title>
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
        <v-list-item v-for="n in 6" :key="n" @click="noting()">  
          <v-list-item-icon>
            <AvatarIcon :outer="60" :inner="40" :avatar="n" :space="2"></AvatarIcon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>八卦閒聊區 ({{n*n}})</v-list-item-title>
            <v-list-item-subtitle>Secondary{{n+n}}</v-list-item-subtitle>
          </v-list-item-content>
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
    <v-col class="j-col" v-if="isDesktop">
      1212121
    </v-col>
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

      <v-sheet tile class="j-sheet j-sheet-bgc">
        <template v-for="(message, index) in messages">
          <JMessage 
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
        <v-text-field hide-details filled placeholder="說點什麼吧～" color="normal" height="70px">
          <template v-slot:append>
            <v-btn icon>
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

export default {
  name: 'chat',
  components: {
    AvatarIcon,
    JMessage,
  },
  data: () => ({
    items: [
      { title: "example1" },
      { title: "example2" },
      { title: "example3" },
      { title: "example4" },
    ],
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
        avatar: 2,
        user: 'Ken',
        time: '16:27',
        isMe: false,
        mesg: '不要'
      },
    ],
    btns: [
      'information',
      'picture',
      'attachment'
    ],
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
  },
  methods: {
    noting() {
      return
    }
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
}
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

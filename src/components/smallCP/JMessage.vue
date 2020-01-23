<template>
    <v-sheet 
      :class="[isMe?'justify-end':'',this.isMoboile?'pb-4 px-2':'pb-6 px-6']"
      class="j-sheet-message j-sheet-bgc">
        <AvatarIcon 
          v-if="!isMe" 
          :avatar="avatar"
          :outer="this.isMoboile?30:45" 
          :inner="this.isMoboile?20:30">
        </AvatarIcon>
        <div 
          :class="[isMe?'order-1':'',this.isMoboile?'ml-2':'ml-3' ]">
            <h4 
              v-if="!isMe"
              :class="[this.isMoboile?'overline font-weight-medium mb-1':'subtitle-2 mb-2' ]">{{userName}}</h4>
            <v-sheet 
              :class="[isMe?'my-mesg primary':'',this.isMoboile?'pa-2 body-2':'pa-4 body-1']"
              class="j-feild-message">
                <p 
                  :class="{ 'white--text': isMe }"
                  class="black--text mb-0"
                  v-html="mesgText"></p>
            </v-sheet>
        </div>
        <p 
          :class="[ isMe?'order-0':'',this.isMoboile?'ml-1':'ml-3']"
          class="align-self-end mb-0 caption">{{time}}</p>
    </v-sheet>
</template>

<script>
import AvatarIcon from '@/components/smallCP/AvatarIcon';

export default {
    name: 'JMessage',
    props: {
        avatar: {
            type: Number,
        },
        userName: {
            type: String,
        },
        time: {
            type: String,
        },
        mesgText: {
            type: String,
        },
        isMe: {
            type: Boolean,
        },
    },
    components: {
        AvatarIcon,
    },
    computed: {
        isMoboile() {
            return this.$vuetify.breakpoint.xsOnly
        },
    }
}
</script>

<style>
p{
    display: inline-block;
    white-space: pre-wrap;
}
.j-sheet-message.v-sheet{
    display: flex;
}
.j-feild-message.v-sheet.theme--dark{
    background-color: #fff;
    border-radius: 0 12px 12px 12px;
    width: fit-content;
    word-break: break-all;
    -ms-word-break: break-all;
    max-width:300px;
}
.j-feild-message.v-sheet.theme--light{
    background-color: none;
    border: 1px solid #111;
    border-radius: 0 12px 12px 12px;
    width: fit-content;
}
.j-feild-message.v-sheet.my-mesg{
    border-radius: 12px 0 12px 12px;
}
</style>
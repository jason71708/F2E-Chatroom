<template>
    <v-sheet 
      :class="{ 'justify-end': isMe }"
      class="j-sheet-message j-sheet-bgc mb-6 px-6">
        <AvatarIcon 
          v-if="!isMe" 
          :avatar="avatar">
        </AvatarIcon>
        <div 
          :class="{ 'order-1': isMe }"
          class="ml-3">
            <h4 
              v-if="!isMe" 
              class="subtitle-2 mb-2">{{userName}}</h4>
            <v-sheet 
              :class="{ 'my-mesg primary': isMe }"
              class="body-1 j-feild-message pa-4">
                <p 
                  :class="{ 'white--text': isMe }"
                  class="black--text mb-0">{{mesgText}}</p>
            </v-sheet>
        </div>
        <p 
          :class="{ 'order-0': isMe }"
          class="align-self-end ml-3 caption mb-0">{{time}}</p>
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
}
</script>

<style>
.j-sheet-message.v-sheet{
    display: flex;
}
.j-feild-message.v-sheet.theme--dark{
    background-color: #fff;
    border-radius: 0 12px 12px 12px;
}
.j-feild-message.v-sheet.theme--light{
    background-color: none;
    border: 1px solid #111;
    border-radius: 0 12px 12px 12px;
}
.j-feild-message.v-sheet.my-mesg{
    border-radius: 12px 0 12px 12px;
}
</style>
<template>
    <v-sheet class="text-center j-sheet-bgc" :class="{'my-1':isMoboile}">
        <h6>{{time}}</h6>
        <p v-if="isIn" class="mb-0" :class="{'body-2':isMoboile}">{{userName}}加入聊天</p>
        <p v-else class="mb-0" :class="{'body-2':isMoboile}">{{userName}}離開聊天</p>
    </v-sheet>
</template>
<script>
export default {
    name: 'JUserInOutMessage',
    props: {
        userName: {
            type: String,
        },
        time: {
            type: String,
        },
        isIn: {
            type: Boolean,
        }
    },
    computed: {
        isMoboile() {
            return this.$vuetify.breakpoint.xsOnly
        },
    }
}
</script>

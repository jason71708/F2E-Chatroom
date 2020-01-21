<template>
    <v-sheet class="text-center j-sheet-bgc">
        <h6>{{time}}</h6>
        <p v-if="isIn" class="mb-0">{{userName}}加入聊天</p>
        <p v-else class="mb-0">{{userName}}離開聊天</p>
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
}
</script>

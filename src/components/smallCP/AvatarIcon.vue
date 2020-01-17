<template>
    <v-card 
        outlined 
        :width="outer"
        :height="outer"
        class="j-avatar-icon"
        >
            <v-img
                :src="require(`@/assets/icon/member0${avatar}.svg`)"
                :height="inner"
                :width="inner"
                class="mx-auto over-visible"
                :class="classCompute"
            ></v-img>
    </v-card>
</template>
<script>
export default {
    props: {
        outer: {
            type: Number,
            default: 45
        },
        inner: {
            type: Number,
            default: 30
        },
        avatar: {
            type: Number,
            default: 7
        },
        space: {
            type: Number,
            default: 1
        },
    },
    computed: {
        classCompute(){
            return "my-"+this.space;
        },
    }
}
</script>
<style>
.theme--dark.v-card.v-card--outlined.j-avatar-icon{
    border: 2px solid #FFFFFF;
    border-radius: 50%;
    background-color: transparent;
}
.theme--light.v-card.v-card--outlined.j-avatar-icon{
    border: 2px solid rgb(0, 0, 0, 0.5);
    border-radius: 50%;
    background-color: transparent;
}
</style>
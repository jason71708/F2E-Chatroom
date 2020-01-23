<template>
    <v-content>
      <v-card 
        v-if="!isChoose"
        @click="isChoose=!isChoose"
        outlined 
        hover
        :max-width="isMobile ? 100 : 150"
        :max-height="isMobile ? 100 : 150"
        class="j-avatar-circle mx-auto">
            <v-img
                :src="require(`@/assets/icon/member0${userAvatar}.svg`)"
                :height="isMobile ? 80*2/3 : 80"
                :width="isMobile ? 80*2/3 : 80"
                class="mx-auto my-5 over-visible"
                :class="[this.isMobile ? 'my-5':'my-8']"
            ></v-img>
      </v-card>
     <v-sheet
        v-else
        class="mx-auto"
        :max-width="isMobile ? 700*2/3 : 700"
        :max-height="isMobile ? 100 : 150"
        >
            <v-slide-group 
              show-arrows 
              mandatory 
              center-active>
                <v-slide-item
                    v-for="n in 7"
                    :key="n"
                >
                    <v-card
                        color="transparent"
                        class="j-card--link"
                        elevation='0'
                        @click="changeAvatarHandler(n)"
                    >
                        <v-img
                            :src="require(`@/assets/icon/member0${n}.svg`)"
                            :height="isMobile ? 80*2/3 : 80"
                            :width="isMobile ? 80*2/3 : 80"
                            class="mx-auto over-visible"
                        ></v-img>
                    </v-card>
                    
                </v-slide-item>
            </v-slide-group>
        </v-sheet>
    </v-content>
    
    
</template>
<script>
export default {
    data: () => ({
        isChoose: false,
    }),
    computed: {
        isMobile() {
            return this.$vuetify.breakpoint.xsOnly
        },
        userAvatar() {
            return this.$store.state.avatarNum
        }
    },
    methods: {
        changeAvatarHandler(n) {
            this.isChoose = !this.isChoose;
            this.$store.commit('CHANGE_AVATAR', { num: n });
        }
    },
}
</script>
<style>
.v-card.v-card--link.j-card--link{
    margin: 32px 12px 36px 12px;
}
.theme--dark.v-card.v-card--outlined.j-avatar-circle{
    border: 2px solid #FFFFFF;
    border-radius: 50%;
    background-color: transparent;
}
.theme--light.v-card.v-card--outlined.j-avatar-circle{
    border: 2px solid rgb(0, 0, 0, 0.6);
    border-radius: 50%;
    background-color: transparent;
}
.v-card > .over-visible{
    overflow: visible;
}
@media (max-width:600px) {
    .v-card.v-card--link.j-card--link{
        margin: 20px 12px 24px 12px;
    }
}
</style>

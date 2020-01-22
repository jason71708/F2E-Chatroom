<template>
    <v-content>
      <v-card 
        v-if="!isChoose"
        @click="isChoose=!isChoose"
        outlined 
        hover
        max-width="150"
        class="j-avatar-circle mx-auto">
            <v-img
                :src="require(`@/assets/icon/member0${userAvatar}.svg`)"
                height="80"
                width="80"
                class="mx-auto my-8 over-visible"
            ></v-img>
      </v-card>
     <v-sheet
        v-else
        class="mx-auto"
        max-width="700"
        max-height="150"
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
                        class="ma-4 my-8 mb-9"
                        elevation='0'
                        @click="changeAvatarHandler(n)"
                    >
                        <v-img
                            :src="require(`@/assets/icon/member0${n}.svg`)"
                            height="80"
                            width="80"
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
</style>

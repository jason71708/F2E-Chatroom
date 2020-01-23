<template>
    <v-row 
      align="center" 
      justify="center"
      class="px-9">
        <v-col 
          v-for="(item, index) in items"
          :key="index"
          cols="6"
          class="j-col"
          md="3">
          <v-hover v-slot:default="{ hover }">
             <v-card 
              hover
              to="chat"
              outlined 
              :max-width="isMobile ? 160 : 240"
              :class="{ 'on-hover': hover }"
              class="j-card-button mx-auto text-center pa-3">
                <v-img
                  :src="require(`@/assets/icon/${item.icon}.svg`)"
                  :height="isMobile ? 50 : 70"
                  :width="isMobile ? 50 : 70"
                  class="mx-auto mt-sm-3"
                ></v-img>
                <h3
                  class="mt-2 mb-sm-4 body-2"
                >{{item.mode}}</h3>
            </v-card>
          </v-hover>
        </v-col>
        <v-switch
            class="mt-xs-0"
            v-model="$vuetify.theme.dark"
            inset
            hide-details
        ></v-switch>
    </v-row>
</template>
<script>
export default {
    data: ()=>({
        items:[
            {
                mode:'大廳模式',
                icon:'worldwide'
            },
            {
                mode:'一對一聊天',
                icon:'chat'
            },
            {
                mode:'系統配對',
                icon:'pair'
            },
            {
                mode:'自創聊天模式',
                icon:'custome'
            },
        ]
    }),
    computed: {
        isMobile() {
            return this.$vuetify.breakpoint.xsOnly
        }
    },
}
</script>
<style>
.theme--dark.v-card.v-card--outlined.j-card-button{
    border: 1px solid #FFFFFF;
    border-radius: 8px;
    background-color: transparent;
}
.theme--light.v-card.v-card--outlined.j-card-button{
    border: 1px solid rgb(0, 0, 0, 0.87);
    border-radius: 8px;
    background-color: transparent;
}
.v-card {
  transition: all .3s ease-in-out;
}

.theme--dark.v-card.v-card--outlined.on-hover {
    background-color: rgba(65, 65, 65);
 }
</style>
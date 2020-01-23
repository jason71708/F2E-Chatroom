<template>
    <v-row align="center" justify="center">
        <v-col cols="12" class="j-col">
            <h1 class="mx-auto text-center font-weight-bold" 
              :class="[this.isMobile?'headline mt-6':'my-4']">{{appTitle}}</h1>
        </v-col>
        <v-col cols="12" class="j-col">
            <AvatarChoose class="mx-auto" />
        </v-col>
        <v-col cols="12" class="j-col">
            <div class="input-card mx-auto">
              <v-text-field
                counter="8"
                placeholder="輸入暱稱或直接匿名開始" 
                color="normal" 
                v-model.trim="name"></v-text-field>
            </div>
        </v-col>
    </v-row>
</template>
<script>

import AvatarChoose from '@/components/smallCP/AvatarChoose';

export default {
  components: {
    AvatarChoose,
  },
  data: () => ({
    appTitle: '來．聊．天．吧',
    name: '',
  }),
  computed: {
    isMobile() {
      return this.$vuetify.breakpoint.xsOnly
    }
  },
  beforeDestroy() {
    this.$store.commit('USERNAMEINPUT', { name: this.name })
  },
}
</script>

<style>
h1{
    font-size: 36px;
}
.input-card{
    width: 240px;
}
</style>
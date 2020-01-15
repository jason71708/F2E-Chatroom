<template>
    <v-row :align="'center'" :justify="'center'">
        <v-col cols="12">
            <h1 class="my-4 mx-auto text-center">{{appTitle}}</h1>
        </v-col>
        <v-col cols="12">
            <AvatarChoose class="mx-auto" />
        </v-col>
        <v-col cols="12">
            <div class="input-card mx-auto">
                <v-text-field
                    placeholder="輸入暱稱或直接匿名開始"
                    color="#fff"
                ></v-text-field>
            </div>
        </v-col>
    </v-row>
</template>
<script>

import AvatarChoose from '@/components/smallCP/AvatarChoose';
//:class="'d-flex justify-center mb-6'"
export default {
  components: {
    AvatarChoose,
  },
  data: () => ({
    appTitle: '來．聊．天．吧',
  }),
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
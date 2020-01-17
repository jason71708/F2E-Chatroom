<template>
  <v-row no-gutters align="center" justify="center">
    <v-col cols="12">
      <UserInputInfo />
    </v-col>
    <v-col cols="12">
      <NavButton />
    </v-col>
  </v-row>
</template>

<script>
// @ is an alias to /src
import NavButton from '@/components/NavButton';
import UserInputInfo from '@/components/UserInputInfo';

export default {
  name: 'home',
  components: {
    UserInputInfo,
    NavButton,
  },
};
</script>

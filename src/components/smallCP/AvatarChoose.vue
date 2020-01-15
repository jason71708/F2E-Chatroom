<template>
    <div class="circle">
        <div class="outer">
            <v-img
            :src="require('@/assets/icon/member01.svg')"
            height="80"
            width="80"
            class="mb-3"
            ></v-img>
        </div>
    </div>
</template>
<script>
// import user1 from '@/assets/icon/member01.svg';
// import user2 from '@/assets/icon/member02.svg';
// import user3 from '@/assets/icon/member03.svg';
// import user4 from '@/assets/icon/member04.svg';
// import user5 from '@/assets/icon/member05.svg';
// import user6 from '@/assets/icon/member06.svg';
// import user7 from '@/assets/icon/member07.svg';

export default {
//   components: {
//     user1,
//     user2,
//     user3,
//     user4,
//     user5,
//     user6,
//     user7,
//   },
}
</script>
<style>
.circle{
    width: 150px;
    height: 150px;
    border: 2px solid #fff;
    border-radius: 50%;
    text-align: center;
    line-height: 150px;
}
.outer{
    display: inline-block;
    vertical-align: middle;
}
</style>
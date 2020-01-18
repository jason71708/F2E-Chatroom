import Vue from 'vue';
import Vuetify from 'vuetify/lib';

Vue.use(Vuetify);

export default new Vuetify({
    theme: {
        dark: true,
        themes: {
            light: {
                normal: '#000',
                reverse: '#fff',
                bgc:'#eee'
            },
            dark: {
                normal: '#fff',
                reverse: '#000',
                bgc:'#4A4A4A'
            }
        },
    },
    
});

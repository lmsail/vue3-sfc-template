import { createStore } from 'vuex';
import UserModules from './modules/user'

export default createStore({
    state: {
        isBack: false
    },
    modules: {
        UserModules
    }
});
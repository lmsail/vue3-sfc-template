import router from '@/router';
import store from '@/store';

export default {
    openPage: (path, params = null) => {
        router.push(path, params)
    },

    back: () => {
        store.state.isBack = true;
        router.back();
    }
}
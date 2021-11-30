<template>
    <router-view class="view-page" v-slot="{ Component }">
        <transition :name="transition">
            <keep-alive><component :is="Component"/></keep-alive>
        </transition>
    </router-view>
</template>

<script setup>
    import { ref } from '@vue/reactivity';
    import { watch } from '@vue/runtime-core';
    import { useRoute } from 'vue-router';
    import store from '@/store';

    const transition = ref();
    const route = useRoute();
    watch(() => route.name, (to, _) => {
        transition.value = store.state.isBack || to === 'Home' ? 'turn-off' : 'turn-on'
        store.state.isBack = false;
    })
</script>
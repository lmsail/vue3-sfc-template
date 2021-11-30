<template>
    <section class="ignore-tag">
        <hello-world msg="vue3 + vite + naiveui 脚手架" />
        <div style="text-align: center;margin-top: 30px;">
            <n-button type="primary" @click="Utils.openPage('/about')">
                跳转至 -> 关于我
            </n-button>
        </div>
    </section>
</template>

<script setup>
    import { NButton } from 'naive-ui';
    import Utils from '@/utils';
    import HelloWorld from 'comps/HelloWorld.vue';
</script>
<template>
    <section class="ignore-tag">
        <hello-world msg="vue3 + vite + vant 脚手架" />
        <div style="text-align: center;margin-top: 30px;">
            <Button type="primary" @click="Utils.openPage('/about')">
                跳转至 -> 关于我
            </Button>
        </div>
    </section>
</template>

<script setup>
    import { Button, Cell } from 'vant';
    import Utils from '@/utils';
    import HelloWorld from '@comps/HelloWorld.vue';
</script>
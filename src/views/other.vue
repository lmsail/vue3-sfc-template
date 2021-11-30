<template>
    <section class="ignore-tag">
        <h2>Other page</h2>
        <div style="text-align: center;margin-top: 30px;">
            <n-button @click="Utils.back">返回上一页</n-button>
        </div>
    </section>
</template>

<script setup>
    import { NButton } from 'naive-ui';
    import Utils from '@/utils';
</script>

<template>
    <section class="ignore-tag">
        <h2>About page</h2>
        <div style="text-align: center;margin-top: 30px;">
            <n-button type="primary" @click="Utils.openPage('/other')">
                跳转至 -> 其它
            </n-button>
            <div style="margin-top: 20px;">
                <n-button @click="Utils.back">返回上一页</n-button>
            </div>
        </div>
    </section>
</template>

<script setup>
    import { NButton } from 'naive-ui';
    import Utils from '@/utils';
</script>
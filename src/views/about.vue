<template>
    <section class="ignore-tag">
        <h2>About page</h2>
        <div style="text-align: center;margin-top: 30px;">
            <Button type="primary" @click="Utils.openPage('/other')">
                跳转至 -> 其它
            </Button>
            <div style="margin-top: 20px;">
                <Button @click="Utils.back">返回上一页</Button>
            </div>
        </div>
    </section>
</template>

<script setup>
    import { Button } from 'vant';
    import Utils from '@/utils';
</script>
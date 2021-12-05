<template>
    <section class="ignore-tag">
        <h2>Other page</h2>
        <div style="text-align: center;margin-top: 30px;">
            <Button @click="Utils.back">返回上一页</Button>
        </div>
    </section>
</template>

<script setup>
    import { Button } from 'vant';
    import Utils from '@/utils';
</script>

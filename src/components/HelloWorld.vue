<template>
    <h2 style="text-align: center">{{ msg }}</h2>
</template>

<script setup>
    import { ref } from "vue";

    defineProps({ msg: String });
    const count = ref(0);
</script>
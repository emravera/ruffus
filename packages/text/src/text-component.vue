<template>
    <h1 class="size-1 p-2">
        {{ text }}
    </h1>
</template>

<script>
export default {
    props: {
        text: {
            type: String,
            default: '',
            required: false
        }
    }
}
</script>

<style scoped>
@import "./node_modules/bulma/css/bulma.css";
    .size-1 {
        font-size: 48px;
    }
</style>

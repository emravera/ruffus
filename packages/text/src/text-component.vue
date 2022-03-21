<template>
    <h1 class="size-1">
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
    .size-1 {
        font-size: 48px;
    }
</style>

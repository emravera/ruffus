<template>
    <button class="color">
        <text-component :text="text"></text-component>
    </button>
</template>

<script>
import TextComponent from '@ruffus/text';
export default {
    props: {
        text: {
            type: String,
            default: '',
            required: false
        }
    },
    components: {
        TextComponent
    }
}
</script>

<style scoped>
    .color {
        color: blue;
    }
</style>

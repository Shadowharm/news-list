<template>
    <div class="main">
        <slot />
    </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({});
</script>

<style lang="scss">
.main {
    width: 80%;
    max-width: 1060px;
    margin: auto;
    margin-top: 36px;
    margin: 36px auto 48px;
}
</style>

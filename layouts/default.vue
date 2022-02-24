<template>
    <div class="container">
        <div class="container__wrapper">
            <nuxt />
        </div>
    </div>
</template>

<style lang="scss">
body {
    margin: 0;
    padding: 0;
    background-color: #fbfbfb;
}
.container {
    &__wrapper {
        width: 100%;
        max-width: 1400px;
        margin: 0 auto;
        padding: 0;
    }
}
</style>

<template>
    <form class="search-input">
        <input type="text" class="search-input__input" />
        <button class="search-input__btn">
            <search-icon />
        </button>
    </form>
</template>

<script lang="ts">
import Vue from 'vue';
import SearchIcon from '~/components/icons/SearchIcon.vue';
export default Vue.extend({
    components: { SearchIcon },
});
</script>

<style lang="scss">
.search-input {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    height: 32px;
    padding: 4px 0;
    width: 100%;
    max-width: 321px;
    background-color: #ffffff;
    box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.05);
    border-radius: 3px;
    margin-left: auto;

    &__input {
        height: 100%;
        width: 100%;
        outline: none;
        border: none;
        font-family: Arial;
        font-size: 16px;
        padding-left: 6px;
    }

    &__btn {
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: inherit;
        border: none;
        padding-right: 13px;
        cursor: pointer;
    }

    @media (max-width: 600px) {
        max-width: 100%;
    }
}
</style>

<template>
    <div class="nav" :class="insertDots">
        <template v-for="n in pages">
            <span v-if="n === length && insertDots.pushDots" :key="`a${n}`"
                >...</span
            >
            <!-- <label
                :key="`b${n}`"
                class="nav__link"
                :class="{
                    nav__link_active: activePage === n,
                }"
            >
                <input
                    type="button"
                    class="radiobutton"
                    :value="n"
                    @click="$emit('changePage', +$event.target.value)"
                />
                {{ n }}
            </label> -->
            <router-link
                :to="{ params: { page: `${n}` }, query: { source, search } }"
                :key="`b${n}`"
                class="nav__link"
                :class="{
                    nav__link_active: activePage === n,
                }"
                >{{ n }}</router-link
            >
            <span v-if="n === 1 && insertDots.unshiftDots" :key="`c${n}`"
                >...</span
            >
        </template>
    </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
    data() {
        return {
            activePage: +this.$route.params.page as number,
        };
    },
    props: {
        pages: {
            required: true,
            type: Array,
        },
        length: {
            required: true,
            type: Number,
        },
        source: {
            required: true,
            type: String,
        },
        search: {
            required: true,
            type: String,
        },
    },
    computed: {
        insertDots: function () {
            const pages: number = this.length;
            const activePage: number = +this.$route.params.page;
            const classObj: {
                unshiftDots: boolean;
                pushDots: boolean;
            } = {
                unshiftDots: false,
                pushDots: false,
            };
            if (pages < 6) return classObj;
            if (pages - 2 > activePage) classObj.pushDots = true;
            if (3 < activePage) classObj.unshiftDots = true;
            return classObj;
        },
    },
});
</script>

<style lang="scss">
.nav {
    margin: 50px auto 0;
    width: max-content;
    height: 21px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    gap: 20px;

    font-family: Arial;
    font-style: normal;
    font-weight: bold;
    font-size: 18px;

    &__link {
        color: #000000;
        background-color: inherit;
        border: none;
        font-family: Arial;
        font-style: normal;
        font-weight: bold;
        font-size: 18px;
        cursor: pointer;
        text-decoration: none;
        &_active {
            color: #0029ff;
        }
    }
}
</style>

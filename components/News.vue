<template>
    <div class="news news_rows">
        <news-card
            v-for="(news, i) in newsList"
            :key="i"
            v-bind="news"
        />
    </div>
</template>

<script lang="ts">
import Vue from 'vue';
import NewsCard from '~/components/NewsCard.vue';

export default Vue.extend({
    components: { NewsCard },
    props: {
        newsList: {
            required: true,
            type: Array,
        },
    },
});
</script>

<style lang="scss">
.news {
    width: 100%;
    margin-top: 28px;
    display: grid;
    grid-gap: 20px;
    &_grid {
        grid-template-columns: 1fr 1fr;

        @media (max-width: 600px) {
            grid-template-columns: 1fr;
        }
    }
    &_rows {
        grid-template-columns: 1fr;
    }
}
</style>

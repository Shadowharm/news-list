<template>
    <Page>
        <Activebar />
        <News :newsList="newsList" />
        <div class="naw">
            <a href="" class="naw__link naw__link_active">1</a>
            <a href="" class="naw__link">2</a>
            <a href="" class="naw__link">3</a>
            <a href="" class="naw__link">4</a>
            <span>...</span>
            <a href="" class="naw__link">200</a>
        </div>
    </Page>
</template>

<script lang="ts">
import Vue from 'vue';
import Activebar from '~/components/Activebar.vue';
import News from '~/components/News.vue';
import Page from '~/components/Page.vue';
import { NewsType } from '~/interfaces/news.interface';

export default Vue.extend({
    name: 'IndexPage',
    components: { Activebar, News, Page },
    data() {
        return { newsList: [] as NewsType[] };
    },
    async mounted() {
        this.newsList = await this.$axios.$get("api/getNews/getNews")
    },
});
</script>

<style lang="scss">
.naw {
    margin: 50px auto 0;
    width: 186px;
    height: 21px;
    font-family: Arial;
    font-style: normal;
    font-weight: bold;
    font-size: 18px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;

    &__link {
        color: #000000;
        text-decoration: none;

        &_active {
            color: #0029ff;
        }
    }
}
</style>

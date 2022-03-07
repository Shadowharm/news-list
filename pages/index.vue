<template>
    <Page>
        <Activebar
            :displayMode="displayMode"
            :source="source"
            @changeDisplayMode="changeDisplayMode"
            @changeSource="changeSource"
            @update="update"
            @search="search"
        />
        <News :newsList="newsListCurrent" :displayMode="displayMode" />
        <NavBar
            :activePage="page"
            :pages="pages"
            :length="Math.ceil(length / 4)"
            @changePage="changePage"
        />
    </Page>
</template>

<script lang="ts">
import Vue from 'vue';
import Activebar from '~/components/Activebar.vue';
import News from '~/components/News.vue';
import Page from '~/components/Page.vue';
import NavBar from '~/components/NavBar.vue';
import { NewsType } from '~/interfaces/news.interface';

export default Vue.extend({
    name: 'IndexPage',
    components: { Activebar, News, Page, NavBar },
    data() {
        return {
            newsList: [] as NewsType[],
            page: 1 as number,
            length: 0 as number,
            displayMode: 'grid' as string,
            source: 'all' as string,
            searchValue: '' as string,
        };
    },
    async mounted() {
        const data: NewsType[] = await this.$axios.$get('api/getNews/getNews');
        this.length = data.length;
        this.newsList = data;
    },
    computed: {
        pages: function () {
            const pages: number = Math.ceil(this.length / 4);
            const page: number = this.page;
            function createArray(start: number, end: number): Number[] {
                return Array.from({ length: end - start + 1 }, () => {
                    start += 1;
                    return start - 1;
                });
            }
            if (pages < 6) {
                return createArray(1, pages);
            }
            if (page - 2 <= 0) {
                const array: Number[] = createArray(1, 4);
                array.push(pages);
                return array;
            }
            if (page - 2 > 0 && page + 2 < pages) {
                const array: Number[] = createArray(page - 1, page + 1);
                array.push(pages);
                array.unshift(1);
                return array;
            }
            if (page + 2 >= pages) {
                const array: Number[] = createArray(pages - 3, pages);
                array.unshift(1);
                return array;
            }
        },
        newsListCurrent: function () {
            const source: string = this.source;
            const page: number = this.page;
            const search: string = this.searchValue;
            let newsList: NewsType[] = this.newsList;
            if (source !== 'all') {
                newsList = newsList.filter((news) => news.source === source);
            }
            if (search) {
                newsList = newsList.filter(
                    (news) =>
                        new RegExp(search, 'i').test(news.title) ||
                        new RegExp(search, 'i').test(news.description)
                );
            }
            this.length = newsList.length;
            newsList = newsList.slice((page - 1) * 4, page * 4);
            return newsList;
        },
    },
    methods: {
        changeDisplayMode: function (value: string) {
            this.displayMode = value;
        },
        changeSource: function (value: string) {
            this.source = value;
            this.page = 1;
        },
        update: async function () {
            const data: NewsType[] = await this.$axios.$get(
                'api/getNews/getNews'
            );
            this.length = data.length;
            this.page = 1;
            this.source = 'all';
            this.newsList = data;
        },
        changePage: function (value: number) {
            this.page = value;
        },
        search: function (value: string) {
            this.page = 1;
            this.searchValue = value;
        },
    },
});
</script>

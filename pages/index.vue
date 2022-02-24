<template>
    <Page>
        <Activebar />
        <News />
    </Page>
</template>

<script lang="ts">
import Activebar from '~/components/Activebar.vue';
import News from '~/components/News.vue';
import Page from '~/components/Page.vue';
import Vue from 'vue';

export default Vue.extend({
    components: { Activebar, News, Page },
    name: 'IndexPage',
});
</script>

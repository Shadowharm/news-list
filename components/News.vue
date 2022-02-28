<template>
    <div class="news news_rows">
        <news-card
            title="Первые земельные участки реализованы на специальных торгах для малого и среднего бизнеса"
            description="На каждый участок претендовали в среднем шесть участников. Стоимость одной из сделок выросла в ходе аукциона в 26 раз."
        />
        <news-card
            title="200 тысяч товаров: Москва собирает гуманитарную помощь для беженцев"
            description="Специалисты обновят пешеходные дорожки, детские площадки и спортивные поля, установят новую уличную мебель, а также высадят деревья, кустарники и многолетние цветы."
        />
        <news-card
            title="В московских школах нет классов на карантине"
            description="Ученикам и учителям по-прежнему измеряют температуру, регулярно проводится тщательная уборка с применением моющих и дезинфицирующих средств, сотрудники и школьники обеспечены индивидуальными средствами защиты."
        />
        <news-card
            title="К 1 сентября в столице благоустроят 193 территории возле детских садов и школ"
            description="В начале недели осадков не ожидается, в пятницу и субботу возможен снег."
        />
    </div>
</template>

<script lang="ts">
import Vue from 'vue';
import NewsCard from '~/components/NewsCard.vue';
export default Vue.extend({
    components: { NewsCard },
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

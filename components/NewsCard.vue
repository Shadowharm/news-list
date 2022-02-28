<template>
    <div class="newscard">
        <div class="newscard__container">
            <div class="image">
                <img
                    src="https://s3-alpha-sig.figma.com/img/a0fe/e0ad/3b935633b46e1a65ff5a3c7e3e0dcbbf?Expires=1647216000&Signature=FKyHSV8wT-WFnVvARXAZJBoxFqP49ATvHf0TOmYG84JEYGfvKA52ncOHbOwo4sLA~c~-BUof0t8tmBCxiuBiFZlzCkS5TvsID~lvoBzZFCs75-AN4TNmum6R96MMMArr1a1mzwAb2AI~PAdp3Mi4qypVaJZP1KI9hbyjBzRn0Mc0VPyAT15HKZa4we5OizukTq6Q6YcEkITtlVdDmJzRXTGogIHR10nGxFGxuSydpp7~LyYM3U6lhxdlsLxakczm3YYnaOYqdWnGT5-rzYgb7BVNBLY1uoDFQea8F8A4bvj-ApQU7-AwIhsrYR~2VC4~VU0hILzEhuSk0V4iPgHZEg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
                    alt=""
                    class="image__img"
                />
            </div>
            <div class="newscard__main_rows">
                <h2 class="newscard__title">
                    <a href="">{{ title }}</a>
                </h2>

                <div class="newscard__description">
                    {{ description }}
                </div>
                <!-- <div class="newscard__link">
                    <a href="#">Подробнее</a>
                </div> -->
            </div>
        </div>
        <div class="newscard__info">
            <a class="newscard__source" href="#">www.mos.ru</a>
            <span>12.01.2020</span>
        </div>
    </div>
</template>

<script lang="ts">
import Vue from 'vue';
export default Vue.extend({
    props: {
        title: String,
        description: String,
        imgSrc: String,
        link: String,
        source: String,
    },
});
</script>

<style lang="scss">
.newscard {
    background: #ffffff;
    box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.05);
    border-radius: 3px;
    padding: 30px 31px 4px 30px;
    display: grid;
    grid-template-rows: auto max-content;

    @media (max-width: 600px) {
        padding: 30px 22.77px 4px 22.04px;
    }

    &__container {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        margin-right: auto;

        @media (max-width: 600px) {
            flex-direction: column;
        }
    }

    &__main_rows {
        display: block;
    }

    &__main_grid {
        display: grid;
        grid-template-rows: 1fr 1fr max-content;

        @media (max-width: 600px) {
            display: block;
        }
    }

    &__title {
        font-family: Arial;
        font-style: normal;
        font-weight: bold;
        font-size: 18px;
        color: #0029ff;
        margin: 0;
        margin-bottom: 20px;
    }

    &__description {
        font-family: Arial;
        font-style: normal;
        font-weight: normal;
        font-size: 14px;

        margin-bottom: 27px;
    }

    &__link {
        height: 20px;
        margin-bottom: 20px;
    }

    &__info {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        font-family: Arial;
        font-style: normal;
        font-weight: normal;
        font-size: 14px;
        color: #dcdcdc;
        width: 100%;
    }

    &__source {
        color: inherit;
    }
}

.image {
    margin-right: 30px;

    @media (max-width: 600px) {
        margin-right: 0;
        margin-bottom: 20px;
    }
    &__img {
        height: 100px;

        @media (max-width: 600px) {
            width: 100%;
            height: 100%;
        }
    }
}
</style>

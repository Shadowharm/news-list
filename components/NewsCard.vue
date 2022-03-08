<template>
    <div class="newscard">
        <div class="newscard__container">
            <div class="image" v-if="displayMode === 'rows'">
                <img :src="image" alt="" class="image__img" />
            </div>
            <div :class="`newscard__main_${displayMode}`">
                <h2 class="newscard__title">
                    <a
                        :href="link"
                        class="newscard__title-link"
                        target="_blank"
                        >{{ title }}</a
                    >
                </h2>

                <div class="newscard__description">
                    {{ description }}
                </div>
                <div
                    class="newscard__link"
                    :class="{ newscard__link_rows: displayMode === 'rows' }"
                >
                    <a :href="link" target="_blank">Подробнее</a>
                </div>
            </div>
        </div>
        <div class="newscard__info">
            <a
                class="newscard__source"
                :href="`https://www.${source}.ru`"
                target="_blank"
                >www.{{ source }}.ru</a
            >
            <span>{{ date }}</span>
        </div>
    </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
    props: {
        title: {
            type: String,
            required: false,
        },
        description: {
            type: String,
            required: true,
        },
        image: {
            type: String,
            required: true,
        },
        link: {
            type: String,
            required: true,
        },
        source: {
            type: String,
            required: true,
        },
        date: {
            type: String,
            required: true,
        },
        displayMode: {
            required: true,
            type: String,
        },
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
        grid-template-rows: 1fr 2fr max-content;

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

    &__title-link {
        color: inherit;
        text-decoration: none;
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

        &_rows {
            @media (min-width: 600px) {
                display: none;
            }
        }
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

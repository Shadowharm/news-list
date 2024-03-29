<template>
    <div class="active-bar">
        <div class="search">
            <div class="search__title-btn">
                <h1 class="search__title">Список новостей</h1>
                <button
                    type="button"
                    class="search__update-button"
                    @click="$emit('update')"
                >
                    <update-icon />
                </button>
            </div>
            <search @search="$emit('search', $event)" />
        </div>
        <hr class="active-bar__hr" />
        <div class="sorting">
            <div class="sorting__source">
                <label
                    class="sorting__button"
                    :class="{ sorting__button_active: source === 'all' }"
                >
                    <input
                        type="radio"
                        class="radiobutton"
                        name="source"
                        value="all"
                        v-model="sourceLocal"
                        @change="$emit('changeSource', $event.target.value)"
                    />
                    Все
                </label>
                <label
                    class="sorting__button"
                    :class="{ sorting__button_active: source === 'lenta' }"
                >
                    <input
                        type="radio"
                        class="radiobutton"
                        name="source"
                        value="lenta"
                        v-model="sourceLocal"
                        @change="$emit('changeSource', $event.target.value)"
                    />
                    Lenta.ru
                </label>
                <label
                    class="sorting__button"
                    :class="{ sorting__button_active: source === 'mos' }"
                >
                    <input
                        type="radio"
                        class="radiobutton"
                        name="source"
                        value="mos"
                        v-model="sourceLocal"
                        @change="$emit('changeSource', $event.target.value)"
                    />
                    Mos.ru
                </label>
            </div>
            <div class="sorting__display-mode">
                <label class="sorting__button rows">
                    <input
                        type="radio"
                        class="radiobutton"
                        name="displayMode"
                        value="rows"
                        v-model="displayModeLocal"
                        @change="
                            $emit('changeDisplayMode', $event.target.value)
                        "
                    />
                    <div
                        class="rows__div"
                        :class="{ rows__div_active: displayMode === 'rows' }"
                    />
                    <div
                        class="rows__div"
                        :class="{ rows__div_active: displayMode === 'rows' }"
                    />
                </label>
                <label class="sorting__button grid">
                    <input
                        type="radio"
                        class="radiobutton"
                        name="displayMode"
                        value="grid"
                        v-model="displayModeLocal"
                        @change="
                            $emit('changeDisplayMode', $event.target.value)
                        "
                    />
                    <div
                        class="grid__div"
                        :class="{ grid__div_active: displayMode === 'grid' }"
                    />
                    <div
                        class="grid__div"
                        :class="{ grid__div_active: displayMode === 'grid' }"
                    />
                    <div
                        class="grid__div"
                        :class="{ grid__div_active: displayMode === 'grid' }"
                    />
                    <div
                        class="grid__div"
                        :class="{ grid__div_active: displayMode === 'grid' }"
                    />
                </label>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import Vue from 'vue';
import UpdateIcon from '~/components/icons/UpdateIcon.vue';
import Search from '~/components/Search.vue';
export default Vue.extend({
    components: { UpdateIcon, Search },
    data() {
        return {
            displayModeLocal: this.displayMode as string,
            sourceLocal: this.source as string,
        };
    },
    props: {
        displayMode: {
            required: true,
            type: String,
        },
        source: {
            required: true,
            type: String,
        },
    },
    updated() {
        this.displayModeLocal = this.displayMode;
        this.sourceLocal = this.source;
    },
});
</script>

<style lang="scss">
.active-bar {
    width: 100%;

    &__hr {
        margin: 36px 0 26px;

        @media (max-width: 600px) {
            margin: 23px 0 20px;
        }
    }
}

.search {
    display: grid;
    grid-template-columns: max-content 1fr;
    grid-column-gap: 10%;

    @media (max-width: 600px) {
        grid-template-columns: 1fr;
        grid-template-rows: max-content max-content;
        grid-row-gap: 20px;
    }

    &__title-btn {
        display: flex;
        flex-direction: row;
        align-items: center;

        @media (max-width: 600px) {
            justify-content: space-between;
        }
    }

    &__update-button {
        display: flex;
        justify-content: center;
        align-items: center;
        background: #ffffff;
        box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.05);
        border-radius: 50%;
        padding: 12px 10px 12px 10px;
        width: 40px;
        height: 40px;
        border: 2px solid #ffffff;
        margin-left: 30px;
        cursor: pointer;

        &:hover {
            border-color: #0029ff;
        }
    }

    &__title {
        font-family: Arial;
        font-style: normal;
        font-weight: bold;
        font-size: 36px;
        color: #000000;
        margin: 0;
        @media (max-width: 750px) {
            font-size: 30px;
        }
        @media (max-width: 650px) {
            font-size: 24px;
        }
    }
}

.sorting {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin-top: 26px;

    @media (max-width: 600px) {
        margin-top: 20px;
    }

    &__source {
        display: grid;
        grid-template-columns: repeat(3, min-content);
        grid-column-gap: 15px;
    }

    &__button {
        background-color: inherit;
        border: none;
        cursor: pointer;
        padding: 0;
        font-family: Arial;
        font-style: normal;
        font-weight: bold;
        font-size: 14px;
        line-height: 16px;

        &_active {
            color: #0029ff;
        }
    }

    &__display-mode {
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-column-gap: 10px;
    }
}

.rows {
    display: grid;
    grid-template-rows: 1fr 1fr;
    grid-row-gap: 2px;
    height: 18px;
    width: 18px;

    &__div {
        width: 18px;
        height: 8px;
        background-color: #c4c4c4;

        &_active {
            background-color: #0029ff;
        }
    }
}

.grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr;
    grid-gap: 2px;

    &__div {
        width: 8px;
        height: 8px;
        background-color: #c4c4c4;

        &_active {
            background-color: #0029ff;
        }
    }
}

.radiobutton {
    position: absolute;
    width: 1px;
    height: 1px;
    margin: -1px;
    padding: 0;
    border: 0;
    overflow: hidden;
    clip: rect(0 0 0 0);
}
</style>

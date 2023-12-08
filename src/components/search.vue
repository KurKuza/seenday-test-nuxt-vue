<script lang="ts" setup>
type Props = {
  searchQuery?: string;
  placeholder?: string;
};

const props = defineProps<Props>();

const emit = defineEmits(["update:searchQuery", "update:type", "submit"]);

const searchQuery = useVModel(props, "searchQuery", emit);

const handleClearClicked = () => {
  searchQuery.value = "";
};
</script>

<template>
  <form class="search" @submit.prevent="emit('submit')">
    <div class="search__data">
      <div class="search__input-wrapper">
        <input v-model="searchQuery" class="search__input" :placeholder="props.placeholder" />
        <button v-if="searchQuery" type="button" class="search__clear" @click="handleClearClicked">
          <i class="icon icon-xmark" />
        </button>
      </div>
    </div>

    <button type="submit" class="search__submit">
      <i class="icon icon-search" />
    </button>
  </form>
</template>

<style lang="scss">
@import "~/assets/styles/components/search.scss";
</style>

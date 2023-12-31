<script setup lang="ts">
// TODO: Display item quantity

import ProductCard from "./ProductCard.vue";
import { onMounted, ref, watch } from "vue";
import { useRouter } from "vue-router";
import { Product } from "@/models";
import { useAppStore } from "@/store";
import { storeToRefs } from "pinia";
import { computed } from "vue";

const appStore = useAppStore();
const router = useRouter();

const { tagLoading, loading, newProduct, tag, page } = storeToRefs(appStore);
const events = ref([] as Product[]);
const pages = ref(0);

const eventList = computed(() => events.value);

async function loadProducts() {
  events.value = await appStore.getProducts;
  pages.value = await appStore.getNumOfPages;
  loading.value = false;
}

async function loadProduct(event: Product) {
  router.push({
    name: "product",
    params: {
      id: event.event_id,
    },
  });
}

async function loadProductsWithTags() {
  events.value = await appStore.loadProductsUsingTags();
  tagLoading.value = false;
}

watch(tagLoading, (newLoading) => {
  if (newLoading) loadProductsWithTags();
});
watch(loading, (newPage, oldPage) => {
  loadProducts();
});
watch(newProduct, (newVal) => {
  if (newVal) loadProducts();
});

onMounted(() => {
  console.log(`ProductsList mounted. Page: ${page.value}`);
  loadProducts();
});
</script>

<template>
  <v-sheet class="d-flex flex-wrap align-content-center">
    <template v-for="event of eventList" :key="event.id">
      <ProductCard :product="(event as Product)" @click="loadProduct(event)" />
    </template>
  </v-sheet>
  <v-pagination
    theme="dark"
    :length="pages"
    @next="appStore.nextPage"
    @prev="appStore.prevPage"
  ></v-pagination>
</template>

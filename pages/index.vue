<script setup>
import { useGetHeadlines } from "@/composables/useGetHeadlines";
import HeadlinesGrid from "@/components/HeadlinesGrid.vue";

const { articles, status } = useGetHeadlines();
</script>
<template>
  <div>
    <HeadlinesGrid :articles="articles" :status="status" />
  </div>
</template>

<script setup>
const props = defineProps({
  articles: {
    type: Array,
    required: true,
  },
  status: {
    type: String,
    required: true,
    default: "pending",
  },
});

const firstArticle = [...props.articles].slice(0, 1);
const restOfArticles = [...props.articles].slice(1, 4);
</script>

<template>
  <div v-if="props.status === 'pending'">Loading Articles...</div>
  <div v-if="props.status === 'error'" class="error">
    Error fetching articles.
  </div>
  <div
    v-if="props.status === 'success' && props.articles.length > 0"
    class="w-full max-w-full flex justify-center bg-tertiary-500 pt-4"
  >
    <div class="container relative flex grow gap-4 lg:flex-row flex-col">
      <div class="flex-1 w-full h-full lg:max-w-[85%]">
        <Article :article="firstArticle[0]" />
      </div>
      <div class="flex-[0] right-0 min-w-[375px]">
        <div v-for="(article, index) in restOfArticles">
          <Article :key="article.id" :article="article" />
        </div>
      </div>
    </div>
  </div>
</template>

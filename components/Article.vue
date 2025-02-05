<script setup>
import { getTimeAgo } from "../shared/utils/time-ago.js";

defineProps({
  article: {
    type: Object,
    required: true,
    default: () => ({}),
  },
});
</script>

<template>
  <article class="relative">
    <picture class="">
      <img
        :srcset="article?.attributes?.imageData?.location"
        :alt="article?.attributes?.imageData?.name"
      />
    </picture>
    <div
      class="absolute left-0 bottom-0 w-full h-[60%] bg-gradient-to-t from-black to-transparent z-2 content-card-image-overlay"
    ></div>
    <div class="absolute bottom-0 left-0 right-0 p-4 bg-transparent z-10">
      <h3 class="text-2xl text-white font-bold uppercase">
        {{ article?.attributes?.postTitle }}
      </h3>
      <div class="font-light text-xs text-white">
        <span>{{ article?.attributes?.postCategoryName }} | </span>
        <span v-if="article.attributes.savedTimestamp">
          {{ getTimeAgo(article.attributes.savedTimestamp) }}
        </span>
      </div>
    </div>
  </article>
</template>

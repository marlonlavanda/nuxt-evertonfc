<script setup>
const { status, articles } = useGetHeadlines();
</script>
<template>
  <div>
    <HeadlinesGrid :articles="articles.data" :status="status" />
  </div>
</template>

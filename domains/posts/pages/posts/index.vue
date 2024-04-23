<script lang="ts" setup>
const { fetch, posts } = usePosts();
await fetch();
</script>
<template>
  <div class="container mx-auto">
    <h1 class="text-5xl mb-5">Posts</h1>
    <p class="mb-5">
      This page's components, composables, api endpoints, types, and utility
      functions are all organized under a single folder (
      <span class="text-red-400 font-mono text-sm bg-gray-200 px-1"
        >@/domains/posts</span
      >
      )
    </p>
    <ul>
      <li v-for="post in posts" :key="post.id">
        <PostCard :post="post" />
      </li>
    </ul>
  </div>
</template>

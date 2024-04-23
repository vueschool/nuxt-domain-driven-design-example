<script setup lang="ts">
import type { Post } from "@/domains/posts/types";

defineProps<{
  post: Post;
}>();
</script>
<template>
  <div class="bg-gray-100 p-2 rounded mb-5">
    <h2 class="text-lg font-bold">{{ post.title }}</h2>
    <p>By {{ post.author?.name }}</p>
    <p>{{ post.snippet }}</p>
  </div>
</template>

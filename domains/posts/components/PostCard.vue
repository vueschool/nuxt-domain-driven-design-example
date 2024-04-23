<script setup lang="ts">
import type { Post } from "@/domains/posts/types";

defineProps<{
  post: Post;
}>();
</script>
<template>
  <div>
    <h2>{{ post.title }}</h2>
    <p>{{ post.snippet }}</p>
  </div>
</template>

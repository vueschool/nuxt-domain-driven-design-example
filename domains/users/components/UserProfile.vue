<script setup lang="ts">
import type { User } from "@/domains/users/types";
const props = defineProps<{
  user: User;
}>();
const initials = computed(() => getUserInitials(props.user));
</script>
<template>
  <div class="bg-gray-100 rounded p-2 mb-5">
    <ul>
      <li>Username: {{ user.username }}</li>
      <li>Name: {{ user.name }}</li>
      <li>initials: {{ initials }}</li>
      <li>Email: {{ user.email }}</li>
    </ul>
  </div>
</template>

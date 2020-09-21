<template>
  <main class="tickets-layout">
    <h1>你的支持工单</h1>
    <div class="actions">
      <router-link
        v-if="$route.name !== 'tickets'"
        tag="button"
        class="secondary"
        :to="{ name: 'tickets' }"
        >查看所有工单</router-link
      >
      <router-link
        v-if="$route.name !== 'new-ticket'"
        tag="button"
        :to="{ name: 'new-ticket' }"
        >新的工单</router-link
      >
    </div>
    <router-view />
  </main>
</template>

<script>
import Tickets from './Tickets'
export default {
  components: {
    Tickets
  }
}
</script>
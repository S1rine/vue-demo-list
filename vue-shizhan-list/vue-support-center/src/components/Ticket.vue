<template>
  <div class="ticket">
    <h2>工单</h2>
    <Loading v-if="remoteDataBusy" />
    <div class="empty" v-else-if="!ticket">没有工单记录</div>
    <template v-else>
      <section class="infos">
        <div class="info">
          创建于 <strong>{{ ticket.date | date }}</strong>
        </div>
        <div class="info">
          作者 <strong>{{ ticket.user.username }}</strong>
        </div>
        <div class="info">
          状态 <span class="badge">{{ ticket.status }}</span>
        </div>
      </section>
      <section class="content">
        <h3>{{ ticket.title }}</h3>
        <p>{{ ticket.description }}</p>
      </section>
    </template>
  </div>
</template>

<script>
import RemoteData from '../mixins/RemoteData'
export default {
  mixins: [
    RemoteData({
      ticket () {
        return `/ticket/${this.id}`
      }
    })
  ],
  props: {
    id: {
      type: String,
      required: true
    }
  }
}
</script>
<template>
  <div class="new-ticket">
    <h1>新的工单</h1>
    <SmartForm title="新的工单" :operation="operation" :valid="valid">
      <FormInput
        name="title"
        v-model="title"
        placeholder="简短描述"
        maxlength="100"
        required
      />
      <FormInput
        type="textarea"
        name="description"
        v-model="description"
        placeholder="详细描述你的问题"
        rows="4"
      />
      <template slot="actions">
        <router-link tag="button" :to="{ name: 'tickets' }" class="secondary"
          >返回</router-link
        >
        <button type="submit" :disabled="!valid">发送工单</button>
      </template>
    </SmartForm>
  </div>
</template>

<script>
import PersistantData from '../mixins/PersistantData'
export default {
  mixins: [
    PersistantData('NewTicket', [
      'title',
      'description'
    ])
  ],
  data () {
    return {
      title: '',
      description: ''
    }
  },
  computed: {
    valid () {
      return !!this.title && !!this.description
    }
  },
  methods: {
    async operation () {
      const result = await this.$fetch('/tickets/new', {
        method: 'POST',
        body: JSON.stringify({
          title: this.title,
          description: this.description
        })
      })
      this.title = this.description = ''
    }
  }
}
</script>
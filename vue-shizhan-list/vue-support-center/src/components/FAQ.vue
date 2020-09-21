<template>
  <main class="faq">
    <h1>常见问题</h1>
    <div class="error" v-if="hasRemoteErrors">请求出错，请稍后再试。</div>
    <section class="list">
      <article v-for="question of questionList" :key="question._id">
        <h2 v-html="question.title"></h2>
        <p v-html="question.content"></p>
      </article>
    </section>
    <Loading v-if="remoteDataBusy" />
  </main>
</template>

<script>
import RemoteData from '../mixins/RemoteData'
export default {
  mixins: [
    RemoteData({
      questionList: '/questions'
    })
  ]
}
</script>
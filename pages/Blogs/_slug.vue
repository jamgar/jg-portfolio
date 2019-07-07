<template>
  <article :key="$route.params.slug" class="blog">
    <header class="blog__header">
      <div class="blog__img">
        <img
          v-if="attributes.thumbnail"
          src="attributes.thumbnail"
          alt="attributes.title"
        />
      </div>
      <h1 class="heading-secondary blog__heading">{{ attributes.title }}</h1>
      <p class="blog__meta">
        {{ attributes.date | moment('dddd, MMMM Do YYYY') }}
      </p>
    </header>
    <div class="blog__content">
      <p v-html="content"></p>
    </div>
  </article>
</template>

<script>
const md = require('markdown-it')({
  breaks: true,
  linkify: true,
  html: true
}).use(require('markdown-it-highlightjs'))

export default {
  async asyncData({ params }) {
    const fileContent = await import(`~/content/blogs/${params.slug}.md`)
    return {
      attributes: fileContent.attributes,
      content: md.render(fileContent.body)
    }
  }
}
</script>

<style lang="scss" scoped>
.blog {
  padding: 0 5rem;
  margin: 0 auto;

  &__header {
    margin-top: 15rem;
    text-align: center;
  }
  &__img {
    margin: 0 auto;
    max-width: 75rem;

    img {
      width: 100%;
    }
  }
  &__heading {
    color: $color-grey-dark-3;
    margin-top: 5rem;
  }
  &__meta {
    font-size: 1.2rem;
  }
  &__content {
    font-size: 1.6rem;
    margin: 5rem auto;
    max-width: 70rem;
  }
}
</style>

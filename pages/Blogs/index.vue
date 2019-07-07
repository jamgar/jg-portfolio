<template>
  <div class="blogs">
    <h2 class="heading-secondary">Blogs</h2>
    <div class="cards">
      <BlogCard v-for="(blog, idx) in Blogs" :key="idx" :blog="blog" />
    </div>
  </div>
</template>

<script>
import BlogCard from '@/components/BlogCard'

export default {
  components: {
    BlogCard
  },
  computed: {
    Blogs() {
      return this.$store.state.blogs
    }
  }
}
</script>

<style lang="scss" scoped>
.blogs {
  max-width: 114rem;
  margin: 0 auto;

  & > h2 {
    display: block;
    text-align: center;
    margin-bottom: 4rem;
    margin-top: 8rem;
  }
}
.cards {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}
</style>

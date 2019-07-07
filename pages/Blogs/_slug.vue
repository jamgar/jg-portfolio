<template>
  <article :key="$route.params.slug" class="blog">
    <header class="blog__header">
      <div class="blog__img">
        <img src="~/assets/images/goals-and-direction.jpg" alt="Image" />
      </div>
      <h1 class="heading-secondary blog__heading">Title</h1>
      <p class="blog__meta">Jan 01, 2019</p>
    </header>
    <div class="blog__content">
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consectetur
        beatae doloremque maxime a error, obcaecati assumenda aliquam
        distinctio, mollitia harum optio laborum veritatis numquam voluptatum
        accusamus, quisquam doloribus rem blanditiis. Lorem ipsum dolor sit amet
        consectetur adipisicing elit. Aspernatur esse quas corporis non
        similique sint deleniti fuga dolore minima cumque, id cupiditate ad
        aliquid minus incidunt corrupti commodi saepe consequatur.
      </p>
    </div>
  </article>
</template>

<script>
export default {}
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

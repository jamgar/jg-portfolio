<template>
  <div class="blog-card blog-card--animated">
    <div class="blog-card__picture">
      <img
        v-if="blog.attributes.thumbnail"
        :src="blog.attributes.thumbnail"
        :alt="blog.attributes.title"
      />
      <span v-else class="blog-card__alt">&nbsp;</span>
    </div>
    <h4 class="blog-card__heading">
      <nuxt-link class="heading__link" :to="blog._path">
        {{ blog.attributes.title }}
      </nuxt-link>
    </h4>
    <div class="blog-card__body">
      <p class="blog-card__meta">
        {{ blog.attributes.date | moment('dddd, MMMM Do YYYY') }}
      </p>
      <p class="blog-card__text">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Neque quos
        doloremque voluptate minima iusto.
      </p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    blog: {
      type: Object,
      default: function() {
        return {}
      }
    }
  },
  computed: {
    getFormattedDescription() {
      return {
        content: this.truncate()
      }
    }
  },
  methods: {
    truncate() {
      const description = this.blog.attributes.description
      return description.substring(0, 255)
    }
  }
}
</script>

<style lang="scss" scoped>
.blog-card {
  border-radius: 3px;
  box-shadow: 0 1.5rem 4rem rgba($color-black, 0.15);
  height: 52rem;
  margin: 2rem;
  position: relative;
  flex-basis: 300px;

  &__picture {
    height: 23rem;
    border-top-left-radius: 3px;
    border-top-right-radius: 3px;
    overflow: hidden;

    img {
      width: 100%;
    }
  }
  &__alt {
    background-image: linear-gradient(
      to right bottom,
      rgba($color-primary-light, 0.9),
      rgba($color-primary-dark, 0.9)
    );
    display: block;
    height: 100%;
    width: 100%;
  }
  &__heading {
    font-size: 2rem;
    font-weight: 300;
    text-align: center;
    text-transform: uppercase;
    margin-top: 1rem;
    width: 100%;
  }
  &__body {
    padding: 1.6rem;
  }
  &__meta {
    font-size: 1.2rem;
    color: $color-grey-dark-2;
    margin-bottom: 1rem;
    text-align: center;
  }
  &__text {
    font-size: 2rem;
  }
  &--animated {
    animation: moveInButtonUp 0.75s ease-out 0.5s;
    animation-fill-mode: backwards;
  }
}
.heading__link {
  &:link,
  &:visited {
    color: $color-black;
    text-decoration: none;
    transition: all 0.3s;
  }
  &:hover {
    background-color: $color-primary;
    color: $color-white;
    box-shadow: 0 1rem 2rem rgba($color-black, 0.15);
    transform: translateY(-2px);
  }
  &:active {
    box-shadow: 0 1rem 2rem rgba($color-black, 0.15);
    transform: translateY(-0.5px);
  }
}
</style>

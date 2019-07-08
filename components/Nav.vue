<template>
  <div class="navigation">
    <input id="navi-toggle" type="checkbox" class="navigation__checkbox" />
    <label for="navi-toggle" class="navigation__button">
      <span class="navigation__icon">&nbsp;</span>
    </label>

    <div class="navigation__background">&nbsp;</div>

    <nav class="navigation__nav">
      <ul class="navigation__list" @click="closeMenu">
        <li class="navigation__item">
          <nuxt-link to="/#home" class="navigation__link">Home</nuxt-link>
        </li>
        <li class="navigation__item">
          <nuxt-link to="/#about" class="navigation__link">Who am i</nuxt-link>
        </li>
        <li class="navigation__item">
          <nuxt-link to="/blogs" class="navigation__link">Blogs</nuxt-link>
        </li>
        <li class="navigation__item">
          <nuxt-link to="/#contact" class="navigation__link"
            >Contact me</nuxt-link
          >
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
export default {
  methods: {
    closeMenu() {
      const ckbx = document.getElementById('navi-toggle')
      ckbx.checked = false
    }
  }
}
</script>

<style lang="scss">
.navigation {
  &__checkbox {
    display: none;
  }
  &__button {
    background-color: $color-white;
    height: 7rem;
    width: 7rem;
    position: fixed;
    top: 6rem;
    right: 6rem;
    border-radius: 50%;
    z-index: 2000;
    box-shadow: 0 1rem 3rem rgba($color-black, 0.1);
    text-align: center;
    cursor: pointer;
  }
  &__background {
    height: 6rem;
    width: 6rem;
    border-radius: 50%;
    position: fixed;
    top: 6.5rem;
    right: 6.5rem;
    background-image: radial-gradient(
      $color-primary-light,
      $color-primary-dark
    );
    z-index: 1000;
    transition: transform 0.8s cubic-bezier(0.86, 0, 0.07, 1);
  }
  &__nav {
    height: 100vh;
    width: 0;
    opacity: 0;
    position: fixed;
    top: 0;
    left: -200px;
    z-index: 1500;
    transition: all 0.8s cubic-bezier(0.68, -0.55, 0.265, 1.55);
  }
  &__list {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    list-style: none;
    text-align: center;
    width: 100%;
  }
  &__item {
    margin: 1rem;
  }
  &__link {
    &:link,
    &:visited {
      display: inline-block;
      font-size: 3rem;
      font-weight: 300;
      padding: 1rem 2rem;
      color: $color-white;
      text-decoration: none;
      text-transform: uppercase;
      background-image: linear-gradient(
        120deg,
        transparent 0%,
        transparent 50%,
        $color-white 50%
      );
      background-size: 240%;
      transition: all 0.4s;

      span {
        margin-right: 1.5rem;
        display: inline-block;
      }
    }
    &:hover,
    &:active {
      background-position: 100%;
      color: $color-primary;
      transform: translateX(1rem);
    }
  }
  // FUNCTIONALITY
  &__checkbox:checked ~ &__background {
    transform: scale(80);
  }
  &__checkbox:checked ~ &__nav {
    width: 100%;
    opacity: 1;
    left: 0;
  }
  // ICON
  &__icon {
    position: relative;
    margin-top: 3.5rem;

    &,
    &::before,
    &::after {
      width: 3rem;
      height: 2px;
      background-color: $color-grey-dark-3;
      display: inline-block;
    }
    &::before,
    &::after {
      content: '';
      position: absolute;
      left: 0;
      transition: all 0.2s;
    }
    &::before {
      top: -0.8rem;
    }
    &::after {
      top: 0.8rem;
    }
  }
  &__button:hover &__icon:before {
    top: -1rem;
  }
  &__button:hover &__icon:after {
    top: 1rem;
  }
  &__checkbox:checked + &__button &__icon {
    background-color: transparent;
  }
  &__checkbox:checked + &__button &__icon::before {
    top: 0;
    transform: rotate(135deg);
  }
  &__checkbox:checked + &__button &__icon::after {
    top: 0;
    transform: rotate(-135deg);
  }
}
</style>

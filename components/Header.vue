<template>
  <div id="home" class="header">
    <div class="header__text-box">
      <h1 class="heading-primary">
        <span class="heading-primary--main">I am James, a Web Developer</span>
        <span class="heading-primary--sub">Front End focus: VueJs</span>
        <span class="heading-primary--sub">Back End focus: Ruby on Rails</span>
      </h1>
      <a href="#contact" class="btn btn--white btn--animated">Contact Me</a>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.header {
  height: 90vh;
  background-image: linear-gradient(
      to right bottom,
      rgba($color-primary-light, 0.9),
      rgba($color-primary-dark, 0.9)
    ),
    url(../assets/images/banner.jpg);
  background-size: cover;
  background-position: top;
  position: relative;

  // @supports (clip-path: polygon(0 0)) or (-webkit-clip-path: polygon(0 0)) or
  //   (-moz-clip-path: polygon(0 0)) {
  //   height: 95vh;
  //   -webkit-clip-path: polygon(0 0, 100% 0, 100% 75vh, 0 100%);
  //   -moz-clip-path: polygon(0 0, 100% 0, 100% 75vh, 0 100%);
  //   clip-path: polygon(0 0, 100% 0, 100% 75vh, 0 100%);
  // }

  @media only screen and (min-resolution: 192dpi) and (min-width: 37.5em),
    only screen and (-webkit-min-device-pixel-ratio: 2) and (min-width: 37.5em),
    only screen and (min-width: 125em) {
    // 2000/16 = 125
    background-image: linear-gradient(
        to right bottom,
        rgba($color-primary-light, 0.9),
        rgba($color-primary-dark, 0.9)
      ),
      url(../assets/images/banner.jpg);
  }

  // @include respond(phone) {
  //   -webkit-clip-path: polygon(0 0, 100% 0, 100% 85vh, 0 100%);
  //   -moz-clip-path: polygon(0 0, 100% 0, 100% 85vh, 0 100%);
  //   clip-path: polygon(0 0, 100% 0, 100% 85vh, 0 100%);
  // }

  &__logo-box {
    position: absolute;
    top: 4rem;
    left: 4rem;
  }

  &__logo {
    height: 3.5rem;
  }

  &__text-box {
    position: absolute;
    top: 40%;
    left: 50%;
    transform: translate(-50%, -50%);
    text-align: center;
  }
}
</style>

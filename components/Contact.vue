<template>
  <div id="contact" class="contact">
    <div class="contact__form">
      <h2 class="heading-secondary">Contact Me</h2>
      <form
        action="/success"
        class="form"
        netlify-honeypot="bot-field"
        data-netlify-recaptcha="true"
        data-netlify="true"
      >
        <p class="hidden">
          <label>
            Don't fill this out if you're human:
            <input name="bot-field" />
          </label>
        </p>
        <div class="form__group">
          <input
            id="name"
            type="text"
            class="form__input"
            placeholder="Full name"
            required
          />
          <label for="name" class="form__label">Full Name</label>
        </div>
        <div class="form__group">
          <input
            id="email"
            type="email"
            class="form__input"
            placeholder="Email"
            required
          />
          <label for="email" class="form__label">Email</label>
        </div>
        <div class="form__group">
          <textarea
            id="message"
            name="message"
            class="form__textarea"
            placeholder="Message"
            cols="30"
            rows="10"
            required
          ></textarea>
          <label for="message" class="form__label">Message</label>
        </div>
        <div class="form__group">
          <button type="submit" class="btn btn--primary">Send &rarr;</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.contact {
  padding: 15rem 0;
  background-image: linear-gradient(
    to right bottom,
    $color-primary-light,
    $color-primary-dark
  );

  &__form {
    background-color: rgba($color-white, 0.8);
    border-radius: 3px;
    box-shadow: 0 1.5rem 4rem rgba($color-black, 0.2);
    max-width: 80%;
    margin: 0 auto;
    padding: 6rem;

    & > h2 {
      display: block;
      text-align: center;
    }
  }
}
.form {
  &__group:not(:last-child) {
    margin-bottom: 2rem;
  }
  &__input,
  &__textarea {
    box-sizing: border-box;
    font-size: 1.5rem;
    font-family: inherit;
    color: inherit;
    padding: 1.5rem 2rem;
    border-radius: 2px;
    background-color: rgba($color-white, 0.5);
    border: none;
    border-bottom: 3px solid transparent;
    margin: 0 auto;
    width: 100%;
    display: block;
    transition: all 0.3s;

    &:focus {
      outline: none;
      box-shadow: 0 1rem 2rem rgba($color-black, 0.1);
      border-bottom: 3px solid $color-primary;
    }
    &:focus:invalid {
      border-bottom: 3px solid $color-danger;
    }
    &::-web-input-placeholder {
      color: $color-grey-dark-2;
    }
  }

  &__label {
    font-size: 1.2rem;
    font-weight: 700;
    margin-left: 2rem;
    margin-top: 0.7rem;
    display: block;
    transition: all 0.3s;
  }
  &__input:placeholder-shown + &__label,
  &__textarea:placeholder-shown + &__label {
    opacity: 0;
    visibility: hidden;
    transform: translateY(-4rem);
  }
}
.hidden {
  display: none;
}
</style>

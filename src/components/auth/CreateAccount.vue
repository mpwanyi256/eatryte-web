<template>
  <div class="login_form">
    <div class="login_form_wrapper">
      <h1>Hello!</h1>
      <p>Create account to continue</p>
      <form>
        <div class="form-group">
          <label for="username">Username</label>
          <input type="email" placeholder="Username" />
        </div>
        <div class="form-group">
          <label for="username">Password</label>
          <input type="password" placeholder="Password" />
        </div>
        <div class="form-group">
          <btn class="btn">SIGN IN</btn>
        </div>
      </form>
      <router-link :to="{ name: 'login' }"
        ><p>Already have an account? Signin</p></router-link
      >
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "CreateAccount",
  components: {},
});
</script>
<style lang="scss" scoped>
@import "@/assets/styles/constants.scss";

.login_form {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  &_wrapper {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    h1 {
      font-size: 2rem;
      font-weight: 500;
      line-height: 1.2;
      margin: 0;
    }

    p {
      color: #424242;
      letter-spacing: 0.2px;
      margin: 0;
      margin-bottom: 1rem;
      display: block;
    }

    form {
      margin-bottom: 1.5rem !important;
      margin-top: 3rem !important;
      display: block;

      .form-group {
        display: flex;
        flex-direction: column;
        margin-bottom: 1.875rem;

        label {
          cursor: default;
          display: inline-block;
          padding-bottom: 0.25rem !important;
          color: rgb(33, 37, 41);
        }

        input,
        input:focus,
        input:active,
        input:hover {
          display: block;
          width: 100%;
          padding: 0.375rem 0.75rem;
          font-size: 1rem;
          font-weight: 400;
          line-height: 1.5;
          background-clip: padding-box;
          transition: border-color 0.15s ease-in-out,
            box-shadow 0.15s ease-in-out;
          border-bottom: 1px solid rgb(160, 160, 160/32%);
          border-radius: 0;
          box-shadow: none !important;
          writing-mode: horizontal-tb !important;
        }

        input:focus {
          border-color: rgb(33, 37, 41);
          outline: 0;
          box-shadow: none !important;
        }

        .btn {
          font-size: 16px;
          padding: 16px;
          font-weight: 600;
          cursor: pointer;
          background: linear-gradient(45deg, #d92662 0%, #e23744 100%);
          border-color: #d92662;
          width: 100%;
          display: inline-block;
          text-align: center;
          color: $white;
          border-radius: 4px;
        }
      }
    }

    a {
      text-decoration: none;
      p {
        text-align: center !important;
        color: #424242;
        letter-spacing: 0.2px;
        margin-top: 0;
        margin-bottom: 1rem;
        display: block;
        margin-block-start: 1em;
        margin-block-end: 1em;
        margin-inline-start: 0px;
        margin-inline-end: 0px;
      }
    }
  }
}
</style>

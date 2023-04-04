<template>
  <div @click.self="toggleLoginModal" class="modal-container">
    <div class="modal">
      <div class="form-container">
        <form class="form" @submit.prevent="validateInputs">
          <h2>ENTER YOUR E-MAIL ADDRESS</h2>
          <input type="text" placeholder="Email Address" v-model="email" ref="email" />
          <p class="error">{{ emailError }}</p>
          <h2>ENTER YOUR PASSWORD</h2>
          <input type="password" placeholder="Password" v-model="password" ref="password" />
          <p class="error">{{ passwordError }}</p>
          <button>Continue</button>
        </form>
      </div>
      <div class="close-modal" @click="toggleLoginModal"><img src="@/assets/close.png"></div>
    </div>
  </div>
</template>

<script>
import { mapMutations } from "vuex";
export default {
  data() {
    return {
      email: "",
      emailError: "",
      password: "",
      passwordError: "",
    };
  },
  methods: {
    ...mapMutations(["toggleLoginModal", "logIn", "toggleRegisterModal"]),
    toggleModals() {
      this.toggleRegisterModal();
      this.toggleLoginModal();
    },
    validateInputs() {
      let emailPattern = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,5}))$/;
      let emailValidation = emailPattern.test(this.email);
      if (!emailValidation) {
        this.$refs.email.style.outline = "1px solid #ff0000";
        this.$refs.email.style.color = "#ff0000";
        this.emailError = "Please enter a valid email address.";
      } else {
        this.$refs.email.style.outline = "none";
        this.$refs.email.style.color = "#edd700";
        this.emailError = "";
      }
      let passwordPattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{4,}$/gm;
      let passwordValidation = passwordPattern.test(this.password);
      if (!passwordValidation) {
        this.$refs.password.style.outline = "1px solid #ff0000";
        this.$refs.password.style.color = "#ff0000";
        this.passwordError = "Wrong password.";
      } else {
        this.$refs.password.style.outline = "none";
        this.$refs.password.style.color = "#edd700";
        this.passwordError = "";
      }

      if (emailValidation && passwordValidation) {
        this.logIn({ email: this.email.toLowerCase(), password: this.password });
      }
    },
  },
}
</script>
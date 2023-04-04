<template>
  <div @click.self="toggleRegisterModal" class="modal-container">
    <div class="modal">
      <h2>CREATE YOUR ACCOUNT</h2>
      <div class="form-container">
        <form class="form" @submit.prevent="validateForm">
          <input type="text" placeholder="Username" v-model="username" ref="name" autocomplete="name" />
          <p class="error">{{ usernameError }}</p>
          <input type="text" placeholder="Email Address" v-model="email" ref="email" autocomplete="email" />
          <p class="error">{{ emailError }}</p>
          <input type="password" placeholder="Password" v-model="password" ref="password" />
          <p class="error">{{ passwordError }}</p>
          <button>Continue</button>
        </form>
      </div>
      <div class="close-modal" @click="toggleRegisterModal"><img src="@/assets/close.png"></div>
    </div>
  </div>
</template>

<script>
import { mapMutations } from "vuex";
export default {
  data() {
    return {
      username: "",
      usernameError: "",
      email: "",
      emailError: "",
      password: "",
      passwordError: ""
    };
  },
  methods: {
    ...mapMutations(["toggleRegisterModal", "toggleLoginModal", "createAccount"]),
    toggleModals() {
      this.toggleRegisterModal();
      this.toggleLoginModal();
    },
    validateForm() {
      let namePattern = /^([A-Za-zÑñÁáÉéÍíÓóÚú]+['\-]{0,1}[A-Za-zÑñÁáÉéÍíÓóÚú]+)(\s+([A-Za-zÑñÁáÉéÍíÓóÚú]+['\-]{0,1}[A-Za-zÑñÁáÉéÍíÓóÚú]+))*$/i;
      let nameValidation = namePattern.test(this.username);
      if (!nameValidation) {
        this.$refs.name.style.outline = "1px solid #ff0000";
        this.$refs.name.style.color = "#ff0000";
        this.usernameError = "Please enter your username.";
      } else {
        this.$refs.name.style.outline = "none";
        this.$refs.name.style.color = "#edd700";
        this.usernameError = "";
      }

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

      let passwordPattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/gm;
      let passwordValidation = passwordPattern.test(this.password);
      if (!passwordValidation) {
        this.$refs.password.style.outline = "1px solid #ff0000";
        this.$refs.password.style.color = "#ff0000";
        this.passwordError = "Password must be at least 8 characters, 1 uppercase letter, 1 lowercase letter, and 1 number.";
      } else {
        this.$refs.password.style.outline = "none";
        this.$refs.password.style.color = "#edd700";
        this.passwordError = "";
      }

      if (nameValidation && emailValidation && passwordValidation) {
        this.createAccount({ username: this.username, email: this.email.toLowerCase(), password: this.password });
        this.username = "";
        this.email = "";
        this.password = "";
        this.news = false;
      }
    },
  },
};
</script>
  
<style>
.modal-container {
  position: fixed;
  top: 0;
  background: #000000cc;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: flex-start;
}

.modal {
  width: 40%;
  background: #1D1E1F;
  position: relative;
  padding: 25px;
}

.modal h2 {
  color: #EDD700;
  font-weight: 400;
  margin: 20px 0 10px 0;
}

.form-container {
  display: flex;
  flex-direction: column;
  align-items: center;
}

form {
  width: 90%;
}

.form input {
  box-sizing: border-box;
  width: 100%;
  border: none;
  border-radius: 3px;
  height: 40px;
  padding: 0 15px;
}

.form input:focus {
  background: #484848;
  color: #EDD700;
  outline: none;
  border: 1px solid #EDD700;

}

.error {
  color: #ff0000;
  margin: 5px 0 10px 0;
  font-size: .8rem;
  text-align: left;
}

.form button {
  width: 100%;
  margin-top: 20px;
  background-color: #484848;
  color: #FFFFFF;
  border: none;
  border-radius: 3px;
}

.form button:hover {
  background-color: #3f6dac;
  border: none;
}

.close-modal {
  width: 50px;
  position: absolute;
  top: 10px;
  right: 5px;
  cursor: pointer;
}
</style>
<template>
<div class=" container mx-auto mt-36 mb-36">
    <section class="gradient-form h-full bg-neutral-200 dark:bg-neutral-700">
      <div class="container h-full p-10">
        <div
          class="g-6 flex h-full flex-wrap items-center justify-center text-neutral-800 dark:text-neutral-200">
          <div class="w-full">
            <div
              class="block rounded-lg bg-white shadow-lg dark:bg-neutral-800">
              <div class="lg:flex lg:flex-wrap">
                <!-- Left column container-->
                <div class="px-4 text-center lg:w-6/12">
                  <div class="p-2 md:mx-6 md:p-12">
                    <!--Logo-->
                    <div class="text-center">
                      <img
                        class="mx-auto w-48"
                        src="https://almatypolytech.edu.kz/assets/svg/logo.svg"
                        alt="logo" />
                      <h4 class="mb-12 mt-1 pb-1 text-xl font-semibold">
                        Добро пожаловать <p class="text-base text-error" v-if="errMsg">{{ errMsg }}</p>
                      </h4>
                    </div>

                    <form>
                      <p class="mb-4">Войдите в свой аккаунт</p>
                      <!--Username input-->
                      <div class="relative mb-4" data-te-input-wrapper-init>
                        <label>
                        <p><input type="text" placeholder="Email" v-model="email" /></p>
                        </label>
                      </div>

                      <!--Password input-->
                      <div class="relative mb-4" data-te-input-wrapper-init>
                        <p><input type="password" placeholder="Password" v-model="password" /></p>
                      </div>

                      <!--Submit button-->
                      <div class="mb-12 pb-1 pt-1 text-center">
                        <p><button @click="signIn">Войти</button></p>
                      </div>
                    </form>
                  </div>
                </div>

                <!-- Right column container with background and description-->
                <div
                  class="flex items-center rounded-b-lg lg:w-6/12 lg:rounded-r-lg lg:rounded-bl-none"
                  style="background: linear-gradient(to right, #24313f, #24313f, #c4292d, #c4292d)">
                  <div class="px-4 py-6 text-white md:mx-6 md:p-12">
                    <h4 class="mb-6 text-xl font-semibold">
                      Войдите в свой аккаунт
                    </h4>
                    <p class="text-sm">
                      Чтобы посмотреть домашнее задание, свою статистику, пообщаться с кем-нибудь, узнать много нового, получать уведомления и многое-многое другое
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
</div>
</template>

<script setup>
  import { ref } from 'vue'
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
  import { useRouter } from 'vue-router' // import router
  const email = ref('')
  const password = ref('')
  const errMsg = ref() // ERROR MESSAGE
  const router = useRouter() // get a reference to our vue router
  const signIn = () => { // we also renamed this method
    firebase
      .auth()
      .signInWithEmailAndPassword(email.value, password.value)
       // eslint-disable-next-line
      .then((data) => {
        console.log('Successfully logged in!');
        router.push('/StatsView') // redirect to the feed
      })
      .catch(error => {
        switch (error.code) {
          case 'auth/invalid-email':
              errMsg.value = 'Неверный логин'
              break
          case 'auth/user-not-found':
              errMsg.value = 'Такого аккаунта не существует'
              break
          case 'auth/wrong-password':
              errMsg.value = 'Неправильный пароль'
              break
          default:
              errMsg.value = 'Пароль или Логин неправильный'
              break
        }
      });
  }
</script>
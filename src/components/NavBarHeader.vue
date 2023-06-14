<template>
<div id= "sticky" class="navbar bg-base-100">
  <div class="navbar-start">
    <div class="dropdown">
      <label tabindex="0" class="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabindex="0" class="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
        <li><router-link to="/">Главная</router-link></li>
        <li>
          <a>Студентам</a>
          <ul class="p-2">
            <li><router-link to="/SignIn">Обучение</router-link></li>
            <li><router-link to="/price">Цена</router-link></li>
            <li><router-link to="/Teacher">Состав Учителей</router-link></li>
          </ul>
        </li>
        <li><router-link to="/virtualtour">Виртуальный тур</router-link></li>
        <li><a>Контакты</a></li>
      </ul>
    </div>
    <router-link to="/" class="btn btn-ghost normal-case text-xl"><img src="https://almatypolytech.edu.kz/assets/svg/logo.svg" alt="logo" class="d-inline-block align-text-top" width="120"></router-link>
  </div>
  <div class="navbar-center hidden lg:flex">
    <ul class="menu menu-horizontal px-1">
      <li><router-link to="/">Главная</router-link></li>
      <li tabindex="0">
        <details>
          <summary>Студентам</summary>
          <ul class="p-2">
            <li><router-link to="/SignIn">Обучение</router-link></li>
            <li><router-link to="/price">Цена</router-link></li>
            <li><router-link to="/Teacher">Состав Учителей</router-link></li>
          </ul>
        </details>
      </li>
      <li><router-link to="/virtualtour">Виртуальный тур</router-link></li>
      <li><router-link to="/Contact">Контакты</router-link></li>
    </ul>
  </div>
  <div class="navbar-end" v-if="isLoggedIn">
    <a class="btn"><router-link to="/SignIn">Выйти</router-link></a>
  </div>
  <div class="navbar-end" v-else>
    <a class="btn"><router-link to="/SignIn">Войти</router-link></a>
  </div>
</div>
</template>

<style>
#sticky {
  position: sticky;
  top: 0;
  z-index: 15;
}
</style>
<script setup>
const { locale } = useI18n()
</script>

<template>
  <div class="html">
    <header class="header">
      <nav class="header__nav">
        <img class="header__logo" src="rtp_b.svg" alt="logo" />
        <ul class="header__list">
          <li class="header__list-element">
            <NuxtLink to="/">Home</NuxtLink>
          </li>
          <li class="header__list-element">
            <NuxtLink to="/about">AboutMe</NuxtLink>
          </li>
        </ul>
        <NuxtLink to="/" class="btn">Login</NuxtLink>
        <select v-model="locale" >
        <option value="en">🍟</option>
        <option value="es">🌮</option>
      </select>
      </nav>
    </header>
    <main class="main">

      <slot/>
    </main>
  </div>
</template>

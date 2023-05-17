<template>
  <div>
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
        <button class="btn">Login</button>
      </nav>
    </header>
    <slot/>
  </div>
</template>

<script setup>
import Hamburger from "~/components/hamburger.vue";
import Logo from "~/components/logo.vue";
</script>

<template>
  <div class="topnav">
    <Hamburger />

    <Logo class="topnav__logo" />
  </div>
</template>

<style lang="scss">
@import "assets/styles/components/topnav/topnav";
</style>

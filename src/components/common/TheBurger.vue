<template>
  <div class="hamburger hamburger--arrow" uk-toggle="target: #offcanvas-overlay">
    <div class="hamburger-box">
      <div class="hamburger-inner"></div>
    </div>
  </div>
</template>
<script>
export default {
  name: "TheBurger"
};
</script>
<style lang="scss">
.hamburger {
  display: inline-flex;
  cursor: pointer;
  transition-property: opacity, filter;
  transition-duration: 0.15s;
  transition-timing-function: linear;
  text-transform: none;
  background-color: transparent;
  border: 0;
  margin: 0;
  overflow: visible;
}
.hamburger:hover {
  transition: all ease 0.4s;
}
.hamburger-box {
  width: 40px;
  height: 35px;
  display: inline-block;
  position: relative;
}

.hamburger-inner {
  display: block;
  top: 50%;
}
.hamburger-inner,
.hamburger-inner::before,
.hamburger-inner::after {
  content: "";
  display: block;
  width: 40px;
  height: 4px;
  background-color: $grey-light;
  border-radius: 4px;
  position: absolute;
  transition-property: transform;
  transition-duration: 0.15s;
  transition-timing-function: ease;
}
.hamburger-inner::before {
  top: -10px;
}
.hamburger-inner::after {
  bottom: -10px;
}
.hamburger--arrow:hover .hamburger-inner::before {
  transform: translate3d(8px, 0, 0) rotate(45deg) scale(0.7, 1);
}
.hamburger--arrow:hover .hamburger-inner::after {
  transform: translate3d(8px, 0, 0) rotate(-45deg) scale(0.7, 1);
}
</style>
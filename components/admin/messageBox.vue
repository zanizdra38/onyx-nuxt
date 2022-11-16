<template>
  <b-alert
    class="message-banner"
    :show="showBanner"
    :variant="variant"
    dismissible
    @dismissed="showBanner=false"
  >
      <span id="message">
        {{ message }}
      </span>
  </b-alert>
</template>

<script>
export default {
  name: "messageBanner",
  props: ['variant', 'message', 'showBanner', ],
  mounted() {
//    this.visibilityWarning = true
    console.log('messageBanner-->', this.variant, this.message, this.showBanner)
  }
}
</script>

<style scoped>
.message-banner{
  min-height: 42px;
}
#message{
  vertical-align: middle;
}
.message-banner button{
  background-color: inherit;
  border-color: transparent;
  position: absolute;
  top: 0;
  right: 0;
  height: 100%;
  width: 55px;
  font-size: 1.5rem;
}
</style>

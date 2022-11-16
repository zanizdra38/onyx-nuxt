<template>
  <b-modal v-model="showConfirm" ref="modal" id="modal-window" title="Second Modal" hide-footer hide-header >
    <p class="my-2 modal-item"> {{ message }}</p>
    <b-form-row class="row-center">
      <b-button class="btn-modal" size="sm" variant="danger" @click="yes()">Yes</b-button>
      <b-button  class="btn-modal" size="sm" variant="outline-secondary" @click="cancel()">Cancel</b-button>
    </b-form-row>
  </b-modal>
</template>

<script>
export default {
  name: "confirmBox",
  props: ['message', 'showConfirm', ],
  methods: {
    yes(){
      $nuxt.$emit('deleteElementConfirm', this.idDeleteComponent);
    },
    cancel(){
      $nuxt.$emit('closeElementConfirm', this.idDeleteComponent);
    }
  },
}
</script>

<style scoped>
  .modal-item, #modal-window {
    text-align: center;
  }
  .btn-modal{
    margin: 5px;
    min-width: 100px;
  }
</style>

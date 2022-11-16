<template>
  <div class="container-message-box">
    <message-banner class="message-banner" :variant="messages.variant"  :showBanner="messages.showMessage" :message="messages.message" />
    <confirm-box :message="messages.message" :showConfirm="messages.showMessage"/>
    <table id="tab-elements" class="table table-hover" border="1">
      <thead>
      <tr>
        <th scope="col">#</th>
        <th scope="col" v-for="(itemShowCol, keyShowCol) in showCol" :key="keyShowCol">{{ itemShowCol }}</th>
        <th scope="col">Edit</th>
        <th scope="col" v-if="showDeleteButton">Delete</th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="(itemElements, keyElements) in arrElements" :key="keyElements">
        <th scope="row">{{ keyElements + 1 }}</th>
        <td v-for="(itemShowCol, keyShowCol) in showCol" :key="keyShowCol">{{ itemElements[itemShowCol] }}</td>
        <td class="td-button">
          <button
            type="button"
            class="btn btn-primary"
            @click="editElement(itemElements.name)"
          >
            Edit
          </button>
        </td>
        <td class="td-button" v-if="showDeleteButton">
          <button
            type="submit"
            class="btn btn-danger"
            @click="deleteElement(itemElements.id)"
          >
            Delete {{ itemElements.id }}
          </button>
        </td>
      </tr>
      </tbody>
    </table>
  </div>
</template>

<script>

import MessageBanner from "./messageBox";
import ConfirmBox from "./confirmBox";

export default {
  name: "tabElements",
  components: {ConfirmBox, MessageBanner},
  props:[ "showDeleteButton", "arrElements", "showCol"],
  data: ()=>({
    messages:{
      showMessage: false,
//      messageFailSendEmail: false,
//      variant: 'danger',
      message: 'Do you really want to remove this item?',
    },
    idDeleteComponent: null,
  }),
  mounted() {
    const ap = this
    $nuxt.$on('deleteElementConfirm', slug => ap.deleteElementAction());
    $nuxt.$on('closeElementConfirm', () => ap.closeElementConfirm());
  },
  methods: {
    editElement(slug){
      $nuxt.$emit('editElement', slug);
    },
    deleteElement(id){
      this.idDeleteComponent = id
      this.messages.showMessage = true
    },
    deleteElementAction(){
      this.messages.showMessage = false
      if(this.idDeleteComponent){
        $nuxt.$emit('deleteElement', this.idDeleteComponent);
      }
    },
    closeElementConfirm(){
     this.messages.showMessage = false
    }
  },
}
</script>

<style scoped>

/*
#tab-elements{
  width: 100%;
  margin: 20px 0;
}
#tab-elements, #tab-elements th, #tab-elements td{
  border: 1px solid #000;
  padding: 5px;
}
 */
</style>

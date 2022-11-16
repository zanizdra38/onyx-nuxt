<template>
  <div class="container-image-upload">
    <h3>Header Image</h3>
<!--    <div v-if="!image"> -->
    <div v-if="!imageUrl">
      <div class="input__wrapper">
        <input type="file" id="input-file" class="input input-file" multiple @change="onFileChange" >
        <label for="input-file" class="btn file-button">
          <span class="input__file-button-text">Выберите файл</span>
        </label>
      </div>
    </div>
    <div v-else class="image-block">
      <img :src="imageUrl" :class="customClassImage" />
      <button @click="removeImage" class="btn button-upload-image">Remove image</button>
    </div>
  </div>
</template>
<script>
export default {
  name: "uploadImage",
  props: ["imageUrl", "customClassImage", "nameImage", 'adminPage'],
  data(){
    return {
      image: null,
 //     url: null,
    }
  },
  mounted() {
//    this.url = this.imageUrl
  },
  methods: {
    onFileChange(e) {
      this.image = e.target.files[0]; // accessing file
      console.log('selectedFile = ', this.image)

      let files = e.target.files || e.dataTransfer.files;
      if (!files.length)
        return;
      this.createImage(files[0]);
      $nuxt.$emit('uploadImage' + this.adminPage, { nameImage: this.nameImage, image: this.image });
    },
    createImage(file) {
      let reader = new FileReader();
      const vm = this;

      reader.onload = (e) => {
        vm.imageUrl = e.target.result;
//        vm.url = e.target.result;
      };
      reader.readAsDataURL(file);
    },
    removeImage: function (e) {
      this.image = '';
      $nuxt.$emit('deleteImage' + this.adminPage, {  nameImage: this.nameImage });
    }
  }
}
</script>

<style scoped>
h3{
  margin-bottom: 10px;
}
.container-image-upload{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.input-file {
  opacity: 0;
  width: 0;
}
.file-button {
  display: flex;
  align-items: center;
  justify-content: center;
  max-width: 150px;
}
.image-block{
  display: flex;
  flex-direction: column;
}
.image-block img{
  margin-bottom: 10px;
}
</style>

<template>
  <main id="settings-home-page" class="main-admin">
    <form class="login-box"> <!--/          @submit.prevent="onSubmit"
          enctype="multipart/form-data"
          :model="controls"
          ref="form"
    >-->
      <div id="header-admin-page" class="row row-between">
        <h1>Home Page</h1>
        <button type="button" class="btn btn-save" v-on:click="onSubmit">Save</button>

      </div>

      <section id="section-about-us">
          <upload-image
            :image-url="upload.images.header"
            :custom-class-image="upload.customClasses.header"
            admin-page="Home"
            name-image="header"
          />
          <text-writer
            contentTextBlock="Content"
            admin-page="Home"
            name-text-writer="aboutUs"
          />
        </section>

    </form>
  </main>
</template>
<script>
import QS from 'qs'
import uploadImage from '~/components/admin/uploadImage'
//import TextWriter from "../../../../components/admin/textWriter";
export default {
  name: "indexAdminPagesHome",
  layout: "admin",
  middleware: ['admin-auth'],
  components: {/*TextWriter,*/ uploadImage, },
//  prop: [ saveActions, ],
  async asyncData({store}) {
    const oldContent = store.getters["adminPages/pagesSite"]
    return { oldContent }
  },
  data(){
    return {
      upload: {
        images: {
          header: false,
        },
        customClasses: {
          header: false,
        },
      },
      content: {
        images: {
          header: false,
          aboutUsTop: false,
          aboutUsBottom: false,
        },
        text: {
          aboutUs: ''
        }
      },
      contentOld: {
        text: {
          aboutUs: ''
        }
      },
      urlImages: {
        header: '',
        aboutUsTop: false,
        aboutUsBottom: false,
      },
      selectedFile: "",
      controls:{
 //       headerImage: null,
      }
    }
  },
  watch: {
    saveActions(){

    }
  },
  mounted() {
    let ap = this
    $nuxt.$on("uploadImageHome", dataUpload => ap.uploadImageAction(dataUpload))
    $nuxt.$on("deleteImageHome", dataDelete => ap.deleteImageAction(dataDelete))
    $nuxt.$on("textUpdateHome", dataTextUpdate => ap.textUpdateAction(dataTextUpdate))

  },
  methods: {
    uploadImageAction(dataUpload){
      console.log('dataUpload =>', dataUpload)
      /*
      this.upload.images[dataUpload.nameImage] = dataUpload.image
      console.log('image=', this.upload)
      */
      this.content.images[dataUpload.nameImage] = dataUpload.image
      console.log('content ==>', this.content)
    },
    deleteImageAction(dataDelete){
      this.upload.images[dataDelete.nameImage] = false
    },
    onFileChange(e) {
      const selectedFile = e.target.files[0] // accessing file
      this.selectedFile = selectedFile
      console.log('selectedFile = ', this.selectedFile)
    },
    textUpdateAction(dataTextUpdate){
      console.log('text update==>', dataTextUpdate)
      this.content.text[dataTextUpdate.nameTextWriter] = dataTextUpdate.text
      console.log('content.text ==>', this.content)
    },
    async onSubmit() {
//    async onUploadFile() {
      console.log ('onSubmit login')
      console.log(' dzs.content -->', this.content)

      try {
        let dzs = this
        const formData = new FormData();


        Object.keys(dzs.content.images).forEach(function(key) {
          if (dzs.content.images[key]){
            formData.append('file_' + key, dzs.content.images[key])  // appending file
          }
        }, dzs.content.images);

        Object.keys(dzs.content.text).forEach(function(key) {
            formData.append('text_' + key, dzs.content.images[key])  // appending file
        }, dzs.content.images);
        formData.append('namePage', 'home')  // appending file
        console.log('formData= ', formData.get('namePage'))
        await this.$store.dispatch('adminPages/savePage', formData)



/*
        formData.append('file', this.selectedFile)  // appending file
*/
 //


/*
        const formData = {
          files: this.selectedFile,
          description: 'this.selectedFile'
        }
*/
//        console.log('formData= ', formData.get('description'))
 //       await this.$store.dispatch('adminBusinessProcess/SET_uploadImage', formData)
/*
        // sending file to the backend
        console.log(formData, 'QS-->', formData)
        await this.$axios.$post('/api/upload/uploadImage', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      })
      /*
        axios
          .$post("http://localhost:4500/upload", formData)
          .then(res => {
            console.log(res);
          })
          .catch(err => {
            console.log(err);
          });
          */
 //     }
      /*
        this.loading = false
        */
      } catch (e) {
        this.loading = false
      }
    }
  }
}
</script>

<style scoped>

</style>

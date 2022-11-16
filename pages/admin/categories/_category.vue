<template>
  <main>
    <h1>Category - {{dataForm.titleCategory}}</h1>
    <b-card>
<!--      <b-form @submit="onSubmit" @reset="onReset"> -->
      <b-form @reset="onReset">
        <b-form-group
          id="input-group-title"
          label="Name category:"
          label-for="input-title"
          description="We'll never share your email with anyone else."
        >
          <b-form-input
            id="input-title"
            class="item-form"
            v-model="dataForm.titleCategory"
            type="text"
            placeholder="Enter name category"
            required
          ></b-form-input>
        </b-form-group>

        <b-form-group
          id="input-group-slug"
          label="Slug category:"
          label-for="input-slug"
        >
          <b-form-input
            id="input-slug"
            class="item-form"
            v-model="dataForm.slugCategory"
            type="text"
            placeholder="Enter slug category"
            required
          ></b-form-input>
        </b-form-group>

        <b-form-group id="input-group-order" label="Order:" label-for="input-order">
          <b-form-input
            id="input-order"
            class="item-form"
            v-model="dataForm.order"
            type="text"
            placeholder="Enter order"
            required
          ></b-form-input>
        </b-form-group>

        <b-form-group id="input-group-description" label="Description:" label-for="textarea-description">
          <b-form-textarea
            id="textarea-description"
            class="item-form"
            v-model="dataForm.description"
            placeholder="description"
          ></b-form-textarea>
        </b-form-group>
<!--
        <b-form-group id="input-group-description" label="Description:" label-for="textarea-description">
          <b-form-file
            v-model="dataForm.img"
            :state="Boolean(dataForm.img)"
            placeholder="Choose a file or drop it here..."
            drop-placeholder="Drop file here..."
          ></b-form-file>
          <div class="mt-3">Selected file: {{ dataForm.img ? dataForm.img.name : '' }}</div>
        </b-form-group>
-->

<!--
        <b-form-group>
          <upload-image
            :image-url="upload.images.header"
            :custom-class-image="upload.customClasses.header"
            admin-page="Home"
            name-image="header"
          />
        </b-form-group>
-->

        <b-button type="button" variant="primary" @click="onSubmit">Save</b-button>
        <b-button type="reset" variant="danger">Reset</b-button>
      </b-form>
    </b-card>

  </main>
</template>

<script>
import CyrillicToTranslitJs from "cyrillic-to-translit-js"
import UploadImage from "../../../components/admin/uploadImage";
export default {
  name: "categoryCard",
  components: {UploadImage},
  layout: "admin",
  async asyncData({store}) {

  },
  data: ()=>({
//    showDeleteButton: false,
    dataForm: {},
    languageLocale: null,
  }),
  async mounted() {
    let ap = this
    const locale = this.$i18n.locale
    let category = await this.$store.getters["categories/categories"].filter(category => {
      console.log(ap.$route.params.category, 'category', category)
      if(ap.$route.params.category === category.slug[locale]){
        return category
      }})

    console.log('category start->', category)
    category = category[0]
      console.log('categories -> ', this.$store.getters["categories/categories"])
    console.log('category [0]->', category)
    this.dataForm = {
      slugCategory: category.slug[locale] ?? null,
      titleCategory: category.title[locale] ?? null,
      order: category.order ?? null,
      description: category.description[locale] ?? null,
      img: null,
    }
//    this.languageLocale = this.$i18n.locale

//    this.$root.$emit("showSpinner");
    $nuxt.$on('editElementsPage', slug => ap.openEditablePage(slug));
  },
  methods: {
    openEditablePage(slug){
      console.log('open page with slug=', slug)
      $nuxt.$router.push({ path: '/admin/adminPages/' + slug })
    },
    onSubmit(){
      const cyrillicToTranslit = new CyrillicToTranslitJs();

      console.log('onSubmit ==>', this.dataForm.titleCategory)
      const slug = cyrillicToTranslit.transform(this.dataForm.titleCategory, '-').toLowerCase()
      console.log('name==>', name)
      /*
      const formData = new FormData()
      formData.append('slug', slug)
      formData.append('languageLocale', this.languageLocale)
//      formData.append('img', this.dataForm.img)
      formData.append('order', this.order)
      */

      const formData = {
        slug: slug,
        languageLocale: this.languageLocale,
        order: this.order
      }

      this.$store.dispatch('categories/setCategories', formData)

    },
    onReset(){

    },
  }
}
</script>

<style scoped>

</style>

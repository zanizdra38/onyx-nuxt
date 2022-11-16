<template>
  <main>
    <h1>Categories Page</h1>
    <div>
      <tab-elements :arr-elements="arrElements" :show-delete-button="showDeleteButton" :show-col="showCol" />
    </div>
  </main>
</template>

<script>
import TabElements from "../../../components/admin/tabElements";


export default {
  name: "categories",
  components: {TabElements},
  layout: "admin",
  async asyncData({store, app}) {
    console.log( 'asyncData  categories/categories   ' )
    const locale = app.i18n.locale
    console.log('locale-->', locale)
    const arrElements = store.getters["categories/categories"].map(el => {
      console.log('el=> ', el)
      return {
        id: el.id,
        dateChange: el.dateChange,
        name: el.slug[locale],
        title: el.title[locale],
        order: el.order,
        img: el.img,
        description: el.description[locale]
      }
    })
    return  { arrElements }
  },
  data: ()=>({
    showDeleteButton: true,
    showCol: ['title', 'dateChange', 'order', ],
  }),
  watch: {
    '$store.state.categories.categories': function() {
      console.log('$store.state.categories.categories', this.$store.state.categories.categories)
      const locale = this.$i18n.locale
      this.arrElements = this.$store.getters["categories/categories"].map(el => {
        return {/*
          id: el.id,
          dateChange: el.dateChange,
          name: el.name[locale] || '',
          title: el.title[locale] || '',
          order: el.order || '',
          img: el.img || null,
          description: el.description[locale] || '',*/
        }
      })
    }
  },
  mounted() {
    console.log('hi categories')
    let ap = this
    $nuxt.$on('editElement', slug => ap.editComponent(slug));
    $nuxt.$on('deleteElement', id => ap.deleteComponent(id));
  },
  methods: {
    async editComponent(slug){
      console.log('open page with slug=', slug)
      $nuxt.$router.push({ path: '/admin/categories/' + slug })
    },
    deleteComponent(id){
      this.$store.dispatch('categories/deleteCategory', id)
    }
  }
}
</script>

<style scoped>

</style>

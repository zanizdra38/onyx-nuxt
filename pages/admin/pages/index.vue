<template>
  <main>
    <h1>Pages</h1>
    <div>
      <tab-elements :arr-elements="arrElements" :show-delete-button="showDeleteButton" :show-col="showCol" />
    </div>
  </main>
</template>

<script>
import TabElements from "../../../components/admin/tabElements";
export default {
  name: "indexAdminPages",
  components: {TabElements},
  layout: "admin",
  middleware: ['admin-auth'],
  async asyncData({store}) {
    const arrElements = store.getters["adminPages/pagesSite"]
    return { arrElements }
  },
  data: ()=>({
    showDeleteButton: false,
    showCol: ['name', 'title', 'dateChange', 'order', ],

  }),
  mounted() {
    let ap = this
    console.log('arrElements->', this.arrElements)
//    this.$root.$emit("showSpinner");
    $nuxt.$on('editElementsPage', slug => ap.openEditablePage(slug));
  },
  methods: {
    openEditablePage(slug){
      console.log('open page with slug=', slug)
      $nuxt.$router.push({ path: '/admin/adminPages/' + slug })
    }
  }
}
</script>

<style scoped>

</style>

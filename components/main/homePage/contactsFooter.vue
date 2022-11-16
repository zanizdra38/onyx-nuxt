<template>
  <section id="section-contact-footer" class="section-main">
    <div id="contact-form">
<!--      <hamburger-menu light-color-btn="dark" name-menu="homeNavMenu" /> -->
      <h1>НАПИШИТЕ НАМ</h1>
      <form
        v-model="contactForm"
      >
        <div id="block-lead-name" class="block-folder-form">
          <input id="lead-name" v-model="contactForm.leadName" />
          <span>Recuared</span>
        </div>
        <div>
          <input id="lead-email" v-model="contactForm.leadEmail" />
        </div>
        <div>
          <input id="lead-phone" v-model="contactForm.leadPhone" />
        </div>
        <div>
          <textarea id="mail-description" v-model="contactForm.mailDescription"></textarea>
        </div>
        <button id="button-send-mail" type="button" @click="actionSendMail">Send</button>
      </form>
    </div>
    <footer-main />
  </section>
</template>

<script>
  import footerMain from "../footerMain";
  import hamburgerMenu from "../elements/hamburgerMenu";
  export default {
      name: "contactsFooter",
      components: {footerMain, hamburgerMenu},
      data(){
          return {
              contactForm: {
                  leadName: null,
                  leadEmail: null,
                  leadPhone: null,
                  mailDescription: null,
              },
              validFolderForm: {
                  leadName: {
                      status: true,
                      span: null,
                  },
                  leadEmail: {
                      status: true,
                      span: null,
                  },
                  leadPhone: {
                      status: true,
                      span: null,
                  },
                  mailDescription: {
                      status: true,
                      span: null,
                  },
              }
          }
      },
    mounted() {
      $nuxt.$on('clickHamburgerMenu', something => {
        if (something.nameMenu==='homeNavMenu'){ this.action(something.checked) }
      });
    },
    methods:{
      actionSendMail(){
          alert('Hi');
      },
      action(something){
        console.log('something->>->>')
        console.log('something->>->>', something)
      }
    }
  }
</script>
<style scoped>
  #section-contact-footer{
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    padding-top: 0;
  }
  #contact-form{
    width: 100%;
    padding-top: 150px;
  }
  #contact-form h1{
    font-style: normal;
    font-size: 36px;
    line-height: 24px;
    text-align: center;
    color: #2D3A4B;
  }
</style>

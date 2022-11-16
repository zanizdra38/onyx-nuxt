export const state = ()=>{
  return {
    pagesSite: [
      {
        id: 1,
        dateChange: '11-09-2021',
        name: 'home',
        title: 'Home',
      },
      {
        id: 2,
        dateChange: '11-09-2021',
        name: 'aboutUs',
        title: 'About Us',
      },
      {
        id: 3,
        dateChange: '11-09-2021',
        name: 'projects',
        title: 'Projects',
      },
      {
        id: 4,
        dateChange: '11-09-2021',
        name: 'product',
        title: 'Products',
      },
      {
        id: 5,
        dateChange: '11-09-2021',
        name: 'articles',
        title: 'Articles',
      },
      {
        id: 6,
        dateChange: '11-09-2021',
        name: 'contacts',
        title: 'Contacts',
      }
    ],
    contentHomePage: {
      images: {
        header: {
          url: 'header_1234567890.jpg',
          alt: 'laser cut',
        },
        aboutUsTop: {
          url: 'aboutUsTop_1234567890.png',
          alt: 'laser cut',
        },
        aboutUsBottom: {
          url: 'aboutUsBottom_1234567890.png',
          alt: 'sheet metal bending',
        },
      },
      text: {
        aboutUs: {
          text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum',
        },
      }
    }
  }
};
export  const mutation = {

};
export  const action = {
  async savePage({commit}, formData) {
    try {
      const namePage = formData.get('namePage')
      console.log('namePage ->', namePage)
      //    await this.$axios.$post('/api/users/admin/create', formData)
    } catch (e) {}
  }
};
export  const getters = {
  pagesSite: state => state.pagesSite,
  contentHomePage: state => state.contentHomePage,
};

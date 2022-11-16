export const state = () => ({
  categories: [
    {
      id: 1,
      dateChange: '11-09-2021',
      slug: {
        ua: 'complecsni-rishenya',
        en: 'powder-coating-lines',
        ru: 'complecsnie-reshenia',
      },
      title: {
        ua: 'Комплексні ріщення',
        en: 'Powder coating lines',
        ru: 'Комлесные решения',
      },
      order: 0,
      img: null,
      description: {
        ua: 'Тестове поясненя',
        en: 'Test description',
        ru: 'Тестовое пояснение',
      },
    },
    {
      id: 2,
      dateChange: '11-09-2021',
      slug: {
        ua: 'cameri-poroshcovogo-farbuvania',
        en: 'powder-coating-booths',
        ru: 'cameri-poroshkovoi-pocraski',
      },
      title: {
        ua: 'Камери порошкового фарбування',
        en: 'Powder coating booths',
        ru: 'Камеры порошковой покраски',
      },
      order: 0,
      img: null,
      description: {
        ua: '',
        en: '',
        ru: '',
      },
    },
    {
      id: 3,
      dateChange: '11-09-2021',
      slug: {
        ua: 'Камери полімеризації',
        en: 'Polymerization Furnaces',
        ru: 'Камеры полимеризации',
      },
      title: {
        ua: 'Камери полімеризації',
        en: 'Polymerization Furnaces',
        ru: 'Камеры полимеризации',
      },
      order: 0,
      img: null,
      description: {
        ua: '',
        en: '',
        ru: '',
      },
    },
    {
      id: 4,
      dateChange: '11-09-2021',
      slug: {
        ua: 'Ручні установки фарбування',
        en: 'Manual Spraying Settings',
        ru: 'Ручные установки аокраски',
      },
      title: {
        ua: 'Ручні установки фарбування',
        en: 'Manual Spraying Settings',
        ru: 'Ручные установки аокраски',
      },
      order: 0,
      img: null,
      description: {
        ua: '',
        en: '',
        ru: '',
      },
    },
    {
      id: 5,
      dateChange: '11-09-2021',
      slug: {
        ua: 'Транспортні системи',
        en: 'Transport System',
        ru: 'Транспортные системы',
      },
      title: {
        ua: 'Транспортні системи',
        en: 'Transport System',
        ru: 'Транспортные системы',
      },
      order: 0,
      img: null,
      description: {
        ua: '',
        en: '',
        ru: '',
      },
    },
    {
      id: 6,
      dateChange: '11-09-2021',
      slug: {
        ua: 'Каретки',
        en: 'Carriages',
        ru: 'Каретки',
      },
      title: {
        ua: 'Каретки',
        en: 'Carriages',
        ru: 'Каретки',
      },
      order: 0,
      img: null,
      description: {
        ua: '',
        en: '',
        ru: '',
      },
    }
  ],
})

export const mutations = {
  setCategories: (state, categories) => state.categories = categories,
}
export const actions = {
  async getCategories() {
    try {

    } catch (e) {}
  },
  async setCategories(context, formData){
    console.log('setCategories dataForm =>', formData)
    try {
      await this.$axios.$post('/api/categories/admin/set-categories', formData)
    } catch (e) {

    }
  },
  async deleteCategory (context, id) {
    console.log('dispatch ---> deleteCategory id = ', id, '  context-->', context)
    try {
      let categories = context.getters.categories.filter( item => typeof item === 'object' && item.id !== id )
      console.log(' categories = ', categories )

      context.commit('setCategories', categories)
 //     arr.filter((item) => typeof(item) === 'object' && item.value !== 'b')
    } catch (e) {

    }
  },
}
export const getters = {
  categories: state => state.categories,
}

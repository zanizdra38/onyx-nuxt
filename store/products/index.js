export const state = () => ({
  products: [
    {
      id: 1,
      dateChange: '11-09-2021',
      category: 1, //categories id
      name: {
        ua: 'Комплексні ріщення',
        en: 'Powder coating lines',
        ru: 'Комлесные решения',
      },
      slider: [],
      description: {
        ua: '',
        en: '',
        ru: '',
      },
      characteristics: {

      }
    },
    {
      id: 2,
      dateChange: '11-09-2021',
      category: 1, //categories id
      name: {
        ua: 'Камери порошкового фарбування',
        en: 'Powder coating booths',
        ru: 'Камеры порошковой покраски',
      },
      slider: [],
      description: {
        ua: '',
        en: '',
        ru: '',
      },
      characteristics: {

      }
    },
    {
      id: 3,
      dateChange: '11-09-2021',
      category: 2, //categories id
      name: {
        ua: 'Камери полімеризації',
        en: 'Polymerization Furnaces',
        ru: 'Камеры полимеризации',
      },
      order: 0,
      slider: [],
      description: {
        ua: '',
        en: '',
        ru: '',
      },
    },
    {
      id: 4,
      dateChange: '11-09-2021',
      category: 3, //categories id
      name: {
        ua: 'Ручні установки фарбування',
        en: 'Manual Spraying Settings',
        ru: 'Ручные установки аокраски',
      },
      order: 0,
      slider: [],
      description: {
        ua: '',
        en: '',
        ru: '',
      },
    },
    {
      id: 5,
      dateChange: '11-09-2021',
      category: 4, //categories id
      name: {
        ua: 'Транспортні системи',
        en: 'Transport System',
        ru: 'Транспортные системы',
      },
      order: 0,
      slider: [],
      description: {
        ua: '',
        en: '',
        ru: '',
      },
    },
    {
      id: 6,
      dateChange: '11-09-2021',
      category: 5, //categories id
      name: {
        ua: 'Каретки',
        en: 'Carriages',
        ru: 'Каретки',
      },
      order: 0,
      slider: [],
      description: {
        ua: '',
        en: '',
        ru: '',
      },
    }
  ],
})

export const mutations = {
  setProducts: (state, products) => state.error = products,
}
export const actions = {
  async getProducts() {
    try {

    } catch (e) {}
  },
}
export const getters = {
  products: state => state.products,
}

import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    boughtItems: 0,
    boughtDesktops: [],
    isBought: false,
    desktops: [ 
      {
        id: 0,
        manufacturer: 'Lenovo',
        name: 'Lenovo M58e MT E7500',
        model: 'RD6803W7',
        cpu: 'Intel Core 2 Duo E7500 2.93GHz ',
        gpu: 'Intel GMA X4500',
        ram: '4GB',
        storage1: '160GB SSD',
        storage2: '',
        OS: 'Windows 7',
        price: '82.29 EU',
      },
      { 
        id: 1,
        manufacturer: 'Lenovo',
        name: 'Lenovo M58e MT E7500',
        model: 'RD6788',
        cpu: 'Intel Core 2 Duo E7500 2.93GHz ',
        gpu: 'GT1030 2GB',
        ram: '4GB',
        storage1: '500GB HDD',
        storage2: '',
        OS: 'Windows 10 pro',
        price: '191.39 EU ',
      },
      { 
        id: 2,
        manufacturer: 'Lenovo',
        name: 'Lenovo ThinkCentre M630e',
        model: '10YM0008MX',
        cpu: 'Intel Core i3, i3-8145U',
        gpu: 'Intel GMA X4500',
        ram: '4GB',
        storage1: '128GB SSD',
        storage2: '',
        OS: 'Windows 10',
        price: '82.29 EU',
      },
      { 
        id: 3,
        manufacturer: 'Lenovo',
        name: 'Lenovo Essential V530s-07ICR',
        model: '11BM008FMX',
        cpu: 'i3, i3-9100',
        gpu: 'Intel UHD',
        ram: '8GB',
        storage1: '128GB SSD',
        storage2: '',
        OS: 'Windows 10 pro',
        price: '571 EU',
      },
      { 
        id: 4,
        manufacturer: 'Lenovo',
        name: 'Lenovo ThinkCentre M720s SFF',
        model: '10ST007EMX',
        cpu: 'i5, i5-9400',
        gpu: 'Intel UHD',
        ram: '8GB',
        storage1: '256GB SSD',
        storage2: '',
        OS: 'Windows 10 pro',
        price: '82.29 EU'
      },
      { 
        id: 5,
        manufacturer: 'Dell',
        name: 'Lenovo M58e MT E7500',
        model: 'RD6803W7',
        cpu: 'Intel Core 2 Duo E7500 2.93GHz ',
        gpu: 'Intel GMA X4500',
        ram: '4GB',
        storage1: '160GB',
        storage2: '',
        OS: 'Windows7',
        price: '82.29 EU'
      },
      { 
        id: 6,
        manufacturer: 'Dell',
        name: 'Lenovo M58e MT E7500',
        model: 'RD6803W7',
        cpu: 'Intel Core 2 Duo E7500 2.93GHz ',
        gpu: 'Intel GMA X4500',
        ram: '4GB',
        storage1: '160GB',
        storage2: '',
        OS: 'Windows7',
        price: '82.29 EU'
      },
      { 
        id: 7,
        manufacturer: 'Dell',
        name: 'Lenovo M58e MT E7500',
        model: 'RD6803W7',
        cpu: 'Intel Core 2 Duo E7500 2.93GHz ',
        gpu: 'Intel GMA X4500',
        ram: '4GB',
        storage1: '160GB',
        storage2: '',
        OS: 'Windows7',
        price: '82.29 EU'
      },
      { 
        id: 8,
        manufacturer: 'Dell',
        name: 'Lenovo M58e MT E7500',
        model: 'RD6803W7',
        cpu: 'Intel Core 2 Duo E7500 2.93GHz ',
        gpu: 'Intel GMA X4500',
        ram: '4GB',
        storage1: '160GB',
        storage2: '',
        OS: 'Windows7',
        price: '82.29 EU'
      },
      { 
        id: 9,
        manufacturer: 'Dell',
        name: 'Lenovo M58e MT E7500',
        model: 'RD6803W7',
        cpu: 'Intel Core 2 Duo E7500 2.93GHz ',
        gpu: 'Intel GMA X4500',
        ram: '4GB',
        storage1: '160GB',
        storage2: '',
        OS: 'Windows7',
        price: '82.29 EU'
      },
      { 
        id: 10,
        manufacturer: 'Hp',
        name: 'Lenovo M58e MT E7500',
        model: 'RD6803W7',
        cpu: 'Intel Core 2 Duo E7500 2.93GHz ',
        gpu: 'Intel GMA X4500',
        ram: '4GB',
        storage1: '160GB',
        storage2: '',
        OS: 'Windows7',
        price: '82.29 EU'
      },
      { 
        id: 11,
        manufacturer: 'Hp',
        name: 'Lenovo M58e MT E7500',
        model: 'RD6803W7',
        cpu: 'Intel Core 2 Duo E7500 2.93GHz ',
        gpu: 'Intel GMA X4500',
        ram: '4GB',
        storage1: '160GB',
        storage2: '',
        OS: 'Windows7',
        price: '82.29 EU'
      },
      { 
        id: 12,
        manufacturer: 'Hp',
        name: 'Lenovo M58e MT E7500',
        model: 'RD6803W7',
        cpu: 'Intel Core 2 Duo E7500 2.93GHz ',
        gpu: 'Intel GMA X4500',
        ram: '4GB',
        storage1: '160GB',
        storage2: '',
        OS: 'Windows7',
        price: '82.29 EU'
      },
      { 
        id: 13,
        manufacturer: 'Hp',
        name: 'Lenovo M58e MT E7500',
        model: 'RD6803W7',
        cpu: 'Intel Core 2 Duo E7500 2.93GHz ',
        gpu: 'Intel GMA X4500',
        ram: '4GB',
        storage1: '160GB',
        storage2: '',
        OS: 'Windows7',
        price: '82.29 EU'
      },
      { 
        id: 14,
        manufacturer: 'Hp',
        name: 'Lenovo M58e MT E7500',
        model: 'RD6803W7',
        cpu: 'Intel Core 2 Duo E7500 2.93GHz ',
        gpu: 'Intel GMA X4500',
        ram: '4GB',
        storage1: '160GB',
        storage2: '',
        OS: 'Windows7',
        price: '82.29 EU'
      },
      { 
        id: 15,
        manufacturer: 'Asus',
        name: 'Lenovo M58e MT E7500',
        model: 'RD6803W7',
        cpu: 'Intel Core 2 Duo E7500 2.93GHz ',
        gpu: 'Intel GMA X4500',
        ram: '4GB',
        storage1: '160GB',
        storage2: '',
        OS: 'Windows7',
        price: '82.29 EU'
      },
      { 
        id: 16,
        manufacturer: 'Asus',
        name: 'Lenovo M58e MT E7500',
        model: 'RD6803W7',
        cpu: 'Intel Core 2 Duo E7500 2.93GHz ',
        gpu: 'Intel GMA X4500',
        ram: '4GB',
        storage1: '160GB',
        storage2: '',
        OS: 'Windows7',
        price: '82.29 EU'
      },
      { 
        id: 17,
        manufacturer: 'Asus',
        name: 'Lenovo M58e MT E7500',
        model: 'RD6803W7',
        cpu: 'Intel Core 2 Duo E7500 2.93GHz ',
        gpu: 'Intel GMA X4500',
        ram: '4GB',
        storage1: '160GB',
        storage2: '',
        OS: 'Windows7',
        price: '82.29 EU'
      },
      { 
        id: 18,
        manufacturer: 'Asus',
        name: 'Lenovo M58e MT E7500',
        model: 'RD6803W7',
        cpu: 'Intel Core 2 Duo E7500 2.93GHz ',
        gpu: 'Intel GMA X4500',
        ram: '4GB',
        storage1: '160GB',
        storage2: '',
        OS: 'Windows7',
        price: '82.29 EU'
      },
      { 
        id: 19,
        manufacturer: 'Asus',
        name: 'Lenovo M58e MT E7500',
        model: 'RD6803W7',
        cpu: 'Intel Core 2 Duo E7500 2.93GHz ',
        gpu: 'Intel GMA X4500',
        ram: '4GB',
        storage1: '160GB',
        storage2: '',
        OS: 'Windows7',
        price: '82.29 EU'
      },
    ],
    desktopsCopy: [ 
      {
        id: 0,
        manufacturer: 'Lenovo',
        name: 'Lenovo M58e MT E7500',
        model: 'RD6803W7',
        cpu: 'Intel Core 2 Duo E7500 2.93GHz ',
        gpu: 'Intel GMA X4500',
        ram: '4GB',
        storage1: '160GB SSD',
        storage2: '',
        OS: 'Windows 7',
        price: '82.29 EU',
        imgLoc: 'http://www.skytech.lt/images/xsmall/6/2557106.png'
      },
      { 
        id: 1,
        manufacturer: 'Lenovo',
        name: 'Lenovo M58e MT E7500',
        model: 'RD6788',
        cpu: 'Intel Core 2 Duo E7500 2.93GHz ',
        gpu: 'GT1030 2GB',
        ram: '4GB',
        storage1: '500GB HDD',
        storage2: '',
        OS: 'Windows 10 pro',
        price: '191.39 EU ',
        imgLoc: 'http://www.skytech.lt/images/xsmall/6/2557106.png'
      },
      { 
        id: 2,
        manufacturer: 'Lenovo',
        name: 'Lenovo ThinkCentre M630e',
        model: '10YM0008MX',
        cpu: 'Intel Core i3, i3-8145U',
        gpu: 'Intel GMA X4500',
        ram: '4GB',
        storage1: '128GB SSD',
        storage2: '',
        OS: 'Windows 10',
        price: '82.29 EU',
        imgLoc: 'http://www.skytech.lt/images/xsmall/9/2304909.png'
      },
      { 
        id: 3,
        manufacturer: 'Lenovo',
        name: 'Lenovo Essential V530s-07ICR',
        model: '11BM008FMX',
        cpu: 'i3, i3-9100',
        gpu: 'Intel UHD',
        ram: '8GB',
        storage1: '128GB SSD',
        storage2: '',
        OS: 'Windows 10 pro',
        price: '571 EU',
        imgLoc: 'http://www.skytech.lt/images/medium/50/2525350.png'
      },
      { 
        id: 4,
        manufacturer: 'Lenovo',
        name: 'Lenovo ThinkCentre M720s SFF',
        model: '10ST007EMX',
        cpu: 'i5, i5-9400',
        gpu: 'Intel UHD',
        ram: '8GB',
        storage1: '256GB SSD',
        storage2: '',
        OS: 'Windows 10 pro',
        price: '82.29 EU'
      },
      { 
        id: 5,
        manufacturer: 'Dell',
        name: 'Lenovo M58e MT E7500',
        model: 'RD6803W7',
        cpu: 'Intel Core 2 Duo E7500 2.93GHz ',
        gpu: 'Intel GMA X4500',
        ram: '4GB',
        storage1: '160GB',
        storage2: '',
        OS: 'Windows7',
        price: '82.29 EU'
      },
      { 
        id: 6,
        manufacturer: 'Dell',
        name: 'Lenovo M58e MT E7500',
        model: 'RD6803W7',
        cpu: 'Intel Core 2 Duo E7500 2.93GHz ',
        gpu: 'Intel GMA X4500',
        ram: '4GB',
        storage1: '160GB',
        storage2: '',
        OS: 'Windows7',
        price: '82.29 EU'
      },
      { 
        id: 7,
        manufacturer: 'Dell',
        name: 'Lenovo M58e MT E7500',
        model: 'RD6803W7',
        cpu: 'Intel Core 2 Duo E7500 2.93GHz ',
        gpu: 'Intel GMA X4500',
        ram: '4GB',
        storage1: '160GB',
        storage2: '',
        OS: 'Windows7',
        price: '82.29 EU'
      },
      { 
        id: 8,
        manufacturer: 'Dell',
        name: 'Lenovo M58e MT E7500',
        model: 'RD6803W7',
        cpu: 'Intel Core 2 Duo E7500 2.93GHz ',
        gpu: 'Intel GMA X4500',
        ram: '4GB',
        storage1: '160GB',
        storage2: '',
        OS: 'Windows7',
        price: '82.29 EU'
      },
      { 
        id: 9,
        manufacturer: 'Dell',
        name: 'Lenovo M58e MT E7500',
        model: 'RD6803W7',
        cpu: 'Intel Core 2 Duo E7500 2.93GHz ',
        gpu: 'Intel GMA X4500',
        ram: '4GB',
        storage1: '160GB',
        storage2: '',
        OS: 'Windows7',
        price: '82.29 EU'
      },
      { 
        id: 10,
        manufacturer: 'Hp',
        name: 'Lenovo M58e MT E7500',
        model: 'RD6803W7',
        cpu: 'Intel Core 2 Duo E7500 2.93GHz ',
        gpu: 'Intel GMA X4500',
        ram: '4GB',
        storage1: '160GB',
        storage2: '',
        OS: 'Windows7',
        price: '82.29 EU'
      },
      { 
        id: 11,
        manufacturer: 'Hp',
        name: 'Lenovo M58e MT E7500',
        model: 'RD6803W7',
        cpu: 'Intel Core 2 Duo E7500 2.93GHz ',
        gpu: 'Intel GMA X4500',
        ram: '4GB',
        storage1: '160GB',
        storage2: '',
        OS: 'Windows7',
        price: '82.29 EU'
      },
      { 
        id: 12,
        manufacturer: 'Hp',
        name: 'Lenovo M58e MT E7500',
        model: 'RD6803W7',
        cpu: 'Intel Core 2 Duo E7500 2.93GHz ',
        gpu: 'Intel GMA X4500',
        ram: '4GB',
        storage1: '160GB',
        storage2: '',
        OS: 'Windows7',
        price: '82.29 EU'
      },
      { 
        id: 13,
        manufacturer: 'Hp',
        name: 'Lenovo M58e MT E7500',
        model: 'RD6803W7',
        cpu: 'Intel Core 2 Duo E7500 2.93GHz ',
        gpu: 'Intel GMA X4500',
        ram: '4GB',
        storage1: '160GB',
        storage2: '',
        OS: 'Windows7',
        price: '82.29 EU'
      },
      { 
        id: 14,
        manufacturer: 'Hp',
        name: 'Lenovo M58e MT E7500',
        model: 'RD6803W7',
        cpu: 'Intel Core 2 Duo E7500 2.93GHz ',
        gpu: 'Intel GMA X4500',
        ram: '4GB',
        storage1: '160GB',
        storage2: '',
        OS: 'Windows7',
        price: '82.29 EU'
      },
      { 
        id: 15,
        manufacturer: 'Asus',
        name: 'Lenovo M58e MT E7500',
        model: 'RD6803W7',
        cpu: 'Intel Core 2 Duo E7500 2.93GHz ',
        gpu: 'Intel GMA X4500',
        ram: '4GB',
        storage1: '160GB',
        storage2: '',
        OS: 'Windows7',
        price: '82.29 EU'
      },
      { 
        id: 16,
        manufacturer: 'Asus',
        name: 'Lenovo M58e MT E7500',
        model: 'RD6803W7',
        cpu: 'Intel Core 2 Duo E7500 2.93GHz ',
        gpu: 'Intel GMA X4500',
        ram: '4GB',
        storage1: '160GB',
        storage2: '',
        OS: 'Windows7',
        price: '82.29 EU'
      },
      { 
        id: 17,
        manufacturer: 'Asus',
        name: 'Lenovo M58e MT E7500',
        model: 'RD6803W7',
        cpu: 'Intel Core 2 Duo E7500 2.93GHz ',
        gpu: 'Intel GMA X4500',
        ram: '4GB',
        storage1: '160GB',
        storage2: '',
        OS: 'Windows7',
        price: '82.29 EU'
      },
      { 
        id: 18,
        manufacturer: 'Asus',
        name: 'Lenovo M58e MT E7500',
        model: 'RD6803W7',
        cpu: 'Intel Core 2 Duo E7500 2.93GHz ',
        gpu: 'Intel GMA X4500',
        ram: '4GB',
        storage1: '160GB',
        storage2: '',
        OS: 'Windows7',
        price: '82.29 EU'
      },
      { 
        id: 19,
        manufacturer: 'Asus',
        name: 'Lenovo M58e MT E7500',
        model: 'RD6803W7',
        cpu: 'Intel Core 2 Duo E7500 2.93GHz ',
        gpu: 'Intel GMA X4500',
        ram: '4GB',
        storage1: '160GB',
        storage2: '',
        OS: 'Windows7',
        price: '82.29 EU'
      },
    ]
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})

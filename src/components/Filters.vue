<template>
  <div class="filters">
      <div class="manufaturer">
        <form>
              <h2>Manufaturer</h2>
              <checkbox v-for="manListEl of manufacturerList" :key="manListEl.id" 
                :value="manListEl"
                v-model="manufacturer"
              >
                {{ manListEl }}
              </checkbox>
              <h2>Cpu</h2>
              <checkbox v-for="cpuListEl of cpuList" :key="cpuListEl.id" 
                :value="cpuListEl"
                v-model="cpu"
              >
                {{ cpuListEl }}
              </checkbox>
              <h2>Gpu</h2>
              <checkbox v-for="gpuListEl of gpuList" :key="gpuListEl.id" 
                :value="gpuListEl"
                v-model="gpu"
              >
                {{ gpuListEl }}
              </checkbox>
              <h2>Ram</h2>
              <checkbox v-for="ramListEl of ramList" :key="ramListEl.id" 
                :value="ramListEl"
                v-model="ram"
              >
                {{ ramListEl }}
              </checkbox>
              <b-button @click.prevent="selectedManufacturer()" variant="primary">Filter</b-button>
        </form>
      </div>
  </div>
</template>

<script>

export default {
    data () {
        return {
          filterResult: [],
            manufacturer: [],
            cpu: [],
            gpu: [],
            ram: [],

            filterArr: {
              manufacturer: [],
              cpu: [],
              gpu: [],
              ram: []
            },

            // for displaying manufacturers
            manufacturerList: [],
            cpuList: [],
            gpuList: [],
            ramList: []
        }
    },
    methods: {
      addToFilterArr:function (selectedToAdd, filterArrCategory) {
        selectedToAdd.forEach(value => {
          filterArrCategory.push(value)
        })
      },
      resetFilterArr:function () {
        Object.keys(this.filterArr)
          .forEach(key => {
            this.filterArr[key] = []
          })
      },
      selectedManufacturer:function () {
        this.$store.state.desktops = this.$store.state.desktopsCopy

        this.resetFilterArr()

        // add selected items to filter arr. Also, make function, what will add selected conditions to filter arr***
        this.addToFilterArr(this.manufacturer, this.filterArr.manufacturer)
        this.addToFilterArr(this.cpu, this.filterArr.cpu)
        this.addToFilterArr(this.gpu, this.filterArr.gpu)
        this.addToFilterArr(this.ram, this.filterArr.ram)

         Object.keys(this.filterArr).forEach(filterKey => {
           if (this.filterArr[filterKey].length > 0) {
             this.$store.state.desktops = this.$store.state.desktops
              .filter(obj => {
                if (!Object.keys(obj).some(objKey => objKey == filterKey) || !this.filterArr[filterKey].some(value => value == obj[filterKey])) {
                  return false
                } else {
                  return this.filterArr[filterKey].some(value => value == obj[filterKey])
                }
              })
           }
         })
      },
      loadManufacturerList:function (data) {
        this.manufacturerList = [...new Set(data.map(dataObj => dataObj.manufacturer))]
      },
      loadCpuList:function (data) {
        this.cpuList = [...new Set(data.map(dataObj => dataObj.cpu))]
      },
      loadGpuList:function (data) {
        this.gpuList = [...new Set(data.map(dataObj => dataObj.gpu))]
      },
      loadRamList:function (data) {
        this.ramList = [...new Set(data.map(dataObj => dataObj.ram))]
      }
    },

    mounted () {
      this.loadManufacturerList(this.$store.state.desktops)
      this.loadCpuList(this.$store.state.desktops)
      this.loadGpuList(this.$store.state.desktops)
      this.loadRamList(this.$store.state.desktops)
    }
}
</script>

<style scoped>
    form {  
        background-color: #352e53;
        color: #fff;
        text-align: left;
        padding: 20px;
    }
</style>
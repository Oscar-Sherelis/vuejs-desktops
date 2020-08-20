<template>
  <div class="home">
    <SearchPc/>
    <SortPc/>
    <main>
    <Filters/>
    <div class="container">
        <div class="desktops">
                <paginate
                name="alldesktops"
                :list="this.$store.state.desktops"
                :per="10" 
                for="alldesktops"
                :show-step-links="true"
                >
          <div class="desktop" v-for="desktop in paginated('alldesktops')" :key="desktop.id">
              <img src= '../assets/desktop.webp'>
              <h4>{{ desktop.manufacturer }}</h4>
              <p>Model: {{ desktop.model }}</p>
              <div class="description">
                 <div class="description_item">
                   <img src= '../assets/cpu.svg'> <span>{{ desktop.cpu }}</span>
                 </div>
                  <div class="description_item">
                   <img src= '../assets/graphics-card.svg'> {{ desktop.gpu}}
                  </div>
                  <div class="description_item">
                   <img src= '../assets/hdd.svg'> {{ desktop.storage1}}
                  </div>
                  <div class="description_item">
                   <img src= '../assets/ram.svg'> {{ desktop.ram }}
                  </div>
              </div>
              <p>Price: <span class="price"> {{ desktop.price }} </span></p>
              <b-button :value="desktop.id" variant="success" @click.prevent="toCart(desktop.id)">Add to chart</b-button>
          </div>
          </paginate>
          <div id="pagination">
          <paginate-links
            for="alldesktops"
            :show-step-links="true"
          ></paginate-links>
          </div>
        </div>
    </div>
    </main>
  </div>
</template>

<script>
import Filters from '@/components/Filters'
import SearchPc from '@/components/SearchPc'
import SortPc from '@/components/SortPc'

export default {
  components: {
    Filters,
    SearchPc,
    SortPc
  },
  data () {
    return {
      paginate: ['alldesktops']
    }
  },
  methods: {
    toCart:function (selectedId) {
      if (this.$store.state.isBought === true) {
               this.$store.state.boughtDesktops.pop()
               this.$store.state.isBought = false
            }
      this.$store.state.desktops.forEach(obj => {
              if (Object.values(obj).some(value => value === selectedId)) {
                this.$store.state.boughtDesktops.push(obj)
              }
            })
            this.$store.state.boughtItems++
    },
    resetCart:function () {
    this.$store.state.isBought = false
    this.$store.state.boughtDesktops = []
    this.$store.state.boughtItems = 0
    }
  },
  mounted () {
  }
}
</script>
<style scoped>
 main {
   display: flex;
   background-color: #383950;
 }
 .container {
   margin: 0 auto;
 }
 .desktops {
   padding-top: 20px;
 }
 .desktops ul {
   display: grid;
   grid-gap: 40px;
   grid-template-columns: auto auto auto auto auto;
 }
 .desktop {
   text-align: center;
   position: relative;
   cursor: pointer;
   color: #fff;
 }
 .desktop img {
   width: 100px;
   height: 100px;
   display: block;
   margin: 0 auto;
 }
.description img{
   width: 40px;
   height: 40px;
   margin: 0 10px 0 0;
 }
 .description_item {
   display: flex;
   align-items: center;
   margin-bottom: 10px;
 }
.price {
  font-weight: bold;
}
 #pagination ul {
   display: flex;
   margin: 0 auto;
   width: 120px;
   justify-content: space-between;
   list-style-type: none;
   cursor: pointer;
   color: #fff;
 }

@media screen and (max-width: 950px) {
  .desktops ul {
  grid-gap: 20px;
  grid-template-columns: auto auto auto;
  }
 }

@media screen and (max-width: 670px) {
   .desktops ul {
   grid-gap: 10px;
   grid-template-columns: auto auto;
  }
}

@media screen and (max-width: 570px) {
  main {
    display: block;
  }
  .desktops ul {
   grid-gap: 5px;
   grid-template-columns: auto auto;
  }
 }
</style>

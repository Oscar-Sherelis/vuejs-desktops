<template>
  <div class="home">
    <SearchPc/>
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
              <span class="description">
                Cpu: {{ desktop.cpu }}
                Gpu: {{ desktop.gpu}}
                Storage: {{ desktop.storage1}}
                Ram: {{ desktop.ram }}
              </span>
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
export default {
  components: {
    Filters,
    SearchPc
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
   background-color: #262430;
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
 .desktop .description {
   visibility: hidden;
   position: absolute;
   z-index: 1;
   top: -20%;
   left: 0;
   right: 0;
   width: 150px;
   background-color: rgba(40, 44, 52, 0.8);
   padding: 5px;
   border-radius: 6px;
   color: #fff;
 }
 .desktop:hover .description {
   visibility: visible;
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

 @media screen and (max-width: 800px) {
    .desktops ul {
   grid-gap: 20px;
   grid-template-columns: auto auto auto;
  }
 }

  @media screen and (max-width: 450px) {
  main {
    display: block;
  }
  .desktops ul {
   grid-gap: 10px;
   grid-template-columns: auto auto;
  }
 }
</style>

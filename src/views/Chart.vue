<template>
  <div class="bought-desktops">
    <div class="bought-desktops-container">
      <div v-if="this.$store.state.boughtDesktops.length === 0" class="added-desktops">
        <h2>Chart is empty</h2>
      </div>
      <b-table head-variant="dark" responsive v-else class="added-desktops" :fields="fields" :items="this.$store.state.boughtDesktops">
      </b-table>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      fields: ['name', 'model', 'cpu', 'gpu', 'ram', 'storage1', 'storage2', 'price'],
    }
  },
  methods: {
        countPrice:function () {
          if (this.$store.state.boughtDesktops.length > 0 && this.$store.state.isBought === false) {
              let sum = 0
              this.$store.state.boughtDesktops.forEach(obj => {
                let desktopPrice = obj.price.split(" ")
                sum += parseFloat(desktopPrice[0])
              })
              this.$store.state.boughtDesktops.push({
                id: '',
                manufacturer: '',
                name: '',
                model: '',
                cpu: '',
                gpu: '',
                ram: '',
                storage1: '',
                storage2: '',
                OS: '',
                price: sum + ' EU',
              })
              this.$store.state.isBought = true;
          }
        }
      },

      mounted () {
        this.countPrice()
      }
}
</script>

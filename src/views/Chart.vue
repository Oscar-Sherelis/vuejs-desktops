<template>
  <div class="bought-desktops">
    <div class="bought-desktops-container">
      <div v-if="this.$store.state.boughtDesktops.length === 0" class="added-desktops">
        <h2>Chart is empty</h2>
      </div>
      <b-table striped head-variant="dark" responsive v-else class="added-desktops" :fields="fields" :items="this.$store.state.boughtDesktops">
        <template v-slot:cell(price)="data">
          {{ data.item.price }} <div v-html="addDeleteButton(data.item.id)"></div>
        </template>
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
    addDeleteButton:function (objId) {
      let selectedId = this.$store.state.boughtDesktops.findIndex(obj => obj.id === objId)
          if (objId == '') {
            return ''
          }
          return `<button class="remove-desktop" :value="` + selectedId + `">Remove</button>`

        },
        deleteCartDesktop:function () {
          let buttons = document.querySelectorAll(".remove-desktop");

          for (let i = 0; i < buttons.length; i++) {
            buttons[i].addEventListener('click', e => {
              e.preventDefault();
              let index = buttons[i].getAttribute('value')
              this.$store.state.boughtDesktops.splice(Number(index), 1)
              this.$store.state.boughtItems--
              this.$store.state.boughtDesktops.pop()
              this.$store.state.isBought = false
              this.countPrice()
            })
          }
        },
        countPrice:function () {
          if (this.$store.state.boughtDesktops.length > 0 && this.$store.state.isBought === false) {
              let sum = 0
              this.$store.state.boughtDesktops.forEach(obj => {
                let desktopPrice = obj.price.split(" ")
                sum = Number(sum.toFixed(2)) + parseFloat(desktopPrice[0])
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
        this.deleteCartDesktop()
      }
}
</script>

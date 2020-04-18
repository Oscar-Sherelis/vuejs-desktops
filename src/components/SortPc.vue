<template>
  <div class="sort">
    <b-dropdown id="dropdown-left" text="Sort by" variant="primary">
    <b-dropdown-item @click.prevent="sortPriceAscending()" href="#">From lowest price</b-dropdown-item>
    <b-dropdown-item @click.prevent="sortPriceDescending()" href="#">From highest price</b-dropdown-item>
    </b-dropdown>
  </div>
</template>

<script>
export default {
  methods: {
    sortPriceAscending:function () {
      this.$store.state.desktops = this.$store.state.desktops.sort((objA, objB) => {
        let objAPrice = objA.price.split(' ')
        let objBPrice = objB.price.split(' ')

        let resultA = parseFloat(objAPrice[0])
        let resultB = parseFloat(objBPrice[0])
        return resultA - resultB
      })
    },
    sortPriceDescending:function () {
      this.$store.state.desktops = this.$store.state.desktops.sort((objA, objB) => {
        let objAPrice = objA.price.split(' ')
        let objBPrice = objB.price.split(' ')

        let resultA = parseFloat(objAPrice[0])
        let resultB = parseFloat(objBPrice[0])
        return resultB - resultA
      })
    }
  }

}
</script>
<template>
  <div class="search-pc">
    <b-form-group>
      <b-form-input
        v-model="searchValue"
        placeholder="Enter keyword"
        type="search"
      ></b-form-input>
       <b-button @click.prevent="results()" variant="outline-primary">Search</b-button>
    </b-form-group>
  </div>
</template>

<script>
export default {
    data () {
        return {
            searchValue: ''
        }
    },
    methods: {
        results:function () {
          this.$store.state.desktops = this.$store.state.desktopsCopy
          if(this.searchValue.trim() !== '') {
          let searchResult = []
            this.$store.state.desktops.forEach(obj => {
              if (Object.values(obj).some(value => value.toString().toLowerCase() == this.searchValue.toLowerCase())) {
                searchResult.push(obj)
              }
            })
            this.$store.state.desktops = searchResult
        }
      }
    }
}
</script>

<style>

.bv-no-focus-ring {
    width: 50%;
    margin: 0 auto;
    display: flex;
}

@media screen and (max-width: 1100px) {
  .bv-no-focus-ring {
    width: 95%;
  }
}

</style>
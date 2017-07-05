<template>
  <ul>
    <li v-for="item in items" :class="{empty: item.stock < 1}">
      <item
        :item="item"
        @increase="increase(item)"
        @decrease="decrease(item)"
      >
      </item>
    </li>
  </ul>
</template>

<style scoped>
  .empty {
    color: red
  }
</style>

<script>
  import Item from './Item'

  export default {
    name: 'List',
    components: {
      Item
    },
    data () {
      return {
        items: [
          {name: 'Tee-shirt', stock: 10},
          {name: 'Polo', stock: 0}
        ]
      }
    },
    methods: {
      decrease (item) {
        item.stock--
      },
      increase (item) {
        item.stock++
      }
    }
  }
</script>

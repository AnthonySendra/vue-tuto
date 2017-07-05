<template>
  <ul>
    <li v-for="(item, index) in $store.state.documents.items" :class="{empty: item.stock < 1}">
      <item
        :item="item"
        @increase="increase(index)"
        @decrease="decrease(index)"
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
  import {DECREASE, INCREASE} from '../store/modules/documents/mutation-types'

  export default {
    name: 'List',
    components: {
      Item
    },
    methods: {
      decrease (index) {
        this.$store.commit(DECREASE, {index})
      },
      increase (index) {
        this.$store.commit(INCREASE, {index})
      }
    }
  }
</script>

<template>
  <ul>
    <li v-for="item in items" :class="{empty: item.stock < 1}">
      <p>
        <span @click="decrease(item)">-</span> {{ item.name }} : {{ item.stock }} <span @click="increase(item)">+</span>
      </p>
    </li>
  </ul>
</template>

<style scoped>
  .empty {
    color: red
  }
</style>

<script>
  export default {
    name: 'List',
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
        item.stock = item.stock - 1
      },
      increase (item) {
        item.stock = item.stock + 1
      }
    }
  }
</script>

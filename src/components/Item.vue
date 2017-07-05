<template>
  <p>
    <span @click="decrease">-</span> {{ item.name }} : {{ item.stock }} <span @click="increase">+</span>
  </p>
</template>

<script>
  export default {
    name: 'Item',
    props: ['item'],
    methods: {
      decrease () {
        this.$emit('decrease')
      },
      increase () {
        this.$emit('increase')
      }
    }
  }
</script>

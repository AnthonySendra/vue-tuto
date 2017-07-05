<template>
  <p>
    <span @click="decrease">-</span>
    <router-link :to="{name: 'DocumentPage', params: { id: index }}">{{ item.name }}</router-link> : {{ item.stock }}
    <span @click="increase">+</span>
  </p>
</template>

<script>
  export default {
    name: 'Item',
    props: ['item', 'index'],
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

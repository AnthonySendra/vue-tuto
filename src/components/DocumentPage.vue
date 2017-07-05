<template>
  <div>
    <p>{{ item.name }}</p>
    <p>{{ item.stock }}</p>
    <button @click="resetStock">RESET</button>
    <router-link :to="{name: 'List'}">BACK TO LIST</router-link>
  </div>
</template>

<script>
  import {RESET} from '../store/modules/documents/mutation-types'

  export default {
    name: 'Document',
    methods: {
      resetStock () {
        this.$store.commit(RESET, {index: this.$route.params.id})
      }
    },
    computed: {
      item () {
        return this.$store.state.documents.items[this.$route.params.id]
      }
    }
  }
</script>

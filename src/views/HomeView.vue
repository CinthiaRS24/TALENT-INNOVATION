<template>
  <div>
    <p>Soy la vista home</p>
    <MyChat />
  </div>
  
</template>

<script>
import MyChat from '@/components/MyChat.vue'

  export default {
    name: 'HomeView',

    components: {
      MyChat
    },
  }
</script>

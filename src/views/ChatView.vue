<template>
    <div>
        <HeaderSection />
        <p>Soy el chat!</p>
    </div>
    
</template>

<script>
import HeaderSection from '@/components/HeaderSection.vue'

export default {
    name: 'ChatView',
    components: {
      HeaderSection
    },
}
</script>
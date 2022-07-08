<template>
    <div>
        <HeaderSection />
        <MyConversation />
        <MentorsSection />
        
    </div>
    
</template>

<script>
import HeaderSection from '@/components/HeaderSection.vue'
import MyConversation from '@/components/MyConversation.vue'
import MentorsSection from '@/components/MentorsSection.vue'

export default {
    name: 'ChatView',
    components: {
      HeaderSection, MyConversation, MentorsSection
    },
}
</script>
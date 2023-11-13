<template>
  <v-main class="pa-0 ma-0">
    <!-- Hero -->
    <heroVue class="my-md-15" />
    <!-- Hero -->
    <!-- social info -->
    <festSocial />
    <!-- social info -->
  </v-main>
</template>

<script>
import heroVue from "@/components/home/hero.vue";
import festSocial from "@/components/devfest/festSocial.vue";


export default {
  name: "HomePage",
  components: {
    heroVue,
    festSocial
  },
  data: () => ({
    
  }),
  created(){
    document.title = "GDG Lucknow";
  }
};
</script>

<template>
    <v-main class="pa-0 ma-0">
      <!-- Hero -->
      <heroVue class="my-md-5 my-sm-5" />
      <!-- Hero -->
  
      <!-- Overview -->
      <overviewVue />
      <!-- Overview -->
  
      <!-- Technologies -->
      <technologiesVue class="mt-10" />
      <!-- Technologies -->
  
      <!-- Sponsors -->
      <!-- <homesponsors class="mt-10" /> -->
      <!-- Sponsors -->
  
      <!-- Social -->
      <homeSocialVue class="my-10" />
      <!-- Social -->
    </v-main>
  </template>
  
  <script>
  import heroVue from "@/components/devfest/hero.vue";
  import overviewVue from "@/components/devfest/overview.vue";
  import technologiesVue from "@/components/devfest/technologies.vue";
//   import homesponsors from "@/components/devfest/homeSponsors.vue";
  import homeSocialVue from "@/components/devfest/festSocial.vue";
  
  export default {
    name: "HomePage",
    components: {
      heroVue,
      overviewVue,
      technologiesVue,
    //   homesponsors,
      homeSocialVue,
    },
    data() {
      return {
        isDialogueVisible: false,
      };
    },
    methods: {
      showDialogue() {
        this.isDialogueVisible = true;
      },
      closeDialogue() {
        this.isDialogueVisible = false;
      },
    },
    mounted() {
      setTimeout(() => {
        this.isDialogueVisible = true;
      }, 1000);
    },
  };
  </script>
  
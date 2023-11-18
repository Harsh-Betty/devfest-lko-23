<template>
  <v-main class="hero">
    <v-row justify="center" align-items="center">
      <v-col md="12" cols="12">
        <p class="google-font gdg-h1 mb-4 grey--text text--darken-4" style="font-size: 320%">
          Welcome to GDG Lucknow
        </p>
        <p class="google-font text--secondary" style="font-weight: 500; font-size: 18px">
          Google Developer Groups (GDGs) are for developers who are interested in Google's developer technology;
          everything from the Android, Chrome, Drive, and Google Cloud platforms, to product APIs like the Cast API, Maps
          API, and YouTube API.
          <br><br>
          A GDG can take many forms -- from just a few people getting together to watch our latest video, to large
          gatherings with demos and tech talks, to events like code sprints and hackathons. However, at the core, GDGs are
          focused on developers and technical content, and the core audience should be developers.
        </p>
      </v-col>
      <v-col md="12" cols="12" class="text-center">
        <img src="@/assets/img/lucknow_illustration.png" alt="Lucknow Illustration" class="hero-image" />
      </v-col>
    </v-row>
  </v-main>
</template>

<script>
export default {
  name: "HeroComponent",
  data: () => ({
    loading: true,
  }),
  methods: {
    load() {
      this.loading = false;
    },
  },
};
</script>

<style>
.hero-image {
  max-width: 80vw;
}</style>

<template>
    <v-container fluid class="my-0">
      <!-- Row 1 -->
      <v-row justify="center" align="center">
        <v-col md="12">
          <v-img
            max-height="380"
            style="border-radius: 15px"
            :src="require('@/assets/img/devfest23.png')"
          ></v-img>
        </v-col>
      </v-row>
      <!-- Row 1 -->
  
      <!-- Row 2 -->
      <v-row justify="center" align="center" class="my-md-10 my-4">
        <v-col md="8" cols="12" order-md="1" order-sm="2" class="py-md-10">
          <p
            class="google-font gdg-h1 mb-4 grey--text text--darken-4"
            style="font-size: 200%; line-height: 40px"
          >
            DevFest Lucknow 2023<br />
            <span style="color: #4285f4">{{ communityInfo.community_name }}</span>
          </p>
          <p class="google-font mt-3 mb-0" style="font-size: 19px">
            <v-icon>mdi-calendar-month</v-icon> {{ devfestInfo.date }}
          </p>
          <a href="https://maps.app.goo.gl/CaakTRDVfcxAPpHq7" style="text-decoration: none;">
          <p class="google-font mt-0" style="font-size: 19px">
            <v-icon>mdi-map-marker-outline</v-icon> {{ devfestInfo.location }}
          </p>
          </a>
          <p class="google-font mt-0" style="font-size: 19px">
            <v-icon>mdi-clock-time-eight-outline</v-icon> {{ devfestInfo.time }}
          </p>
          <p
            class="google-font text--secondary"
            style="font-weight: 500; font-size: 18px"
          >
            {{ devfestInfo.desc.short }}
          </p>
          <v-btn
          style="margin-top: 6px; height: 5rem; width: 15rem; font-size: 1.5rem;"
            dark
            depressed
            rounded
            color="#4285F4"
            :href="devfestInfo.registration.link"
            v-if="devfestInfo.registration.status == 1"
            target="_blank"
            >Book Tickets
          </v-btn>
  
        </v-col>
        
      </v-row>
      <!-- Row 2 -->
  
    </v-container>
  </template>
  
  <script>
  // import {ref} from 'vue';
  import devfestJSON from "@/assets/data/devfests.json";
  import communityJSON from "@/assets/data/community.json";
  // import PopupTicket from './PopupTicket.vue';
  export default {
    name: "HeroComponent",
    data: () => ({
      loading: true,
      communityInfo: communityJSON,
      devfestInfo: devfestJSON,
      devfestCommunity: devfestJSON,
    }),
    methods: {},
  };
  </script>
  
  <style>
  </style>
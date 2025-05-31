<template>
  <div class="flex h-screen w-screen overflow-hidden">
    <RouterLink
      v-for="(section, index) in sections"
      :to="section.link"
      :key="index"
      class="h-full transition-[width] duration-700 ease-in-out overflow-hidden relative cursor-pointer"
      :class="hovered === index ? 'w-[40%]' : hovered !== null ? 'w-[20%]' : 'w-1/4'"
      @mouseenter="hovered = index"
      @mouseleave="hovered = null"
    >
      <img
        :src="section.image"
        alt="section image"
        class="absolute inset-0 w-full h-full object-cover transition-all duration-700 ease-out"
        :class="hovered !== null && hovered !== index ? 'contrast-150 grayscale blur-sm' : ''"
      />
      <div
        :class="[
          'relative z-10 flex items-center justify-center h-full text-white font-extrabold drop-shadow-md transition-all duration-500 ease-in-out',
          hovered === index ? 'text-4xl' : 'text-l'
        ]"
      >
        <h1>{{ section.text }}</h1>
      </div>
    </RouterLink>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { RouterLink } from 'vue-router';

import imgPresentation from '@/assets/Landing/LandingPresentation.webp';
import imgProjects from '@/assets/Landing/LandingProjects.webp';
import imgParcours from '@/assets/Landing/LandingParcours.webp';
import imgContact from '@/assets/Landing/LandingContact.webp';

const hovered = ref(null);
const sections = [
  { text: 'Présentation', image: imgPresentation, link: '/presentation' },
  { text: 'Projets', image: imgProjects, link: '/projets' },
  { text: 'Parcours', image: imgParcours, link: '/parcours' },
  { text: 'Contact', image: imgContact, link: '/contact' },
];
</script>

<style scoped>
</style>
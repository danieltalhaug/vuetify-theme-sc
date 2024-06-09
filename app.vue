<script setup lang="ts">
const components = [
  {
    title: 'Button',
    el: 'v-btn',
    variants: ['elevated', 'flat', 'tonal', 'outlined', 'text', 'plain'],
  },
  {
    title: 'Chips',
    el: 'v-chip',
    variants: ['elevated', 'flat', 'tonal', 'outlined', 'text', 'plain'],
  }
];
const colors = ['primary', 'success', 'warning', 'error', 'info'];
</script>

<template>
  <NuxtLayout>
    <v-app>
      <v-container>
        <v-card
          v-for="component in components"
          :key="component.el"
          :title="component.title"
          class="mt-8"
        >
          <v-card-text class="d-flex flex-column ga-6">
            <section
              v-for="color in colors"
              :key="color"
              class="d-flex flex-column flex-md-row justify-space-between align-center ga-4"
            >
              <template v-if="component.el === 'v-btn'" >
                <v-btn
                  v-for="variant in component.variants"
                  :key="variant"
                  :color="color"
                  :variant="variant"
                  :text="variant"
                />
              </template>

              <template v-if="component.el === 'v-chip'" >
                <v-chip
                  v-for="variant in component.variants"
                  :key="variant"
                  :color="color"
                  :variant="variant"
                  :text="variant"
                />
              </template>
            </section>
          </v-card-text>
        </v-card>
      </v-container>
    </v-app>
  </NuxtLayout>
</template>

<template>
  <div class="min-h-screen bg-gray-50">
    <nav class="bg-white shadow-sm">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex justify-between h-16">
          <div class="flex">
            <div class="flex-shrink-0 flex items-center">
              <span class="text-xl font-semibold text-gray-900">Ksero</span>
            </div>
            <div class="hidden sm:ml-6 sm:flex sm:space-x-8">
              <router-link
                v-for="item in navigation"
                :key="item.name"
                :to="item.href"
                class="inline-flex items-center px-1 pt-1 text-sm font-medium text-gray-900"
              >
                {{ item.name }}
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </nav>

    <router-view></router-view>
  </div>
</template>

<script setup lang="ts">
import { RouterLink } from 'vue-router'

const navigation = [
  { name: 'Inicio', href: '/' },
  { name: 'Menú', href: '/menu' },
  { name: 'Planes', href: '/planes' },
  { name: 'Contacto', href: '/contacto' }
]
</script>
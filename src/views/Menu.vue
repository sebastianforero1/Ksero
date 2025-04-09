<template>
  <div class="bg-white py-12">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center">
        <h2 class="text-3xl font-extrabold text-gray-900 sm:text-4xl">
          Nuestro Menú Semanal
        </h2>
        <p class="mt-4 text-xl text-gray-500">
          Platos preparados con ingredientes frescos y locales
        </p>
      </div>

      <div class="mt-12">
        <div class="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          <div v-for="meal in meals" :key="meal.name" class="bg-white overflow-hidden shadow rounded-lg">
            <div class="aspect-w-16 aspect-h-9">
              <img :src="meal.image" :alt="meal.name" class="w-full h-48 object-cover" />
            </div>
            <div class="p-6">
              <div class="flex items-center">
                <div class="flex-shrink-0">
                  <div class="h-12 w-12 bg-green-100 rounded-md flex items-center justify-center">
                    <component :is="meal.icon" class="h-6 w-6 text-green-600" />
                  </div>
                </div>
                <div class="ml-4">
                  <h3 class="text-lg font-medium text-gray-900">{{ meal.name }}</h3>
                  <p class="mt-1 text-sm text-gray-500">{{ meal.description }}</p>
                </div>
              </div>
              <div class="mt-4">
                <span class="text-lg font-semibold text-green-600">${{ meal.price }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { FireIcon, SparklesIcon, HeartIcon } from '@heroicons/vue/24/outline'

const meals = [
  {
    name: 'Pollo al Curry con Arroz Integral',
    description: 'Pechuga de pollo en salsa curry, servido con arroz integral y vegetales salteados',
    price: '16.000',
    icon: FireIcon,
    image: '/src/assets/pollocurry.png'
  },
  {
    name: 'Bowl de Quinoa y Aguacate',
    description: 'Bowl vegetariano con quinoa, aguacate, garbanzos y vegetales asados',
    price: '15.000',
    icon: HeartIcon,
    image: '/src/assets/bowlquinoa.png'
  },
  {
    name: 'Salmón al Horno',
    description: 'Filete de salmón al horno con puré de papa y espárragos',
    price: '19.000',
    icon: SparklesIcon,
    image: '/src/assets/salmon.png'
  },
  {
    name: 'Pasta Integral con Albóndigas',
    description: 'Pasta integral con albóndigas caseras en salsa de tomate',
    price: '16.000',
    icon: FireIcon,
    image: '/src/assets/pastaalbondigas.png'
  },
  {
    name: 'Ensalada César con Pollo',
    description: 'Lechuga romana, pollo a la parrilla, crutones y aderezo césar',
    price: '15.000',
    icon: HeartIcon,
    image: '/src/assets/ensaladacesar.png'
  },
  {
    name: 'Wrap de Pavo y Aguacate',
    description: 'Tortilla integral con pavo, aguacate, lechuga y tomate',
    price: '12.000',
    icon: SparklesIcon,
    image: '/src/assets/wrapdepavo.png'
  }
]
</script>
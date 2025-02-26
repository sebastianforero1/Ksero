<template>
  <div class="relative bg-white overflow-hidden">
    <div class="max-w-7xl mx-auto">
      <div class="relative z-10 pb-8 bg-white sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
        <main class="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
          <div class="sm:text-center lg:text-left">
            <h1 class="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
              <span class="block">Cocinamos tu</span>
              <span class="block text-green-600">tranquilidad</span>
            </h1>
            <p class="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
              Platos caseros, saludables y deliciosos, preparados en paquetes diarios o semanales para facilitar tu alimentación en el Valle de Aburrá.
            </p>
            <div class="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
              <div class="rounded-md shadow">
                <router-link
                  to="/planes"
                  class="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-green-600 hover:bg-green-700 md:py-4 md:text-lg md:px-10"
                >
                  Ver Planes
                </router-link>
              </div>
              <div class="mt-3 sm:mt-0 sm:ml-3">
                <router-link
                  to="/menu"
                  class="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-green-700 bg-green-100 hover:bg-green-200 md:py-4 md:text-lg md:px-10"
                >
                  Ver Menú
                </router-link>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  </div>

  <div class="py-12 bg-white">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="lg:text-center">
        <h2 class="text-base text-green-600 font-semibold tracking-wide uppercase">Beneficios</h2>
        <p class="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
          ¿Por qué elegir Ksero?
        </p>
      </div>

      <div class="mt-10">
        <div class="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
          <div v-for="feature in features" :key="feature.name" class="relative">
            <div class="absolute flex items-center justify-center h-12 w-12 rounded-md bg-green-500 text-white">
              <component :is="feature.icon" class="h-6 w-6" aria-hidden="true" />
            </div>
            <p class="ml-16 text-lg leading-6 font-medium text-gray-900">{{ feature.name }}</p>
            <p class="mt-2 ml-16 text-base text-gray-500">{{ feature.description }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { 
  HeartIcon, 
  ClockIcon, 
  SparklesIcon, 
  TruckIcon 
} from '@heroicons/vue/24/outline'

const features = [
  {
    name: 'Comida Saludable',
    description: 'Platos nutritivos y balanceados, preparados con ingredientes frescos y de alta calidad.',
    icon: HeartIcon,
  },
  {
    name: 'Ahorra Tiempo',
    description: 'Olvídate de cocinar y planificar tus comidas. Nosotros nos encargamos de todo.',
    icon: ClockIcon,
  },
  {
    name: 'Variedad de Menús',
    description: 'Diferentes opciones para todos los gustos y necesidades dietéticas.',
    icon: SparklesIcon,
  },
  {
    name: 'Entrega a Domicilio',
    description: 'Llevamos tus platos frescos directamente a tu puerta en el Valle de Aburrá.',
    icon: TruckIcon,
  },
]
</script>
<template>
    <div class="bg-white py-12">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center">
          <h2 class="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Planes de Alimentación
          </h2>
          <p class="mt-4 text-xl text-gray-500">
            Elige el plan que mejor se adapte a tus necesidades
          </p>
        </div>
  
        <div class="mt-12 space-y-4 sm:mt-16 sm:space-y-0 sm:grid sm:grid-cols-2 sm:gap-6 lg:max-w-4xl lg:mx-auto xl:max-w-none xl:grid-cols-3">
          <div v-for="plan in plans" :key="plan.name" class="border border-gray-200 rounded-lg shadow-sm divide-y divide-gray-200">
            <div class="p-6">
              <h3 class="text-lg font-medium text-gray-900">{{ plan.name }}</h3>
              <p class="mt-4 text-sm text-gray-500">{{ plan.description }}</p>
              <p class="mt-8">
                <span class="text-4xl font-extrabold text-gray-900">${{ plan.price }}</span>
                <span class="text-base font-medium text-gray-500">/semana</span>
              </p>
              <ul class="mt-6 space-y-4">
                <li v-for="feature in plan.features" :key="feature" class="flex">
                  <CheckIcon class="flex-shrink-0 h-6 w-6 text-green-500" />
                  <span class="ml-3 text-sm text-gray-500">{{ feature }}</span>
                </li>
              </ul>
              <a href="#" class="mt-8 block w-full bg-green-600 border border-transparent rounded-md py-2 text-sm font-semibold text-white text-center hover:bg-green-700">
                Comenzar plan
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script setup lang="ts">
  import { CheckIcon } from '@heroicons/vue/24/outline'
  
  const plans = [
    {
      name: 'Plan Básico',
      price: '75.000',
      description: 'Perfecto para empezar con una alimentación saludable',
      features: [
        '5 almuerzos por semana',
        'Menú variado',
        'Entrega diaria',
        'Contenedores biodegradables'
      ]
    },
    {
      name: 'Plan Completo',
      price: '130.000',
      description: 'La solución completa para tu alimentación diaria',
      features: [
        '5 almuerzos y cenas por semana',
        'Menú personalizable',
        'Entrega diaria',
        'Contenedores biodegradables',
        'Seguimiento nutricional'
      ]
    },
    {
      name: 'Plan Familiar',
      price: '250.000',
      description: 'Alimentación saludable para toda la familia',
      features: [
        '5 almuerzos para 4 personas',
        'Menú personalizable',
        'Entrega diaria',
        'Contenedores biodegradables',
        'Seguimiento nutricional',
        'Recetas exclusivas'
      ]
    }
  ]
  </script>
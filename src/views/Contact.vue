<template>
  <div class="bg-white py-12">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center">
        <h2 class="text-3xl font-extrabold text-gray-900 sm:text-4xl">
          Contáctanos
        </h2>
        <p class="mt-4 text-xl text-gray-500">
          Estamos aquí para responder tus preguntas
        </p>
      </div>

      <div class="mt-12">
        <div class="grid grid-cols-1 gap-8 lg:grid-cols-2">
          <div class="bg-white p-6 rounded-lg shadow-md">
            <form class="space-y-6">
              <div>
                <label for="name" class="block text-sm font-medium text-gray-700">Nombre</label>
                <input type="text" id="name" class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500" />
              </div>
              <div>
                <label for="email" class="block text-sm font-medium text-gray-700">Email</label>
                <input type="email" id="email" class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500" />
              </div>
              <div>
                <label for="message" class="block text-sm font-medium text-gray-700">Mensaje</label>
                <textarea id="message" rows="4" class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"></textarea>
              </div>
              <button type="submit" class="w-full bg-green-600 border border-transparent rounded-md py-2 px-4 text-sm font-medium text-white hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500">
                Enviar mensaje
              </button>
            </form>
          </div>

          <div class="bg-white p-6 rounded-lg shadow-md">
            <div class="space-y-6">
              <div>
                <h3 class="text-lg font-medium text-gray-900">Información de contacto</h3>
                <div class="mt-4 space-y-4">
                  <div class="flex items-center">
                    <PhoneIcon class="h-6 w-6 text-green-600" />
                    <span class="ml-3 text-gray-500">+57 304 123 4567</span>
                  </div>
                  <div class="flex items-center">
                    <EnvelopeIcon class="h-6 w-6 text-green-600" />
                    <span class="ml-3 text-gray-500">contacto@ksero.co</span>
                  </div>
                  <div class="flex items-center">
                    <MapPinIcon class="h-6 w-6 text-green-600" />
                    <span class="ml-3 text-gray-500">Valle de Aburrá, Antioquia</span>
                  </div>
                </div>
              </div>

              <div>
                <h3 class="text-lg font-medium text-gray-900">Horario de atención</h3>
                <div class="mt-4 space-y-2">
                  <p class="text-gray-500">Lunes a Viernes: 8:00 AM - 6:00 PM</p>
                  <p class="text-gray-500">Sábado: 9:00 AM - 2:00 PM</p>
                  <p class="text-gray-500">Domingo: Cerrado</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { PhoneIcon, EnvelopeIcon, MapPinIcon } from '@heroicons/vue/24/outline'
</script>
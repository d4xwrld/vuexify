<template>
  <v-responsive class="border rounded">
    <v-app>
      <v-app-bar>
        <v-container class="d-flex align-center">
          <v-img src="@/assets/logo.svg" max-width="40"></v-img>
          <v-span>Welcome User!</v-span>
        </v-container>
      </v-app-bar>

      <v-main>
        <v-container>
          <h1 v-if="!cards.length" class="text-center">No Data Found</h1>
          <v-card v-else v-for="(card, index) in cards" :key="index" class="ma-8">
            <v-container>
              <v-card-title>{{ card.title }}</v-card-title>
              <v-card-text>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iure minima voluptas rem facere
                illo vel.</v-card-text>
              <v-card-actions class="gap-2">
                <v-btn variant="elevated" :color="card.status" @click="showDialog(index)">{{ card.name }}</v-btn>
                <v-btn v-if="!card.deleteCard" color="error" variant="outlined"
                  @click="deleteCard(index)">DECLINE</v-btn>
              </v-card-actions>
            </v-container>
          </v-card>
        </v-container>
      </v-main>
    </v-app>
  </v-responsive>

  <v-dialog v-model="dialog" width="auto">
    <v-card max-width="400" prepend-icon="mdi-alert-circle-outline" text="Success">
      <template v-slot:actions>
        <v-btn class="ms-auto" text="Ok" @click="dialog = false"></v-btn>
      </template>
    </v-card>
  </v-dialog>
</template>

<script setup>
import { ref } from 'vue'
import { Card } from '@/composables/createCard'

const dialog = ref(false)

const createCard = Card()
const cards = ref([
  createCard('Nasi Cumi Hitam Madura Pak Kris'),
  createCard('Ayam Gepuk Pak Gembus'),
  createCard('KFC Nasi Lemak'),
  createCard('Mie Ayam Pak Gembus')
])

const showDialog = (index) => {
  const selectedCard = cards.value[index]

  selectedCard.name = 'Accepted'
  selectedCard.status = 'success'
  selectedCard.deleteCard = true
  dialog.value = true
}

const deleteCard = (index) => {
  cards.value.splice(index, 1)
}
</script>

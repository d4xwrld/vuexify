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
          <v-card v-for="(_, index) in 3" :key="index" class="ma-8">
            <v-container @click="dialog = true">
              <v-card-title>item {{ index + 1 }}</v-card-title>
              <v-card-text>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Voluptate eos repellat doloribus quis, illum quasi, vel tenetur
                officiis, aliquam impedit illo? Quia id non
                reprehenderit.</v-card-text>
              <v-card-actions class="gap-2">
                <v-btn variant="elevated" color="primary">ACCEPT</v-btn>
                <v-btn color="secondary">DECLINE</v-btn>
              </v-card-actions>
            </v-container>
          </v-card>
        </v-container>
      </v-main>
    </v-app>
  </v-responsive>

  <v-dialog v-model="dialog" width="auto">
    <v-card max-width="400" prepend-icon="mdi-alert-circle-outline" text="Still on development!">
      <template v-slot:actions>
        <v-btn class="ms-auto" text="Ok" @click="dialog = false"></v-btn>
      </template>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  data() {
    return {
      dialog: false,
    }
  },
}
</script>

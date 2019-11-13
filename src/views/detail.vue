<template>
  <v-container fluid>
    <v-row>
      <v-col cols="12">
        <v-toolbar color="indigo" dark >
          <v-spacer></v-spacer>
          <v-btn text>
            拼团
          </v-btn>
        </v-toolbar>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12">
        <v-card
          class="mx-auto"
        >
          <v-timeline>
            <v-timeline-item
              v-for="n in 50"
              :key="n"
              large
            >
              <template v-slot:opposite>
                <span>Tus eu perfecto</span>
              </template>
              <v-card class="elevation-2">
                <v-card-title class="headline">Lorem ipsum</v-card-title>
                <v-card-text>Lorem ipsum dolor sit amet, no nam oblique veritus. Commune scaevola imperdiet nec ut, sed euismod convenire principes at. Est et nobis iisque percipit, an vim zril disputando voluptatibus, vix an salutandi sententiae.</v-card-text>
                <v-img class="white--text align-end"  src="three.jpg" max-height="500"></v-img>
              </v-card>
            </v-timeline-item>
          </v-timeline>

        </v-card>
      </v-col>
    </v-row>
  </v-container>


</template>


<script>
  export default {
    name:"detail",
    created() {
      console.log(this.$route.query);
    }
  }
</script>

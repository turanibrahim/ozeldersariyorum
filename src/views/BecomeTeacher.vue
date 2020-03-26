<template>
<div id="becomeTeacher">
  <v-row
    align="center"
    justify="center"
    class="mt-4"
  >
    <v-col cols="12" class="text-center">
      <v-row
        align="center"
        justify="center"
      >
        <v-col cols="6">
          <h1 class="display-1">How It Works</h1>
        </v-col>
      </v-row>
    </v-col>
    <v-col cols="12">
      <v-row
        justify="center"
        align="center"
      >
        <v-col cols="3" v-for="card in howItWworks" :key="card.title">
          <LandingCard
            :icon="card.icon"
            :title="card.title"
            :description="card.description"
            :iconColor="card.iconColor"
            :textColor="card.textColor"
          />
        </v-col>
      </v-row>
    </v-col>
    <v-col cols="12" class="text-center">
      <v-row
        align="center"
        justify="center"
      >
        <v-col cols="6">
          <v-divider></v-divider>
        </v-col>
      </v-row>
    </v-col>
    <v-col cols="12" class="text-center">
      <v-row
        align="center"
        justify="center"
      >
        <v-col cols="6">
          <h1 class="display-1">Why teach through TakeLessons?</h1>
        </v-col>
      </v-row>
    </v-col>
    <v-col cols="12" class="text-center">
      <v-row
        justify="center"
        align="center"
      >
        <v-col cols="2" v-for="badge in badges" :key="badge.title">
          <Badge
            :title="badge.title"
            :description="badge.description"
            :backgroundColor="badge.backgroundColor"
          />
        </v-col>
      </v-row>
      <v-btn
        class="mt-10 mb-2"
        color="success"
        large
      >
        Get Started
      </v-btn>
    </v-col>
    <v-col cols="12" class="text-center">
      <v-row
        align="center"
        justify="center"
      >
        <v-col cols="6">
          <v-divider></v-divider>
        </v-col>
      </v-row>
    </v-col>
  </v-row>
</div>
</template>

<script>
import LandingCard from '@/components/Home/LandingCard.vue';
import Badge from '@/components/BecomeTeacher/Badge.vue';


export default {
  name: 'Home',
  components: {
    LandingCard,
    Badge,
  },
  data() {
    return {
      howItWworks: [
        {
          icon: 'mdi-card-account-details-outline',
          title: 'Create a professional profile',
          description: 'Put some love into building a rich profile that shows off your skills and experience',
          iconColor: 'success',
          textColor: 'gray--text text--darken-3',
        },
        {
          icon: 'mdi-email-outline',
          title: 'Receive fully-paid students',
          description: 'We handle booking and payments so you never have to buy or bid for leads',
          iconColor: 'warning',
          textColor: 'gray--text text--darken-3',
        },
        {
          icon: 'mdi-school-outline',
          title: 'Keep students learning',
          description: 'Help your students learn new skills each month and we\'ll give you an extra $ bonus',
          iconColor: 'accent',
          textColor: 'gray--text text--darken-3',
        },
      ],
      badges: [
        {
          title: '3,129,180',
          description: 'lessons taught',
          backgroundColor: 'accent',
        },
        {
          title: '$50M',
          description: 'in teacher earnings',
          backgroundColor: 'accent',
        },
        {
          title: '60k+',
          description: 'student reviews',
          backgroundColor: 'accent',
        },
        {
          title: '$227k',
          description: 'earned by top teacher',
          backgroundColor: 'accent',
        },
      ],
    };
  },
};
</script>

<style>

</style>

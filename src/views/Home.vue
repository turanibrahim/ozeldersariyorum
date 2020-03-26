<template>
  <div class="home">
    <v-row
      align="center"
      justify="center"
      class="py-0"
    >
      <v-col cols="12" class="py-0">
        <SearchImage/>
      </v-col>
      <v-col cols="12" class="py-0">
        <v-row
          align="center"
          justify="center"
          class="grey lighten-3"
        >
          <v-col cols="10">
            <v-row
              align="center"
              justify="center"
            >
              <v-col cols="12" class="text-center">
                <h1 class="display-1" :class="LandingCardsTextColor">A Better Way to Learn</h1>
              </v-col>
              <v-col cols="3" v-for="card in explanationCards" :key="card.title">
                <LandingCard
                  :title="card.title"
                  :icon="card.icon"
                  :description="card.description"
                  :iconColor="card.iconColor"
                  :textColor="LandingCardsTextColor"
                />
              </v-col>
            </v-row>
          </v-col>
        </v-row>
      </v-col>
      <v-col cols="10">
        <CategoryLessons
          :title="category.title"
          :lessons='category.lessons'
          :chipColor='category.chipColor'
          v-for="category in categories"
          :key="category.title"
        />
      </v-col>
      <v-col cols="10" class="text-center">
        <v-row
          align="start"
          justify="center"
        >
          <v-col cols="12">
            <h1 class="display-1" :class="LandingCardsTextColor">
              For now connect locally but soon you can connect online.
            </h1>
          </v-col>
          <v-col
            cols="3"
            class="text-center"
            v-for="landingImage in LocalAndOnlineArea"
            :key="landingImage.title"
          >
            <LandingImage
              :imageSrc="landingImage.imageSrc"
              :title="landingImage.title"
              :description="landingImage.description"
              :titleColor="LandingCardsTextColor"
              imgHeight="250px"
            />
          </v-col>
        </v-row>
      </v-col>
      <v-col cols="10" class="text-center">
        <v-row
          align="start"
          justify="center"
        >
          <v-col cols="12">
            <h1 class="display-1" :class="LandingCardsTextColor">
              How It Works
            </h1>
          </v-col>
          <v-col
            cols="3"
            class="text-center"
            v-for="landingImage in HowItWorksArea"
            :key="landingImage.title"
          >
            <LandingImage
              :imageSrc="landingImage.imageSrc"
              :title="landingImage.title"
              :description="landingImage.description"
              :titleColor="LandingCardsTextColor"
              imgHeight="150px"
            />
          </v-col>
        </v-row>
      </v-col>
      <v-col cols="12" class="py-0">
        <v-row
          align="center"
          justify="center"
          class="grey lighten-3"
        >
          <v-col cols="10">
            <v-row
              align="center"
              justify="center"
            >
              <v-col cols="12" class="text-center">
                <h1 class="display-1" :class="LandingCardsTextColor">Educating the World</h1>
              </v-col>
              <v-col cols="2" v-for="card in EducateWorldSection" :key="card.title">
                <LandingCard
                  :title="card.title"
                  :icon="card.icon"
                  :description="card.description"
                  :iconColor="card.iconColor"
                  :textColor="LandingCardsTextColor"
                />
              </v-col>
            </v-row>
          </v-col>
        </v-row>
      </v-col>
      <v-col cols="10" class="text-center">
        <v-row
          align="center"
          justify="center"
        >
          <v-col cols="10">
            <v-row
              align="center"
              justify="center"
            >
              <v-col cols="4">
                <LandingCard
                  title="Become a Teacher"
                  icon="mdi-home-city-outline"
                  description="If you qualify, come join us and earn
                   a great living doing what you love."
                  iconColor="success"
                  :textColor="LandingCardsTextColor"
                  height="350px"
                  buttonUrl="/becomeTeacher"
                  buttonName="Start Teaching"
                  buttonColor="primary"
                />
              </v-col>
            </v-row>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </div>
</template>

<script>
// @ is an alias to /src
import SearchImage from '@/components/Home/SearchImage.vue';
import CategoryLessons from '@/components/Home/CategoryLessons.vue';
import LandingCard from '@/components/Home/LandingCard.vue';
import LandingImage from '@/components/Home/LandingImage.vue';


export default {
  name: 'Home',
  components: {
    SearchImage,
    CategoryLessons,
    LandingCard,
    LandingImage,
  },
  data() {
    return {
      LandingCardsTextColor: 'indigo--text text--lighten-2',
      categories: [
        {
          title: 'Music Lessons',
          chipColor: 'secondary',
          describe: 'Discover your creative side.',
          lessons: [
            {
              lessonId: 1,
              title: 'Piano Lessons',
              stars: 4,
              starCount: 1254,
              price: 12,
              image: 'https://cdn.vuetifyjs.com/images/cards/cooking.png',
            },
            {
              lessonId: 2,
              title: 'Signing Lessons',
              stars: 3,
              starCount: 2421,
              price: 47,
              image: 'https://cdn.vuetifyjs.com/images/cards/cooking.png',
            },
            {
              lessonId: 3,
              title: 'Guitar Lessons',
              stars: 5,
              starCount: 7521,
              price: 32,
              image: 'https://cdn.vuetifyjs.com/images/cards/cooking.png',
            },
            {
              lessonId: 4,
              title: 'Violin Lessons',
              stars: 2,
              starCount: 542,
              price: 65,
              image: 'https://cdn.vuetifyjs.com/images/cards/cooking.png',
            },
          ],
        },
        {
          title: 'Langueage  Lessons',
          chipColor: 'primary',
          lessons: [
            {
              lessonId: 1,
              title: 'Turkhis Lessons',
              stars: 5,
              starCount: 99999,
              price: 958,
              image: 'https://cdn.vuetifyjs.com/images/cards/cooking.png',
            },
            {
              lessonId: 2,
              title: 'English Lessons',
              stars: 3,
              starCount: 2421,
              price: 1,
              image: 'https://cdn.vuetifyjs.com/images/cards/cooking.png',
            },
            {
              lessonId: 3,
              title: 'German Lessons',
              stars: 5,
              starCount: 7521,
              price: 32,
              image: 'https://cdn.vuetifyjs.com/images/cards/cooking.png',
            },
            {
              lessonId: 4,
              title: 'Russian Lessons',
              stars: 1,
              starCount: 542,
              price: 0,
              image: 'https://cdn.vuetifyjs.com/images/cards/cooking.png',
            },
          ],
        },
      ],
      explanationCards: [
        {
          icon: 'mdi-star',
          title: 'Expert Teachers',
          description: 'Top rated instructors guide you in every step of your journey',
          iconColor: 'primary',
        },
        {
          icon: 'mdi-chart-bell-curve',
          title: 'Personalized Lessons',
          description: 'Your style, your pace. Customized lessons designed for you',
          iconColor: 'secondary',
        },
        {
          icon: 'mdi-shield-check-outline',
          title: '100% Guaranteed',
          description: 'Try a lesson. If you\'re not satisfied we\'ll refund your unused balance',
          iconColor: 'success',
        },
      ],
      LocalAndOnlineArea: [
        {
          imageSrc: 'https://prod-takelessons.netdna-ssl.com/images/public/landing/icon/local.png',
          title: 'Local Lessons',
          description: 'No matter where you live,chances are we can introduce you to an amazing teacher in your neighborhood. You can take lessons in the privacy of your own home or at your teacher\'s location.',
        },
        {
          imageSrc: 'https://prod-takelessons.netdna-ssl.com/images/public/landing/icon/online.png',
          title: 'Online Lessons',
          description: 'For now online lessons are not available. We are working on to enable and it will available as soon as.',
        },
      ],
      HowItWorksArea: [
        {
          imageSrc: 'https://prod-takelessons.netdna-ssl.com/images/public/landing/icon/match.png',
          title: 'Match',
          description: 'Find your perfect teacher in under 3 minutes. Need help finding the right teacher? Call our friendly student counselors at 800-959-2497.',
        },
        {
          imageSrc: 'https://prod-takelessons.netdna-ssl.com/images/public/landing/icon/meet.png',
          title: 'Meet',
          description: 'Your instructor will motivate, support, and inspire you. Meet up with your teacher in person or connect with them online anywhere around the world!',
        },
        {
          imageSrc: 'https://prod-takelessons.netdna-ssl.com/images/public/landing/icon/master.png',
          title: 'Master',
          description: 'Each lesson is customized to help you grow. Learn faster and easier than ever with personal attention from an expert instructor.',
        },
      ],
      EducateWorldSection: [
        {
          icon: 'mdi-pencil-plus',
          title: '310',
          description: 'Lifelong learning subjects offered',
          iconColor: 'primary',
        },
        {
          icon: 'mdi-star-outline',
          title: '6,483',
          description: 'Amazing, inspiring, supportive teachers',
          iconColor: 'secondary',
        },
        {
          icon: 'mdi-account-group-outline',
          title: '2,045,044',
          description: 'People that use our platform each month',
          iconColor: 'info',
        },
        {
          icon: 'mdi-earth',
          title: '3,004,877',
          description: 'Lessons given around the world',
          iconColor: 'warning',
        },
      ],
    };
  },
};
</script>

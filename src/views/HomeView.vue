<template>
<div>
  <HeroHeader />
  <SectionWhyUs />
  <SectionProud />
  <SectionSpecialist />
  <SectionNews />
  <SectionVirutalTour />
   <SectionPartners />
  <SectionContactUs /> 
</div>
</template>

<script>
// @ is an alias to /src
import HeroHeader from '@/components/HeroHeader.vue'
import SectionContactUs from '@/components/SectionContactUs.vue'
import SectionWhyUs from '@/components/SectionWhyUs.vue'
import SectionProud from '@/components/SectionProud.vue'
import SectionVirutalTour from '@/components/SectionVirutalTour.vue'
import SectionPartners from '@/components/SectionPartners.vue'
import SectionSpecialist from '@/components/SectionSpecialist.vue'
import SectionNews from '@/components/SectionNews.vue'
export default {
  name: 'HomeView',
  components: {
    HeroHeader,
    SectionContactUs,
    SectionWhyUs,
    SectionProud,
    SectionVirutalTour,
    SectionPartners,
    SectionSpecialist,
    SectionNews
  }
}
</script>

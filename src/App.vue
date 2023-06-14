<template>
<div>
    <NavBar />
    <router-view></router-view>
    <NavBarFooter />
</div>
</template>


<script>
// @ is an alias to /src
import NavBar from '@/components/NavBarHeader.vue'
import NavBarFooter from '@/components/NavBarFooter.vue'
export default {
  name: 'AppView',
  components: {
    NavBar,
    NavBarFooter
  }
}
</script>

<template>
<div class="sidebar_wr">
    <div class="company">
    <img src="@/assets/download.jpg" alt="">
    </div>
    <div class="sidebar_nav">
        <div class="sidebar_nav-items">
            <router-link tag="div" to="/" class="sidebar_nav-items-item">New Offer</router-link>
            <router-link tag="div" to="/dashboard" class="sidebar_nav-items-item">Dashboard</router-link>
            <router-link tag="div" to="/drafts" class="sidebar_nav-items-item">Drafts</router-link>
        </div>

    </div>
    <div class="sidebar_footer">
        <div class="sidebar_footer-item">Options</div>
        <div class="sidebar_footer-item">Sign Out </div>
    </div>
</div>
</template>
<style scoped lang="scss">
    
</style>
<script>
export default {
    methods:{
        goto(v){
            window.location = v
        }
    }
}
</script>
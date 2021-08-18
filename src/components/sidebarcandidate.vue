<template>
<div class="sidebar_wr">
    <div class="company">
    <img src="@/assets/download.jpg" alt="">
    </div>
    <div class="sidebar_nav">
        <div class="sidebar_nav-items">
            <router-link tag="div" to="/candidate" class="sidebar_nav-items-item">welcome</router-link>
            <div @click="goto('/about_company')" class="sidebar_nav-items-item">About Company</div>
            <router-link tag="div" to="/candidate/role" class="sidebar_nav-items-item">Role</router-link>
            <div @click="goto('/about_company')" class="sidebar_nav-items-item">Salary</div>
            <div @click="goto('/about_company')" class="sidebar_nav-items-item">Perks</div>
            <div @click="goto('/about_company')" class="sidebar_nav-items-item">Equity</div>
             <div @click="goto('/about_company')" class="sidebar_nav-items-item">Offer Valuation</div>
             <div @click="goto('/about_company')" class="sidebar_nav-items-item">Chat With recruiter</div>
             <div @click="goto('/about_company')" class="sidebar_nav-items-item">Options</div>
            <div class="sidebar_nav-items-item">Drafts</div>
        </div>

    </div>
    <div class="sidebar_footer">
        <div class="sidebar_footer-item">
        <b-button rounded type="is-primary"  tag="router-link" to="/candidate/accept">Accept offer</b-button>
        </div>
        <div class="sidebar_footer-item">Can we Help You? </div>
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
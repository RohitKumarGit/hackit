<template>
<div>
 
    <div class="columns sidebar_wrap">
            <div class="column is-3">
            <sidebar></sidebar>
            </div>    
            <div class="column is-9">
                <div class="offer">
                <div class="header h3">Dashboard</div>
                <div class="bar"></div>
                <div class="columns dashead mt-2">
        <div class="column is-3 ">Candidate Name</div>
        <div class="column is-3">Role</div>
        <div class="column is-2">Sent</div>
        <div class="column is-2">Status
        
        </div>
        <div class="column is-2">
        Actions
        </div>
    </div>
                 <dash></dash>
                  <dash></dash>
                   <dash></dash>
                 <dash></dash>
                </div>
               
            </div>
    </div>
</div>
</template>
<script>
import sidebar from '@/components/sidebar'
import dash from '@/components/dash'
export default {
    components:{
        sidebar,
        dash
      //  Sidebar
    }
}
</script>

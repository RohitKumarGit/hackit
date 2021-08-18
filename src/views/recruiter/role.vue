<template>
    <div class="columns sidebar_wrap">
    <div class="column is-3">
    <sidebarcandidate></sidebarcandidate>
    </div>
    <div class="column is-9">
        <div class="offer">
            <div class="header"> About company</div>
            <div class="bar"></div>
             <div class="accordions">
                 <b-collapse animation="slide" :open="officet" aria-id="contentIdForA11y1">
            <template #trigger>
                 <div class="roller" @click="officet = !officet">
                        <div class="left is-flex">
                            
                            Job Description
                        </div>
                        <div class="right">
                        <b-icon v-if="officet"
                pack="fas"
                icon="angle-double-down"
                size="is-large">
            </b-icon>
            <b-icon v-else
                pack="fas"
                icon="angle-double-up"
                size="is-large">
            </b-icon>

                        </div>
                    </div>
            </template>
            
            <div class="accbox">
             content
            </div>
        </b-collapse>

                   
                </div>
            <div class="accordions mt-3">
                 <b-collapse animation="slide" :open="yt" aria-id="contentIdForA11y1">
            <template #trigger>
                 <div class="roller" @click="yt = !yt">
                        <div class="left is-flex">
                            
                            Your Team
                        </div>
                        <div class="right">
                        <b-icon v-if="yt"
                pack="fas"
                icon="angle-double-down"
                size="is-large">
            </b-icon>
            <b-icon v-else
                pack="fas"
                icon="angle-double-up"
                size="is-large">
            </b-icon>

                        </div>
                    </div>
            </template>
            
            <div class="accbox">
             content
            </div>
        </b-collapse>

                   
                </div>
                <div class="accordions mt-3">
                 <b-collapse animation="slide" :open="resp" aria-id="contentIdForA11y1">
            <template #trigger>
                 <div class="roller" @click="resp = !resp">
                        <div class="left is-flex">
                            
                            Responsibilities
                        </div>
                        <div class="right">
                        <b-icon v-if="resp"
                pack="fas"
                icon="angle-double-down"
                size="is-large">
            </b-icon>
            <b-icon v-else
                pack="fas"
                icon="angle-double-up"
                size="is-large">
            </b-icon>

                        </div>
                    </div>
            </template>
            
            <div class="accbox">
             content
            </div>
        </b-collapse>

                   
                </div>
        

            <div class="btn_right ">
                    <b-button type="is-primary" class="nextb has-text-white"  rounded>Next 
                    </b-button>
                   </div>
        </div>
        
    </div>
    </div>
</template>
<script>
import sidebarcandidate from '@/components/sidebarcandidate'

export default {
    components:{
        sidebarcandidate
       
    },
    data(){
        return {
            officet:false,
            resp:false,
            yt:false
        }
    }
}
</script>
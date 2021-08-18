<template>
    <div class="columns sidebar_wrap">
    <b-modal
            v-model="isComponentModalActive"
            has-modal-card
            trap-focus
            :destroy-on-hide="false"
            aria-role="dialog"
            aria-label="Example Modal"
            aria-modal>
            <template >
                <div class="autofillbox">
                <h1 class="has-text-weight-bold title">Auto Fil Step</h1>
                <div class="subtitle">Fill in the details</div>
                <div class="columns">
                    <div class="column is-3">Job Details</div>
                    <div class="column is-6"><b-select placeholder="Select a method" v-model="jobm">
                <option
                    
              
                    >
                    System  - icms
                </option>
                <option
                    
              
                    >
                   excel upload
                </option>
            </b-select></div>
                    <div class="column is-3"><b-upload v-if="jobm==='excel upload'" v-model="file" class="file-label">
            <span class="file-cta">
                <b-icon class="file-icon" icon="upload"></b-icon>
                <span class="file-label">Click to upload</span>
            </span>
            <span class="file-name" v-if="file">
                {{ file.name }}
            </span>
        </b-upload></div>
                </div>
                <div class="columns">
                    <div class="column is-3">candidate details</div>
                    <div class="column is-6"><b-select placeholder="Select a method" v-model="cadm">
                <option
                    
              
                    >
                    System  - icms
                </option>
                <option
                    
              
                    >
                   excel upload
                </option>
            </b-select></div>
                    <div class="column is-3"><b-upload v-if="cadm==='excel upload'" v-model="file" class="file-label">
            <span class="file-cta">
                <b-icon class="file-icon" icon="upload"></b-icon>
                <span class="file-label">Click to upload</span>
            </span>
            <span class="file-name" v-if="file">
                {{ file.name }}
            </span>
        </b-upload></div>
                </div>
                <div class="btn_right">
                    <b-button type="is-primary" class="mr-4" outlined rounded>Cancel</b-button>
                    <b-button type="is-primary"  rounded>Upload</b-button>
                   </div>
                </div>
            </template>
        </b-modal>
        <div class="column is-3">
            <sidebars></sidebars>
        </div>
        <div class="column is-9">
            <div class="offer">
                <div class="header h3">
                    New Offer
                </div>
                <div class="bar">
                
                </div>
                <div class="autofill mt-3" @click="isComponentModalActive=true">

                    Auto Fill steps
                </div>
                <div class="accordions">
                 <b-collapse animation="slide" :open="officet" aria-id="contentIdForA11y1">
            <template #trigger>
                 <div class="roller" @click="officet = !officet">
                        <div class="left is-flex">
                            <div :class="{circle:true,circle_done:true}">
                                <span v-if="false">1</span>
                                <b-icon v-else icon="check-bold" size="medium"></b-icon>
                            </div>
                            Office And Template
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
               <div class="columns">
            <div class="column is-2 has-text-weight-bold">Rec ID</div>
            <div class="column is-10"> <b-input v-model="name"></b-input></div>
            </div>
            <div class="columns">
            <div class="column is-2 has-text-weight-bold">Role</div>
            <div class="column is-10"> <b-input v-model="name"></b-input></div>
            </div>
            <div class="columns">
            <div class="column is-2 has-text-weight-bold">Department</div>
            <div class="column is-10"> <b-input v-model="name"></b-input></div>
            </div>
            <div class="columns">
            <div class="column is-2 has-text-weight-bold">Job Grade</div>
            <div class="column is-10"> <b-input v-model="name"></b-input></div>
            </div>
            <div class="columns">
            <div class="column is-2 has-text-weight-bold">Job Description</div>
            <div class="column is-10"> <b-input v-model="name" type="textarea"></b-input></div>
            </div>
            <b-button type="is-primary " class="lng" rounded>Next</b-button>
            </div>
        </b-collapse>

                   
                </div>
                <div class="accordions mt-3">
                 <b-collapse animation="slide" :open="candi" aria-id="contentIdForA11y1">
            <template #trigger>
                 <div class="roller" @click="candi = !candi">
                        <div class="left is-flex">
                            <div :class="{circle:true,circle_done:true}">
                                <span v-if="false">1</span>
                                <b-icon v-else icon="check-bold" size="medium"></b-icon>
                            </div>
                            Candidate Details
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
               <div class="columns">
            <div class="column is-2 has-text-weight-bold">Name</div>
            <div class="column is-10"> <b-input v-model="name"></b-input></div>
            </div>
            <div class="columns">
            <div class="column is-2 has-text-weight-bold">email address</div>
            <div class="column is-5"> <b-input v-model="name"></b-input></div>
            <div class="column is-5"> <b-input v-model="name"></b-input></div>
            </div>
           <div class="columns">
            <div class="column is-2 has-text-weight-bold">Mobile Number</div>
            <div class="column is-5"> <b-input v-model="name" placeholder="+91"></b-input></div>
            <div class="column is-5"> <b-input v-model="name" placeholder="+91"></b-input></div>
            </div>
            
            <div class="columns">
            <div class="column is-2 has-text-weight-bold">Address</div>
            <div class="column is-10"> <b-input v-model="name" type="textarea"></b-input></div>
            </div>
            <b-button type="is-primary " class="lng" rounded>Next</b-button>
            </div>
        </b-collapse>

                   
                </div>
                <div class="accordions mt-3">
                 <b-collapse animation="slide" :open="hrm" aria-id="contentIdForA11y1">
            <template #trigger>
                 <div class="roller" @click="hrm = !hrm">
                        <div class="left is-flex">
                            <div :class="{circle:true,circle_done:true}">
                                <span v-if="false">1</span>
                                <b-icon v-else icon="check-bold" size="medium"></b-icon>
                            </div>
                            Hiring Manager Details
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
               <div class="columns">
            <div class="column is-2 has-text-weight-bold">Manager Name</div>
            <div class="column is-10"> <b-input v-model="name"></b-input></div>
            </div>
            <div class="columns">
            <div class="column is-2 has-text-weight-bold">Email address</div>
            <div class="column is-10"> <b-input v-model="name"></b-input></div>
            </div>
           
            <b-button type="is-primary " class="lng" rounded>Save</b-button>
            </div>
        </b-collapse>

                   
                </div>
                <div class="accordions mt-3">
                 <b-collapse animation="slide" :open="jbd" aria-id="contentIdForA11y1">
            <template #trigger>
                 <div class="roller" @click="jbd = !jbd">
                        <div class="left is-flex">
                            <div :class="{circle:true,circle_done:true}">
                                <span v-if="false">1</span>
                                <b-icon v-else icon="check-bold" size="medium"></b-icon>
                            </div>
                            Job Offer Details
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
               <div class="columns">
            <div class="column is-2 has-text-weight-bold">Total CTC (&#8377;) </div>
            <div class="column is-10"> <b-input v-model="name"></b-input></div>
            </div>
            <div class="columns">
            <div class="column is-2 has-text-weight-bold">Perks</div>
            <div class="column is-10"> <b-input v-model="name"></b-input></div>
            </div>
           <div class="columns">
            <div class="column is-2 has-text-weight-bold">Medicals</div>
            <div class="column is-10"> <b-input v-model="name"></b-input></div>
            </div>
            <b-button type="is-primary " class="lng" rounded>Save</b-button>
            </div>
        </b-collapse>

                   <div class="btn_right">
                    <b-button type="is-primary" class="mr-4" rounded>Get Approval</b-button>
                    <b-button type="is-primary" outlined rounded>Cancel</b-button>
                   </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import sidebar from '@/components/sidebar'
export default {
    components:{
        sidebars:sidebar
    },
    data(){
        return {
            officet:false,
            candi:false,
            hrm:false,
            jbd:true,
            isComponentModalActive:false,
            jobm:null,
            cadm:null
        }
    }
}
</script>
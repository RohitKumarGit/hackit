<template>
    <div class="columns sidebar_wrap">
    <div class="column is-3">
    <sidebarcandidate></sidebarcandidate>
    </div>
    <div class="column is-9">
        <div class="offer">
            <div class="header"> Welcome Rohit</div>
            <div class="bar"></div>
            
            
        <pre class="p">
Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facere obcaecati quam voluptas voluptatem eum nesciunt consequuntur labore qui, expedita quae eos accusamus architecto fugiat repudiandae necessitatibus ut facilis, totam odit.
Lore consectetur adipisicing elit. Perspiciatis, aspernatur atque cupiditate voluptatum dolor esse unde corrupti error odit fugiat sed, culpa explicabo ipsa tenetur similique dolorum temporibus quisquam inventore?
Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nam repudiandae reprehenderit voluptates, qui accusamus error nisi aliquid fugit, expedita sint saepe maxime itaqu corrupti reprehenderit quae exercitationem laborum porro officia.

onsectetur adipisicing elit. Quae fugiat corrupti delectus magni modi molestiae quas doloremque maxime eos excepturi. Omnis perferendis repudiandae rem placeat voluptates iusto nihil, facilis magnam.
Lorem ipsum dolor sit, amet consectetur adipisicing elit. Labore debitis explicabo quis voluptas earum saepe repellendus magnam doloremque, adipi
</pre>    

<div class="mt-2 has-text-white mb-3"> Do you want to add any comments?</div>
 <b-input maxlength="200" type="textarea"></b-input>

            <div class="btn_center is-flex is-justify-content-center ">
            <b-button type="is-primary" class="nextb mr-2"  rounded outlined>Close 
                    </b-button>
                    <b-button type="is-primary" class="nextb"  rounded>Accept Offer 
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
       
    }
}
</script>
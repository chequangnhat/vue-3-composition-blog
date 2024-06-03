<script setup lang="ts">
import TitleContent from './ContentComponent/TitleContent.vue'
import ParagraphComponent from './ContentComponent/ParagraphComponent.vue'
import ImageComponent from './ContentComponent/ImageComponent.vue'
</script>

<template>
  <div class="content">
    <ImageComponent
      srcImg="https://th.bing.com/th/id/R.e9b3af907ba8ed8a155949f994cc01ec?rik=hh0mEP5MQsMjwQ&pid=ImgRaw&r=0"
    />
    <TitleContent title="It is a long established fact a reader be distracted" />
    <ParagraphComponent
      text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa et ab necessitatibus nihil nesciunt deleniti obcaecati expedita iure possimus quibusdam suscipit, nemo, ducimus pariatur, vero reiciendis consectetur ipsum magnam omnis!"
    />
    <ParagraphComponent
      text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus magnam eos hic quidem temporibus tenetur tempore vitae."
    />

    <TitleContent title="Creative WordPress Themes" />

    <ParagraphComponent
      text="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nostrum, quo suscipit. Ratione, quasi quod nihil error explicabo et soluta, sit odio nesciunt, accusamus deleniti unde eum expedita magnam sunt dolorum."
    />
    <ImageComponent
      srcImg="https://ihitthebutton.com/wp-content/uploads/2019/01/canon-eos-r-sunrise-background.jpg"
    />
    <ParagraphComponent
      text="Lorem Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nostrum, quo suscipit. Ratione, quasi quod nihil error explicabo et soluta, sit odio nesciunt, acLorem ipsum dolor, sit amet consectetur adipisicing elit. Nostrum, quo suscipit. Ratione, quasi quod nihil error explicabo et soluta, sit odio nesciunt, accusamus deleniti unde eum expedita magnam sunt dolorum. cusamus deleniti unde eum expedita magnam sunt dolorum. ipsum dolor sit amet consectetur adipisicing elit. Natus magnam eos hic quidem temporibus tenetur tempore vitae."
    />
  </div>
</template>

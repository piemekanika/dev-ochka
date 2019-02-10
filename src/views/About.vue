<template lang="pug">
    .container.about-page
        .letter
            .glitch.header {{ header }}
            .glitch.paragraph(v-for="(paragraph, index) in paragraphs" :key="paragraph" :class="'p' + index") {{ paragraph }}
</template>

<script>
    export default {
        data: () => {
            return {
                header: 'Some cool header',
                paragraphs: [
                    'Lorem ipsum dolor sit amet, sit unum persequeris ne, ne quo feugait laboramus. Audire fuisset deleniti cum at. No error sadipscing signiferumque vis. Illum mundi nostrud nam at, vix iuvaret persecuti no. Eros feugait recusabo pro at. Mel modo delectus officiis et, nam diam viris cu.',
                    'Id has quis probo molestiae, invenire consequat est et, ut nam illud consul detracto. Mei impedit liberavisse voluptatibus eu, enim repudiandae has et, ex vocent suscipit consequuntur nec. Cu tation nusquam delicatissimi nam, ea dolore inimicus vis, omnium luptatum interesset id duo. Primis causae consequuntur et mea, nobis nominavi pro ex. Ne meis noster euismod cum. Ad est enim persius honestatis, in sit hinc offendit volutpat.',
                    'Cum latine atomorum ei, eam epicuri maluisset eu, usu ut aperiam civibus adipiscing. Esse affert his no, ad vim commune incorrupte, usu quis putant ut. Ei omnis quidam gubergren pri, sea te atqui sonet. Ut probo graece molestie est.',
                    'Novum dictas te vel. Quo eu facilisis adipiscing, mea doming possim id. Eum erat intellegat in, ut sonet tempor indoctum has. Amet ipsum recteque nam in. Duo aliquam corrumpit ut.'
                ]
            }
        }
    }
</script>

<style lang="stylus" scoped>
    random(min, max)
        return floor(math(0, 'random') * (max - min + 1) + min)
    
    randompx(min, max)
        if random(0, 6) == 0
            return floor(math(0, 'random') * (max - min + 1) + min)px
        else
            return 0px

    @keyframes {glitch-animation}
        for i in 0..5
            {20% * i}
                transform translateX(random(-2, 2)px) 
                text-shadow randompx(-8, 8) 0px 0px red, randompx(-8, 8) 0px 0px blue
    
    @keyframes {glitch-animation-1}
        for i in 0..5
            {20% * i}
                transform translateX(random(-2, 2)px) 
                text-shadow randompx(-16, 16) 0px 0px red, randompx(-16, 16) 0px 0px blue

    @keyframes {glitch-animation-2}
        for i in 0..5
            {20% * i}
                transform translateX(random(-2, 2)px) 
                text-shadow randompx(-16, 16) 0px 0px red, randompx(-16, 16) 0px 0px blue
    
    @keyframes {glitch-animation-3}
        for i in 0..5
            {20% * i}
                transform translateX(random(-2, 2)px)
                text-shadow randompx(-16, 16) 0px 0px red, randompx(-16, 16) 0px 0px blue

    @keyframes {glitch-animation-4}
        for i in 0..5
            {20% * i}
                transform translateX(random(-2, 2)px)
                text-shadow randompx(-16, 16) 0px 0px red, randompx(-16, 16) 0px 0px blue

    .letter
        max-width 600px
        border 1px solid white
        padding 15px
        margin 15px

        .header
            margin 0px 20px 20px 0px
            font-size 24px
        
        .paragraph
            margin-bottom 10px

        .glitch.header
            animation glitch-animation .5s infinite
        
        .glitch.p0
            animation glitch-animation-1 .5s infinite

        .glitch.p1
            animation glitch-animation-2 .5s infinite
        
        .glitch.p2
            animation glitch-animation-3 .5s infinite

        .glitch.p3
            animation glitch-animation-4 .5s infinite
</style>

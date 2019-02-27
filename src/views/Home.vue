<template lang="pug">
    .container.home-page
        .background-video
            video#bck-video(autoplay muted loop)
                source(:src="require('@/assets/videos/white-smoke-video.mp4')" type="video/mp4")

        .page-content
            .col.left
                h1.page-header Smoke weed
                p.page-text Smoke weed everyday sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

            .col.right
                .btn.pink.outline Smoke weed
</template>

<script>
    import anime from 'animejs/lib/anime.es.js'

    export default {
        mounted () {
            console.log('hi')

            document.addEventListener('mousemove', event => {
                let x = event.pageX
                let y = event.pageY

                let slower = 0.07
                x = (window.innerWidth / 2 - x) * slower 
                y = (window.innerHeight / 2 - y) * slower
                
                anime({
                    targets: '#bck-video',
                    translateX: x + 'px',
                    translateY: y + 'px',
                    easing: 'easeOutCubic'
                })
            })
        }    
    }
</script>


<style lang="stylus" scoped>
    .background-video
        position absolute
        height 100vh
        width auto
        z-index -1
        top 50%
        left 50%
        transform translateX(-50%) translateY(-50%) scale(1.1)
        overflow hidden
    
    .page-content
        display flex
        max-width 800px

        .col
            flex-basis 100%
            padding 10px
            
            .page-header
                margin-bottom 10px

            &.right
                display flex
                // border 1px solid white
                justify-content center
                align-items center

                user-select none

                .btn.pink.outline
                    border 2px solid white
                    border-radius 5px
                    padding 15px
                    transition all 0.2s ease-in
                    text-transform uppercase
                    text-align center
                    &:hover
                        border-color deeppink 
                        color deeppink
                        cursor pointer
    
    @media screen and (max-width: 1024px)
        .page-content
            max-width 500px
            flex-direction column
            
            .col
                padding 10px 20px

            .btn
                width 100%                
</style>

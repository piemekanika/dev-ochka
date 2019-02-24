<template lang="pug">
    .container.team-page(style="background-color: black; z-index: 2")
        h3 Team page
            span(style="color: green; font-family: monospace; font-size: 20px; padding-left: 15px;") //coming soon

            .line(  v-for="n in linesCount"
                    :style="getRandomStyleObject()")
</template>

<script>
    export default {
        data: () => {
            return {
                linesCount: 75
            }
        },

        computed: {
            vHeight: function () {
                return window.innerHeight
            },

            vWidth: function () {
                return window.innerWidth
            }
        },

        methods: {            
            getRandomInt (from, to) {
                return Math.floor(Math.random() * to) + from
            },

            getRandomStyleObject () {
                return {
                    'top': `${this.getRandomInt(30, this.vHeight)}px`,
                    'left': `${this.getRandomInt(0, this.vWidth)}px`,
                    'transform': `rotate(${this.getRandomInt(0, 180)}deg)`,
                    'height': `${this.getRandomInt(5, 150)}px`
                }
            }
        }
    }
</script>


<style lang="stylus" scoped>
    .line
        position absolute
        width 1px
        height 100px
        border 1px solid gray
        z-index -1
</style>

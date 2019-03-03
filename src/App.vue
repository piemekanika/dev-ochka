<template lang="pug">
    #app
        nav.navigation
            router-link.nav-link(v-for="route in routes" :key="route.path" :to="route.path") {{ route.name }}
        
        main
            router-view
        
        footer
            a.footer-link(href="#" @click="showContacts") Contacts
            a.footer-link(href="https://github.com/piemekanika" target="_blank") Github
            a.footer-link(href="https://twitter.com/P13POL1N4" target="_blank") Twitter
</template>

<script>
    export default {
        data: () => {
            return {
                routes: [
                    {
                        path: '/',
                        name: 'Home'
                    },
                    {
                        path: '/portfolio',
                        name: 'portfolio',
                    },
                    {
                        path: '/team',
                        name: 'team'
                    },
                    {
                        path: '/about',
                        name: 'about',
                    }
                ]
            }
        },

        mounted () {
            // this.$router.options.routes.forEach(route => {
            //     this.routes.push(route)
            // })
        },

        methods: {
            showContacts () {
                alert('8 (800) 555 35 35 - it\'s easier to call rather then to owe!')
            }
        }
    }
</script>

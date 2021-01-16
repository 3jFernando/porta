<template>
    <div>
        <header
            class="black-bg mh-header mh-fixed-nav nav-scroll mh-xs-mobile-nav wow fadeInUp"
            id="mh-header"
        >
            <div class="overlay"></div>
            <div class="container">
                <div class="row">
                    <nav class="navbar navbar-expand-lg mh-nav nav-btn">
                        <a class="navbar-brand" href="#">
                            <img
                                width="50"
                                src="/assets/images/logo.jpg"
                                alt=""
                                class="img-fluid shadow"
                            />
                        </a>
                        <button
                            class="navbar-toggler"
                            type="button"
                            data-toggle="collapse"
                            data-target="#navbarSupportedContent"
                            aria-controls="navbarSupportedContent"
                            aria-expanded="false"
                            aria-label="Toggle navigation"
                        >
                            <span class="navbar-toggler-icon icon"></span>
                        </button>

                        <div
                            class="collapse navbar-collapse"
                            id="navbarSupportedContent"
                        >
                            <ul class="navbar-nav mr-0 ml-auto">
                                <li class="nav-item"
                                    :class="{ 'active': $store.state.menuActiveWelcome == 1 }"
                                >
                                    <a class="nav-link" href="#mh-home" v-on:click.prevent="changeMenu(1)"
                                        >Acerca de</a
                                    >
                                </li>
                                <li class="nav-item"
                                
                                    :class="{ 'active': $store.state.menuActiveWelcome == 2 }">
                                    <a class="nav-link" href="#mh-service" v-on:click.prevent="changeMenu(2)"
                                        >Servicios</a
                                    >
                                </li>
                                <li class="nav-item" 
                                    :class="{ 'active': $store.state.menuActiveWelcome == 3}">
                                    <a class="nav-link" href="#mh-portafolio" v-on:click.prevent="changeMenu(3)"
                                        >Portafolio</a
                                    >
                                </li>
                                <li class="nav-item" 
                                    :class="{ 'active': $store.state.menuActiveWelcome == 4 }">
                                    <a class="nav-link" href="#mh-experience" v-on:click.prevent="changeMenu(4)"
                                        >Experiencias</a
                                    >
                                </li>
                                <li class="nav-item" 
                                    :class="{ 'active': $store.state.menuActiveWelcome == 5 }">
                                    <a class="nav-link" href="#mh-skills" v-on:click.prevent="changeMenu(5)"
                                        >Habilidades</a
                                    >
                                </li>
                                <li class="nav-item" 
                                    :class="{ 'active': $store.state.menuActiveWelcome == 6 }">
                                    <a class="nav-link" href="#mh-testimonial" v-on:click.prevent="changeMenu(6)"
                                        >Testimonios</a
                                    >
                                </li>
                                <li class="nav-item" 
                                    :class="{ 'active': $store.state.menuActiveWelcome == 7 }">
                                    <a class="nav-link" href="#mh-contact" v-on:click.prevent="changeMenu(7)"
                                        >Contacto</a
                                    >
                                </li>
                            </ul>
                        </div>
                    </nav>
                </div>
            </div>
        </header>
    </div>
</template>

<script>
export default {
  methods: {
      changeMenu(menu) {
          this.$store.state.menuActiveWelcome = menu
      }
  },
    
}
</script>
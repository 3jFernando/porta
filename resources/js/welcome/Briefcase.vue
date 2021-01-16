<template>
    <div>
        <section class="mh-portafolio" id="mh-portafolio">
            <div class="container">
                <div class="row section-separator">
                    <div
                        class="section-title col-sm-12 wow fadeInUp"
                        data-wow-duration="0.8s"
                        data-wow-delay="0.1s"
                    >
                        <h3>Nuestro portafolio preferido</h3>
                    </div>
                    <div class="part col-sm-12">
                        <div
                            class="mh-project-gallery col-sm-12 wow fadeInUp"
                            id="project-gallery"
                            data-wow-duration="0.8s"
                            data-wow-delay="0.5s"
                        >
                            <div class="portafolioContainer row">
                                <div
                                    v-for="(briefcase, key) in briefcases" :key="key"
                                    class="grid-item col-md-4 col-sm-6 col-xs-12 user-interface"
                                >
                                    <figure>
                                        <img
                                            :src="briefcase.image"
                                            alt="img04"
                                        />
                                        <figcaption class="fig-caption">
                                            <i
                                                class="fa fa-code iron-color"
                                            ></i>
                                            <h5 class="title" v-text="briefcase.name"></h5>
                                            <span class="sub-title" v-text="briefcase.note"></span
                                            >
                                            <a data-fancybox data-src="#mh"></a>
                                        </figcaption>
                                    </figure>
                                </div>
                            </div>
                            <!-- End: .grid .project-gallery -->
                        </div>
                        <!-- End: .grid .project-gallery -->
                    </div>
                    <!-- End: .part -->
                </div>
                <!-- End: .row -->
            </div>
        </section>
    </div>
</template>

<script>
export default {
    data() {
        return {
            briefcases: []
        };
    },
    mounted() {
        this.load();
    },
    methods: {
        /**
         * Listar portafolios
         */
        async load() {
            await axios
                .get(this.$store.state.urlApi + "briefcases")
                .then(response => {
                    if (response.data.status == "OK") {
                        this.briefcases = response.data.data;
                    } else {
                        alert("No es posible cargar los datos");
                    }
                })
                .catch(e => alert(e))
                .finally(() => () => {});
        }
    }
};
</script>

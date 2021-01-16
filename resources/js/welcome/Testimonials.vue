<template>
  <div>
    <section class="mh-testimonial" id="mh-testimonial">
            <div class="home-v-img">
                <div class="container">
                    <div class="row section-separator">
                        <div class="col-sm-12 section-title wow fadeInUp" data-wow-duration="0.8s"
                            data-wow-delay="0.2s">
                            <h3>Testimonios de nuestros clientes</h3>
                        </div>
                        <div class="col-sm-12 wow fadeInUp" id="mh-client-review" data-wow-duration="0.8s"
                            data-wow-delay="0.3s">
                            <div class="each-client-item">
                                <div class="mh-client-item dark-bg black-shadow-1">
                                    <img src="/assets/images/clients/cliente1.jpeg" alt="clientes">
                                    <p>Estoy muy complacido con los servicios digitales prestados por clamonsf</p>
                                    <h4>Fredy Teran</h4>
                                    <span>Bogotá D.C.</span>
                                </div>
                            </div>
                            <div class="each-client-item">
                                <div class="mh-client-item dark-bg black-shadow-1">
                                    <img src="/assets/images/clients/cliente2.jpeg" alt="clientes">
                                    <p>Presta un servicio agradable y responsable</p>
                                    <h4>José AR Workana</h4>
                                    <span>Bogotá D.C.</span>
                                </div>
                            </div>
                            <div class="each-client-item">
                                <div class="mh-client-item dark-bg black-shadow-1">
                                    <img src="/assets/images/clients/cliente3.jpeg" alt="clientes">
                                    <p>Es muy chevre ver tus proyectos terminados y gracias a clamonsf he tenido
                                        clientes satisfechos</h4>

                                    <h4>Nicol Arroyo</h4>
                                    <span>Cartagena</span>
                                </div>
                            </div>
                            <div class="each-client-item">
                                <div class="mh-client-item dark-bg black-shadow-1">
                                    <img src="/assets/images/clients/cliente4.jpeg" alt="clientes">
                                    <p>Gracias a clamonsf en mi negocio ya tengo cuentas claras y reportes increibles
                                    </p>
                                    <h4>Cristian Eduardo Peña</h4>
                                    <span>Pitalito - Huila</span>
                                </div>
                            </div>
                            <div class="each-client-item">
                                <div class="mh-client-item dark-bg black-shadow-1">
                                    <img src="/assets/images/clients/cliente5.jpeg" alt="clientes">
                                    <p>Clamonsf presta un gran servicio</p>
                                    <h4>Sebastian Gamboa</h4>
                                    <span>Pitalito - Huila</span>
                                </div>
                            </div>
                        </div>

                        <!-- Blogo de chat entre clientes y clamonsf -->
                        <div class="col-sm-12 section-title wow fadeInUp mt-5" data-wow-duration="0.8s"
                            data-wow-delay="0.2s">
                            <h3>Blog</h3>
                        </div>
                        <div
                            class="card card-body mt-0 mb-3 shadow"
                            v-for="(message, key) in messages"
                            :key="key"
                            style="border: 0"
                        >
                            <div class="d-flex justify-content-start align-items-start">
                                <div class="img-rounded-user"></div>
                                <div class="content-messages">
                                    <h4 v-text="message.name"></h4>
                                    <span class="text-warning"
                                        ><b v-text="message.company"></b> -
                                        <i v-text="message.dateHumans"></i
                                    ></span>
                                    <p v-text="message.message"></p>

                                    <div class="card card-body" style="border: 0" v-if="message.message_rsa">
                                        <div
                                            class="d-flex justify-content-start align-items-start"
                                        >
                                            <div class="img-rounded-owner">
                                                <img src="/assets/images/logo.jpg" alt="">
                                            </div>
                                            <div class="content-messages-owner">
                                                <span class="text-warning"
                                                    ><b>Clamonsf respondio</b> -
                                                    <i v-text="message.message_date"></i
                                                ></span>
                                                <p v-text="message.message_rsa"></p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="content-btns">                                    
                                    <i class="fa fa-heart text-warning mr-2"></i>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </section>
  </div>
</template>

<script>
export default {
    data() {
        return {
            messages: [],
            message: "",
            itemActive: null
        };
    },
    mounted() {
        this.load();
    },
    methods: {
        /**
         * Listar mensajes
         */
        async load() {
            await axios
                .get(this.$store.state.urlApi + "messages/cant/2")
                .then(response => {
                    if (response.data.status == "OK") {
                        this.messages = response.data.data;
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

<style scoped>
    #mh-client-review{
        display: flex;
        flex-wrap: nowrap;
        overflow-x: auto;
        width: 90%;
        justify-content: center;
        margin: auto;
        align-items: center;
    }
    .mh-testimonial .each-client-item {
        margin: 16px 13px;
        max-width: 24rem;
        width: 24rem;
        min-width: 24rem;
    }
    .mh-testimonial .mh-client-item{
        min-height: 402px;
    }
    .img-rounded-user {
        border-radius: 50%;
        height: 60px;
        width: 60px;
        background-color: #f8c146;
    }
    .img-rounded-owner {
        border-radius: 50%;
        height: 40px;
        width: 40px;
        background-color: #ccc;
    }
    .content-messages {
        width: 70%;
        padding-left: 20px;
    }
    .content-messages-owner {
        width: 100%;
        padding-left: 20px;
    }
    .img-rounded-owner img{
        height: 40px;
        width: 40px;
        border-radius: 50%;
    }
    .content-messages p {
        margin-top: 10px;
        color: rgb(116, 116, 116);
    }
    .content-messages i {
        color: rgb(116, 116, 116);
    }
    .content-btns {
        width: 20%;
        display: flex;
        justify-content: flex-end;
        align-items: center;
        height: 100%;
    }
    .content-btns i {
        font-size: 40px;
        cursor: pointer;
    }
</style>
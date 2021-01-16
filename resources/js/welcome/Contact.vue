<template>
    <div>
        <div class="container">
            <div class="row section-separator">
                <div
                    class="col-sm-12 section-title wow fadeInUp"
                    data-wow-duration="0.8s"
                    data-wow-delay="0.2s"
                >
                    <h3>Contacta con Clamonsf</h3>
                </div>
                <div class="col-sm-12 mh-footer-address">
                    <div class="row">
                        <div class="col-sm-12 col-md-4">
                            <div
                                class="mh-address-footer-item dark-bg shadow-1 wow fadeInUp"
                                data-wow-duration="0.8s"
                                data-wow-delay="0.5s"
                            >
                                <div class="each-icon">
                                    <i class="fa fa-envelope-o"></i>
                                </div>
                                <div class="each-info">
                                    <h4>Correo electronico</h4>
                                    <a
                                        target="_blank"
                                        href="mailto:clamonsf.jhon@hotmail.com"
                                        >clamonsf.jhon@hotmail.com</a
                                    ><br />
                                    <a
                                        target="_blank"
                                        href="mailto:fernando.claros@misena.edu.co"
                                        >fernando.claros@misena.edu.co</a
                                    >
                                </div>
                            </div>
                        </div>
                        <div class="col-sm-12 col-md-4">
                            <div
                                class="mh-address-footer-item dark-bg shadow-1 wow fadeInUp"
                                data-wow-duration="0.8s"
                                data-wow-delay="0.7s"
                            >
                                <div class="each-icon">
                                    <i class="fa fa-phone"></i>
                                </div>
                                <div class="each-info">
                                    <h4>Telefonos</h4>
                                    <a
                                        target="_blank"
                                        href="callto:(315)-6705-317"
                                        >+57 315 6705317</a
                                    ><br />
                                    <a
                                        target="_blank"
                                        href="callto:(313)-8839-019"
                                        >+57 313 8839019</a
                                    >
                                </div>
                            </div>
                        </div>
                        <div class="col-sm-12 col-md-4">
                            <div
                                class="mh-address-footer-item dark-bg shadow-1 wow fadeInUp"
                                data-wow-duration="0.8s"
                                data-wow-delay="0.3s"
                            >
                                <div class="each-icon">
                                    <i class="fa fa-location-arrow"></i>
                                </div>
                                <div class="each-info">
                                    <h4>Ubicación</h4>
                                    <address>
                                        Pitalito - huila. Colombia<br />
                                        Estamons principalmente en la Web
                                    </address>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="row">
                    <div
                        class="col-sm-12 col-md-8 wow shadow-sm wow fadeInUp px-4"
                        data-wow-duration="0.8s"
                        data-wow-delay="0.3s"
                    >
                        <h3>
                            <i class="fa fa-envelope-o mr-2 my-4"></i>
                            <b>Dejanos un mensaje</b>
                        </h3>
                        <form
                            class="wow fadeInUp"
                        >
                            <div
                                class="h3 text-center hidden"
                            ></div>
                            <div class="row">
                                <div class="col-md-6 col-sm-12">
                                    <input
                                        v-model="name"
                                        class="form-control text-dark"
                                        id="name"
                                        type="text"
                                        placeholder="Ingresa tu nombre"
                                        required
                                    />
                                </div>
                                <div class="col-md-6 col-sm-12">
                                    <input
                                        v-model="company"
                                        class="form-control text-dark"
                                        id="company"
                                        type="text"
                                        placeholder="Ingresa el nombre de tu empresa o negocio"
                                        required
                                    />
                                </div>
                                <div class="col-sm-12">
                                    <input
                                        v-model="email"
                                        class="form-control text-dark"
                                        id="email"
                                        type="email"
                                        placeholder="Ingresa tu correo electronico"
                                        required
                                    />
                                </div>
                                <div class="col-sm-12">
                                    <textarea
                                        v-model="message"
                                        class="contact-message text-dark"
                                        style="border: 4px solid #f8f8f8; border-radius: 2px;"
                                        id="message"
                                        rows="6"
                                        placeholder="Dejanos saber en que podemos ayudarte."
                                        required
                                    ></textarea>
                                </div>
                                <!-- Subject Button -->
                                <div class="btn-form col-sm-12 col-md-12 mb-4">
                                    <button
                                        style="background-color:black;"
                                        type="button"
                                        class="btn btn-block text-white w-100"
                                        v-on:click.prevent="sendMessage()"
                                    >
                                        Enviar mensaje
                                        <i
                                            class="fa fa-send ml-2 text-white"
                                        ></i>
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>

                    <div 
                        class="col-sm-12 col-md-4 wow wow fadeInUp px-4 mt-4"
                        data-wow-duration="0.8s"
                        data-wow-delay="0.3s"
                        style="position: relative;"
                    >
                        <div class="logo-company mt4">
                            <h1 class="text-warning mt-4"><b>Clamonsf.com</b></h1>
                        </div>                        
                        <ul 
                            class="social-icon list-socials mt-4"
                        >
                            <li>
                                <a
                                    target="_blank"
                                    href="https://api.whatsapp.com/send/?phone=%2B573156715317&text=Hola+Clamonsf+me+interesan+tus+servicios"
                                    ><i class="fa fa-whatsapp"></i
                                ></a>
                            </li>
                            <li>
                                <a
                                    target="_blank"
                                    href="http://github.com/clamonsf"
                                    ><i class="fa fa-github"></i
                                ></a>
                            </li>
                            <li>
                                <a target="_blank" href="https://clamonsf.com"
                                    ><i class="fa fa-dribbble"></i
                                ></a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data () {
        return {
            name: '',
            company: '',
            email: '',
            message: ''
        }
    },
    methods: {
        async sendMessage() {

            if(this.name.trim() == '') {
                alert("El nombre es requirido");
                return false;
            }
            if(this.email.trim() == '') {
                alert("El email es requirido");
                return false;
            }
            if(this.message.trim() == '') {
                alert("El mensaje es requirido");
                return false;
            }

            await axios.post(this.$store.state.urlApi + 'messages', {
                name: this.name,
                company: this.company,
                email: this.email,
                message: this.message
            })            
            .then(response => {

                if(response.data.status == 'OK') {
                    alert("Mensaje enviado con exito.\n\nClamonsf pronto se pondra en contacto con tigo.\nGracias");
                    this.name = "";
                    this.company = "";
                    this.email = "";
                    this.message = "";
                } else {
                    alert("No fue posible enviar el mensaje por favor recarga la pagina e intentalo de nuevo");
                }

            }).catch(e => alert(e));
        }
    }
}
</script>

<style scoped>
    .list-socials{

        display: flex;
        justify-content: center;
        left: -1px;
    }
    .list-socials li>a>i{
        font-size: 30px;
    }
    .logo-company{        
        width: 100%;
        display: flex;
        justify-content: center;
        left: -1px;
    }
</style>
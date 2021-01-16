<template>
    <div>
        <v-title title="Mensajes de tus clientes y usuarios" />

        <!-- Modal crear portafolios-->
        <v-modal id="modal-message-to-user">
            <template slot="title">
              <span v-if="itemActive != null">Responder a {{itemActive.name}}</span>
              <span v-else>No es posible respondder</span>
            </template>
            <template slot="content">
                <form novalidate>
                    <div class="alert alert-info" v-if="itemActive != null">
                        <h4>Mensaje del usuario</h4>
                        <span v-text="itemActive.message"></span>
                    </div>
                    <div class="alert alert-danger" v-else>
                        <h4>No es posible mostrar el mensaje</h4>
                    </div>

                    <div class="form-group">
                        <label for="message">Mensaje</label><br />
                        <textarea
                            id="message"
                            class="form-control"                            
                            style="height: 200px"
                            placeholder="Responde al usuario para que tu proximo proyecto o servicio no se pierda."
                            v-model="message"
                        ><template v-if="itemActive != null" v-text="itemActive.message_rsa"></template></textarea>
                    </div>

                    <button
                        type="button"
                        class="btn btn-outline-warning btn-block"
                        v-on:click.prevent="storeRsa()"
                        :disabled="itemActive == null ? true : false"
                    >
                        Responder <i class="fa fa-send ml-2"></i>
                    </button>
                </form>
            </template>
        </v-modal>

        <v-content>
            <div
                class="card card-body"
                v-for="(message, key) in messages"
                :key="key"
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

                        <div class="card card-body" v-if="message.message_rsa">
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
                        <i class="fa fa-trash text-danger mr-2"></i>
                        <i
                            class="fa fa-envelope-o text-warning ml-3"
                            data-toggle="modal"
                            data-target="#modal-message-to-user"
                            v-on:click.prevent="itemActive = message"
                        ></i>
                    </div>
                </div>
            </div>
        </v-content>
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
                .get(this.$store.state.urlApi + "messages/cant/ALL")
                .then(response => {
                    if (response.data.status == "OK") {
                        this.messages = response.data.data;
                    } else {
                        alert("No es posible cargar los datos");
                    }
                })
                .catch(e => alert(e))
                .finally(() => () => {});
        },
        /**
         * Listar mensajes
         */
        async storeRsa() {
            if (this.itemActive == null) {
                alert(
                    "El item al que intentas responder esta presentando problemas."
                );
                return false;
            }

            await axios
                .put(
                    this.$store.state.urlApi + "messages/" + this.itemActive.id,
                    {
                        message: this.message
                    }
                )
                .then(response => {
                    if (response.data.status == "OK") {
                        this.messages.map(x => {
                            if (x.id == response.data.data.id) {
                                x.message_rsa = response.data.data.message_rsa;
                                x.message_date =
                                    response.data.data.message_date;
                            }
                        });

                        this.message = "";
                        alert("Respuesta enviada con exito.");
                    } else if (response.data.status == "NO_FOUND") {
                        alert(
                            "El item al que intentas responder esta presentando problemas."
                        );
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
.img-rounded-owner img{
    height: 40px;
    width: 40px;
    border-radius: 50%;
}
.content-messages {
    width: 70%;
    padding-left: 20px;
}
.content-messages-owner {
    width: 100%;
    padding-left: 20px;
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
}
.content-btns i {
    font-size: 20px;
    cursor: pointer;
}
</style>

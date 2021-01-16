<template>
    <div>

        <v-title title="Detalles de la empresa" />

        <v-content>
            <form novalidate>
                <div class="form-group">
                    <label for="name">Empresa</label><br />
                    <input
                        type="text"
                        class="form-control"
                        id="name"
                        placeholder="Nombre de la empresa"
                        v-model="name"
                    />
                </div>

                <div class="form-group">
                    <label for="bio">Acerca de</label><br />
                    <textarea
                        id="bio"
                        style="height:100px"
                        class="w-100 p-3"
                        placeholder="Acerca de la empresa"
                        v-model="bio"
                    ></textarea>
                </div>

                <div class="form-group">
                    <label for="email">Correo Electronico</label><br />
                    <input
                        type="email"
                        class="form-control"
                        id="email"
                        placeholder="Correo electronico de la empresa"
                        v-model="email"
                    />
                </div>

                <div class="form-group">
                    <label for="phone">Telefono</label><br />
                    <input
                        type="text"
                        class="form-control"
                        id="phone"
                        placeholder="Telefono de la empresa"
                        v-model="phone"
                    />
                </div>

                <div class="form-group">
                    <label for="address">Dirección</label><br />
                    <input
                        type="text"
                        class="form-control"
                        id="address"
                        placeholder="Dirección de la empresa"
                        v-model="address"
                    />
                </div>

                <div class="row">
                    <div class="form-group">
                        <label for="github">Github</label><br />
                        <input
                            type="text"
                            class="form-control"
                            id="github"
                            placeholder="Github de la empresa"
                            v-model="github"
                        />
                    </div>
                    <div class="form-group">
                        <label for="web">Sitio WEB</label><br />
                        <input
                            type="text"
                            class="form-control"
                            id="web"
                            placeholder="Sitio web de la empresa"
                            v-model="web"
                        />
                    </div>
                </div>

                <button class="btn btn-warning" v-on:click.prevent="update()">
                    Guardar <i class="fa fa-save ml-2"></i>
                </button>
            </form>
        </v-content>
    </div>
</template>

<script>
export default {
    data() {
        return {
          name: '',
          bio: '',
          email: '',
          phone: '',
          address: '',
          github: '',
          web: ''
        };
    },
    mounted() {
        this.loadInfo()
    },
    methods: {
        /**
         * Cargar datos de la emrpesa
         */
        async loadInfo() {

            if(this.$store.state.user == null) {
              alert("No es posible continuar, el usuario activo esta presentando problemas");
              return false;
            }

            await axios
                .get(this.$store.state.urlApi + `companies/${this.$store.state.user.id}`)
                .then(response => {

                  if(response.data.status == 'OK') {

                    this.$store.state.company = response.data.data;

                    this.name = response.data.data.name;
                    this.bio = response.data.data.bio;
                    this.email = response.data.data.email;
                    this.phone = response.data.data.phone;
                    this.address = response.data.data.address;
                    this.github = response.data.data.github;
                    this.web = response.data.data.web;

                  } else {
                      alert("No es posible continuar, el usuario activo esta presentando problemas");
                  }

                })
                .catch(e => alert(e))
                .finally(() => () => {});
        },
        /**
         * guardar cambios de la emrpesa
         */
        async update() {

            await axios
                .put(this.$store.state.urlApi + `companies/${this.$store.state.user.id}`, {
                    name: this.name,
                    bio: this.bio,
                    email: this.email,
                    phone: this.phone,
                    address: this.address,
                    github: this.github,
                    web: this.web,
                })
                .then(response => {

                  if(response.data.status == 'OK') {

                    this.$store.state.company = response.data.data;

                    this.name = response.data.data.name;
                    this.bio = response.data.data.bio;
                    this.email = response.data.data.email;
                    this.phone = response.data.data.phone;
                    this.address = response.data.data.address;
                    this.github = response.data.data.github;
                    this.web = response.data.data.web;

                    alert("Datos actualizados con exito");

                  } else {
                      alert("No es posible continuar, el usuario activo esta presentando problemas");
                  }

                })
                .catch(e => alert(e))
                .finally(() => () => {});
        }
    }
};
</script>

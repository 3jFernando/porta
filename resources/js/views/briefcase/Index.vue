<template>
    <div>
        <v-title title="Portafolio" />

        <!-- Modal crear portafolios-->
        <v-modal id="modal-create-briefcase">
            <template slot="title">Crear portafolios</template>
            <template slot="content">
                <form novalidate>
                    <div class="form-group">
                        <label for="name">Nombre del proyecto o servicio</label
                        ><br />
                        <input
                            id="name"
                            type="text"
                            class="form-control"
                            placeholder="Nombre del proyecto o servicio"
                            v-model="name"
                        />
                    </div>

                    <div class="form-group">
                        <label for="note">Descripción del proyecto</label><br />
                        <textarea
                            id="note"
                            class="form-control"
                            placeholder="Descripción del proyecto"
                            v-model="note"
                        ></textarea>
                    </div>

                    <div class="form-group">
                        <label for="image-file">Fotografia</label><br />
                        <input
                            type="file"
                            class="form-control"
                            id="image-file"
                        />
                        <input
                            type="hidden"
                            class="form-control"
                            v-model="image"
                        />
                    </div>

                    <br />

                    <button
                        type="button"
                        class="btn btn-outline-warning btn-block"
                        v-on:click.prevent="store()"
                    >
                        AGREGAR AL PORTAFOLIO <i class="fa fa-plus ml-2"></i>
                    </button>
                </form>
            </template>
        </v-modal>

        <v-content>
            <!-- Button trigger modal -->
            <div class="d-flex justify-content-end">
                <button
                    type="button"
                    class="btn btn-warning text-white"
                    data-toggle="modal"
                    data-target="#modal-create-briefcase"
                >
                    Agregar proyecto al Portafolio
                </button>
            </div>

            <!-- listado de portafolios -->
            <div class="row row-cols-1 row-cols-md-3 mt-4">
                <div
                    class="col mb-4"
                    v-for="(briefcase, key) in briefcases"
                    :key="key"
                >
                    <div class="card shadow">
                        <img
                            :src="briefcase.image"
                            class="card-img-top"
                            :alt="briefcase.name"
                        />
                        <div class="card-body">
                            <h5 class="card-title" v-text="briefcase.name"></h5>
                            <p class="card-text" v-text="briefcase.note"></p>
                        </div>
                        <div class="card-body">
                            <a href="#" class="card-link text-warning"
                                ><i class="fa fa-edit mr-2"></i> Editar</a
                            >
                            <a href="#" class="card-link text-dark"
                                ><i class="fa fa-trash mr-2"></i> Eliminar</a
                            >
                        </div>
                    </div>
                </div>
            </div>
        </v-content>
    </div>
</template>

<script>
export default {
  data () {
    return {
      // nuevo
      name: '',
      note: '',
      image: '',
      typesValids: ['image/png', 'image/jpg', 'image/jpeg'],

      // listado
      briefcases: [],
    }
  },
  mounted () {
    this.load();
  },
  methods: {
    /**
     * Crear portafolio
     */
    async store() {

      // validar que se haya seleccionado una imagen
      let _img = document.getElementById('image-file');
      if(!_img.files.length) {
        alert('no has seleccionado ninguna fotografia aun!');
        return false;
      }

      // validar que se un tipo valido
      let validFile = false;
      this.typesValids.map(x => {
        if(validFile) return false;
        // valida
        if(x == _img.files[0].type) {
          validFile = true;
          return false;
        }
      })
      if(!validFile) {
        alert('El archivo seleccionado no es valido \n\nRecuerda que dede ser un archivo de tipo:\n* .png\n* .jpg\n* .jpeg');
        return false;
      }

      /**
       * Crear imagen para parsear a base64
       * base64encoded string
       */
      var reader = new FileReader();
      reader.readAsDataURL(_img.files[0]);

      reader.onload = () => {

        axios.post(this.$store.state.urlApi + 'briefcases', {
          name: this.name,
          note: this.note,
          image: reader.result,
        }).then(response => {

          if(response.data.status == 'OK') {

            this.briefcases.push(response.data.data);
            this.name = "";
            this.note = "";
            this.image = "";

          } else {
            alert("No es posible crear el portafolio");
          }

        }).catch(e => alert(e)).finally(() => () => {});

      };
      reader.onerror = function (error) {
        alert("El archivo seleccionado esta presentando problemas por favor intentelo mas tarde");
      };
    },
    /**
     * Listar portafolios
     */
    async load() {
      await axios.get(this.$store.state.urlApi + 'briefcases').then(response => {

        if(response.data.status == 'OK') {

          this.briefcases = response.data.data;

        } else {
          alert("No es posible cargar los datos");
        }

      }).catch(e => alert(e)).finally(() => () => {});
    }
  }
}
</script>

<template>
  <card class="card" title="Editar Atividade">
    <div>
      <form @submit.prevent>
        <div class="row">
          <div class="col-md-5">
            <fg-input
              type="text"
              label="Categoria"
              placeholder="Paper dashboard"
              v-model="atividade.categoria"
            >
            </fg-input>
          </div>
          <div class="col-md-3">
            <fg-input
              type="text"
              label="Atividade"
              placeholder="Username"
              v-model="atividade.nome"
            >
            </fg-input>
          </div>
          <div class="col-md-4">
            <fg-input
              type="email"
              label="Região"
              placeholder="Email"
              v-model="atividade.regiao"
            >
            </fg-input>
          </div>
        </div>

        <div class="row">
          <div class="col-md-6">
            <fg-input
              type="text"
              label="Dificuldade"
              placeholder="First Name"
              v-model="atividade.dificuldade"
            >
            </fg-input>
          </div>
          <div class="col-md-6">
            <fg-input
              type="text"
              label="Preço"
              placeholder="Last Name"
              v-model="atividade.preco"
            >
            </fg-input>
          </div>
        </div>

        <div class="row">
          <div class="col-md-12">
            <div class="form-group">
              <label>Descrição</label>
              <textarea
                rows="5"
                class="form-control border-input"
                placeholder="Here can be your description"
                v-model="atividade.descricao"
              >
              </textarea>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-md-12">
            <div class="form-group">
              <label>Programa</label>
              <textarea
                rows="5"
                class="form-control border-input"
                placeholder="Here can be your description"
                v-model="atividade.programa"
              >
              </textarea>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-md-12">
            <div class="form-group">
              <label>Inclui</label>
              <textarea
                rows="5"
                class="form-control border-input"
                placeholder="Here can be your description"
                v-model="atividade.inclui"
              >
              </textarea>
            </div>
          </div>
        </div>
        <div class="text-center">
          <p-button type="info" round @click.native.prevent="updateProfile">
            Editar Atividade
          </p-button>
        </div>
        <div class="clearfix"></div>
      </form>
    </div>
  </card>
</template>
<script>
export default {
  data() {
    const idMarcacao = this.$route.params.id;
    let atividadesData = JSON.parse(localStorage.getItem("atividades")) || {};
    return {
      atividade: atividadesData.find(objeto => objeto.id == idMarcacao) || {},
};
  },
  methods: {
    updateProfile() {
      let atividadesData = JSON.parse(localStorage.getItem("atividades")) || {};
      let indiceObjeto = atividadesData.findIndex(objeto => objeto.id === this.atividade.id);
      atividadesData[indiceObjeto] = this.atividade
      localStorage.setItem("atividades", JSON.stringify(atividadesData))
      alert("Atividade " + this.atividade.nome + " atualizada");
    },
  },
};
</script>
<style></style>

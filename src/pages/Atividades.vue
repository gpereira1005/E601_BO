<template>
  <div class="row">
    <div class="col-12">
      <h4>Atividades</h4>
      <card>
        <div slot="raw-content" class="table-responsive">
          <table class="table table-striped">
            <thead>
              <tr>
                <th>Id</th>
                <th>Atividade</th>
                <th>Região</th>
                <th>Dificuldade</th>
                <th>Preço</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(item, index) in tabelaDados" :key="index">
                <td>{{ item.id }}</td>
                <td>{{ item.nome }}</td>
                <td>{{ item.regiao }}</td>
                <td>{{ item.dificuldade }}</td>
                <td>{{ item.preco }}€</td>
                <td><router-link :to="'editar_atividade/'+ item.id">Editar</router-link></td>
              </tr>
            </tbody>
          </table>
        </div>
      </card>
    </div>
  </div>
</template>
<script>
//import { PaperTable } from "@/components";
//const tableColumns = ["ID_Marcacao", "ID_Cliente", "ID_Atividade", "dataReserva", "horaInicio", "n_pessoas"];
//const tableData = JSON.parse(localStorage.getItem("marcacoes"));
//console.log(tableData)

export default {
  data() {
    return {
      tabelaDados: []
    };
  },
  mounted() {
    let dadosLocalStorage = JSON.parse(localStorage.getItem('atividades'));
    console.log(dadosLocalStorage)
    if (dadosLocalStorage) {
      this.tabelaDados = dadosLocalStorage;
    }
  }, 
};
</script>
<style></style>

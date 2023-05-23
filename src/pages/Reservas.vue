<template>
  <div class="row">
    <div class="col-12">
      <h4>Pedidos de Reserva</h4>
      <card>
        <div slot="raw-content" class="table-responsive">
          <table class="table table-striped">
            <thead>
              <tr>
                <th>Id</th>
                <th>Atividade</th>
                <th>Cliente</th>
                <th>Data</th>
                <th>Horário</th>
                <th>Nº Pessoas</th>
                <th>Responsável</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(item, index) in tabelaDados" :key="index">
                <td>{{ item.id_marcacao }}</td>
                <td>{{ item.id_atividade }}</td>
                <td>{{ item.id_cliente }}</td>
                <td>{{ item.dataReserva }}</td>
                <td>{{ item.horaInicio }}:{{ item.horaFim }}</td>
                <td>{{ item.n_pessoas }}</td>
                <td>{{ item.funcResponsavel }}</td>
                <td>Ver Detalhes</td>
              </tr>
            </tbody>
          </table>
        </div>
      </card>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      tabelaDados: []
    };
  },
  mounted() {
    let dadosLocalStorage = JSON.parse(localStorage.getItem('reservas'));
    console.log(dadosLocalStorage)
    if (dadosLocalStorage) {
      this.tabelaDados = dadosLocalStorage;
    }
  },
};
</script>
<style></style>

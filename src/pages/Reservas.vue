<template>
  <div class="row">
    <div class="col-12">
      <h4>Reservas</h4>
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
              </tr>
            </thead>
            <tbody>
              <tr v-for="(item, index) in tabelaDados" :key="index">
                <td>{{ item.id }}</td>
                <td>{{ getNomeAtividade(item.idAtividade) }}</td>
                <td>{{ getNomeCliente(item.id_cliente) }}</td>
                <td>{{ item.dataReserva }}</td>
                <td>{{ item.horaInicio }}:{{ item.horaFim }}</td>
                <td>{{ item.numPessoas }}</td>
                <td>{{ getNomeFuncionario(item.funcResponsavel) }}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </card>
    </div>
  </div>
</template>
<script>
/*let listaUtilizadores = [{
    "id": "0",
    "role": "admin",
    "username": "admin",
    "nome": "Administrador",
    "email": "admin@gmail.com",
    "password": "admin"
},
{
    "id": "1",
    "role": "cliente",
    "username": "cliente123",
    "nome": "Cliente 1",
    "email": "cliente1@gmail.com",
    "password": "1234"
},
{
    "id": "2",
    "role": "cliente",
    "username": "cliente1234",
    "nome": "Cliente 2",
    "email": "cliente2@gmail.com",
    "password": "1234"
},
{
    "id": "3",
    "role": "cliente",
    "username": "cliente12345",
    "nome": "Cliente 3",
    "email": "cliente2@gmail.com",
    "password": "1234"
}
]

let listaReservas = [
  {
    "id": "0",
    "idAtividade": "1",
    "id_cliente": "1",
    "dataReserva": "2023-05-25",
    "horaInicio": "16:00",
    "horaFim": "17:00",
    "continuidade": "Única",
    "numPessoas": "4",
    "observacoes": "Necessidade de cadeira de rodas",
    "responsavel": {
      "nome": "João",
      "email": "joao@gmail.com",
      "telemovel": "97654321",
      "morada": "Barcelos",
      "dataNascimento": "03/12/1998"
    },
    "dadosFaturacao": {
      "nome": "João",
      "nif": "123456789",
      "pais": "portugal",
      "morada": "Barcelos",
      "codigoPostal": "4990-735"
    },
    "preco": "25€",
    "estado": "Aceite",
    "funcResponsavel": "1"
  },
  {
    "id": "1",
    "idAtividade": "2",
    "id_cliente": "2",
    "dataReserva": "2023-05-27",
    "horaInicio": "16:00",
    "horaFim": "17:00",
    "continuidade": "Única",
    "numPessoas": "6",
    "observacoes": "Necessidade de cadeira de rodas",
    "responsavel": {
      "nome": "Ricardo",
      "email": "ricardo@gmail.com",
      "telemovel": "9787821",
      "morada": "Braga",
      "dataNascimento": "03/12/1998"
    },
    "dadosFaturacao": {
      "nome": "Ricardo",
      "nif": "123456789",
      "pais": "Portugal",
      "morada": "Braga",
      "codigoPostal": "4990-735"
    },
    "preco": "15€",
    "estado": "Cancelada",
    "funcResponsavel": "2"
  },
  {
    "id": "3",
    "idAtividade": "1",
    "id_cliente": "1",
    "dataReserva": "2023-05-29",
    "horaInicio": "16:00",
    "horaFim": "18:00",
    "continuidade": "Única",
    "numPessoas": "7",
    "observacoes": "",
    "responsavel": {
      "nome": "Pedro",
      "email": "pedro@gmail.com",
      "telemovel": "97654321",
      "morada": "Porto",
      "dataNascimento": "25/12/1998"
    },
    "dadosFaturacao": {
      "nome": "Pedro",
      "nif": "123456789",
      "pais": "portugal",
      "morada": "Porto",
      "codigoPostal": "4990-735"
    },
    "preco": "35€",
    "estado": "Cancelada",
    "funcResponsavel": "2"
  }
  ]
  
  let listaFuncionarios = [{
    "id": "0",
    "nome": "Funcionário 1",
    "email": "func1@gmail.com"
},
{
    "id": "1",
    "nome": "Funcionário 2",
    "email": "func2@gmail.com"
},
{
    "id": "2",
    "nome": "Funcionário 2",
    "email": "func2@gmail.com"
},
{
    "id": "3",
    "nome": "Funcionário 3",
    "email": "func3@gmail.com"
}
]

const listaAtividades = [{
  "id": "0",
  "categoria": "maritimos",
  "imagem": "imgs/canyoning_geres_arado_sup_4.jpg",
  "thumb": "imgs/canyoning.jpg",
  "icon": "imgs/icons/can.png",
  "nome": "Canyoning",
  "regiao": "Parque Nacional Peneda-Gerês",
  "dificuldade": "Dificil", 
  "descricao": "Este percurso apresenta uma extensão de cerca de 1000 metros percorridos com recurso a 4 rapeis que variam entre os 6 e 40 metros de altura, caminhada pelo leito do rio, progressão aquática e pequenos saltos para a água. Localizado em pleno Parque Nacional Peneda Gerês, a uma hora e meia de automóvel do Porto, apresenta um fantástico enquadramento natural e paisagístico e grandes lagoas verdes de água límpida. Recomendamos experiência anterior em canyoning ou rapel.",
  "programa": [
    "8:00 - Pick up no local de alojamento (no caso de requerer transporte)", 
    "9:30 - Chegada / Ponto de encontro;", 
    "9:40 - Briefing e entrega do equipamento;",
    "10:10 - Início da atividade;",
    "12:30 - Pequena paragem para reforço energético;",
    "16:00 - Final da descida;",
    "16:30 - Snack (opcional);", 
    "18:10 - Drop off no local de alojamento (no caso de requerer transporte)."],
  "inclui": ["Transporte (quando solicitado) a partir do Grande Porto, Braga e Gerês", 
    "enquadramento técnico e acompanhamento permanente de monitores altamente qualificados", 
    "seguros em conformidade com a lei (disponível para consulta)", 
    "botas de canyoning (Adidas Hydro Lace)", 
    "fato isotérmico de alta performance", 
    "meias de neoprene", 
    "capacete de segurança", 
    "arnês com proteção", 
    "longe dupla", 
    "descensor", 
    "luvas de neoprene (quando necessário)", 
    "sacos de transporte", 
    "bidons estanque", 
    "colete salva-vidas (quando necessário)",
    "oferta de fotos e vídeos da actividade."],
  "trazer": ["Calção/fato de banho", 
    "Toalha",
    "Snack (ou requerer por 5€ extra)",
    "Água"],
  "preco": "15",
  "extra": "Snack - 5€"
},
{
  "id": "1",
  "categoria": "maritimos",
  "imagem": "imgs/canoagem2.jpg",
  "thumb": "imgs/canoagem.jpg",
  "icon": "imgs/icons/man-in-canoe.png",
  "nome": "Canoagem",
  "regiao": "Rio Douro",
  "dificuldade": "Medio", 
  "descricao": "Este percurso apresenta uma praticada em percursos de 650 e 700 metros. Os canoístas devem passar por 18 a 25 portas, com o menor número de erros possível e num menor espaço de tempo.",
  "programa": [
    "8:00 - Pick up no local de alojamento (no caso de requerer transporte)", 
    "9:30 - Chegada / Ponto de encontro;", 
    "9:40 - Briefing e entrega do equipamento;",
    "10:10 - Início da atividade;",
    "12:30 - Pequena paragem para reforço energético;",
    "16:00 - Final da descida;",
    "16:30 - Snack (opcional);", 
    "18:10 - Drop off no local de alojamento (no caso de requerer transporte)."],
  "inclui": ["Transporte (quando solicitado) a partir do Grande Porto, Braga e Gerês", 
    "enquadramento técnico e acompanhamento permanente de monitores altamente qualificados", 
    "seguros em conformidade com a lei (disponível para consulta)", 
    "Botas de neoprene anti-derrapantes", 
    "Fato isotérmico de neoprene", 
    "Camisola térmico", 
    "Canoa", 
    "Capacete de segurança", 
    "Colete de salvação", 
    "Pá", 
    "Pagaia", 
    "Saiote", 
    "bidons estanque", 
    "oferta de fotos e vídeos da actividade."],
  "trazer": ["Calção/fato de banho", 
    "Toalha",
    "Snack (ou requerer por 5€ extra)",
    "Água"],
  "preco": "20",
  "extra": "Snack - 5€"
},
{
  "id": "2",
  "categoria": "maritimos",
  "imagem": "imgs/flyboard2.jpg",
  "thumb": "imgs/flyboard.jpg",
  "icon": "imgs/icons/flyboard.png",
  "nome": "Flyboard",
  "regiao": "Porto",
  "dificuldade": "Medio", 
  "descricao": "O Flyboard consiste em ficar parado numa placa (com botas, no qual posiciona os pés) que está conectado a uma mangueira longa, que por sua vez está conectada a um jet ski.",
  "programa": [
    "8:00 - Pick up no local de alojamento (no caso de requerer transporte)", 
    "9:30 - Chegada / Ponto de encontro;", 
    "9:40 - Briefing e entrega do equipamento;",
    "10:10 - Início da atividade;",
    "12:30 - Almoço;",
    "14:30 - Drop off no local de alojamento (no caso de requerer transporte)."],
  "inclui": ["Transporte (quando solicitado) a partir do Grande Porto, Braga e Gerês", 
    "enquadramento técnico e acompanhamento permanente de monitores altamente qualificados", 
    "seguros em conformidade com a lei (disponível para consulta)",  
    "Capacete de segurança", 
    "colete salva-vidas (quando necessário)",
    "oferta de fotos e vídeos da actividade."],
  "trazer": ["Calção/fato de banho", 
    "Toalha",
    "Snack (ou requerer por 5€ extra)",
    "Água"],
  "preco": "15",
  "extra": "Snack - 5€"
},
{
  "id": "3",
  "categoria": "terrestres",
  "imagem": "imgs/paint2.jpg",
  "thumb": "imgs/paintball.png",
  "icon": "imgs/icons/paintball.png",
  "nome": "Paintball",
  "regiao": "Vila Nova de Gaia",
  "dificuldade": "Facil", 
  "descricao": "O Paintball é jogado ao ar livre, em campos de floresta ou urbanos, nos quais se desenvolve o espírito de equipa, a responsabilidade individual, a liderança e a tomada de decisões sob pressão, exigindo reações rápidas e pensamentos estratégicos.",
  "programa": [
    "8:00 - Pick up no local de alojamento (no caso de requerer transporte)", 
    "9:30 - Chegada / Ponto de encontro;", 
    "9:40 - Briefing e entrega do equipamento;",
    "10:10 - Início da atividade;",
    "12:30 - Pequena paragem para reforço energético;",
    "16:00 - Continuação da atividade;",
    "16:30 - Snack (opcional);", 
    "18:10 - Drop off no local de alojamento (no caso de requerer transporte)."],
  "inclui": ["Transporte (quando solicitado) a partir do Grande Porto, Braga e Gerês", 
    "enquadramento técnico e acompanhamento permanente de monitores altamente qualificados", 
    "seguros em conformidade com a lei (disponível para consulta)", 
    "100 bolas", 
    "Casaco e máscara ",
    "oferta de fotos e vídeos da actividade."],
  "trazer": [],
  "preco": "18",
  "extra": "Snack - 5€"
},
{
  "id": "4",
  "categoria": "terrestres",
  "imagem": "imgs/passeiostt2.jpg",
  "thumb": "imgs/passeiosTT.jpg",
  "icon": "imgs/icons/jeep.png",
  "nome": "Passeios TT",
  "regiao": "Douro Superior e Trás-os-Montes",
  "dificuldade": "Medio", 
  "descricao": "O percurso é marcado por trilhos fantásticos para quem procura desfrutar paisagens únicas entre Douro Superior e Trás-os-Montes, com alternativas de troços mais difíceis para os mais audazes.",
  "programa": [
    "08:30 - Abertura do secretariado e pequeno-almoço",
    "09:00 - Início do Passeio",
    "10:30 - Porto de Honra\ hidratação",
    "12:00 - reforço",
    "15:00 - Porto de Honra\ hidratação",
    "16:00 - Almoço",
    "​17:00 - Pista de Obstáculos", 
    "18:10 - Drop off no local de alojamento (no caso de requerer transporte)."],
  "inclui": ["Transporte (quando solicitado) a partir do Grande Porto, Braga e Gerês", 
    "enquadramento técnico e acompanhamento permanente de monitores altamente qualificados", 
    "seguros em conformidade com a lei (disponível para consulta)",  
    "Capacete de segurança", 
    "colete salva-vidas (quando necessário)",
    "oferta de fotos e vídeos da actividade."],
  "trazer": [],
  "preco": "30",
  "extra": "Snack - 5€"
},
{
  "id": "5",
  "categoria": "terrestres",
  "imagem": "imgs/rapel2.jpg",
  "thumb": "imgs/rapel.jpg",
  "icon": "imgs/icons/rapel.png",
  "nome": "Rappel",
  "regiao": "Douro",
  "dificuldade": "Dificil", 
  "descricao": "Uma atividade vertical utilizada para descer de lugares altos com o auxílio de uma corda!",
  "programa": [
    "8:00 - Pick up no local de alojamento (no caso de requerer transporte)", 
    "9:30 - Chegada / Ponto de encontro;", 
    "9:40 - Briefing e entrega do equipamento;",
    "10:10 - Início da atividade;",
    "12:30 - Pequena paragem para reforço energético;",
    "16:00 - Final da descida;",
    "16:30 - Snack (opcional);", 
    "18:10 - Drop off no local de alojamento (no caso de requerer transporte)."],
  "inclui": ["Transporte (quando solicitado) a partir do Grande Porto, Braga e Gerês", 
    "enquadramento técnico e acompanhamento permanente de monitores altamente qualificados", 
    "seguros em conformidade com a lei (disponível para consulta)",  
    "Mosquetões",
    "Cordas",
    "Luvas",
    "Capacete",
    "Freio",
    "Cadeirinha, arnez ou baudrier",
    "oferta de fotos e vídeos da actividade."],
  "trazer": [],
  "preco": "40",
  "extra": "Snack - 5€"
},
{
  "id": "6",
  "categoria": "aereos",
  "imagem": "imgs/saltopa2.jpg",
  "thumb": "imgs/saltoParaquedas.jpg",
  "icon": "imgs/icons/paraquedas.png",
  "nome": "Paraquedas",
  "regiao": "Douro",
  "dificuldade": "Dificil", 
  "descricao": "Salto tandem realizado a 3000 metros de altitude com queda livre de aproximadamente 25 segundos.",
  "programa": [
    "8:00 - Pick up no local de alojamento (no caso de requerer transporte)", 
    "9:30 - Chegada / Ponto de encontro;", 
    "9:40 - Briefing e entrega do equipamento;",
    "10:10 - Início da atividade;",
    "12:30 - Almoço;",
    "14:30 - Drop off no local de alojamento (no caso de requerer transporte)."],
  "inclui": ["Transporte (quando solicitado) a partir do Grande Porto, Braga e Gerês", 
    "enquadramento técnico e acompanhamento permanente de monitores altamente qualificados", 
    "seguros em conformidade com a lei (disponível para consulta)",  
    "Salto com Instrutor a 3000 metros",
    "Todo o equipamento necessário para Salto",
    "Seguro Desportivo",
    "oferta de fotos e vídeos da actividade."],
  "trazer": [],
  "preco": "160",
  "extra": "Snack - 5€"
},
{
  "id": "7",
  "categoria": "aereos",
  "imagem": "imgs/slide2.jpg",
  "thumb": "imgs/slide.jpg",
  "icon": "imgs/icons/slide.png",
  "nome": "Slide",
  "regiao": "Gerês",
  "dificuldade": "Facil", 
  "descricao": "O slide é um desporto aventura que consiste numa descida rápida, onde o praticante desliza por um cabo de aço esticado com algum declive, utilizando como suporte algum equipamento de escalada.",
  "programa": [
    "8:00 - Pick up no local de alojamento (no caso de requerer transporte)", 
    "9:30 - Chegada / Ponto de encontro;", 
    "9:40 - Briefing e entrega do equipamento;",
    "10:10 - Início da atividade;",
    "12:30 - Almoço;",
    "14:30 - Drop off no local de alojamento (no caso de requerer transporte)."],
  "inclui": ["Transporte (quando solicitado) a partir do Grande Porto, Braga e Gerês", 
    "Enquadramento técnico e acompanhamento permanente de monitores altamente qualificados", 
    "Seguros em conformidade com a lei (disponível para consulta)",  
    "Capacete de segurança", 
    "Equipamento necessario",
    "Oferta de fotos e vídeos da actividade."],
  "trazer": [],
  "preco": "8",
  "extra": "Snack - 5€"
},
{
  "id": "8",
  "categoria": "aereos",
  "imagem": "imgs/parapente2.jpg",
  "thumb": "imgs/parapente.jpg",
  "icon": "imgs/icons/paragliding.png",
  "nome": "Parapente",
  "regiao": "Douro Litoral, Minho e Trás os Montes.",
  "dificuldade": "Dificil", 
  "descricao": "Voar de Parapente é uma experiência única e aquilo que mais gostamos de fazer. Voar e proporcionar aos outros uma experiência pedagógica. O parapente é sem dúvida a forma mais simples que o homem tem para voar e realizar o seu sonho mais antigo. Promovemos actividades ligadas á prática do parapente tanto para pilotos como para pessoas interessadas em experimentar o voo de parapente e quem sabe tornar-se piloto.",
  "programa": [
    "8:00 - Pick up no local de alojamento (no caso de requerer transporte)", 
    "9:30 - Chegada / Ponto de encontro;", 
    "9:40 - Briefing e entrega do equipamento;",
    "10:10 - Início da atividade;",
    "12:30 - Pequena paragem para reforço energético;",
    "16:00 - Continuação da atividade;",
    "16:30 - Snack (opcional);", 
    "18:10 - Drop off no local de alojamento (no caso de requerer transporte)."],
  "inclui": ["Transporte (quando solicitado) a partir do Grande Porto, Braga e Gerês", 
    "Enquadramento técnico e acompanhamento permanente de monitores altamente qualificados", 
    "Seguros em conformidade com a lei (disponível para consulta)",  
    "Capacete de segurança", 
    "Equipamento necessario para voar",
    "Oferta de fotos e vídeos da actividade."],
  "trazer": [],
  "preco": "80",
  "extra": "Snack - 5€"
}
]

let listaPedidos = [
    {
      "id": "0",
      "idAtividade": "1",
      "id_cliente": "1",
      "dataReserva": "2023-05-25",
      "horaInicio": "16:00",
      "horaFim": "17:00",
      "continuidade": "Única",
      "numPessoas": "4",
      "observacoes": "Necessidade de cadeira de rodas",
      "responsavel": {
        "nome": "João",
        "email": "joao@gmail.com",
        "telemovel": "97654321",
        "morada": "Barcelos",
        "dataNascimento": "03/12/1998"
      },
      "dadosFaturacao": {
        "nome": "João",
        "nif": "123456789",
        "pais": "portugal",
        "morada": "Barcelos",
        "codigopostal": "4990-735"
      },
      "preco": "25€"
    },
    {
      "id": "1",
      "idAtividade": "2",
      "id_cliente": "2",
      "dataReserva": "2023-05-27",
      "horaInicio": "16:00",
      "horaFim": "17:00",
      "continuidade": "Única",
      "numPessoas": "6",
      "observacoes": "Necessidade de cadeira de rodas",
      "responsavel": {
        "nome": "Ricardo",
        "email": "ricardo@gmail.com",
        "telemovel": "9787821",
        "morada": "Braga",
        "dataNascimento": "03/12/1998"
      },
      "dadosFaturacao": {
        "nome": "Ricardo",
        "nif": "123456789",
        "pais": "Portugal",
        "morada": "Braga",
        "codigoPostal": "4990-735"
      },
      "preco": "15€"
    },
    {
      "id": "3",
      "idAtividade": "1",
      "id_cliente": "1",
      "dataReserva": "2023-05-29",
      "horaInicio": "16:00",
      "horaFim": "18:00",
      "continuidade": "Única",
      "numPessoas": "7",
      "observacoes": "",
      "responsavel": {
        "nome": "Pedro",
        "email": "pedro@gmail.com",
        "telemovel": "97654321",
        "morada": "Porto",
        "dataNascimento": "25/12/1998"
      },
      "dadosFaturacao": {
        "nome": "Pedro",
        "nif": "123456789",
        "pais": "portugal",
        "morada": "Porto",
        "codigoPostal": "4990-735"
      },
      "preco": "35€"
    },
    {
    "idAtividade": "0",
    "numPessoas": "3",
    "dataReserva": "2023-05-18",
    "continuidade": "semanal",
    "horaInicio": "11:45",
    "horaFim": "12:45",
    "observacoes": "",
    "responsavel": {
        "nome": "Gonçalo Pereira",
        "email": "goncalopereira1212@hotmail.com",
        "telemovel": "+351966998214",
        "morada": "Rua Frei Diogo de Murça 8",
        "dataNascimento": "2023-05-25"
    },
    "dadosFaturacao": {
        "nome": "Gonçalo Pereira",
        "nif": "12345679",
        "pais": "Portugal",
        "morada": "Rua Frei Diogo de Murça 8",
        "codigopostal": "4800-019"
    },
    "preco": 45,
    "id_cliente": "1",
    "id": 4
}
]



localStorage.setItem('reservas', JSON.stringify(listaReservas))
localStorage.setItem('utilizadores', JSON.stringify(listaUtilizadores))
localStorage.setItem('funcionarios', JSON.stringify(listaFuncionarios))
localStorage.setItem('atividades', JSON.stringify(listaAtividades))
localStorage.setItem('pedidos', JSON.stringify(listaPedidos))*/
export default {
  data() {
    return {
      tabelaDados: []
    };
  },
  
  methods: {
    getNomeAtividade(id){
      let atividades = JSON.parse(localStorage.getItem('atividades'));
      let atividade = atividades.find(a => a.id === id);
      console.log(atividade)
      return atividade.nome;
    },
    getNomeCliente(id){
      let clientes = JSON.parse(localStorage.getItem('utilizadores'));
      let cliente = clientes.find(a => a.id == id);
      console.log(cliente)
      return cliente.nome;
    },
    getNomeFuncionario(id){
      let funcionarios = JSON.parse(localStorage.getItem('funcionarios'));
      let funcionario = funcionarios.find(a => a.id == id);
      console.log(funcionario)
      return funcionario.nome;
    }
  },
  mounted() {

    let dadosLocalStorage = JSON.parse(localStorage.getItem('reservas'));
    this.tabelaDados = dadosLocalStorage;
  
  },
};
</script>
<style></style>

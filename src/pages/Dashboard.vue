<template>
  <div>
    <!--Stats cards-->
    <div class="row">
      <div
        class="col-md-6 col-xl-3"
        v-for="stats in statsCards"
        :key="stats.title"
      >
        <stats-card>
          <div
            class="icon-big text-center"
            :class="`icon-${stats.type}`"
            slot="header"
          >
            <i :class="stats.icon"></i>
          </div>
          <div class="numbers" slot="content">
            <p>{{ stats.title }}</p>
            {{ stats.value }}
          </div>
          <div class="stats" slot="footer">
            <i :class="stats.footerIcon"></i> {{ stats.footerText }}
          </div>
        </stats-card>
      </div>
    </div>

    <!--Charts-->
    <div class="row">
      <!--<div class="col-12">
        <chart-card
          title="Users behavior"
          sub-title="24 Hours performance"
          :chart-data="usersChart.data"
          :chart-options="usersChart.options"
        >
          <span slot="footer">
            <i class="ti-reload"></i> Updated 3 minutes ago
          </span>
          <div slot="legend">
            <i class="fa fa-circle text-info"></i> Open
            <i class="fa fa-circle text-danger"></i> Click
            <i class="fa fa-circle text-warning"></i> Click Second Time
          </div>
        </chart-card>
      </div>-->

      <div class="col-md-6 col-12">
        <chart-card
          title="Atividades mais realizadas"
          sub-title="Ultimo Mês"
          :chart-data="preferencesChart.data"
          chart-type="Pie"
        >
          <span slot="footer">
            <i class="ti-timer"></i> Atualizado agora</span
          >
          <div slot="legend">
            <i class="fa fa-circle text-info"></i> Open
            <i class="fa fa-circle text-danger"></i> Bounce
            <i class="fa fa-circle text-warning"></i> Unsubscribe
          </div>
        </chart-card>
      </div>

      <div class="col-md-6 col-12">
        <chart-card
          title="Atividades realizadas"
          sub-title="Ao longo do último ano"
          :chart-data="activityChart.data"
          :chart-options="activityChart.options"
        >
          <span slot="footer">
            <i class="ti-check"></i> Atualizado agora
          </span>
          <div slot="legend">
            <i class="fa fa-circle text-info"></i> Tesla Model S
            <i class="fa fa-circle text-warning"></i> BMW 5 Series
          </div>
        </chart-card>
      </div>
    </div>

    <div class="row">
        <div class="col-12">
        <card :title="table1.title" :subTitle="table1.subTitle">
          <div slot="raw-content" class="table-responsive">
            <paper-table :data="table1.data" :columns="table1.columns">
            </paper-table>
          </div>
        </card>
      </div>
    </div>


  </div>
</template>
<script>
import { StatsCard, ChartCard } from "@/components/index";
import { PaperTable } from "@/components";
import Chartist from "chartist";
const tableColumns = ["Id", "Nome", "Atividade", "Local", "Horario"];
const tableData = [
  {
    id: 1,
    nome: "Dakota Rice",
    atividade: "$36.738",
    local: "Niger",
    horario: "Oud-Turnhout",
  },
  {
    id: 2,
    nome: "Minerva Hooper",
    atividade: "$23,789",
    local: "Curaçao",
    horario: "Sinaai-Waas",
  },
  {
    id: 3,
    nome: "Sage Rodriguez",
    atividade: "$56,142",
    local: "Netherlands",
    horario: "Baileux",
  },
  {
    id: 4,
    nome: "Philip Chaney",
    atividade: "$38,735",
    local: "Korea, South",
    horario: "Overland Park",
  },
  {
    id: 5,
    nome: "Doris Greene",
    atividade: "$63,542",
    local: "Malawi",
    horario: "Feldkirchen in Kärnten",
  },
];

export default {
  components: {
    StatsCard,
    ChartCard,
    PaperTable,
  },
  /**
   * Chart data used to render stats, charts. Should be replaced with server data
   */
  data() {
    return {
      table1: {
        title: "Stripped Table",
        subTitle: "Here is a subtitle for this table",
        columns: [...tableColumns],
        data: [...tableData],
      },
      statsCards: [
        {
          type: "success",
          icon: "ti-check-box",
          title: "Nº Marcações",
          value: "10",
          footerText: "Ultima Semana",
          footerIcon: "ti-calendar",
        },
        {
          type: "success",
          icon: "ti-wallet",
          title: "Lucros",
          value: "€1,345",
          footerText: "Ultima Semana",
          footerIcon: "ti-calendar",
        },
        {
          type: "danger",
          icon: "ti-user",
          title: "Visitantes",
          value: "23",
          footerText: "Ultima Hora",
          footerIcon: "ti-timer",
        },
        {
          type: "info",
          icon: "ti-comment",
          title: "Contactos",
          value: "+5",
          footerText: "Atualizado agora",
          footerIcon: "ti-reload",
        },
      ],
      usersChart: {
        data: {
          labels: [
            "9:00AM",
            "12:00AM",
            "3:00PM",
            "6:00PM",
            "9:00PM",
            "12:00PM",
            "3:00AM",
            "6:00AM",
          ],
          series: [
            [287, 385, 490, 562, 594, 626, 698, 895, 952],
            [67, 152, 193, 240, 387, 435, 535, 642, 744],
            [23, 113, 67, 108, 190, 239, 307, 410, 410],
          ],
        },
        options: {
          low: 0,
          high: 1000,
          showArea: true,
          height: "245px",
          axisX: {
            showGrid: false,
          },
          lineSmooth: Chartist.Interpolation.simple({
            divisor: 3,
          }),
          showLine: true,
          showPoint: false,
        },
      },
      activityChart: {
        data: {
          labels: [
            "Jan",
            "Feb",
            "Mar",
            "Apr",
            "Mai",
            "Jun",
            "Jul",
            "Aug",
            "Sep",
            "Oct",
            "Nov",
            "Dec",
          ],
          series: [
            [542, 543, 520, 680, 653, 753, 326],
            [230, 293, 380, 480, 503, 553, 600, 664, 698, 710, 736, 795],
          ],
        },
        options: {
          seriesBarDistance: 10,
          axisX: {
            showGrid: false,
          },
          height: "245px",
        },
      },
      preferencesChart: {
        data: {
          labels: ["62%", "32%", "6%"],
          series: [62, 32, 6],
        },
        options: {},
      },
    };
  },
};
</script>
<style></style>

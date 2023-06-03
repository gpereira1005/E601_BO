import DashboardLayout from "@/layout/dashboard/DashboardLayout.vue";
// GeneralViews
import NotFound from "@/pages/NotFoundPage.vue";

// Admin pages
import Dashboard from "@/pages/Dashboard.vue";
import GerirAtividades from "@/pages/GerirAtividades.vue";
import Notifications from "@/pages/Notifications.vue";
import Icons from "@/pages/Icons.vue";
import Maps from "@/pages/Maps.vue";
import Typography from "@/pages/Typography.vue";
import TableList from "@/pages/TableList.vue";
import Pedidos from "@/pages/Pedidos.vue";
import VerPedido from "@/pages/VerPedido.vue";
import Reservas from "@/pages/Reservas.vue";
import Atividades from "@/pages/Atividades.vue";
import EditarAtividade from "@/pages/EditarAtividade.vue";

const routes = [
  {
    path: "/",
    component: DashboardLayout,
    redirect: "/pedidos",
    children: [
      /*{
        path: "dashboard",
        name: "dashboard",
        component: Dashboard,
      },*/
      /*{
        path: "gerir_atividades",
        name: "gerir atividades",
        component: GerirAtividades,
      },*/
      {
        path: "notifications",
        name: "notifications",
        component: Notifications,
      },
      /*{
        path: "icons",
        name: "icons",
        component: Icons,
      },
      {
        path: "maps",
        name: "maps",
        component: Maps,
      },
      {
        path: "typography",
        name: "typography",
        component: Typography,
      },
      {
        path: "table-list",
        name: "table-list",
        component: TableList,
      },*/
      {
        path: "pedidos",
        name: "pedidos",
        component: Pedidos,
      },
      {
        path: 'ver_pedido/:id',
        name: 'ver pedido',
        component: VerPedido,
      },
      {
        path: 'reservas',
        name: 'reservas',
        component: Reservas,
      },
      {
        path: 'atividades',
        name: 'atividades',
        component: Atividades,
      },
      {
        path: 'editar_atividade/:id',
        name: 'editar atividade',
        component: EditarAtividade,
      }
    ],
  },
  { path: "*", component: NotFound },
];

/**
 * Asynchronously load view (Webpack Lazy loading compatible)
 * The specified component must be inside the Views folder
 * @param  {string} name  the filename (basename) of the view to load.
function view(name) {
   var res= require('../components/Dashboard/Views/' + name + '.vue');
   return res;
};**/

export default routes;

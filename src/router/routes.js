import Login from '../views/Login/Login';
import PrincipalDashboard from '../views/Dashboard/PrincipalDashboard';
import Registration from '../views/Registration/Registration';
import Importation from '../views/Importation/Importation';

export const routes = [

    { path: '', component: Login },
    { path: '/home', component: PrincipalDashboard },
    { path: '/register', component: Registration },
    { path: '/import', component: Importation },

];
import Login from '../views/Login/Login';
import PrincipalDashboard from '../views/Dashboard/PrincipalDashboard';
import Registration from '../views/Registration/Registration';
import Importation from '../views/Importation/Importation';
import ImportActivity from '../views/Importation/ImportActivity';

export const routes = [
    { path: '/', component: Login, name: 'login' },
    { path: '/home', component: PrincipalDashboard, name: 'home' },
    { path: '/register', component: Registration, name: 'register' },
    { path: '/import', component: Importation, name: 'import' },
    { path: '/import/list', component: ImportActivity, name: 'import_list' },
];
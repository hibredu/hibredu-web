import Login from '../views/Login/Login';
import PrincipalDashboard from '../views/Dashboard/PrincipalDashboard';

export const routes = [

    { path: '', component: Login },
    { path: '/home', component: PrincipalDashboard },

];
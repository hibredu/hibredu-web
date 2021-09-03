import Login from '../views/Login/Login';
import PrincipalDashboard from '../views/Dashboard/PrincipalDashboard';
import Registration from '../views/Registration/Registration';

export const routes = [

    { path: '', component: Login },
    { path: '/home', component: PrincipalDashboard },
    { path: '/register', component: Registration },

];
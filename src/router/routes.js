import Login from '../views/Login/Login';
import PrincipalDashboard from '../views/Dashboard/PrincipalDashboard';
import StudentDashboard from '../views/Dashboard/StudentDashboard';
import ClassroomDashboard from '../views/Dashboard/ClassroomDashboard';
import Registration from '../views/Registration/Registration';
import Importation from '../views/Importation/Importation';
import ImportActivity from '../views/Importation/ImportActivity';
import ExportActivity from '../views/Exportation/ExportActivity';
import ExportAttendance from '../views/Exportation/ExportAttendance';

export const routes = [
    { path: '/', component: Login, name: 'login' },
    { path: '/home', component: PrincipalDashboard, name: 'home' },
    { path: '/analysis/student', component: StudentDashboard, name: 'student' },
    { path: '/analysis/classroom', component: ClassroomDashboard, name: 'classroom' },
    { path: '/register', component: Registration, name: 'register' },
    { path: '/import', component: Importation, name: 'import' },
    { path: '/import/list', component: ImportActivity, name: 'import_list' },
    { path: '/export/activity', component: ExportActivity, name: 'export_activity' },
    { path: '/export/attendance', component: ExportAttendance, name: 'export_attendance' }
];
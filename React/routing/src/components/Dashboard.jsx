import { Outlet } from 'react-router-dom' 
// outlet is used for making child route ... subrout like / Dashboard / notes

const Dashboard = () => {
    return (
        <div>
            DashBoard
            <Outlet />
        </div>
    )
}

export default Dashboard

import { useDispatch, useSelector } from 'react-redux';
import FolderIcon from '@mui/icons-material/Folder';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import PersonIcon from '@mui/icons-material/Person';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import ChatIcon from '@mui/icons-material/Chat';
import FolderSharedIcon from '@mui/icons-material/FolderShared';
import PowerSettingsNewIcon from '@mui/icons-material/PowerSettingsNew';
import { Link, useNavigate } from 'react-router-dom';
import { useSnackbar } from 'notistack';
import { logoutUser } from '../../actions/userAction';

const Sidebar = ({ activeTab }) => {

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { enqueueSnackbar } = useSnackbar();


    const handleLogout = () => {
        dispatch(logoutUser());
        enqueueSnackbar("Logout Successfully", { variant: "success" });
        navigate("/login");
    }

    return (
        <div className="hidden sm:flex flex-col gap-4 w-1/4 px-1">

            {/* <!-- profile card --> */}
            <div className="flex items-center gap-4 p-3 bg-white rounded-sm shadow">
                <div className="flex flex-col gap-1">
                    <p className="text-xs">Bonjour,</p>
                    <h2 className="font-medium"></h2>
                </div>
            </div>
            {/* <!-- profile card --> */}

            {/* <!-- nav tiles --> */}
            <div className="flex flex-col bg-white rounded-sm shadow">

                {/* <!-- my orders tab --> */}
                <div className="flex items-center gap-5 px-4 py-4 border-b">
                    <span className="text-primary-blue"><FolderIcon /></span>
                    <Link className="flex w-full justify-between font-medium text-gray-500 hover:text-primary-blue" to="/orders">
                        MES COMMANDES
                        <span><ChevronRightIcon /></span>
                    </Link>
                </div>
                {/* <!-- my orders tab --> */}

                {/* <!-- account settings tab --> */}
                <div className="flex items-center gap-5 px-4 py-4">
                    <span className="text-primary-blue"><PersonIcon /></span>
                    <p className="flex w-full justify-between font-medium text-gray-500">COMPTE</p>
                </div>
                <div className="flex flex-col pb-3 border-b text-sm">
                    <Link to="/account" className={`${activeTab === "profile" ? "bg-blue-50 text-primary-blue font-medium" : "hover:bg-blue-50 hover:text-primary-blue"} p-3 pl-14`}>Profile Information</Link>
                    
                </div>
                {/* <!-- account settings tab --> */}

                {/* <!-- logout tab --> */}
                <div className="flex items-center gap-5 px-4 py-4 border-b">
                    <span className="text-primary-blue"><PowerSettingsNewIcon /></span>
                    <div className="flex w-full justify-between font-medium text-gray-500 hover:text-primary-blue cursor-pointer" onClick={handleLogout}>
                        Se déconnecter
                        <span><ChevronRightIcon /></span>
                    </div>
                    <Link to='/orders' className="flex w-full justify-between font-medium text-gray-500 hover:text-primary-blue cursor-pointer" >
                         <span className="text-primary-blue" ><DashboardIcon sx={{ fontSize: "18px" }} /></span>
                    mes commandes
                        {/* <span><ChevronRightIcon /></span> */}
             </Link >
                </div>
                {/* <!-- logout tab --> */}

            </div>
            {/* <!-- nav tiles --> */}

            {/* <!-- frequenty visited tab --> */}
            {/* <div className="flex flex-col items-start gap-2 p-4 bg-white rounded-sm shadow">
                <span className="text-xs font-medium">Frequently Visited:</span>
                <div className="flex gap-2.5 text-xs text-gray-500">
                    <Link to="/password/update">Change Password</Link>
                    <Link to="/orders">Track Order</Link>
                </div>
            </div> */}
            {/* <!-- frequenty visited tab --> */}
        </div>
    );
};

export default Sidebar;


import {Outlet} from 'react-router';
import Footer from '../Pages/Shared/Footer/Footer';
import NavBar from '../Pages/Shared/NavBar/NavBar';
export default function RootLayout (){
    return (
        <div className='max-w-7xl'>
<NavBar></NavBar>
<Outlet></Outlet>
<Footer></Footer>
        </div>
    );
}
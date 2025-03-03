import '../CSS/Members.css';
import { Route, Routes } from 'react-router-dom';
import MembersList from '../components/MemebersList';
import MemberProfile from '../components/MemberProfile';

const Members = () => {
    return(
        <Routes>
            <Route path='/' Component={MembersList} />
            <Route path='/profile/:name' Component={MemberProfile} />
        </Routes>
    );
}

export default Members;
                

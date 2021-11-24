import './App.css';
import Header from "./Components/Header/Header";
import NavBar from "./Components/SideBar/NavBar/NavBar";
import Profile from "./Components/Profile/Profile";
import Messages from "./Components/Messages/Messages";
import ss from "./Components/Profile/Profile.module.css";
import { Route, Routes} from "react-router-dom";
import {Friends} from "./Components/SideBar/Friends/Friends";


const App = (props) => {
    return (



            <div className='app-wrapper'>
                <Header/>
                <NavBar/>
                <Friends state={props.state.profilePage.friends}/>
                <div className="app-wrapper-content">
                    <Routes>
                        <Route path="*" element={<Profile  state={props.state.profilePage} />}/>
                        <Route path="/profile"
                               element={<Profile
                                   state={props.state.profilePage}  />}/>
                        <Route path="/messages/*"
                               element={<Messages
                                   state={props.state.messagesPage} />}/>
                    </Routes>
                </div>
            </div>

    );
}
export default App;

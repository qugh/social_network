import './App.css';
import Header from "./Components/Header/Header";
import NavBar from "./Components/SideBar/NavBar/NavBar";
import Profile from "./Components/Profile/Profile";
import Messages from "./Components/Messages/Messages";
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
                        <Route path="*" element={<Profile  profilePage={props.state.profilePage} dispatch={props.dispatch} />}/>
                        <Route path="/profile"
                               element={<Profile
                                   profilePage={props.state.profilePage} dispatch={props.dispatch} />}/>
                        <Route path="/messages/*"
                               element={<Messages
                                   state={props.state.messagesPage} dispatch={props.dispatch} />}/>
                    </Routes>
                </div>
            </div>

    );
}
export default App;

import MyPosts from "./MyPosts/MyPosts";
import ss from './Profile.module.css';
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";


export const Profile = (props) => {

    return (

        <>

            <ProfileInfo/>

            <MyPosts items={props.profilePage} dispatch={props.dispatch}/>

        </>

    );

}
export default Profile;
import s from './ProfileInfo.module.css'

export const ProfileInfo = (props) => {
    return (
        <>
            <div className="">
                <img src="https://infosmi.net/wp-content/uploads/2021/07/fb061955380df1ce6828b28528c70808.jpg"
                     alt="img"/>
            </div>
            <div className="">
                <img className={s.image} src="https://lookw.ru/9/969/1566943598-27.jpg" alt="img"/> <br />
                ava+desc
            </div>
        </>
    );
}
export default ProfileInfo;
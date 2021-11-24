import s from './Friends.module.scss'
import {Friend} from "./Friend/Friend";

export const Friends = (props) => {
    return(
        <div className={s.friends_container}>
           <h3>My friends</h3>
            <div className={s.friends_block}>
                {props.state.map((item)=>(
                    <a href={''}>
                    <Friend name={item.name} avatar={item.avatarUrl}/>
                    </a>
                ))}


            </div>

        </div>

    );
}
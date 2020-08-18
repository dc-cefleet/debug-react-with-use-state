import React from "react";
import Field from "./Field";

const Card = (user) =>{
    
    let [showMore] = useState(false);    

    return (
        <div onClick={showMore ? showMore = false:showMore=true} class=`user-card ${showMore ? 'open':'closed'}`>
            <img src=`https://robohash.org/${user.id+user.email}?size=40x40`/>
            <h3 class="name">{user.name}</h3>
            {showMore && 
                <Field label="username" value={user.username} />
                <Field label="email" value={user.email} />
                <Field lable="website" value={user.website} />

            }
        </div>
    )
}

export default Card;
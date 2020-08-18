import React from "react";

const Field = (props)=>{

    return(
        <div class="field-item">
            <span class="field-label">{label}</span>
            <span class="filed-value">{value}</span>
        </div>
    )
}

export default Field;
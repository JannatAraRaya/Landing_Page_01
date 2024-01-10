import React from 'react';

interface IconTextProps{
    iconSrc:string;
    text: string;
    className?:string;
}

const IconText:React.FC<IconTextProps> =({iconSrc,text, className})=>{
    return(
        <>
        <img src={iconSrc} alt="Icon" />
        <p  className={className}>{text}</p>
        </>        
    )
}


export default IconText;

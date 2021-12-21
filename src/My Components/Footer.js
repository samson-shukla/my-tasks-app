import React from 'react'

export const Footer = () => {
    let footerStyle = {
        position: "absolute",
        width: "100%",
        overflow: "hidden"
    };
    return (
        <footer className='bg-warning text-black text-center my-5 py-2' style={footerStyle}>
            Copyright &copy; 2021 MyTasks by Samson
        </footer>
    )
}

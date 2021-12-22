import React from 'react'

export const Footer = () => {
    let footerStyle = {
        position: "relative",
        width: "100%",
        overflow: "hidden",
        display: "flex",
        flexWrap: "wrap",
        alignItems: "center",
        justifyContent: "space-between"
    };
    let cursorStyle = {
        cursor: "pointer",
    color: "white"
    }
    return (
        <footer className='pt-3 bg-primary'>
            <div className='container text-white' style={footerStyle}>
            <p>Copyright &copy; 2021 MyTasks by Samson</p>
            <p>Meet me on <em onClick={() => {
    window.open("https://twitter.com/samsonshukla");
  }} style={cursorStyle}>Twitter <i class="bi bi-twitter"></i>
      </em> </p>
            </div>            
        </footer>
    )
}

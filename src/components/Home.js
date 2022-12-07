

function Home() {
    return (
       <div className="projects">
           <div className="title">
               <h2 className="projo">Does this work</h2>
           </div>

           <div className="box">
               <div className="card">
                   <img className="avatar" src="" alt="coffee"></img>
                   <div className="container">
                       <h4><b>Capuccino</b></h4>
                       <p>this is description</p>
                       <button className="btn1" id="btn1">Add to Cart</button>
                   </div>
               </div>
               <div className="card">
                   <img className="avatar" src="" alt="coffee"></img>
                   <div className="container">
                       <h4><b>Capuccino</b></h4>
                       <p>this is description</p>
                       <button className="btn1" id="btn1">Add to Cart</button>
                   </div>
               </div>
           </div>
       </div>
    )
}


export default Home;
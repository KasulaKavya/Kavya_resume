import React from 'react'



const Home=()=>
{
    return(<>

        
        <div className=" container-fluid bg-light ">
        <div className="row border-0  bg-light ">

            <div className="col-lg-6 border-0 bg-light ">

                <div className="card py-5 border-0 bg-light h-1 py-auto">
                    <img src="../images/kav.jpg" className="card-img-top w-50 mx-auto rounded-circle my-5 " alt="..." />
                </div>

            </div>


            <div className="col-lg-6 border-0 bg-light py-5 ">
                <div className="card border-0 bg-light  h-1 py-auto">
                    <h2 className="display-3 font-weight-normal">Hello,</h2>
                    <h4 className="display-4" >a bit about me:</h4>
                    <div className="card-body bg-light ">
                        <p>

                            <h4>My name is <b style={{color:"rgb(173, 6, 28)"}}>KASULA KAVYA SRI</b>.</h4> <br/>
                            
                        </p>
                    </div>
                </div>

            </div>
        </div>

        </div>


    </>)
}

export default Home;
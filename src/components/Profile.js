import React from 'react'

const h3_style={color:"rgb(155, 4, 41)"}
const h4_style={color:"rgb(42, 114, 1)"}

const Profile=()=>
{
    return(
        <>

            <div className="container-fluid bg-light ">

                <h2 className="text-center pt-3">PROFILE</h2>

                {/*-- school details --*/}
                <div className="container my-1 bg-light">
                    <div className="row">
                        <div className="col-lg-12 bg-light">
                            <div className="card mt-3 border-0">
                                <div className="card-body">
                                    <h3 style={h3_style}> SCHOOL : </h3>
                                    <ul>
                                       <li><b>TYPE OF EXAMINATION :</b> Secondary School Certificate (SSC)</li>
                                       <li> 2013-2014 </li>
                                       <li><b>SGPA :</b> 9.3</li> 
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
        

                <hr/>


                {/*-- intermediate details --*/}
                <div className="container my-1">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="card border-0">
                                <div className="card-body">
                                    <h3 style={h3_style}> INTERMEDIATE : </h3>
                                    <ul>
                                        <li><b>TYPE OF EXAMINATION :</b> Board Of Intermediate</li>
                                        <li> 2014-2016 </li>
                                        <li><b>PERCENTAGE :</b> 92%</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


                <hr/>


                {/*-- btech details --*/}
                <div className="container my-1">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="card border-0">
                                <div className="card-body">
                                    <h3 style={h3_style}> BACHELOR DEGREE : </h3>
                                    <ul className="list-none">
                                        <li><b>TYPE OF EXAMINATION :</b> Jawaharlal Nehru Technological University Hyderabad (JNTUH)</li> 
                                        <li>YEAR OF JOINING :<b style={h3_style}> 2016</b></li>
                                        <li>CGPA :<b style={h3_style}>7.1</b></li>
                                        <li>PASSED OUT :<b style={h3_style}> 2020 </b></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                
                </div>
        

                <hr/>


                {/*-- software skills --*/}
                <div className="container my-1">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="card border-0 ">
                                <div className="card-body">

                                    <h3 style={h3_style}> TECHNICAL SKILLS : </h3>

                                    <ul>
                                        <li> 
                                            <b>Basics on</b>
                                            <ul>
                                                <li>C</li>
                                                <li>JAVA</li>
                                                <li>PYTHON (DJANGO)</li>
                                            </ul>
                                        </li>
                                        <li> 
                                            <b>FRONT-END :</b>
                                            <ul>
                                                <li>HTML</li>
                                                <li>CSS</li>
                                                <li>BOOTSTRAP</li>
                                                <li>JAVASCRIPT</li>
                                                <li>REACT-JS(REDUX)</li>
                                            </ul> 
                                        </li>
                                    </ul>

                                </div>
                            </div>

                        </div>
                    </div>
                </div>


                <hr/>


                <div className="container my-1">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="card border-0 ">
                                <div className="card-body">

                                    <h3 style={h3_style}> COLLEGE PROJECTS : </h3>

                                    <ul>
                                        <li> 
                                            <b>  MINNI PROJECT ON : </b>
                                            <ul>
                                                <li><b style={h4_style}>TITLE : </b> Applications on GPS and DGPS </li>
                                                <li><b style={h4_style}>SOFTWARE USED : </b> Arc Map </li>
                                            </ul>
                                        </li>
                                        <li> 
                                            <b> MAJOR PROJECT :</b>
                                            <ul>
                                                <li><b style={h4_style}>TITLE : </b> Intelligent Border Security Intrusion,Detection And Auto-Destroy System</li>
                                            </ul> 
                                        </li>
                                    </ul>

                                </div>
                            </div>

                        </div>
                    </div>
                </div>


                <hr/>


                <div className="container my-1">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="card border-0">
                                <div className="card-body">
                                    <h3 style={h3_style}> ACHIVEMENTS : </h3>
                                    <p> Certified in Cricket and Kho-Kho </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


                <hr/>


                <div className="container my-1">
                    <div className="row">
                        <div className="col-lg-12 bg-light">
                                <div className="card mt-3 border-0">
                                    <div className="card-body">
                                        <h3 style={h3_style}> PERSONAL PROFILE : </h3>

                                        <p><b style={h4_style}>Father's Name :</b> Kasula Srinivasa Rao </p>
                                        <p><b style={h4_style}>Date Of Birth :</b> 02-01-1999 </p>
                                        <p><b style={h4_style}>Languages Known :</b> English,Hindi,Telugu </p>
                                        <p><b style={h4_style}>Address :</b> Plot No:64,Road No:4,
                                        Yadava Nagar Colony,Near Alakapuri colony,
                                        Hyd,Ranga Reddy,Pin No:5000035  </p>
                                    </div>
                                </div>
                        </div>
                    </div>
                </div>

            </div>

        </>
    )
}

export default Profile;
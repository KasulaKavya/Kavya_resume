import React from 'react'

const h3_style={color:"rgb(155, 4, 41)"}
const h4_style={color:"rgb(42, 114, 1)"}
const aboutcss={
    
}
const About=()=>
{
    return(
        <>

            <div className="container-fluid bg-light">

                <h2 className="text-center pt-3 ">ABOUT ME</h2>

                <div className="row">

                    <div className="col-lg-12 bg-light">
                        <div className="card mt-3 border-0">
                            <div className="card-body">
                                <h3 style={h3_style}> SECONDARY SCHOOL : </h3>
                                <ul>
                                    <li><b> Sai Grammar High School </b> </li>
                                    <li> <b> 2013-2014 </b></li>
                                    <li><b>SGPA :</b> 9.3 </li> 
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-12 bg-light">
                        <div className="card mt-3 border-0">
                            <div className="card-body">
                                <h3 style={h3_style}> INTERMEDIATE : </h3>
                                <ul>
                                    <li><b> Board Of Intermediate </b></li>
                                    <li> <b> 2014-2016 </b></li>
                                    <li><b> 92% </b></li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-12 bg-light">
                        <div className="card mt-3 border-0">
                            <div className="card-body">
                                <h3 style={h3_style}> BACHELOR DEGREE : </h3>
                                <ul>
                                    <li><b> Sreyas Institute Of Engeneering And Techonolgy College </b> </li>
                                    <li><b> Jawaharlal Nehru Technological University Hyderabad (JNTUH) </b></li> <br/> 
                                    <li style={{fontSize:"20px"}}> YEAR OF JOINING : <b style={{color: "rgb(155, 4, 41)"}}> 2016 </b></li>
                                    <li style={{fontSize:"20px"}}> CGPA : <b style={{color: "rgb(155, 4, 41)"}}>7.1 </b></li>
                                    <li style={{fontSize:"20px"}}> PASSED OUT :<b style={{color: "rgb(155, 4, 41)"}}> 2020 </b></li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-12">
                        <div className="card border-0 mt-3">
                            <div className="card-body">
                                <h4 style={h4_style}> Trained In : Technical Skills </h4>
                                <ul>
                                    <li>PYTHON</li>
                                    <li>JAVA</li>
                                    <li>HTML</li>
                                    <li>CSS</li>
                                    <li>BOOTSTRAP</li>
                                    <li>JAVASCRIPT</li>
                                    <li>REACT-JS</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-12">
                        <div className="card mt-3 border-0">
                            <div className="card-body">
                                <h4 style={h4_style}> Strengths </h4>
                                <ul>
                                    <li>Excellent verbal and personal Communication Skills</li>
                                    <li>Quick learner</li>
                                    <li>Self-Motivated</li>
                                    <li>Having Good Leadership Qualities</li>
                                    <li>Being Positive and Friendly In Nature</li>
                                    <li>Hardworking individual with a positive attitude</li>
                                    <li>Flexible and versatile to adapt to new environment and work on any project</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-12">
                        <div className="card mt-3 border-0">
                            <div className="card-body">
                                <h4 style={h4_style}> Hobbies </h4>
                                <ul>
                                    <li>Reading books</li>
                                    <li>Watching TV</li>
                                    <li>Playing Cricket</li>
                                    <li>Dancing and Listening to songs</li>
                                    <li>Exploring the World</li>
                                    <li>Talkative</li>
                                </ul>
                            </div>
                        </div>
                    </div>



                </div>
            </div>


        </>
    )
}

export default About;
import React from 'react'

const About = () => {
    const [header] = React.useState({
        subHeader: "About Me",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat aliquam architecto neque inventore sunt impedit !"
    })
    const [state] = React.useState([
        {
            id: 1, 
            title: 'Name',
            text: "Alexandre Angrignon",     
        },
        {
            id: 2, 
            title: 'Email',
            text: "alex040892@gmail.com",     
        },    
        {
            id: 3, 
            title: 'Mobile',
            text: "021-254-2572",     
        },   
    ])
    return (
        <div className="about">
            <div className="container">
             <div className="common">
                        <h1 className="mainHeader">{header.subHeader}</h1>
                        <p className="mainContent">{header.text}</p>
                        <div className="commonBorder"></div>
                    </div>
                    <div className="row">
                        
                         <div className="col-6">
                             <div className="about__info">
                            <h1>Hi There</h1>
                            <div className="about__info-p1">
                                Hi There! I am  Alexandre Angrignon,
                                I am passionate about web development and have experience using HTML, CSS, Bootstrap, JavaScript, React, Django and PostgreSQL. 
                            </div>
                            <div className="about__info-p2">
                                In 2020, I successfully completed my Bachelor's degree in computer science at Unitec focusing on a web development pathway.
                                My goal is to help a company and clients to the best of my abilities and how I can provide the best possible product for them.
                                I love learning new technologies, what they can be used for in a real-life, workplace scenario and how I can use them to build better and scalable products.
                            </div>
                        </div>
                    </div>

                    <div className="col-6">
                        <div className="about__img">
                            <img src="/images/1.jpg" alt=""/>
                        </div>
                    </div>

                    <div className="info__contacts">
                        <div className="row">
                            {state.map(info => (
                                 <div className="col-6">
                                 <strong>{info.title}</strong>
                                 <p>{info.text}</p>
                             </div>
                            ))}
                           
                        </div>
                    </div>
                </div>
            </div>
         </div>
           
    )
}

export default About

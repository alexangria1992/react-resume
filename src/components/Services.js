import React from 'react'
import {FaGithub, FaCamera, FaCircleNotch, FaApple, FaFileVideo, FaSearchDollar} from 'react-icons/fa'

const Services = () => {
    const [header] = React.useState({mainHeader: "SERVICES", subHeading: 'My Services', 
text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptate error veniam."})
    const [state] = React.useState([
        {id: 1, 
        icon: 'FaGithub', 
        heading: 'Web Development', 
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla odio ipsa officiis modi!'
        },
        {id: 2, 
            icon: 'FaCamera', 
            heading: 'Photography', 
            text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla odio ipsa officiis modi!'
        },
        {id: 3, 
            icon: 'Web Design', 
            heading: 'FaCircleNotch', 
            text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla odio ipsa officiis modi!'
        },
        {id: 4, 
            icon: 'App Development', 
            heading: 'FaApple', 
            text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla odio ipsa officiis modi!'
        },
        {id: 5, 
            icon: 'Video Editing', 
            heading: 'FaFileVideo', 
            text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla odio ipsa officiis modi!'
        },
        {id: 6, 
            icon: 'SEO Expert', 
            heading: 'FaSearchDollar', 
            text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla odio ipsa officiis modi!'
        },
       
    ])
    return (
        <div className="services">
            <div className="container">
                <div className="services__header">
                 
                    <div className="common">
                        <h3 className={header.mainHeader}></h3>
                        <h1 className={header.subHeading}></h1>
                        <p className="mainContent">{header.text}</p>
                        <div className="commonBorder">

                    </div>
                    </div>    
                      <div className="row bgMain">
                          {state.map(info => (
                              <div className="col-4 bgMain">
                              <div className="services__box">
                                  <FaGithub className="commonIcon"/>
                                  <div className="services__box-header">
                                      {info.heading}
                                  </div>
                                  <div className="services__box-p">
                                      {info.text}
                                  </div>
                              </div>
                          </div>
  
                          ))}
                        
                   

                    </div>         
                </div>
            </div>
        </div>
    )
}

export default Services

import styled from "styled-components";


export const PageContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 1200px;
    margin:0 auto;
`;

export const HeaderStyles = styled.div`
    margin:50px 0px;
    display:flex;
    flex-direction: row;
    justify-content: space-between;
    .left-infosection{
        
    }
    .right-infoSection{
        font-size: 22px;
        ul{
            list-style-type: none;
            display: flex;
            gap:10px;
        }
    }

`;

export const AboutSection = styled.div`
    display: flex;
    flex-direction: row;
    gap:20px;
    .about-me-content{
        backdrop-filter: blur(40px);
        display: flex;
        flex-direction: column;
        gap:20px;
        padding: 48px 48px;
        border:1px solid rgba(0,0,0,.6);
        border-radius: 16px;
        width: 69%;
        .header-section-aboutme{
            display: flex;
            justify-content: space-between;
            .name-and-role{
                display: flex;
                /* align-items: center; */
                gap:25px;
                div:last-child{
                    h3{
                        font-size: 21px;
                    }
                    p{
                        color: rgba(255, 255, 255, 0.35);
                        font-size:12px ;
                    };
                }
            }
            .follow-icons{
                a{
                    margin:0 3px;
                }
                img{
                width: 25px;
                
            }
            }
            .name-and-role{
        img{
            width: 60px;
            background-color: #ffd951;
            border-radius: 50%;
        }
    }
        }
        .aboutme-passionate{
            p{
                font-size: 40px;
            }
           
        }
        .aboutme-more-content{
            p{
                opacity: 0.32;
            }
        }
    }
   
    .my-pic{
        position: relative;
        background-color: #ffd951;
        border-radius: 30px;
        width: 31%;
        img{
            position: relative;
            z-index: 6;
            left: -5%;
            bottom: -4px;
        }
    }
`;

export const ProjectsSection = styled.div`
    display:grid;
    grid-template-columns: repeat(2,1fr);
    gap:20px;
    margin-top:50px;
    .card-project{
        padding: 30px;
        display: flex;
        flex-direction: column;
        gap:20px;
        border:1px solid;
        backdrop-filter: blur(30px);
        border-radius: 20px;
        img{
            align-self: center;
            margin-bottom: 20px;
        }
        .card-body{
            h3{
                margin-bottom: 5px;
            }
            p{
                opacity: 0.32;
                font-size: 13px;
            }
        }
    }

`;

export const ContactMe = styled.div`
    display: flex;
    gap:20px;
    margin:40px 0;
    .left-info-Aboutme{
        backdrop-filter: blur(40px);
        display: flex;
        flex-direction: column;
        gap:20px;
        align-items: flex-start;
        padding: 65px 20px;
        border:1px solid rgba(0,0,0,.6);
        border-radius: 16px;
        width: 69%;
        .skill-subtitle{
            font-size: 20px;
            opacity: 0.38;
        }
        .skill-title{
            font-size: 20px;
        }
        .skill-description{
            font-size: 12px;
            opacity: 0.38;
        }
        .skills-icons{
            display: flex;
            align-items: center;
            gap:10px;
            img{
                transition: all 0.2s linear;
                &:hover{
                    transform: translateY(-3px);
                }
            }
        }
    }
    .right-info-contactMe{
        backdrop-filter: blur(40px);
        display: flex;
        flex-direction: column;
        gap:20px;
        align-items: flex-start;
        padding: 40px 20px;
        border:1px solid rgba(0,0,0,.6);
        border-radius: 16px;
        width: 31%;
        .contact-meText{
            p{
                font-size:15px ;
                opacity: 0.32;
            }
        }
        .contact-icons{
            display: flex;
            gap:3px;
            a{
                
            }
            img{
                margin:0 3px;
            }
        }
    }
`;
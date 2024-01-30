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

export const AboutSection =  styled.div`
    display: flex;
    flex-direction: row;
    gap:20px;
    .about-me-content{
        backdrop-filter: blur(40px);

    }
    .my-pic{
        position: relative;
    }
`
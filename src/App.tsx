import styled from "styled-components";
import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyle = createGlobalStyle`
  ${reset};
  @import url('https://fonts.googleapis.com/css2?family=Ubuntu:wght@300;500;700&display=swap');
  *{
        box-sizing: border-box;
    }
  html {
    font-size: 62.5%; // 1rem = 1rem
  }
  body{
      font-family: 'Ubuntu', sans-serif;
      font-weight: 500;
  }
  a{
      text-decoration: none;
      cursor: pointer;
  }
`;
const Wrap = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const Container = styled.div`
    position: relative;
    width: calc(100% - 4rem);
    min-height: calc(100% - 20rem);
    border: 0.2rem solid #7367f0;
    border-radius: 2rem;
    box-shadow: 0 0 0.5rem 0 #7367f0;
`;
const Logo = styled.div`
    position: absolute;
    top: 0;
    left: 50%;
    transform: translate(-50%, -50%);
    display: flex;
    justify-content: center;
    align-items: center;
    width: 10rem;
    height: 10rem;
    border: none;
    border-radius: 50%;
    background-color: #7367f0;
    img{
        width: 80%;
        height: 80%;
        object-fit: contain;
    }
`;

function App() {
    return (
        <>
            <Wrap>
                <GlobalStyle />
                <Container>
                    <Logo>
                        <img src="img/six_block_03.png" alt="six block planner logo"/>
                    </Logo>
                    TEST
                </Container>
            </Wrap>
        </>
    );
}

export default App;

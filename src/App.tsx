import styled from "styled-components";
import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";
import Select from "react-select";
import makeAnimated from "react-select/animated";

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
      color: #333;
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
    padding: 2rem 0rem;
    background-color: #eeeeee;
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
    box-shadow: 0 0 0.5rem 0 #7367f0;
    img {
        width: 70%;
        height: 70%;
        object-fit: contain;
        filter: drop-shadow(0 0 0.5rem #00000058);
    }
`;

const Header = styled.div`
    position: relative;
    margin: 0 2rem;
    padding: 6rem 0 2rem;
    border-bottom: 3px solid #7367f0;
    text-align: center;
    color: #7367f0;
    font-weight: 800;
    span {
        position: absolute;
        top: 5%;
        right: 0;
        font-size: 2.5rem;
        cursor: pointer;
        color: #000;
    }
    p {
        font-size: 3rem;
    }
`;
const Plan = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 3rem 2rem;
    table {
        table-layout: fixed;
        width: 100%;
        border-collapse: collapse;
        caption {
            display: none;
        }
        tr {
            td {
                padding: 2.5rem 0;
                vertical-align: middle;
                &:first-child {
                    text-align: center;
                    width: 40%;
                }
                label {
                    font-size: 2rem;
                    font-weight: 800;
                    margin-right: 2rem;
                }
                select,
                input,
                textarea {
                    width: 100%;
                    resize: none;
                    border: none;
                    border-bottom: 1px solid #7367f0;
                    outline: none;
                    padding: 0.5rem 1rem;
                    font-size: 1.5rem;
                    background-color: transparent;
                    &::placeholder {
                        color: #f9f9ff;
                    }
                }
                input[id="doneCk"] {
                    width: auto;
                    display: none;
                    & + label {
                        cursor: pointer;
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        &::before {
                            content: "";
                            display: flex;
                            justify-content: center;
                            align-items: center;
                            display: inline-block;
                            width: 2.5rem;
                            height: 2.5rem;
                            border: 2px solid #7367f0;
                            border-radius: 1rem;
                            margin-right: 1rem;
                        }
                    }
                    &:checked + label {
                        &::before {
                            content: "✔";
                            display: flex;
                            justify-content: center;
                            align-items: center;
                            background-color: #7367f0;
                            color: #fff;
                        }
                    }
                }
            }
        }
    }
`;

const Footer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`;
const Btn = styled.div<{ bgColor: string }>`
    padding: 1.5rem 3.5rem;
    background-color: ${(props) => props.bgColor};
    border-radius: 3rem;
    font-size: 1.5rem;
    font-weight: 800;
    margin: 0 0.7rem;
    color: #fff;
`;

function App() {
    const options= [
        { value: "work1", label: "Work1" },
        { value: "work2", label: "Work2" },
        { value: "work3", label: "Work3" },
    ];
    return (
        <>
            <Wrap>
                <GlobalStyle />
                <Container>
                    <Logo>
                        <img
                            src="img/six_block_03.png"
                            alt="six block planner logo"
                        />
                    </Logo>
                    <Header>
                        <span>X</span>
                        <p>Your Plan</p>
                    </Header>
                    <Plan>
                        <table>
                            <caption>Your Plan</caption>
                            <tr>
                                <td>
                                    <label htmlFor="keyword">KEYWORD</label>
                                </td>
                                <td>
                                    <Select
                                        options={options}
                                        isMulti
                                        className="basic-multi-select"
                                        classNamePrefix="select"
                                        name="keyword"
                                        id="keyword"
                                        defaultValue="Select Keyword"
                                    />
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <label htmlFor="date">DATE</label>
                                </td>
                                <td>
                                    <input type="date" id="date" />
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <label htmlFor="time">TIME</label>
                                </td>
                                <td>
                                    <input type="time" id="time" />
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <label htmlFor="memo">MEMO</label>
                                </td>
                                <td>
                                    <textarea
                                        maxLength={30}
                                        id="memo"
                                    ></textarea>
                                </td>
                            </tr>
                            <tr>
                                <td colSpan={2}>
                                    <input type="checkbox" id="doneCk" />
                                    <label htmlFor="doneCk">Done</label>
                                </td>
                            </tr>
                        </table>
                    </Plan>
                    <Footer>
                        <Btn bgColor="#7367f0">Apply</Btn>
                        <Btn bgColor=" #F8726D">Delete</Btn>
                    </Footer>
                </Container>
            </Wrap>
        </>
    );
}

export default App;

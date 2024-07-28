import styled, { keyframes } from 'styled-components'

const WebImgBox = () => {
  return (
    <Container>
      <Img
        src="https://cdn.pixabay.com/photo/2016/11/17/23/29/programming-1832991_1280.png"
        alt="코드 이미지"
      />
      <Text>FE 개발자</Text>
      <Div></Div>
      {/* <Div2></Div2> */}
      <Div3></Div3>
      {/* <BackgoundImg src="https://cdn.pixabay.com/photo/2015/12/04/14/05/code-1076536_1280.jpg" /> */}
      {/* <BackgoundImg src="https://cdn.pixabay.com/photo/2015/09/17/17/25/code-944499_1280.jpg" /> */}
    </Container>
  )
}

export default WebImgBox

const Container = styled.div`
  position: relative;
  width: 50%;
  height: calc(100vh - 160px);
  margin-top: 130px;
  padding: 50px;
  box-sizing: border-box;
  overflow: hidden;
  transition: all 0.3s;

  @media screen and (max-width: 1024px) {
    display: none;
  }
`
const Img = styled.img`
  position: absolute;
  height: 100vh;
  top: 0;
  left: 0;
  z-index: -1;
  transform: translateX(-200px);
  opacity: 0.9;
  filter: brightness(0.2);
`
const hue = keyframes`
  from { -webkit-filter: hue-rotate(0deg); }
  from { -webkit-filter: hue-rotate(-360deg); }
`

const Text = styled.span`
  color: #ffffff;
  font-family: 'SokchoBadaCalligraphy';
  // font-family: 'GmarketSansMedium';
  font-size: 3rem;
  line-height: 3.5rem;
  position: absolute;
  z-index: 100;
  // opacity: 0.8;
  // background-clip: text;
  // -webkit-background-clip: text;
  // color: transparent;
  // background-image: -webkit-linear-gradient(92deg, #f35626, #feab3a);
  // -webkit-animation: ${hue} 10s infinite linear;
`
const drift = keyframes`
  from { transform: rotate(0deg); }
  from { transform: rotate(360deg); }
`
const drift2 = keyframes`
  from { transform: rotate(0deg); }
  from { transform: rotate(-360deg); }
`
const Div = styled.div`
  animation: ${drift} 5000ms infinite linear;
  position: absolute;
  // top: -400px;
  // top: -500px;
  top: -60%;
  // left: -200px;
  left: 30%;
  background: #ac88ca;
  background: rgba(52, 86, 209, 0);
  width: 1000px;
  height: 1000px;
  // margin-left: -480px;
  // margin-top: -450px;
  transform-origin: 50% 48%;
  // border-radius: 43%;
  border-radius: 50%;
  border-left: 1px solid white;
  border-right: 1px solid black;
`
const Div3 = styled.div`
  animation: ${drift2} 6000ms infinite linear;
  position: absolute;
  // top: 300px;
  // top: 400px;
  top: 40%;
  // left: -200px;
  left: -60%;
  background: #ac88ca;
  background: rgba(204, 0, 0, 0);
  width: 1200px;
  height: 1200px;
  // width: 150%;
  // height: 150%;
  // margin-left: -650px;
  // margin-top: 300px;
  transform-origin: 50% 48%;
  // border-radius: 43%;
  border-radius: 50%;
  border-bottom: 1px solid black;
  border-top: 1px solid white;
`

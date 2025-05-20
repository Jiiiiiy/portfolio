import styled, { keyframes } from 'styled-components'

const ProfileWebImgBox = () => {
  return (
    <Container>
      <Img
        src="https://cdn.pixabay.com/photo/2016/11/17/23/29/programming-1832991_1280.png"
        alt="코드 이미지"
      />
      {/* <BackgoundImg src="https://cdn.pixabay.com/photo/2015/12/04/14/05/code-1076536_1280.jpg" /> */}
      {/* <BackgoundImg src="https://cdn.pixabay.com/photo/2015/09/17/17/25/code-944499_1280.jpg" /> */}
    </Container>
  )
}

export default ProfileWebImgBox

const drift = keyframes`
  from { transform: rotate(0deg); }
  from { transform: rotate(360deg); }
`
const drift2 = keyframes`
  from { transform: rotate(0deg); }
  from { transform: rotate(-360deg); }
`

const Container = styled.div`
  position: relative;
  width: 40%;
  height: calc(100vh - 160px);
  margin-top: 130px;
  padding: 50px;
  box-sizing: border-box;
  overflow: hidden;
  transition: all 0.3s;

  &::before {
    display: block;
    content: '';
    clear: both;
    animation: ${drift} 5000ms infinite linear;
    position: absolute;
    top: -60%;
    left: 30%;
    background: #ac88ca;
    background: rgba(52, 86, 209, 0);
    width: 1000px;
    height: 1000px;
    transform-origin: 50% 48%;
    border-radius: 50%;
    border-left: 1px solid white;
    border-right: 1px solid black;
  }

  &::after {
    display: block;
    content: '';
    clear: both;
    animation: ${drift2} 6000ms infinite linear;
    position: absolute;
    top: 40%;
    left: -60%;
    background: #ac88ca;
    background: rgba(204, 0, 0, 0);
    width: 1200px;
    height: 1200px;
    transform-origin: 50% 48%;
    border-radius: 50%;
    border-bottom: 1px solid black;
    border-top: 1px solid white;
  }

  @media screen and (max-width: 1024px) {
    display: none;
  }
  @media screen and (max-width: 1400px) {
    margin-left: 50px;
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

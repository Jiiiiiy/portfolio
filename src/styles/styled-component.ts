import styled from 'styled-components'

export const ProfileLayout = styled.div`
  margin-top: 100px;
  width: 60%;
  padding: 30px 120px;
  padding-right: 0;
  margin-bottom: 50px;
  position: relative;
  box-sizing: border-box;
  transition: all 0.3s;

  @media screen and (max-width: 1400px) {
    padding: 30px 50px;
  }
  @media screen and (max-width: 1024px) {
    width: 100%;
    margin-top: 100px;
    padding: 30px 20px;
    padding-bottom: 50px;

    &::after {
      content: '';
      clear: both;
      display: block;
      position: absolute;
      bottom: 0;
      width: calc(100% - 100px);
      height: 1px;
      background-color: #dedede;
    }
  }
`

export const ProjectLayout = styled.div`
  margin-top: 100px;
  width: 100%;
  padding: 30px 0;
  padding-right: 0;
  margin-bottom: 50px;
  position: relative;
  box-sizing: border-box;
  transition: all 0.3s;

  @media screen and (max-width: 1400px) {
    padding: 30px 50px;
  }

  @media screen and (max-width: 1024px) {
    width: 100%;
    margin-top: 0;
    padding: 30px 30px;
    padding-bottom: 50px;
    box-sizing: border-box;
  }
`

export const ContainerSize = styled.div`
  width: 1400px;
  margin: 0 auto;
  position: relative;
  box-sizing: border-box;
  border: 1px solid red;

  @media screen and (max-width: 1400px) {
    width: 100%;
  }
  @media screen and (max-width: 1024px) {
    padding: 0 20px;
  }
`

export const ContainerSizeFlex = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  width: 1400px;
  margin: 0 auto;
  box-sizing: border-box;

  @media screen and (max-width: 1400px) {
    width: 100%;
  }
  @media screen and (max-width: 1024px) {
    flex-direction: column;
  }
`

export const PageLink = styled.a`
  color: #aaaaaa;
  text-decoration: none;
  &:hover {
    color: #3456d1;
  }
`
export const MainLink = styled.a`
  text-decoration: none;
  color: inherit;
`

export const TitleH2 = styled.h2`
  margin-bottom: 20px;
  font-family: SokchoBadaCalligraphy;
  font-size: 1.8rem;
`
export const TitleBlind = styled.h2`
  position: absolute;
  width: 1px;
  height: 1px;
  margin: -1px;
  overflow: hidden;
  clip-path: polygon(0 0, 0 0, 0 0);
`

export const ProfileTitleH3 = styled.h3`
  margin-bottom: 20px;
  font-family: SokchoBadaCalligraphy;
  font-size: 1.5rem;
  line-height: 1.8rem;
`

export const ProjectTitleH3Center = styled.h3`
  color: #ffffff;
  font-family: SokchoBadaCalligraphy;
  font-size: 1.5rem;
  line-height: 1.8rem;
  white-space: nowrap;
  z-index: 10;
  transition: all 0.3s;
`

// export const ModalBackground = styled.div`
//   position: fixed;
//   top: 0;
//   left: 0;
//   width: 100%;
//   height: 100vh;
//   background-color: rgba(0, 0, 0, 0.5);
//   z-index: 999;
// `
export const ModalBackground = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 999;
`

// export const ProjectModal = styled.div`
//   position: relative;
//   width: 80%;
//   height: calc(100vh - 200px);
//   margin: 100px auto;
//   background-color: #ffffff;
//   box-sizing: border-box;
//   overflow-y: scroll;
//   -ms-overflow-style: none;
//   &::-webkit-scrollbar {
//     display: none;
//   }

//   @media screen and (max-width: 1024px) {
//     width: 100%;
//     margin: 30px auto;
//     height: calc(100vh - 60px);
//   }
// `

export const ProjectModal = styled.div`
  position: fixed;
  top: 100px;
  width: 1400px;
  left: calc(50% - 700px);
  height: calc(100vh - 200px);
  z-index: 999;
  background-color: #ffffff;
  box-sizing: border-box;
  overflow-y: scroll;
  -ms-overflow-style: none;
  &::-webkit-scrollbar {
    display: none;
  }

  @media screen and (max-width: 1400px) {
    width: 80%;
    left: 10%;
  }
  @media screen and (max-width: 1024px) {
    width: calc(100% - 40px);
    top: 30px;
    left: 20px;
    height: calc(100vh - 60px);
  }
`

export const WebProjectLayout = styled.div`
  position: relative;
  display: flex;
  flex-direction: column-reverse;
  padding: 80px 80px;
`

export const PhoneProjectLayout = styled.div`
  position: relative;
  display: flex;
  padding: 80px 80px;

  @media screen and (max-width: 1024px) {
    flex-direction: column-reverse;
    padding: 50px 40px;
  }
`

export const ButtonBox = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  height: 60px;
  position: sticky;
  top: 0;
  background-color: #ffffff;
  box-shadow: 0 1px 5px rgba(0, 0, 0, 0.05);
  z-index: 980;
  @media screen and (max-width: 1024px) {
  }
`
export const CloseButton = styled.button`
  color: #aaaaaa;
  font-size: 30px;
  margin-right: 15px;
  @media screen and (max-width: 1024px) {
  }
`

export const WebImgBox = styled.div`
  width: 680px;
  margin: 0 auto;
  margin-top: 50px;
  border-radius: 2px;
  box-sizing: border-box;

  @media screen and (max-width: 1024px) {
    width: 100%;
  }
`

export const WebImg = styled.img`
  width: 680px;

  @media screen and (max-width: 1024px) {
    width: 100%;
  }
`
export const PhoneImgBox = styled.div`
  margin: 0 auto;

  @media screen and (max-width: 1024px) {
    margin-top: 50px;
  }
`

export const PhoneImg = styled.img`
  width: 250px;
  margin-right: 100px;
  border-radius: 36px;

  @media screen and (max-width: 1024px) {
    margin-right: 0;
  }
`

export const DetailBox = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
`
export const TitleBox = styled.div`
  margin-bottom: 20px;

  &::after {
    content: '';
    clear: both;
    display: block;
    width: 100%;
    height: 1px;
    margin-top: 30px;
    background-color: #dedede;
  }
`
export const TitleH4 = styled.h4`
  margin-bottom: 10px;
  font-family: SokchoBadaCalligraphy;
  font-size: 1.5rem;
  line-height: 1.8rem;
  position: relative;
  padding-left: 15px;

  &::before {
    content: '';
    clear: both;
    display: block;
    position: absolute;
    top: 10px;
    left: 0;
    width: 9px;
    height: 9px;
    background-color: #333333;
    transform: rotate(135deg);
    border-radius: 15%;
  }
`

export const Description = styled.span`
  margin-bottom: 10px;
`
export const TextBoxGray = styled.span`
  display: inline-block;
  padding: 3px 4px;
  background-color: #ededed;
  border-radius: 3px;
`

export const Ul = styled.ul`
  padding: 15px 0 50px;
`

export const List = styled.li`
  position: relative;
  display: block;
  margin-bottom: 10px;
  padding-left: 12px;

  &::before {
    content: '';
    clear: both;
    display: block;
    position: absolute;
    top: 7px;
    left: 0;
    width: 7px;
    height: 7px;
    background: radial-gradient(rgba(255, 255, 255, 0), #333333);
    border-radius: 50%;
  }
`
export const ListDetailUl = styled.ul`
  padding-top: 6px;
`
export const ListDetail = styled.li`
  padding: 4px 0;

  &:first-child {
    padding-top: 0;
  }
  &:last-child {
    padding-bottom: 0;
  }
`

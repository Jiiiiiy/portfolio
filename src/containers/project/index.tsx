import styled from 'styled-components'
import {
  ProjectTitleH3Center,
  TitleH2,
  ProjectLayout
} from '../../styles/styled-component'
import { forwardRef, useState } from 'react'
import ProjectDetail from './detail'
// import GreenJangteoDetail from './detail/GreenJangteo'
// import SobigirokDetail from './detail/Sobigirok'
// import PortfolioWPDetail from './detail/PortfolioWP'
// import PurewithmeDetail from './detail/Purewithme'
// import ProjectDetail from './detail'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const ProjectContainer = forwardRef(({ content2Ref }: any) => {
  const [modalOpen, setModalOpen] = useState(false)
  const [projectName, setProjectName] = useState('')

  const showModal = () => {
    setModalOpen(true)
    document.body.style.overflowY = 'hidden'
  }

  // const [modalOpenPWM, setModalOpenPWM] = useState(false)

  // const showModalPWM = () => {
  //   setModalOpenPWM(true)
  //   document.body.style.overflowY = 'hidden'
  // }
  // const [modalOpenGJ, setModalOpenGJ] = useState(false)
  // const showModalGJ = () => {
  //   setModalOpenGJ(true)
  //   document.body.style.overflowY = 'hidden'
  // }

  // const [modalOpenS, setModalOpenS] = useState(false)
  // const showModalS = () => {
  //   setModalOpenS(true)
  //   document.body.style.overflowY = 'hidden'
  // }

  // const [modalOpenWP, setModalOpenWP] = useState(false)
  // const showModalWP = () => {
  //   setModalOpenWP(true)
  //   document.body.style.overflowY = 'hidden'
  // }

  return (
    <ProjectLayout
      id="Project"
      ref={content2Ref}>
      <TitleH2>Projects</TitleH2>
      <Ul>
        <List
          // onClick={showModalPWM}
          onClick={() => {
            showModal(), setProjectName('purewithme')
          }}
          className="purewithme">
          <TextCenter>
            <ProjectTitleH3Center>purewithme</ProjectTitleH3Center>
          </TextCenter>
        </List>
        <List
          // onClick={showModalGJ}
          onClick={() => {
            showModal(), setProjectName('green-jangteo')
          }}
          className="green-jangteo">
          <TextCenter>
            <ProjectTitleH3Center>green-jangteo</ProjectTitleH3Center>
          </TextCenter>
        </List>
        <List
          onClick={() => {
            showModal(), setProjectName('sobigirok')
          }}
          // onClick={showModalS}
          className="sobigirok">
          <TextCenter>
            <ProjectTitleH3Center>sobigirok</ProjectTitleH3Center>
          </TextCenter>
        </List>
        <List
          onClick={() => {
            showModal(), setProjectName('portfolioWP')
          }}
          // onClick={showModalWP}
          className="portfolioWP">
          <TextCenter>
            <ProjectTitleH3Center>
              portfolio <br />
              -WebPublisher
            </ProjectTitleH3Center>
          </TextCenter>
        </List>
      </Ul>
      {modalOpen && (
        <ProjectDetail
          setModalOpen={setModalOpen}
          projectName={projectName}
        />
      )}
      {/* {modalOpenPWM && <PurewithmeDetail setModalOpenPWM={setModalOpenPWM} />}
      {modalOpenGJ && <GreenJangteoDetail setModalOpenGJ={setModalOpenGJ} />}
      {modalOpenS && <SobigirokDetail setModalOpenS={setModalOpenS} />}
      {modalOpenWP && <PortfolioWPDetail setModalOpenWP={setModalOpenWP} />} */}
    </ProjectLayout>
  )
})

export default ProjectContainer

const Ul = styled.ul`
  display: flex;
  flex-wrap: wrap;
  padding: 20px 0;
`

const List = styled.li`
  width: calc((100% - 60px) / 4);
  height: 230px;
  margin-bottom: 20px;
  font-family: GmarketSansMedium;
  cursor: pointer;
  box-sizing: border-box;
  margin-right: 20px;

  &.purewithme {
    background: #000 url('dist/img/purewithme.png') 50% no-repeat;
    background-size: contain;
  }

  &.green-jangteo {
    background: #000 url('img/green-jangteo.gif') 50% no-repeat;
    background-size: contain;
  }

  &.sobigirok {
    background: url('img/sobigirok.png') 50% no-repeat;
    background-size: cover;
  }

  &.portfolioWP {
    background: url('img/portfolio_wp.gif') 50% no-repeat;
    background-size: cover;
  }

  &:nth-child(4n) {
    margin-right: 0;
  }

  &:hover div {
    background-color: rgba(0, 0, 0, 0);
  }
  &:hover h3 {
    text-shadow: -1px 0 #cccccc, 0 1px #cccccc, 1px 0 #cccccc, 0 -1px #cccccc;
  }

  &:hover h3 {
    color: #3456d1;
  }

  @media screen and (max-width: 1400px) {
    width: calc(33% - 10px);
    &:nth-child(4n) {
      margin-right: 20px;
    }
    &:nth-child(3n) {
      margin-right: 0;
    }
  }
  @media screen and (max-width: 1100px) {
    width: calc(50% - 10px);
    border-radius: 5px;

    &:nth-child(3n) {
      margin-right: 20px;
    }

    &:nth-child(2n) {
      margin-right: 0;
    }
  }
  @media screen and (max-width: 768px) {
    height: 200px;
  }
  @media screen and (max-width: 480px) {
    width: 100%;
    height: 250px;
    &:nth-child(3n) {
      margin-right: 0;
    }
    margin-right: 0;
  }
`

const TextCenter = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 230px;
  background-color: rgba(0, 0, 0, 0.6);
  transition: all 0.3s;

  @media screen and (max-width: 1024px) {
    border-radius: 5px;
  }
  @media screen and (max-width: 768px) {
    height: 200px;
  }
  @media screen and (max-width: 480px) {
    height: 250px;
  }
`

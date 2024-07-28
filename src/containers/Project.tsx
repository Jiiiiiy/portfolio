import styled from 'styled-components'
import { ProjectTitleH3Center, TitleH2, Layout } from '../css/styled-component'
import { forwardRef, useState } from 'react'
import GreenJangteoDetail from './GreenJangteoDetail'
import SobigirokDetail from './SobigirokDetail'
import PortfolioWPDetail from './PortfolioWPDetail'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const ProjectContainer = forwardRef(({ content2Ref }: any) => {
  const [modalOpenGJ, setModalOpenGJ] = useState(false)

  const showModalGJ = () => {
    setModalOpenGJ(true)
    document.body.style.overflowY = 'hidden'
  }

  const [modalOpenS, setModalOpenS] = useState(false)
  const showModalS = () => {
    setModalOpenS(true)
    document.body.style.overflowY = 'hidden'
  }

  const [modalOpenWP, setModalOpenWP] = useState(false)
  const showModalWP = () => {
    setModalOpenWP(true)
    document.body.style.overflowY = 'hidden'
  }

  return (
    <Layout
      id="Project"
      ref={content2Ref}>
      <TitleH2>Projects</TitleH2>
      <Ul>
        <List
          onClick={showModalGJ}
          className="green-jangteo">
          <TextCenter>
            <ProjectTitleH3Center>green-jangteo</ProjectTitleH3Center>
          </TextCenter>
        </List>
        {modalOpenGJ && <GreenJangteoDetail setModalOpenGJ={setModalOpenGJ} />}
        <List
          onClick={showModalS}
          className="even sobigirok">
          <TextCenter>
            <ProjectTitleH3Center>sobigirok</ProjectTitleH3Center>
          </TextCenter>
        </List>
        {modalOpenS && <SobigirokDetail setModalOpenS={setModalOpenS} />}
        <List
          onClick={showModalWP}
          className="portfolioWP">
          <TextCenter>
            <ProjectTitleH3Center>
              portfolio <br />
              -WebPublisher
            </ProjectTitleH3Center>
          </TextCenter>
        </List>
        {modalOpenWP && <PortfolioWPDetail setModalOpenWP={setModalOpenWP} />}
      </Ul>
    </Layout>
  )
})

export default ProjectContainer

const Ul = styled.ul`
  display: flex;
  flex-wrap: wrap;
  padding: 20px 0;
`

const List = styled.li`
  width: calc(50% - 10px);
  height: 230px;
  margin-bottom: 20px;
  font-family: GmarketSansMedium;
  cursor: pointer;
  box-sizing: border-box;

  &.even {
    margin-left: 20px;
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

  &:hover div {
    background-color: rgba(0, 0, 0, 0);
  }
  &:hover h3 {
    text-shadow: -1px 0 #cccccc, 0 1px #cccccc, 1px 0 #cccccc, 0 -1px #cccccc;
  }

  &:hover h3 {
    color: #3456d1;
  }

  @media screen and (max-width: 1024px) {
    border-radius: 5px;
  }
  @media screen and (max-width: 768px) {
    height: 200px;
  }
  @media screen and (max-width: 480px) {
    width: 100%;
    height: 250px;

    &.even {
      margin-left: 0;
    }
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

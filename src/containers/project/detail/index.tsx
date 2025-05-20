import {
  ButtonBox,
  CloseButton,
  ModalBackground,
  ProjectModal
} from '../../../styles/styled-component'
import { MdOutlineClose } from 'react-icons/md'
import GreenJangteoDetail from './GreenJangteo'
import PurewithmeDetail from './Purewithme'
import SobigirokDetail from './Sobigirok'
import PortfolioWPDetail from './PortfolioWP'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const ProjectDetail = ({ setModalOpen, projectName }: any) => {
  const closeModal = () => {
    setModalOpen(false)
    document.body.style.overflowY = 'auto'
  }
  console.log(projectName)
  return (
    <>
      <ModalBackground onClick={() => closeModal()} />
      <ProjectModal>
        <ButtonBox>
          <CloseButton onClick={() => closeModal()}>
            <MdOutlineClose />
          </CloseButton>
        </ButtonBox>
        {projectName === 'purewithme' && <PurewithmeDetail />}
        {projectName === 'green-jangteo' && <GreenJangteoDetail />}
        {projectName === 'sobigirok' && <SobigirokDetail />}
        {projectName === 'portfolioWP' && <PortfolioWPDetail />}
      </ProjectModal>
    </>
  )
}

export default ProjectDetail

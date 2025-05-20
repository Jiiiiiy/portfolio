import { useEffect, useRef, useState } from 'react'
import Header from '../components/Header'
import { ContainerSizeFlex } from '../styles/styled-component'
import ProjectContainer from './project/'
import ProfileContainer from './profile/'

const MainContainer = () => {
  const [category, setCategory] = useState('Profile')
  const content1Ref = useRef<HTMLDivElement>(null)
  const content2Ref = useRef<HTMLDivElement>(null)

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleCategory = (e: any) => {
    setCategory(e.currentTarget.textContent || '')
    category == `Profile`
      ? content1Ref.current?.scrollIntoView({ behavior: 'smooth' })
      : content2Ref.current?.scrollIntoView({ behavior: 'smooth' })
  }

  const [width, setWidth] = useState(window.innerWidth)
  const updateWidth = () => {
    setWidth(window.innerWidth)
  }

  useEffect(() => {
    window.addEventListener('resize', updateWidth)
    console.log(content1Ref)
  }, [])

  return (
    <>
      <Header
        onCategory={handleCategory}
        category={category}
      />
      <ContainerSizeFlex>
        {/* <WebImgBox /> */}
        {width > 1024 && category == `Profile` ? (
          <ProfileContainer />
        ) : width > 1024 && category == `Project` ? (
          <ProjectContainer />
        ) : (
          <>
            <ProfileContainer ref={content1Ref} />
            <ProjectContainer ref={content2Ref} />
          </>
        )}
      </ContainerSizeFlex>
    </>
  )
}

export default MainContainer

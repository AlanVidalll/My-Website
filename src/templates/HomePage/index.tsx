import * as S from './styles'

export type HomeTemplateProps = {
  title: string
}

const HomePage = ({ title }: HomeTemplateProps) => (
  <S.Wrapper>
    <h1>{title}</h1>
  </S.Wrapper>
)

export default HomePage

import * as S from './styles'

export type HeadingProps = {
  size?: 'small' | 'medium' | 'large'
  fontWeight?: 'normal' | 'bold' | 'small_bold'
  children: React.ReactNode
}
const Heading = ({ size, fontWeight, children }: HeadingProps) => {
  return (
    <S.Wrapper size={size} fontWeight={fontWeight}>
      {children}
    </S.Wrapper>
  )
}
export default Heading

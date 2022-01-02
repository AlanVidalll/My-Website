import HomePage, { HomeTemplateProps } from 'templates/HomePage'

export default function Home(props: HomeTemplateProps) {
  return <HomePage {...props} />
}

export function getStaticProps() {
  // faz lógica
  // pode ser buscar dados em uma api
  // fazer caculo/leitura de context

  //retorno dos dados
  return {
    props: {
      title: 'My personal website'
    }
  }
}

export const FirstApp = () => {

  const getResult = (a, b) => {
    return a + b
  }

  return (
    <>
      <h1>{getResult(90 , 5)}</h1>
      <p>Subtitulo</p>
    </>
  )
}


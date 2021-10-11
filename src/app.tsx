import { useState, useEffect } from 'react'
import { Canvas } from 'canvas/canvas'

function App () {
  const [dataCollatzX, setDataX] = useState<number[]>([8])
  const [dataCollatzY, setDataY] = useState<number[]>([])

  useEffect(() => {
    function collatz (x: number) {
      let y: number
      if (dataCollatzX.length === 1) {
        y = (3 * x + 1)
        setDataX([...dataCollatzX, y])
        setDataY([...dataCollatzY, y])
      } else {
        if (x % 2 === 0) {
          y = (x / 2)
          setDataX([...dataCollatzX, y])
          setDataY([...dataCollatzY, y])
        } else {
          y = (3 * x + 1)
          setDataX([...dataCollatzX, y])
          setDataY([...dataCollatzY, y])
        }
      }
    }

    setTimeout(() => {
      collatz(dataCollatzX[dataCollatzX.length - 1])
    }, 5000)
  }, [dataCollatzX, dataCollatzY])

  return (
    <>
      <Canvas dataCollatzX={dataCollatzX} dataCollatzY={dataCollatzY} />
    </>
  )
}

export { App }

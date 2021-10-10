import { useState, useEffect } from 'react'
import { Canvas } from 'canvas/canvas'

function App () {
  const [dataCollatz, setData] = useState<number[]>([10])

  useEffect(() => {
    function collatz (x: number) {
      if (dataCollatz.length === 1) {
        x = (3 * x + 1)
        setData([...dataCollatz, x])
      } else {
        if (x % 2 === 0) {
          x = (x / 2)
          setData([...dataCollatz, x])
          console.log(x + ' par')
        } else {
          x = (3 * x + 1)
          setData([...dataCollatz, x])
          console.log(x + ' impar')
        }
      }
    }

    setTimeout(() => {
      collatz(dataCollatz[dataCollatz.length - 1])
    }, 500)
  }, [dataCollatz])


  return (
    <>
      <Canvas dataCollatz={dataCollatz} />
    </>
  )
}

export { App }

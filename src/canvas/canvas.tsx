import { Line } from 'react-chartjs-2'

function Canvas ({ dataCollatzX, dataCollatzY }: any) {
  return (
    <Line
      data={
        {
          labels: dataCollatzX,
          datasets: [
            {
              label: 'collatz value: ' + dataCollatzX[dataCollatzX.length - 1],
              data: dataCollatzY,
              borderWidth: 1,
            },
          ],
        }
      }
      height={400}
      width={600}
    />
  )
}

export { Canvas }

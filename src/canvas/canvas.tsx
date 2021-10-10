import { Line } from 'react-chartjs-2'

function Canvas ({ dataCollatz }: any) {
  return (
    <Line
      data={{
        labels: dataCollatz,
        datasets: [
          {
            label: 'collatz value: ' + dataCollatz[dataCollatz.length - 1],
            data: dataCollatz,
            borderWidth: 1,
          },
        ],
      }}
      height={400}
      width={600}
    />
  )
}

export { Canvas }

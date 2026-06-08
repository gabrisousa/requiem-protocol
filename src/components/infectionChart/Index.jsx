import {
  LineChart,
  Line,
  ResponsiveContainer
} from 'recharts'

const data = [
  { value: 20 },
  { value: 45 },
  { value: 32 },
  { value: 80 },
  { value: 50 },
  { value: 95 },
  { value: 60 }
]

function InfectionChart() {
  return (
    <div
      style={{
        width: '100%',
        height: 250
      }}
    >
      <ResponsiveContainer>

        <LineChart data={data}>

          <Line
            type="monotone"
            dataKey="value"
            stroke="#ffffff"
            strokeWidth={3}
            dot={false}
          />

        </LineChart>

      </ResponsiveContainer>
    </div>
  )
}

export default InfectionChart
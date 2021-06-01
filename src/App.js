import "./App.css"
import { Bar, Line, Doughnut, Pie } from "react-chartjs-2"

const data = {
  labels: ["Red", "Blue", "Green", "Violet", "Orange", "Yellow"],
  datasets: [
    {
      label: "Couleurs préférées en France",
      data: ["23", "21", "32", "12", "15", "9"],
      backgroundColor: ["red", "blue", "green", "violet", "orange", "yellow"],
    },
  ],
}

const options = {
  maintainAspectRatio: false,
}

function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="card">
          <Bar data={data} options={options} />
        </div>
        <div className="card">
          <Line data={data} options={options} />
        </div>
        <div className="card">
          <Doughnut data={data} options={options} />
        </div>
        <div className="card">
          <Pie data={data} options={options} />
        </div>
      </div>
    </div>
  )
}

export default App

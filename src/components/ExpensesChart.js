import { Card } from "react-bootstrap"
import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip } from "recharts"

const data = [
  { name: "Category 1", value: 35 },
  { name: "Category 2", value: 45 },
  { name: "Category 3", value: 20 },
]

const COLORS = ["#32CD32", "#FFC107", "#2196F3"]

const ExpensesChart = () => {
  return (
    <Card>
      <Card.Body>
        <Card.Title style={{ color: "#32CD32", fontSize: "25px", fontWeight: "900" }}>Group Expenses</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">Group expenses summary by category</Card.Subtitle>
        <ResponsiveContainer width="100%" height={300}>
          <PieChart>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              innerRadius={60}
              outerRadius={80}
              fill="#000"
              paddingAngle={5}
              dataKey="value"
            >
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Tooltip />
            <Legend />
          </PieChart>
        </ResponsiveContainer>
      </Card.Body>
    </Card>
  )
}

export default ExpensesChart


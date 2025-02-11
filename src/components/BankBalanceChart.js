import { Card, Form } from "react-bootstrap";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";

const data = [
    { name: "0", bankBalance: 0, cashAtHand: 0 },
    { name: "0.2", bankBalance: 0, cashAtHand: 0 },
    { name: "0.4", bankBalance: 0, cashAtHand: 0 },
    { name: "0.6", bankBalance: 0, cashAtHand: 0 },
    { name: "0.8", bankBalance: 0, cashAtHand: 0 },
    { name: "1.0", bankBalance: 0, cashAtHand: 0 },
];

const BankBalanceChart = () => {
    return (
        <Card>
            <Card.Body>
                <div className="d-flex justify-content-between align-items-center mb-3">
                    <div>
                        <Card.Title>Actual Bank Balance</Card.Title>
                        <Card.Text  style={{color: "#32CD32", fontWeight: "700"}}>KES 0</Card.Text>
                    </div>
                    <Form.Select style={{ width: "auto" }}>
                        <option>Last 12 months</option>
                        <option>Last 14 days</option>
                        <option>Last month</option>
                        <option>Last year</option>
                    </Form.Select>
                </div>
                <div className="d-flex justify-content-between align-items-center">
                    <Card.Subtitle>System Bank Balances</Card.Subtitle>
                    <Card.Text>
                        <span style={{ color: "#000", fontWeight: "600" }}>Cash at Hand </span>
                        <span style={{ color: "#32CD32", fontWeight: "700" }}>KES 0</span>
                    </Card.Text>

                </div>
                <ResponsiveContainer width="100%" height={300}>
                <LineChart data={data}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Line type="monotone" dataKey="bankBalance" stroke="#32CD32" activeDot={{ r: 8 }} />
                        <Line type="monotone" dataKey="cashAtHand" stroke="#FFC107" />
                    </LineChart>
                </ResponsiveContainer>
            </Card.Body>
        </Card>
    );
}

export default BankBalanceChart;
import React from 'react';
import { Container, Row, Col, Button, Card } from "react-bootstrap";
import { LineChart, Line, XAxis, YAxis, CartesianGrid } from 'recharts';

const GroupIncomeChart = () => {
  // Sample data for 12 months
  const months = ['Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec', 'Jan', 'Feb'];
  const data = months.map(month => ({
    month,
    income: 0
  }));

  return (
    <Card>
    <div className="w-full max-w-4xl p-4 bg-gray-50 rounded-lg">
      {/* Header */}
      <div className="mb-4">
        <h2 className="text-lg font-medium text-green-600" style={{ color: "#32CD32", fontSize: "25px", fontWeight: "600" }}>Group Income</h2>
        <p className="text-sm text-gray-600">Monthly Deposits less withdrawals</p>
      </div>

      {/* Chart */}
      <div className="h-64 mb-6">
        <LineChart
          width={800}
          height={250}
          data={data}
          margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
        >
          <CartesianGrid strokeDasharray="3 3" stroke="#e5e5e5" />
          <XAxis 
            dataKey="month" 
            tick={{ fontSize: 12 }}
            padding={{ left: 10, right: 10 }}
          />
          <YAxis
            domain={[0, 1]}
            ticks={[0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1.0]}
            tick={{ fontSize: 12 }}
          />
          <Line 
            type="monotone" 
            dataKey="income" 
            stroke="#32CD32"
            strokeWidth={2}
            dot={false}
          />
        </LineChart>
      </div>

      {/* Metrics Section */}
      <Container className="py-2">
      <Row className="align-items-center">
        <Col xs={4} className="text-start">
          <span>Feb Collections</span>
        </Col>

      
        <Col xs={4} className="text-center">
          <span>KES 0</span>
        </Col>

       
        <Col xs={4} className="text-end">
          <Button variant="light" size="sm">View</Button>
        </Col>
      </Row>
      <p style={{color: "#4169E1", fontSize: "small" }}>0% ↑ Increase</p>

      <Row className="align-items-center">
       
        <Col xs={4} className="text-start">
          <span>Feb New Income</span>
        </Col>

     
        <Col xs={4} className="text-center">
          <span>KES 0</span>
        </Col>

      
        <Col xs={4} className="text-end">
          <Button variant="light" size="sm">View</Button>
        </Col>
      </Row>
      <p style={{color: "#4169E1", fontSize: "small" }}>0% ↑ Increase</p>

      <Row className="align-items-center">
      
        <Col xs={4} className="text-start">
          <span>Feb Profit Margin</span>
        </Col>

       
        <Col xs={4} className="text-center">
          <span>KES 0</span>
        </Col>

       
        <Col xs={4} className="text-end">
          <Button variant="light" size="sm" >View</Button>
        </Col>
      </Row>
      <p style={{color: "#4169E1", fontSize: "small" }}>0% ↑ Increase</p>
    </Container>
    </div>
    </Card>
  );
};

export default GroupIncomeChart;
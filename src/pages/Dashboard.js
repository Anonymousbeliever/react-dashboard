import { Row, Col } from "react-bootstrap"
import BankBalanceChart from "../components/BankBalanceChart"
import ContributionsTable from "../components/ContributionsTable"
import ExpensesChart from "../components/ExpensesChart"
import IncomeSummary from "../components/IncomeSummary"

const Dashboard = () => {
    return (
        <div className=" dash">
            <h1 className="mb-2"style={{fontWeight:"800"}}>GROUP DASHBOARD</h1>
            <p className="text-muted mb-4" style={{fontWeight:"600"}}>Group transaction summary</p>
            <Row className="mb-4">
                <Col md={6}>
                    <BankBalanceChart />
                </Col>
                <Col md={6}>
                    <ContributionsTable />
                </Col>
            </Row>
            <Row>
                <Col xs={12}>
                    <ExpensesChart />
                </Col>

                <Col xs={12}>
                    <IncomeSummary />
                </Col>
            </Row>
        </div>
    )
}

export default Dashboard


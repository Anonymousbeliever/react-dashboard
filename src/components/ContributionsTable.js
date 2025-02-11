import { Card, Table, Tabs, Tab } from "react-bootstrap";

const members = [
    { id: 1, name: "Catherine Majala", bal: 0, arrears: 0 },
    { id: 2, name: "John Doe", bal: 0, arrears: 0 },
    { id: 3, name: "Karl Doe", bal: 0, arrears: 0 },
    { id: 4, name: "Stephen Tumaini", bal: 0, arrears: 0 },
]

const ContributionsTable = () => {
    return (
        <Card className="card-height">
            <Card.Body>
                <Card.Title>Contributions, Loans & Fines</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">Members contributions savings loans and fines</Card.Subtitle>
                <Tabs defaultActiveKey="contributions" className="mb-3">
                    <Tab eventKey="contributions" title="Contributions">
                        <Table striped bordered hover>
                            <thead>
                                <tr className="custom-table-header">
                                    <th style={{ backgroundColor: "#32CD32", color: "white" }}>#</th> 
                                    <th style={{ backgroundColor: "#32CD32", color: "white" }}>Member</th>
                                    <th style={{ backgroundColor: "#32CD32", color: "white" }}>Bal (KES)</th>
                                    <th style={{ backgroundColor: "#32CD32", color: "white" }}>Arrears (KES)</th>
                                </tr>
                            </thead>
                            <tbody>
                                {members.map((member) => (
                                    <tr key={member.id}>
                                        <td>{member.id}</td>
                                        <td>{member.name}</td>
                                        <td>{member.bal}</td>
                                        <td>{member.arrears}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </Table>
                    </Tab>
                    <Tab eventKey="loans" title="Loans">
                        {/* Loans content */}
                    </Tab>
                    <Tab eventKey="fines" title="Fines">
                        {/* Fines content */}
                    </Tab>
                </Tabs>
            </Card.Body>
        </Card>
    )
}

export default ContributionsTable;

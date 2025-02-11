import { useState } from 'react';
import { Nav, Form, Button } from 'react-bootstrap';
import { Search, ChevronLeft, ChevronRight, LayoutDashboard, Ban as Bank, FileText, Upload, PiggyBank, Calendar, RotateCcw, Users, MessageSquare, TrendingUp, BarChart3, FileInput, Settings } from 'lucide-react';

const menuItems = [
  { section: null, items: [{ icon: LayoutDashboard, label: 'Dashboard' }] },
  {
    section: 'TRANSACTIONS',
    items: [
      { icon: Bank, label: 'Bank Account' },
      { icon: FileText, label: 'Record Transactions' },
      { icon: Upload, label: 'Uploads' },
      { icon: PiggyBank, label: 'Savings Withdrawals' },
      { icon: Calendar, label: 'Payment Schedules' },
      { icon: RotateCcw, label: 'Reverse Transactions' },
    ],
  },
  {
    section: 'GROUP MANAGEMENT',
    items: [
      { icon: Users, label: 'Membership Management ' },
      { icon: FileText, label: 'Fine & Invoicing' },
      { icon: MessageSquare, label: 'Communication' },
      { icon: TrendingUp, label: 'Investments' },
    ],
  },
  {
    section: 'REPORTS',
    items: [
      { icon: BarChart3, label: 'Generate Reports' },
      { icon: FileInput, label: 'Generate Templates' },
    ],
  },
  {
    section: 'GROUP SETTINGS',
    items: [{ icon: Settings, label: 'Settings' }],
  },
];

const Sidebar = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <div className={`sidebar bg-white border-end ${isCollapsed ? 'collapsed' : ''}`}>
      <Button
        variant="light"
        className="toggle-button"
        onClick={() => setIsCollapsed(!isCollapsed)}
      >
        {isCollapsed ? <ChevronRight size={16} /> : <ChevronLeft size={16} />}
      </Button>

      <div className="p-3">
        <div className="sidebar-search">
          <Search className="search-icon" size={20} />
          <Form.Control
            type="text"
            placeholder="Search menu..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="bg-light"
          />
        </div>
      </div>

      <Nav className="flex-column sidebar-content">
        {menuItems.map((group, groupIndex) => (
          <div key={groupIndex} className="mb-3">
            {group.section && !isCollapsed && (
              <div className="px-3 py-2 text-muted small fw-semibold">
                {group.section}
              </div>
            )}
            {group.items.map((item, itemIndex) => (
              <Nav.Link
                key={itemIndex}
                className="d-flex align-items-center sidebar-item"
                href="#"
              >
                <item.icon size={20} className="sidebar-icon" />
                {!isCollapsed && <span className="ms-2">{item.label}</span>}
              </Nav.Link>
            ))}
          </div>
        ))}
      </Nav>
    </div>
  );
};

export default Sidebar;

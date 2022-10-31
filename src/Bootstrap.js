import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Tabs, Tab } from "react-bootstrap";
import Sonnet from "./components/Sonnet";

function Bootstrap() {
  return (
    <div>
      <h3>Bootstrap</h3>
      <Button>Button</Button>
      <Button variant="success">Button</Button>

      <Tabs
        defaultActiveKey="profile"
        id="uncontrolled-tab-example"
        className="mb-3"
      >
        <Tab eventKey="home" title="Home">
          <Sonnet />
        </Tab>
        <Tab eventKey="profile" title="Profile">
          <Sonnet />
        </Tab>
        <Tab eventKey="contact" title="Contact" disabled>
          <Sonnet />
        </Tab>
      </Tabs>
    </div>
  );
}

export default Bootstrap;

import { Button, Input, Option, Select } from "./components";

const App = () => {
  return (
    <div>
      <h2>Button</h2>
      <Button>Primary Button</Button>
      <Button variant="secondary">Secondary Button</Button>

      <h2>Input</h2>
      <Input label="Label" />

      <h2>Select</h2>
      <Select>
        <Option value="1">Option 1</Option>
        <Option value="2">Option 2</Option>
      </Select>
    </div>
  );
};

export default App;

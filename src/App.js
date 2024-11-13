import "./App.css";
import FormValidation from "./components_2/FormValidation";
//import VirtualizedList from "./components_2/VirtualizedList";
//import TabsComponent from "./components_1/TabsComponent";

function App() {
  ///const items = Array.from({ length: 1000 }, (_, i) => `Item ${i + 1}`);
  // const handleSubmit = (values) => {
  //   console.log('Form Submitted:', values);
  // };
  return (
    <div className="App">
      {/* <TabsComponent tabs={tabs} /> */}
      {/* <VirtualizedList items={items} itemHeight={50} heigth={400} /> */}
      <FormValidation onSubmit={handleSubmit} />
    </div>
  );
}

export default App;

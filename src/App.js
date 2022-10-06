import './App.css';
import CustomTable from './components/Table/CustomTable';
import tableData from './sampleData/testTableData';

function App() {
  return (
    <div className="App">
      <CustomTable data={tableData} headers={["Name", "Target Score",  "Actual Score", "Total Points"]}/>
    </div>
  );
}

export default App;

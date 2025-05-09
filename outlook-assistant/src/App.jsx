import './App.css';

function App() {
  const handleClick = () => {
    alert('Schreibassistent ist an')
  };

  return(
    <div className="app-container">
        <h1>Outlook AI Assistant</h1>

        <button className="assistant-button" onClick={handleClick}>
        ✨Hilfe mit einem Brief
        </button>

    </div>
  );
}

export default App;

import Routes from "./pages/PageRouter";

// App level contexts are likely to be added into this page

const App: React.FC = () => {
  return (
    <div className="p-4">
      <Routes />
    </div>
  );
};

export default App;

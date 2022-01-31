import AppRouter from "./app-router";
import Language from "./components/language";
import Sidebar from "./layout/sidebar";

function App() {
  return (
    <div className="flex">
      <Sidebar />
      <main className="p-4 h-full min-h-screen" style={{width: 'calc(100% - 250px)'}}>
        <div className="p-2 flex justify-end">
          <Language />
        </div>
        <AppRouter/>
      </main>
    </div>
  );
}

export default App;

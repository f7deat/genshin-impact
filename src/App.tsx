import AppRouter from "./app-router";
import Sidebar from "./layout/sidebar";

function App() {
  return (
    <div className="flex">
      <Sidebar />
      <main className="w-full p-3 bg-gray-100 h-screen">
        <AppRouter/>
      </main>
    </div>
  );
}

export default App;

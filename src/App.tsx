import AppRouter from "./app-router";
import Sidebar from "./layout/sidebar";

function App() {
  return (
    <div className="flex">
      <Sidebar />
      <main className="w-full p-4 bg-gray-100 h-full min-h-screen">
        <AppRouter/>
      </main>
    </div>
  );
}

export default App;

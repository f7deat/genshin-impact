import News from "./components/news";
import Sidebar from "./layout/sidebar";

function App() {
  return (
    <div className="flex">
      <Sidebar />
      <main className="w-full p-3 bg-gray-100 h-screen">
        <News />
      </main>
    </div>
  );
}

export default App;

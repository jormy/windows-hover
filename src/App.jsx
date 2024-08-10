import Card from "./Card";

function App() {
  return (
    <>
      <div className="flex h-screen w-screen items-center justify-center bg-gray-900 p-20">
        <div className="grid grid-cols-2 gap-3 font-inter md:grid-cols-3">
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </div>
    </>
  );
}

export default App;

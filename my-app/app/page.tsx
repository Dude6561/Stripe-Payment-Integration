export default function Home() {
  const amount = 49.99;
  return (
    <div>
      <div className=" justify-center items-center bg-white flex flex-col mx-50 h-screen">
        <h1 className="text-black pb-6 font-bold text-xl">
          Nischal Requested {amount}
        </h1>
        <button className="bg-white px-5 py-1 text-black border-1 hover:cursor-pointer hover:bg-gray-200 font-medium text-xl">
          Pay
        </button>
      </div>
    </div>
  );
}

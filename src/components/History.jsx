import { HISTORY } from "../constants";

function History() {
  return (
    <div id="History" className="border-b border-neutral-900 pb-4 lg:mx-40">
      <h1 className="my-20 text-center text-4xl font-bold ">History</h1>
      <div className="flex flex-row flex-wrap items-center justify-center">
        {HISTORY.map((item, index) => (
          <div
            key={index}
            className="w-full max-w-md h-32 border-neutral-800 rounded-lg shadow-gray-50 shadow-sm p-4 m-2 transition-transform duration-300 flex flex-col justify-between"
          >
            <div className="flex flex-row justify-between items-center border-b pb-2 mb-2">
              <p className="text-xl font-semibold text-white">{item.year}</p>
            </div>
            <p className="lg:text-lg text-sm text-white">{item.achievement}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default History;

import { SPONSORS } from "../constants";
function Sponsors() {
  return (
    <>
      <div id="Sponsors" className="border-b border-neutral-800 pb-24 lg:mx-40">
        <h1 className="my-20 text-center text-4xl font-bold">Our Proud Sponsors</h1>
        <div className="flex flex-wrap items-center justify-center gap-4">
          {SPONSORS.map((item, index) => (
            <div
              className="flex flex-wrap items-center justify-center gap-4"
              key={index}
            >
              <div className="rounded-2xl border-4 border-neutral-800 p-4">
                <img
                  src={item.img}
                  className="text-7xl h-20 text-blue-600 w-24 rounded-lg"
                  alt=""
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Sponsors;

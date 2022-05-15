export default function Event(props) {
  return (
    <div>
      <div className="w-screen h-2/5 min-h-1/4 grid grid-cols-2 bg-cover bg-black p-3">
        <div className="w-full h-auto">
          <img src="barriologan.png" className="h-fill" />
        </div>
        <div className="p-8">
          <h1 className="text-3xl font-bold text-white text-center uppercase my-5">
            barrio logan science & art expo
          </h1>
          <h1 className="text-xl font-extralight text-white text-center uppercase">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
            quis imperdiet nunc. Sed in pretium elit, at finibus dolor.
            Suspendisse semper turpis vitae dui scelerisque sodales.
          </h1>
        </div>
      </div>
      <div className="w-screen h-2/5 min-h-1/4 grid grid-cols-2 bg-cover bg-black p-3">
        <div className="w-full h-auto">
          <img src="sixthsense.png" />
        </div>
        <div className="p-8">
          <h1 className="text-3xl font-bold text-white text-center uppercase my-5">
            UCSD TEDx Sixth Sense Pop-up
          </h1>
          <h1 className="text-xl font-extralight text-white text-center uppercase">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
            quis imperdiet nunc. Sed in pretium elit, at finibus dolor.
            Suspendisse semper turpis vitae dui scelerisque sodales.
          </h1>
        </div>
      </div>
    </div>
  );
}

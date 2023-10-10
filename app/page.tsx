import { CarCard, Hero, SearchBar } from "@/Components";

import { getCars } from "@/utils";
export default async function Home() {
  const allCars = await getCars();
  const isEmptyCars = !allCars || allCars.length < 1;

  return (
    <main>
      <Hero />
      <div className="mt-10 container mx-auto">
        <div className="">
          <h1 className="font-extrabold text-4xl mb-2">Cars Catelogue</h1>
          <p>show awesome cars in our website:</p>
        </div>
        <div>
          <SearchBar />
        </div>

        {!isEmptyCars ? (
          <section>
            <div className="home__car-container">
              {
                allCars.map((car: any) =>(
                  <CarCard car={car} key={Math.random()} />
                ))
              }
            </div>
          </section>
        ) : (
          <div className="home__cars-error">
            <h2 className="text-xl font-bold mb-4">You dont have cars</h2>
            <p>{allCars?.message}</p>
          </div>
        )}
      </div>
    </main>
  );
}

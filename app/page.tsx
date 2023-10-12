import { CarCard, CustomFilter, Hero, SearchBar, ShowMore } from "@/Components";
import { fuels, yearsOfProduction } from "@/constants";
import { HomeProps } from "@/types";
import { getCars } from "@/utils";

export default async function Home({searchParams}:HomeProps) {
  const allCars = await getCars({
    manufacturer: searchParams.manufacturer || "",
    year: searchParams.year || 2022,
    fuel: searchParams.fuel || "",
    limit: searchParams.limit || 10,
    model: searchParams.model || "",
  });
  const isEmptyCars = !allCars || allCars.length < 1;
  
  return (
    <main>
      <Hero />
      <div className="mt-10 container mx-auto">
        <div className=" px-3">
          <h1 className="font-extrabold text-4xl mb-2">Cars Catelogue</h1>
          <p>show awesome cars in our website:</p>
        </div>
        <div className="flex justify-between items-center flex-wrap gap-5 px-3">
          <SearchBar />
          <div className="flex justify-start flex-wrap items-center gap-2">
            <CustomFilter title="feul" options={fuels}/>
            <CustomFilter title="year" options={yearsOfProduction}/>
          </div>
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
            <div>
              <ShowMore 
                pageNumber={(searchParams.limit || 10)/10 }
                isNext = {(searchParams.limit || 10) > allCars.length}
              />
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

import { Hero } from "@/Components";

export default function Home() {
  return (
    <main >
      <Hero/>

      <div className="mt-10">
        <SearchManifacteurs />

      </div>
    </main>
  )
}

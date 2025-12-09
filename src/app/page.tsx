import Header from "../components/Header/Header";
import { links } from "../data/links"

export default function Home() {
  return (
    <main className="bg-gray-100 min-h-screen">
      <Header  links={links} />
      <section className="flex flex-col items-center justify-center p-8">
        <h2 className="text-4xl font-bold text-[#003580] mb-4 text-center">
          Sveiki atvykę į WestCoastVolvo.lt
        </h2>
        <p className="text-gray-700 text-center max-w-xl">
          Vietinis forumas, skelbimai ir info Volvo entuziastams pajūryje.
        </p>
      </section>
    </main>
  );
}

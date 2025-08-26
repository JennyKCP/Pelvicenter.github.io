import { Check } from "lucide-react";

const beneficios = [
  "Atención personalizada",
  "Resultados comprobados",
  "Tecnología no invasiva",
  "Ambiente seguro y confiable",
];

export default function Beneficios() {
  return (
    <section id="beneficios" className="py-16 bg-indigo-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-gray-800">Beneficios</h2>
        <ul className="mt-8 grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
          {beneficios.map((b, i) => (
            <li key={i} className="flex items-center gap-3 bg-white p-4 rounded-lg shadow">
              <Check className="text-indigo-600" />
              <span className="text-gray-700">{b}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

'use client'

export default function page() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-10">
      <h1 className="text-4xl font-bold">Sandcat Rätsel 11</h1>
      <p className="text-center">
        Ich bin ein Spiel aus Worten, ein Geheimnis zum Lösen,
        Mit Buchstaben und Zeichen, die munter durcheinander tosen.<br />
        Entschlüssle mich richtig, um den nächsten Schritt zu gehen,
        Ein Rätsel voller Worte, bei dem nur die Klugen bestehen. <br />
        Was bin ich?
      </p>
      <div className="w-6/12">
        <input
          className="text-black w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
          type="text"
          placeholder="Lösung"
          onChange={e => {
            const solutions = ['ratsel', 'rätsel', 'puzzle']
            const txt = e.target.value.toLowerCase();
            solutions.find(v => v === txt) ? console.log('CAAT') /* <- replace with redirect to next puzzle */ : void 0;
          }}
        />
      </div>
    </div>
  );
}
import BottonSubmit from "./BottonSubmit";

function FormUrl() {

  return (

    <form className="max-w-sm mx-auto rounded-lg shadow-xl overflow-hidden p-6 space-y-10 m-10">

      <p className="text-center font-bold text-2xl text-neutral-700">You can use 1 url at a time.</p>

      <div className="relative flex items-center border-b-2 focus-within:border-violet-500">

        <input type="url" name="url" placeholder="Paste your URL" className="font-medium block flex-grow appearance-none focus:outline-none bg-transparent" />

        <span className="material-symbols-outlined pointer-events-none mx-2">Link</span>

      </div>

      <BottonSubmit />

    </form>

  );

}

export default FormUrl;
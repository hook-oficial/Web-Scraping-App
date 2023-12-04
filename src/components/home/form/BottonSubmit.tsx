import { Link } from "react-router-dom";

function BottonSubmit() {
  
  return (

    <div className="flex justify-center">

      <Link to="/default-template" className="bg-violet-500 hover:bg-violet-600 focus:outline-none active:bg-violet-700 px-5 py-2 text-sm leading-5 rounded-full font-semibold text-white">
        Navigate Web
      </Link>

    </div>

  );
  
}

export default BottonSubmit;

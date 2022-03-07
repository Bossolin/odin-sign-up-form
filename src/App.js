import logo from "./img/odin-lined.png";
import background from "./img/aurora.JPG";

function App() {
  return (
    <div className="sm:flex h-screen">
      <div
        className=" sm:w-2/5 min-w-fit text-center bg-cover bg-center sm:min-h-screen sm:flex sm:flex-col sm:justify-between"
        style={{ backgroundImage: `url(${background})` }}
      >
        <div className="flex py-20 sm:py-2 justify-center items-center p-2 sm:mt-56 text-white bg-opacity-40 bg-black ">
          <img src={logo} alt="Odin logo" className="w-28 p-2" />
          <div className="font-odin text-8xl pt-4 ">ODIN</div>
        </div>
        <p className="text-slate-100 bg-black bg-opacity-40 sm:bg-opacity-0 hidden sm:block">
          Photo by Mattis Knudsen
        </p>
      </div>
      <div className="sm:w-3/5 p-8 sm:p-12 bg-slate-100 flex flex-col justify-center">
        <p className="text-2xl font-semibold sm:pr-12">
          This is not a real online service! You know you need something like
          this in your life to help you realize your deepest dreams.
        </p>
        <p className="text-2xl font-semibold pb-8 sm:pr-14">
          Sign up <i>now</i> to get started.
        </p>
        <p className="text-2xl font-semibold sm:pb-12">
          You <i>know</i> you want to.
        </p>
        <form action="" className="">
          <input type="text" />
          <button type="submit">Create Account</button>
        </form>
        <p>
          Already have an account? <a href="/">Log in</a>
        </p>
      </div>
    </div>
  );
}

export default App;

import logo from "./img/odin-lined.png";
import background from "./img/aurora.JPG";

function App() {
  return (
    <div className="sm:flex">
      <div
        className=" sm:w-2/5 min-w-fit text-center bg-cover bg-center sm:min-h-screen sm:flex sm:flex-col sm:justify-between"
        style={{ backgroundImage: `url(${background})` }}
      >
        <div className="flex py-20 sm:py-2 justify-center items-center p-2 sm:mt-56 text-white bg-opacity-40 bg-black ">
          <img src={logo} alt="Odin logo" className="w-28 p-2" />
          <div className="font-odin text-8xl pt-4 ">ODIN</div>
        </div>
        <p className="text-slate-300 bg-black bg-opacity-40 sm:bg-opacity-0 hidden sm:block">
          Photo by Mattis Knudsen
        </p>
      </div>
      <div className="sm:w-3/5 bg-slate-50 flex flex-col justify-center">
        <p className="text-2xl font-semibold px-8 sm:pr-28 sm:pl-12 mt-12 sm:mt-40">
          This is not a real online service! You know you need something like
          this in your life to help you realize your deepest dreams.
        </p>
        <p className="text-2xl font-semibold px-8 mb-6 sm:pr-14 sm:pl-12">
          Sign up <i>now</i> to get started.
        </p>
        <p className="text-2xl font-semibold px-8 sm:pl-12 mb-14">
          You <i>know</i> you want to.
        </p>
        <form action="">
          <h1 className="py-4 bg-white px-8 sm:pl-12 border-t border-slate-500 border-opacity-10 text-2xl font-bold">
            Let's do this!
          </h1>
          <fieldset className="bg-white shadow-lg px-12 sm:pr-20 sm:px-12 sm:grid sm:grid-cols-2 gap-x-12 lg:pr-64 pb-4">
            <div className="container">
              <label htmlFor="firstName" className="label">
                FIRST NAME
              </label>
              <input
                id="firstName"
                name="firstName"
                type="text"
                className="input"
              />
            </div>
            <div className="container">
              <label htmlFor="lastName" className="label">
                LAST NAME
              </label>
              <input
                id="lastName"
                name="lastName"
                type="text"
                className="input"
              />
            </div>
            <div className="container">
              <label htmlFor="email" className="label">
                EMAIL
              </label>
              <input id="email" name="email" type="email" className="input" />
            </div>
            <div className="container">
              <label htmlFor="phone" className="label">
                PHONE NUMBER
              </label>
              <input id="phone" name="phone" type="tel" className="input" />
            </div>
            <div className="container">
              <label htmlFor="password1" className="label">
                PASSWORD
              </label>
              <input
                id="password1"
                name="password1"
                type="password"
                className="input"
              />
            </div>
            <div className="container">
              <label htmlFor="password2" className="label">
                CONFIRM PASSWORD
              </label>
              <input
                id="password2"
                name="password2"
                type="password"
                className="input"
              />
            </div>
          </fieldset>
          <button
            type="submit"
            className="block px-12 py-3 sm:ml-12 m-8 bg-green-600 hover:bg-green-500 text-white rounded-lg shadow-md"
          >
            Create Account
          </button>
        </form>
        <p className="px-8 sm:pl-12 mb-20">
          Already have an account?{" "}
          <a href="/" className="text-green-600 hover:text-green-500 font-bold">
            Log in
          </a>
        </p>
      </div>
    </div>
  );
}

export default App;

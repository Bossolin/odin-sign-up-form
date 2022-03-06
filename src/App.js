import logo from "./img/odin-lined.png";
import background from "./img/aurora.JPG";

function App() {
  return (
    <div className="sm:flex h-screen">
      <div
        className=" sm:w-2/5 min-w-fit text-center"
        style={{ backgroundImage: `url(${background})` }}
      >
        <div className="flex justify-center items-center my-4 text-white bg-opacity-40 bg-black">
          <img src={logo} alt="Odin logo" className="w-24 p-2" />
          <div className="font-odin text-8xl pt-4 ">ODIN</div>
        </div>
        <p className="">Photo by Mattis Knudsen</p>
      </div>
      <div className="p-4 ">
        <p>
          This is not a real online service! You know you need something like
          this in your life to help you realize your deepest dreams. Sign up{" "}
          <i>now</i> to get started.
        </p>
        <p>
          You <i>know</i> you want to.
        </p>
        <form action="">
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

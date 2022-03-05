import logo from "./img/odin-lined.png";
import background from "./img/aurora.JPG";

function App() {
  return (
    <div className="">
      <div style={{ backgroundImage: `url(${background})` }}>
        <div>
          <img src={logo} alt="Odin logo" />
          <span className="font-odin">ODIN</span>
        </div>
        <p>Photo by Mattis Knudsen</p>
      </div>
      <div>
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

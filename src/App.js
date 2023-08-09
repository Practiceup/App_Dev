import queens from './images/Queens.jpg'

function App() {
  // Create constant variable
  const divText = "I am a text in a variable"

  // Create a style variable
  const styleJSX = { color: "purple", fontFamily: "Algerian" }
  return (
    <div className="App">
      <h1 style={{ color: "magenta", textAlign: "center" }}>Welcome to ReactJS</h1>
      <p>Let's be familiar with JSX elements</p>
      {/* class activity */}
      <h2>Activity</h2>
      <p>Pros of having a bucket list:</p>
      <ol>
        <li>It's a measureable form of progress</li>
        <li>It gives you things to look forward to</li>
        <li>It makes life more meaningful</li>
        <li>It helps you avoid languishing</li>
      </ol>
      {/* End of class activity */}

      <h2>Inline styling</h2>
      <label for="email" style={{ color: "olive", padding: "0.5em 1em" }}>Enter your email</label>
      <input id="email" type="text" placeholder="Type you email" style={{ backgroundColor: "rgb(230,230,230)", padding: "0.5em", borderRadius: "0.5em" }} />
      <button style={{ marginLeft: "1em", backgroundColor: "magenta", padding: "0.5em 1em", borderRadius: "0.5em", color: "whitesmoke" }}>Submit form</button>

      <figure>
        <img src={queens} style={{ width: "50%" }} />
      </figure>

      <p className="title">Adding a class name to a JSX element</p>

      <p className="txtVar">{divText}</p>
      <p style={styleJSX}>{divText}</p>

      <h2>Class Activity</h2>
      {/* Add an image with two inline styles */}
      <p>Image with two inline styles</p>
      <img src={queens} style={{ width: "400px", height: "600px", border: "solid 5px goldenrod", margin: "5px" }} />


    </div>
  );
}

export default App;

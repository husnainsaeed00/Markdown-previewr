
const renderer = new marked.Renderer();

marked.setOptions({
  breaks: true,
});

function App() {
  const [text, setText] = React.useState("");

  return (
    <div className="text-center px-4">
      <h1 className="p-4">My Markdown Previewer</h1>
      <textarea
        name="text"
        id="text"
        onChange={(e) => setText(e.target.value)}
        rows="10"
        cols="20"
        className="textarea"
        value={text}
      ></textarea>
      <h3 className="mt-3">Output</h3>
      <Preview markdown={text} />
    </div>
  );
}  

function Preview(props) {
  const markdown = props.markdown || "";

  const createMarkup = () => {
    return { __html: marked(markdown) };
  };

  return (
    <div
      dangerouslySetInnerHTML={createMarkup()}
      id="preview"
    ></div>
  );
}


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);

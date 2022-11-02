

function App() {
  return (
    <div className="App">
      REACT CSS MODULE TWO CLASSES JOIN
      <p className={`${isActive ? [roomlistStyles.active, roomlistStyles.category_button].join(' ') : roomlistStyles.category_button}`} > Hello</p>
    </div >
  );
}

export default App;

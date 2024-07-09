import './App.css'

function App() {
  let listBuah = ["Jeruk", "Strawberry", "Mangga"];

  if(listBuah) {
    <ul>
    {listBuah.map((item, index) => (
      <li key={index}>{item}</li>
    ))}
  </ul>
  } else {
    document.writeln("Data tidak ada!");
  }

  return (
    <>
    </>
  )
}

export default App

import { useState } from 'react'
const CONVERSION_RATE = 83
function App() {
  const [rupees, setRupees] = useState('')
  const dollars = rupees ? (rupees / CONVERSION_RATE).toFixed(2) : '0.00'
  return (
    <div style={{ padding: '2rem', fontFamily: 'sans-serif' }}>
      <h2>Rupees to Dollars Converter</h2>
      <input
        type="number"
        value={rupees}
        onChange={(e) => setRupees(e.target.value)}
        placeholder="$"
      />
      <p>₹{dollars}</p>
    </div>
  )
}
export default App
import { useMemo, useState } from "react"
function App() {
  console.log("App Pained");
  const [weight, setWeight] = useState(70);
  const [height, setHeight] = useState(160);


  const ChangeWeight = (e) => {
    setWeight(e.target.value);
  }
  const ChangeHeight = (e) => {
    setHeight(e.target.value);
  }

  const bmiCalculator = useMemo(() => {
    const HeightInMeters = height / 100;
    return (weight / (HeightInMeters * HeightInMeters)).toFixed(1);
  }, [height, weight])

  return (
    <>
      <div className="d-flex justify-content-center align-items-center" style={{ height: "90vh" }}>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-12 my-3">
              <h1 className="h1 text-bold text-center text-primary text-decoration-underline fw-bold">BMI Calculator</h1>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-md-6 rounded-3 px-5" style={{ backgroundColor: "gray" }}>
              <div className="my-3 text-center">
                <label for="weight" className="form-label fw-bold fs-5">Weight: {weight} Kg</label>
                <input type="range" className="form-range" id="weight" value={weight} min={40} max={200} onChange={ChangeWeight} />
              </div>
              <div className="my-3 text-center">
                <label for="height" className="form-label fw-bold fs-5">Height: {height} CM</label>
                <input type="range" className="form-range" id="height" value={height} min={140} max={220} onChange={ChangeHeight} />
              </div>
              <div className="my-3 text-center">
                <button className="btn btn-primary rounded-5">Your BMI Is:- {bmiCalculator}</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default App

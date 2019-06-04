import React, { useState } from 'react'

export default function Sliders() {
  const [hue, setHue] = useState(Math.ceil(Math.random() * 360))
  const [saturation, setSaturation] = useState(Math.ceil(Math.random() * 100))
  const [lightness, setLightness] = useState(Math.ceil(Math.random() * 100))

  const randomColor = () => {
    setHue(Math.ceil(Math.random() * 360))
    setSaturation(Math.ceil(Math.random() * 100))
    setLightness(Math.ceil(Math.random() * 100))
  }

  return (
    <section>
      <section
        className="slider-container"
        style={{
          backgroundColor: `hsl(${hue}, ${saturation}%, ${lightness}%)`
        }}
      >
        {console.log({ hue }, { saturation }, { lightness })}
        <div className="input">
          <input
            onChange={event => setHue(event.target.value)}
            type="range"
            min="1"
            max="360"
            className="slider"
            id="hue"
          />
          {console.log({ hue })}
          <h2>Hue {hue}</h2>
        </div>
        <div className="input">
          <input
            onChange={event => setSaturation(event.target.value)}
            type="range"
            min="1"
            max="100"
            className="slider"
            id="saturation"
          />
          <h2>Saturation {saturation} %</h2>
        </div>
        {console.log({ saturation })}
        <div className="input">
          <input
            onChange={event => setLightness(event.target.value)}
            type="range"
            min="1"
            max="100"
            className="slider"
            id="lightness"
          />
          <h2>Lightness {lightness} %</h2>
        </div>
        {console.log({ lightness })}
        <h2>
          hsl({hue},{saturation}%,{lightness}%)
        </h2>
      </section>
      <section className="button">
        <button onClick={randomColor}>Random</button>
      </section>
    </section>
  )
}

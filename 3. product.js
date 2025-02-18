import React, {useState} from 'react'
import Image from 'next/image'

function ProductPage (props) {
    //tons of uses for useState for conditional rendering, state management and event handling
    const [visibility3, setVisibility3] = useState(false)
    const [visibility4, setVisibility4] = useState(false)
    const [colour, setColour] = useState('')
    const [selectedColour, setSelectedColour] = useState('')
    const [error, setError] = useState('')
    const [modelMake, setModelMake] = useState('')
    const [year, setYear] = useState('')
    //object holding images that will be called later
    const carImages = {
        red: "/2011_nissan_altima.jpeg",
        blue: "/2019-toyota-corolla.png",
        silver: "/Hyundai_Elantra_2020.jpg",
        white: "/2022-kia-forte.png",
        black: "/2022-Honda-Civic.jpg"
    }
    const handleClick3 = () => { //view the product tab with state management
        setVisibility3(!visibility3)
    }
    const handleClick4 = (event) => { //views and hides the car image and information
        event.preventDefault()
        if (colour === '') { //conditional rendering
            setError(props.errorMessage || 'Error: please select a colour.')
            setVisibility4(false)
        } else {
            setError('')
            setVisibility4(true)
            setSelectedColour(colour)
        }
        switch (colour) { //swith statement since colour is the consistent factor for the modelMake and year variables
            case "red":
                setModelMake("Nissan Altima")
                setYear(2011)
                break;
            case "blue":
                setModelMake("Toyota Corolla")
                setYear(2019)
                break;
            case "silver":
                setModelMake("Hyundai Elantra")
                setYear(2020)
                break;
            case "white":
                setModelMake("Kia Forte")
                setYear(2022)
                break;
            case "black":
                setModelMake("Honda Civic")
                setYear(2022)
                break;
        }
    }
    return ( //displays under the product button
        <div style = {{textAlign: 'center', padding: '4px'}}>  {/*Click event to handle viewing/hiding info under the tab*/}
            <button onClick = {handleClick3} style = {{backgroundColor: 'indigo', padding: '6px', width: '5%', borderRadius: '8px'}}>
                Products
            </button>
            <p id = 'products' style = {{padding: '6px', maxWidth: '25%', margin: '0 auto', display: visibility3 ? 'block' : 'none'}}>
                We currently match users with Toyota, Honda, Nissan, Hyundai, and Kia vehicles.
                Select a colour and we'll find you a suitable car.
            </p>
            <div style = {{display: visibility3 ? 'block' : 'none'}}>
                <form style = {{padding: '4px'}}> {/*Form with selection, option and submission for easier navigation*/}
                    <label htmlFor = "dropdown" style = {{padding: '20px'}}>
                        Pick a colour:<br />
                    </label>
                    <select value = {colour} onChange = {(e) => setColour(e.target.value)} style = {{padding: '4px'}}>
                        <option value = "">-</option>
                        <option value = "red">Red</option>
                        <option value = "blue">Blue</option>
                        <option value = "silver">Silver</option>
                        <option value = "white">White</option>
                        <option value = "black">Black</option>
                    </select><br />
                    <button onClick = {handleClick4} type = "submit">View</button>
                </form>
                {error && <p style = {{color: 'red'}}>{error}</p>} {/*Error handling in case of faulty submission*/}
                {selectedColour && visibility4 && (
                    <div id = "carReveal">
                        <p>
                            {`Model/Make: ${modelMake}`}<br/>
                            {`Year: ${year}`}<br/>
                            {`${selectedColour.charAt(0).toUpperCase() + selectedColour.slice(1)}`}
                        </p>
                        <Image src = {carImages[selectedColour]} alt = {`${colour} car`} width = {500} height = {300} layout = "intrinsic" />
                        {/*Where the images will be printed, called from the carImages object and matched with the colour value
                        from the option values above.*/}
                    </div>
                )}
            </div>
        </div> 
    )
}

export default ProductPage
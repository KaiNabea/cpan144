import React, {useState} from 'react'

function AboutPage (props) { //final component with props
    const [visibility2, setVisibility2] = useState(false) //useState with both boolean and numeric values
    const [click2, setClick2] = useState(0)
    const handleClick2 = () => {
        if (click2 == 0) {//conditional rendering with if-else statement, altering click2 and visibility2 variables
            setClick2(click2 + 1)
            setVisibility2(true)
        }
        else {
            setClick2(click2 - 1)
            setVisibility2(false)
        }
    }
    return ( //JSX to develop webpage
        <div style = {{textAlign: 'center', padding: '4px'}}>
            <button onClick = {handleClick2} style = {{backgroundColor: 'darkviolet', padding: '6px', width: '5%', borderRadius: '8px'}}>
                About
            </button>
            <p id = 'about' style = {{padding: '6px', maxWidth: '25%', margin: '0 auto', display: visibility2 ? 'block' : 'none'}}>
                The Rev App is a web application designed by the team at Humber Web Ltd. that let's
                users view vehicles based on colour preferences.
            </p>
            {visibility2 && (
                <p style = {{padding: '3px', maxWidth: '25%', margin: '0 auto', display: visibility2 ? 'block' : 'none'}}>
                    {/*props.name placed for it to be called from the page.js file as an argument.*/}
                    The Rev App's lead designer, {props.name}, drives one of the vehicles available for viewing. Can you guess which one?<br/>
                    A hint: The year of the model is before 2020.
                </p>
            )}
        </div>
    )
}

export default AboutPage
import React, {useState} from 'react'

//quick homepage that uses onClick and explains the function of the app
function HomePage (props) {
    //using booleans to show and hide elements of the app
    const [visibility1, setVisibility1] = useState(false)
    //clicking the button changes the boolean value, allowing for the elements to be shown and hidden
    const [click1, setClick1] = useState(0)
    const handleClick1 = () => {
        if (click1 == 0) { //conditional rendering with if-else statements
            setClick1(click1 + 1)
            setVisibility1(true)
        }
        else {
            setClick1(click1 - 1)
            setVisibility1(false)
        }
    }
    return ( //displays under the Home button
        <div style = {{textAlign: 'center', padding: '4px'}}>
            <button onClick = {handleClick1} style = {{backgroundColor: 'darkblue', padding: '6px', width: '5%', borderRadius: '8px'}}>
                Home
            </button>
            <p style = {{padding: '6px', maxWidth: '25%', margin: '0 auto', display: visibility1 ? 'block' : 'none'}}>
                Welcome, {props.name}, to the Rev App!<br/> {/*Simple implementation of props within the component page*/}
                Wondering what car fits you?<br/>
                <b>
                    We Can Help
                </b>
            </p>
        </div>
    )
}

export default HomePage
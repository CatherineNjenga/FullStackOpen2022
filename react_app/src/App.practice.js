import { useState } from "react";

const Hello = ({name, age}) =>{
    
    const bornYear = () => new Date().getFullYear() - age;

    return(
        <div>
            <p>Hello {name}, you are {age} years old</p>
            <p>You were probably born in {bornYear()}</p>
        </div>
    )
}

const Display = ({counter}) => <div>{counter}</div>;

const Button = ({onClick, text}) => {
    return (
        <div onClick={onClick}>
            {text}
        </div>
    )

}

const App1 = (props) => {
    const [counter, setCounter] = useState(0);

    const increaseByOne = () => setCounter(counter + 1);
    const decreaseByOne = () => setCounter(counter - 1);
    const setToZero = () => setCounter(0);


    return(
        <div>
            <Display counter={counter}/>
            <Button 
            onClick={increaseByOne} 
            text ='plys' 
            />
            <Button 
            onClick={setToZero} 
            text='zero' 
            />
            <Button 
            onClick ={decreaseByOne} 
            text='minus' 
            />
        </div>
    )    
}

export default App;
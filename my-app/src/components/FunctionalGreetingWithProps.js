import React from "react";


const FunctionalGreetingWithProps = (props) => {
    return <h1>Hello, {props.name}! I see you are {props.age} years old; {props.greeting}</h1>; //add a return statement as our function has multiple lines of code
}

export default FunctionalGreetingWithProps;
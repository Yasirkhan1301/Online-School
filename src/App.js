import React,{useState} from 'react';
import Header from "./Components/header"
import home from "./Components/home_banner"
import about from "./Components/about"
import courses from "./Components/courses"
import feature from "./Components/feature"
import faculty from "./Components/faculty"
import footer from "./Components/footer"

function App()
{
  return (
    <div>
    {Header()}
    {home()}
    {about()}
    {courses()}
    {feature()}
    {faculty()}
    {footer()}
    </div>

)
}


export default App;

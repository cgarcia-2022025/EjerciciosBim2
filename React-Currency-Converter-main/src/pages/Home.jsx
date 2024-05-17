import { Navbar } from "../components/navbar/Navbar.jsx"
import { Converter } from "../components/converter/Converter.jsx"
import { AdditionalInfo } from "../components/aditionalInfo/AdditionalInfo.jsx"

export const Home = () => {
  return (
    <>
        <Navbar></Navbar>
        <hr />
        <Converter></Converter>
        <hr />
        <AdditionalInfo></AdditionalInfo>
        <hr />
        <div>Esta es la página principal</div>
    </>
  )
}

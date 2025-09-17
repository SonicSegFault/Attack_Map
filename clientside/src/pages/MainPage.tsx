import GlobeSection from "../layouts/GlobeSection";
import PageHeader from "../layouts/PageHeader";
import PageFooter from "../layouts/PageFooter";

const MainPage = ()=>{
    return (
    <>
        <div className="bg-black">
            <div><PageHeader/></div>
            <div><GlobeSection/> </div>
            <div><PageFooter/></div>
        </div>
    </>
)}

export default MainPage;
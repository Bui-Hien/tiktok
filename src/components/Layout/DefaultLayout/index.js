import Header from "~/components/Layout/DefaultLayout/Header";
import Sidebar from "~/components/Layout/DefaultLayout/Sidebar";

function DefaultLayout({children}){
    return(
        <div>
            <Header></Header>
            <div className={'container'}>
                <Sidebar></Sidebar>
                <div className={'content'}>
                    {children}
                </div>
            </div>
        </div>
    )
}
export default DefaultLayout;
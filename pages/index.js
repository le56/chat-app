import Header from "../components/Header"
import ZoomList from "../components/ZoomList"
import Content from "../components/Content"
import Messgase from "../components/Messgase"
import AddRoom from "../components/Model/addRoom"
import InvideUser from "../components/Model/invideUser"
export default function Home() {
  return (
    <div style={{ height: "100vh" }} className="flex flex-col">
      <Header></Header>
      <div className="grid grid-cols-12" style={{ height: "100%" }}>
        <ZoomList></ZoomList>
        <div className="col-span-9 flex flex-col">
          <Content></Content>
          <Messgase></Messgase>
        </div>
      </div>
      <AddRoom></AddRoom>
      <InvideUser></InvideUser>
    </div>
  )
}

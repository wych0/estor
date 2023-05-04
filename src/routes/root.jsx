import Header from '../components/Header'
import Body from '../components/HomePageComponents/Body'

export default function Root() {
    return (
      <div id="homePage" className="page">
        <Header></Header>
        <Body></Body>
      </div>
    );
  }
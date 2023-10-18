import logo from './logo.svg';
import './App.css';
import Sidebar from './components/Sidebar/Sidebar';
import Content from './components/Content/Content';
import ProducetSell from './components/ProducetSell/ProducetSell';
import Stats from './components/Stats/Stats';
function App(){
  return (
    <div style={{backgroundColor:'#e4e9f2',display:'flex'}}>
        <Sidebar/>
        <div>
          <h2> Hello Ramesh</h2>
          <div className="container" style={{display:'flex',height:'10rem'}}>
            <Content add="https://cdn1.iconfinder.com/data/icons/random-1-1/100/rupee_circle-1024.png" item="Earning" rate="$198k" content="37.8%"/>
            <Content add="https://icons.veryicon.com/png/o/miscellaneous/random/order-105.png" item="Orders" rate="$2.4k" content="2%"/>
            <Content add="https://cdn.vectorstock.com/i/1000x1000/04/71/hand-holding-coin-glyph-icon-finance-and-banking-vector-21540471.webp" item="Balance" rate="$2.4k" content="2%"/>
            <Content add="https://as2.ftcdn.net/v2/jpg/02/47/42/43/1000_F_247424309_3SN0uZz1eNLlgFoUfniPJ69aGi0Jf3rY.jpg" item="Total Sales" rate="$89k" content="11%"/>
          </div>
          <div className="container" style={{display:'flex'}} >
            <div style={{width:'70%'}}>
              <Stats name="Overview" add="http://optional.is/required/wp-content/uploads/2012/04/bar-chart-12.png" sub="Monthly Earnings" className="bargraph"  title="Card 1" content="Lorem ipsum content for Card 1."/>
            </div>
            <div style={{width:'30%'}}>
              <Stats name="Customers" add="https://discourse.metabase.com/uploads/default/original/2X/d/d05a5f46dac31768b7e2984273f5bd35e91dc5ae.jpeg" sub="Customers that buy products" className="piegraph" title="Card 2" content="Lorem ipsum content for Card 2."/>
            </div>
            
          </div>
          <div className="container" style={{display:'flex'}}>
            <ProducetSell/>
          </div>
        </div>


        
    </div>
      
  );
}

export default App;

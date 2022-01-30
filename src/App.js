import './styles/style.css';
import Card from './components/Card';

const {kings} = require('./data/data.json');

function App() {
    return (
        <div className="container">
            <div className="row">
                    {
                        kings.map((card) => {
                            return (
                                <div className="col-sm">
                                    <Card
                                        img={card['img-src']}
                                        title={card['title']}
                                    />
                                </div>
                            )
                        })
                    }
            </div>
        </div>
  );
}

export default App;

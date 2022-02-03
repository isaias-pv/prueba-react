import React, { useState } from 'react';

import './styles/style.css';
import Card from './components/Card';

const {kings} = require('./data/data.json');

function App() {

    const [king, setKing] = useState(kings[0]),
    
    [data, setData] = useState(1),

    [info, setInfo] = useState();

    function changeText(e){
        if (data < 10){
            if ( data == 7){
                e.target.classList.add("red-text")
            } else {
                e.target.classList.remove("red-text")
            }
            setData(data + 1)
        }else{
            setData( 1 );
        }
    }

    function readText(e){
        e.preventDefault();
        setData(info);
    }

    function changeImg(e){
        if( king.id < kings.length ){
            setKing(kings[king.id]);
        }else if( king.id == 3 ){
            setKing( kings[0] );
        }
    }

    return (
        <div className="container">
            <div className="row">
                <form>
                    <div className='text'>
                        <span className='text-info' onClick={changeText}>
                            { data ? data : "No hay contenido"}
                        </span>
                    </div>

                    <div className='button'>
                        <button className='btn btn-primary' onClick={readText}>
                            Enviar
                        </button>
                    </div>
                    
                    <div className="col-sm" onClick={changeImg}>
                        <Card
                            img={king['img-src']}
                            title={king['title']}
                        />
                    </div>
                    
                    <div className='input'>
                        <input type="text" name="name" onChange={(e) => setInfo(e.target.value)}/>
                    </div>
                </form>
            </div>
        </div>
  );
}

export default App;

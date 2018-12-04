import React from 'react';
import { Link } from 'react-router-dom';
import Reveal from 'react-reveal';
import 'animate.css/animate.css'

const populateBlocks = ({ blocks }) => {
    //debugger
    if (blocks) {
        return blocks.map((item) => {
            return (
                <Reveal key={item.id} effect='animated fadeInUp' >
                    <div className={`item ${item.type}`}>
                        <div className='veil'></div>
                        <div className='image'
                            style={{
                                background: `url(/images/blocks/${item.image}) no-repeat`
                            }}
                        ></div>
                        <div className='title'>
                            <Link to={item.link}>{item.title}</Link>
                        </div>
                    </div>
                </Reveal>
            )
        })
    }
}

const Blocks = (props) => {
    console.log(props)
    return (
        <div className='home_blocks'>
            {populateBlocks(props)}
        </div>
    );
};

export default Blocks;
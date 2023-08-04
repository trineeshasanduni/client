import React, { useState } from 'react'
import Modal from 'react-bootstrap/Modal';


export default function Coffee({ coffee }) {
    const [quantity, setquantity] = useState(1)
    const [varient, setvarient] = useState('small')
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <div style={{ margin: "70px" }} className='shadow-lg p-3 mb-5 bg-white rounded'>
            <div onClick={handleShow}>
                <h1>{coffee.name}</h1>
                <img src={coffee.image} alt='coffee' className='img-fluid' style={{ width: '200px', height: '200px' }} />
            </div>
            <div className='flex-container'>
                <div className='w-100 m-1'>
                    <p>Varients</p>
                    <select className='form-control' value={varient} onChange={(e) => { setvarient(e.target.value) }}>
                        {coffee.varients.map(varient => {
                            return <option value={varient}>{varient}</option>
                        })}
                    </select>

                </div>
                <div className='w-100 m-1'>
                    <p>Quantity</p>
                    <select className='form-control' value={quantity} onChange={(e) => { setquantity(e.target.value) }}>
                        {[...Array(10).keys()].map((x, i) => {
                            return <option value={i + 1}>{i + 1}</option>
                        })}
                    </select>
                </div>
            </div>
            <div className='flex-container'>
                <div className='m-1 w-100'>
                    <h1 className='mt-1'>Price:{coffee.prices[0][varient] * quantity} Rs/-</h1>
                </div>
                <div className='m-1 w-100'>
                    <button className='btn'>ADD TO CART</button>

                </div>
            </div>
            <Modal show={show}>
                <Modal.Header closeButton>
                    <Modal.Title>{coffee.name}</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    <img src={coffee.image} className='img-fluid' alt='' style={{height:'400px '}}/>
                    <p>{coffee.description}</p>
                </Modal.Body>

                <Modal.Footer>
                    <button className='btn' onClick={handleClose}>CLOSE</button>
                </Modal.Footer>
            </Modal>
        </div>
    )
}

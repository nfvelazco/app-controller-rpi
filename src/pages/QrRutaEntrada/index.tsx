import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { ReduxState } from '../../models/ReduxState'

import { increment, decrement } from '../../redux/slices/testSlice/testSlice'

import { QrReader } from 'react-qr-reader';
import QRCode from "react-qr-code";



function getLocalIpAddress(): Promise<string> {
  return new Promise((resolve, reject) => {
    const RTCPeerConnection = window.RTCPeerConnection || window.webkitRTCPeerConnection || window.mozRTCPeerConnection;
    if (!RTCPeerConnection) {
      reject(new Error('RTCPeerConnection not available'));
      return;
    }

    const pc = new RTCPeerConnection({ iceServers: [] });
    const ips: string[] = [];

    pc.createDataChannel('');

    pc.onicecandidate = (event) => {
      if (event.candidate) {
        const ipRegex = /([0-9]{1,3}(\.[0-9]{1,3}){3})/;
        const ipAddress = ipRegex.exec(event.candidate.candidate)?.[1];
        console.log(event.candidate)
        if (ipAddress && ips.indexOf(ipAddress) === -1) {
          ips.push(ipAddress);
        }
      } else {
        resolve(ips[0] || '192.168.0.18');
      }
    };

    pc.createOffer()
      .then((offer) => pc.setLocalDescription(offer))
      .catch((error) => reject(error));
  });
}

const QrIpLocalEntrada = () => {
  const ip = getLocalIpAddress().then(async (ip) => {
    await setData(`http://192.168.0.4:5173/ManejoDeFases?ip=${ip}&port=5000`);
    console.log(ip)
  });
  const [data, setData] = useState('');
  const dispatch = useDispatch()
  const numberFromState = useSelector<ReduxState,number>(state => state.testSlice.number)

  return (
    <div className='home'>
      {/* <QrReader
        constraints={{ facingMode: "user" }}
        containerStyle={{ width: '30%' }}
        onResult = {(result, error) => {

          if (!!result) {
            setData(result.getText());
          }

          if (!!error) {
            console.info(error);
          }
        }}
        
      /> */}
      
      
      <QRCode
        size={256}
        style={{ height: "auto", maxWidth: "100%", width: "100%" }}
        value={data}
        viewBox={`0 0 256 256`}
        />
        <br/>
        <a href={data}>Acceder a la Raspberry Pi</a>
      {/* <span>{numberFromState}</span>
      <div>
        <button onClick={() => handleClickIncrement(1)}>+1</button>
        <button onClick={() => handleClickDecrement(1)}>-1</button>
      </div> */}
       
    </div>
  )
}

export default QrIpLocalEntrada
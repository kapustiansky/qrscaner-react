import React, { Component } from 'react';
import QrReader from 'react-qr-reader';
import { Redirect } from 'react-router-dom';

import Result from './result';
import './scan.css';

class ScanPage extends Component {
    state = {
         result: null
       }
      
       handleScan = data => {
         if (data) {
           this.setState({
             result: data
           })
         }
       }
       handleError = err => {
         console.error(err)
       }
       render() {

        if (this.props.item === false) {
            return <Redirect to="/login" />;
        }

        if (this.state.result !== null) {
            return (
                <div className="container-result">
                    <Redirect to={`/result?r={{${this.state.result}}}`} />
                    <Result item={ this.state.result } />
                </div>
            )
        }

         const previewStyle = {
              margin: '0 0 1rem 0',
              width: 320,
            }

         return (
           <div className="scaner-cont">
             <QrReader
               delay={200}
               resolution={1200}
               onError={this.handleError}
               onScan={this.handleScan}
               style={previewStyle}
               className={'qr-conteiner'}
             />
             {/* <p>{this.state.result}</p> */}
           </div>
         )
       }
     }

export default ScanPage;
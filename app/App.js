import React, { useEffect, useState } from "react";
import ReactDOM from 'react-dom';
import ReactPDF, { PDFViewer, PDFDownloadLink } from '@react-pdf/renderer';
import api from './utility/api';
import PdfDocument from './components/document/PdfDocument';

import "./App.scss";

const App = () => {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState('');
  const [selectedProducts, setSelectedProducts] = useState([]);
  const [showDownLoadLink, setShowDownLoadLink] = useState(false);

  useEffect(() => {
    api.getProducts().then(res => {
      if (res.success) {
        setProducts(res.data);
        console.log(res.data);
      } else {
        setError(res.errMsg);
      }
    })
  }, []);

  const handleClickProduct = (index) => {
    const tempSelected = selectedProducts;
    const foundIndex = tempSelected.findIndex(item => item === index);
    if (foundIndex < 0) {
      tempSelected.push(index);
    } else {
      tempSelected.splice(foundIndex, 1);
    }

    setSelectedProducts([...tempSelected]);
  }

  const handleClickPrint = () => {
    if (selectedProducts.length > 0) {
      setShowDownLoadLink(true);
    } else {
      alert('Please select the products')
    }
  }

  const handleClickReset = () => {
    setSelectedProducts([]);
  }

  return (
    <div className="app-component">
      <div className="header">
        Products List
      </div>
      {
        error !== '' ?
        <div className="err">
          {error}
        </div>
        :
        <React.Fragment>
          <div className="products">
            {
              products.map((prod, index) => {
                return (
                  <div className="product" key={index} onClick={() => handleClickProduct(index)}>
                    <div className="product__select">
                      <input type="checkbox" onChange={() => console.log(index)} checked={selectedProducts.indexOf(index) >= 0}/>
                    </div>
                    <div className="product__name">
                      {prod.ProductName}
                    </div>
                    <div className="product__img">
                    </div>
                  </div>
                )
              })
            }
          </div>
          <div className="print-actions">
            <button type="button" className="btn btn__print" onClick={() => handleClickPrint()}>
              Print
            </button>
            <button type="button" className="btn btn__reset" onClick={() => handleClickReset()}>
              Reset
            </button>
          </div>
        </React.Fragment>
      }
      {
        showDownLoadLink && (
          <PDFDownloadLink
            document={<PdfDocument products={products} selectedProducts={selectedProducts}/>}
            fileName="result.pdf"
            style={{
              textDecoration: "none",
              padding: "10px",
              color: "#4a4a4a",
              backgroundColor: "#f2f2f2",
              border: "1px solid #4a4a4a",
              fontFamily: "Din Light"
            }}
          >
            {({ blob, url, loading, error }) =>
              loading ? "Loading document..." : "Download Pdf"
            }
          </PDFDownloadLink>
        )
      }
    </div>
  )
};

export default App;

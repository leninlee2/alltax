import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect } from "react";
import { Chart } from "react-google-charts";
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import {getProduct, getBrand, getCategory, getChartData,getProductById } from './service/mockservice.js';


function App() {

  const [products,setProducts]      = useState([]);
  const [brands,setBrands]          = useState([]);
  const [categories,setCategories]  = useState([]);
  const [idCategory,setIdCategory]  = useState(0);
  const [idBrand,setIdBrand]        = useState(0);
  const [idProduct,setIdProduct]    = useState(0);
  const [data,setData]              = useState([]);
  const [loadGraf,setLoadGraf]      = useState(false);

  useEffect(() => {
     var prod = getProduct();
     setProducts(prod);
     //brands:
     var brad = getBrand();
     setBrands(brad);

    //categories:
    var cat = getCategory();
    setCategories(cat);
    //manageGraphic();
  });

  useEffect(() => {
    manageGraphic(idCategory,idBrand,idProduct);
  },[loadGraf]);

  function manageGraphic(categoryId,brandId,productId){
    var filter = getChartData(categoryId,brandId,productId);
    console.log(filter);
    setData(filter);
  }

  function setIdCategoryComplete(categoryId){
    setIdCategory(categoryId);
    manageGraphic(categoryId,idBrand,idProduct);
    setLoadGraf(!loadGraf);
  }

  function setIdBrandComplete(brandId){
    setIdBrand(brandId);
    manageGraphic(idCategory,brandId,idProduct);
    setLoadGraf(!loadGraf);
  }

  function setIdProductComplete(productId){
    setIdProduct(productId);
    if(productId>0){
      var unity = getProductById(productId);
      //alert(JSON.stringify(unity) );
      setIdCategory(unity.IdCategory);
      setIdBrand(unity.IdBrand);
    }else{
      setIdCategory(0);
      setIdBrand(0);
    }
    

    manageGraphic(idCategory,idBrand,productId);
    setLoadGraf(!loadGraf);
  }

  
  const options = {
    chart: {
      title: "Sales By Month For",
      subtitle: "Sales filtered by category, product or brand ",
    },
  };

  return (
    <div className="App container solid">
       <div className='row text-start menudata' >
          <div className='col-sm-2 ' >
              <span>Menu</span>
          </div>
          <div className='col-sm-6 ' >
              <span>User Name</span>
          </div>
          <div className='col-sm-2 ' >
              <span>Sales Report</span>
          </div>
       </div>
       <div className='row mt10 text-start'>
          <div className='col-sm-4'>
             <span>Category</span><br/>
             <select className='form-control'  value={idCategory} onChange={(e) => setIdCategoryComplete(e.target.value)}  >
               <option  value={0} >All</option>
               {
                  categories.map((item) =>
                    <option  value={item.id} >{item.name}</option>
                  )
               }
             </select>
          </div>
          <div className='col-sm-4'>
             <span>Product</span><br/>
             <select className='form-control' value={idProduct} onChange={(e) => setIdProductComplete(e.target.value)}  >
               <option  value={0} >All</option>
              {
                  products.map((item) =>
                    <option  value={item.id} >{item.name}</option>
                  )
               }
             </select>
          </div>
          <div className='col-sm-4'>
             <span>Brand</span><br/>
             <select className='form-control'  value={idBrand} onChange={(e) => setIdBrandComplete(e.target.value)}  >
               <option  value={0} >All</option>
               {
                  brands.map((item) =>
                    <option value={item.id} >{item.name}</option>
                  )
               }
             </select>
          </div>
       </div>
       <div className='row mt10' >
         <div className='col-sm-12' >
          <Chart
              chartType="Bar"
              width="100%"
              height="400px"
              data={data}
              options={options}
            />
         </div>
       </div>
       
    </div>
  );
}

export default App;

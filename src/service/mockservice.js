//the goal of this mock service is simulate queries 
//that could be done calling an api

var categories = [
    {id:1,name:'Food'},
    {id:2,name:'Clothes'},
    {id:3,name:'Hardware'}
];

var products = [
    {id:1,name:'Ice Cream',IdCategory:1,IdBrand:2},
    {id:2,name:'Bread',IdCategory:1,IdBrand:2},
    {id:3,name:'T-Shirt',IdCategory:2,IdBrand:3},
    {id:4,name:'Pants',IdCategory:2,IdBrand:3},
    {id:5,name:'Hammer',IdCategory:3,IdBrand:4},
    {id:6,name:'Lamp',IdCategory:3,IdBrand:4}
];

var brands = [
    {id:1,name:'Nestle'},
    {id:2,name:'Great Value'},
    {id:3,name:'Gucci'},
    {id:4,name:'Wallmart'}
];

var seels = [
    {id:1,IdProduct:1,client:'ABC ' ,month:'January' },
    {id:1,IdProduct:3,client:'ABC ' ,month:'January' },

    {id:1,IdProduct:2,client:'ABC ' ,month:'January' },
    {id:1,IdProduct:2,client:'ABC ' ,month:'January' },
    {id:1,IdProduct:4,client:'ABC ' ,month:'January' },

    {id:1,IdProduct:1,client:'ABC ' ,month:'February' },
    {id:1,IdProduct:1,client:'ABC ' ,month:'February' },
    {id:1,IdProduct:5,client:'ABC ' ,month:'February' },
    {id:1,IdProduct:6,client:'ABC ' ,month:'February' },

    {id:1,IdProduct:2,client:'ABC ' ,month:'February' },
    {id:1,IdProduct:2,client:'ABC ' ,month:'February' },
    {id:1,IdProduct:2,client:'ABC ' ,month:'February' },

    {id:1,IdProduct:1,client:'ABC ' ,month:'Mars' },
    {id:1,IdProduct:1,client:'ABC ' ,month:'Mars' },
    {id:1,IdProduct:1,client:'ABC ' ,month:'Mars' },

    {id:1,IdProduct:2,client:'ABC ' ,month:'Mars' },
    {id:1,IdProduct:2,client:'ABC ' ,month:'Mars' },
    {id:1,IdProduct:2,client:'ABC ' ,month:'Mars' },
    {id:1,IdProduct:2,client:'ABC ' ,month:'Mars' },

    {id:1,IdProduct:1,client:'ABC ' ,month:'April' },
    {id:1,IdProduct:1,client:'ABC ' ,month:'April' },
    {id:1,IdProduct:1,client:'ABC ' ,month:'April' },
    {id:1,IdProduct:1,client:'ABC ' ,month:'April' },

    {id:1,IdProduct:2,client:'ABC ' ,month:'April' },
    {id:1,IdProduct:2,client:'ABC ' ,month:'April' },
    {id:1,IdProduct:2,client:'ABC ' ,month:'April' },
    {id:1,IdProduct:2,client:'ABC ' ,month:'April' },
    {id:1,IdProduct:2,client:'ABC ' ,month:'April' },

    {id:1,IdProduct:1,client:'ABC ' ,month:'June' },
    {id:1,IdProduct:1,client:'ABC ' ,month:'June' },
    {id:1,IdProduct:1,client:'ABC ' ,month:'June' },
    {id:1,IdProduct:1,client:'ABC ' ,month:'June' },
    {id:1,IdProduct:1,client:'ABC ' ,month:'June' },

    {id:1,IdProduct:2,client:'ABC ' ,month:'June' },
    {id:1,IdProduct:2,client:'ABC ' ,month:'June' },
    {id:1,IdProduct:2,client:'ABC ' ,month:'June' },
    {id:1,IdProduct:2,client:'ABC ' ,month:'June' },
    {id:1,IdProduct:2,client:'ABC ' ,month:'June' },
    {id:1,IdProduct:2,client:'ABC ' ,month:'June' },

    {id:1,IdProduct:2,client:'ABC ' ,month:'June' },
    {id:1,IdProduct:2,client:'ABC ' ,month:'June' },
    {id:1,IdProduct:2,client:'ABC ' ,month:'June' },
    {id:1,IdProduct:2,client:'ABC ' ,month:'June' },
    {id:1,IdProduct:2,client:'ABC ' ,month:'June' },
    {id:1,IdProduct:2,client:'ABC ' ,month:'June' },

    {id:1,IdProduct:1,client:'ABC ' ,month:'July' },
    {id:1,IdProduct:1,client:'ABC ' ,month:'July' },
    {id:1,IdProduct:1,client:'ABC ' ,month:'July' },
    {id:1,IdProduct:1,client:'ABC ' ,month:'July' },
    {id:1,IdProduct:1,client:'ABC ' ,month:'July' },
    {id:1,IdProduct:1,client:'ABC ' ,month:'July' },
    {id:1,IdProduct:3,client:'ABC ' ,month:'July' },

    {id:1,IdProduct:1,client:'ABC ' ,month:'August' },
    {id:1,IdProduct:1,client:'ABC ' ,month:'August' },
    {id:1,IdProduct:1,client:'ABC ' ,month:'August' },
    {id:1,IdProduct:1,client:'ABC ' ,month:'August' },
    {id:1,IdProduct:1,client:'ABC ' ,month:'August' },
    {id:1,IdProduct:1,client:'ABC ' ,month:'August' },
    {id:1,IdProduct:1,client:'ABC ' ,month:'August' },
    {id:1,IdProduct:4,client:'ABC ' ,month:'August' },

    {id:1,IdProduct:1,client:'ABC ' ,month:'September' },
    {id:1,IdProduct:1,client:'ABC ' ,month:'September' },
    {id:1,IdProduct:1,client:'ABC ' ,month:'September' },
    {id:1,IdProduct:1,client:'ABC ' ,month:'September' },
    {id:1,IdProduct:1,client:'ABC ' ,month:'September' },
    {id:1,IdProduct:1,client:'ABC ' ,month:'September' },
    {id:1,IdProduct:1,client:'ABC ' ,month:'September' },
    {id:1,IdProduct:1,client:'ABC ' ,month:'September' },
    {id:1,IdProduct:5,client:'ABC ' ,month:'September' },

    {id:1,IdProduct:1,client:'ABC ' ,month:'October' },
    {id:1,IdProduct:1,client:'ABC ' ,month:'October' },
    {id:1,IdProduct:1,client:'ABC ' ,month:'October' },
    {id:1,IdProduct:1,client:'ABC ' ,month:'October' },
    {id:1,IdProduct:1,client:'ABC ' ,month:'October' },
    {id:1,IdProduct:1,client:'ABC ' ,month:'October' },
    {id:1,IdProduct:1,client:'ABC ' ,month:'October' },
    {id:1,IdProduct:1,client:'ABC ' ,month:'October' },
    {id:1,IdProduct:1,client:'ABC ' ,month:'October' },
    {id:1,IdProduct:6,client:'ABC ' ,month:'October' },

    {id:1,IdProduct:1,client:'ABC ' ,month:'November' },
    {id:1,IdProduct:1,client:'ABC ' ,month:'November' },
    {id:1,IdProduct:1,client:'ABC ' ,month:'November' },
    {id:1,IdProduct:1,client:'ABC ' ,month:'November' },
    {id:1,IdProduct:1,client:'ABC ' ,month:'November' },
    {id:1,IdProduct:1,client:'ABC ' ,month:'November' },
    {id:1,IdProduct:1,client:'ABC ' ,month:'November' },
    {id:1,IdProduct:1,client:'ABC ' ,month:'November' },
    {id:1,IdProduct:1,client:'ABC ' ,month:'November' },
    {id:1,IdProduct:1,client:'ABC ' ,month:'November' },
    {id:1,IdProduct:4,client:'ABC ' ,month:'November' },

    {id:1,IdProduct:1,client:'ABC ' ,month:'December' },
    {id:1,IdProduct:1,client:'ABC ' ,month:'December' },
    {id:1,IdProduct:1,client:'ABC ' ,month:'December' },
    {id:1,IdProduct:1,client:'ABC ' ,month:'December' },
    {id:1,IdProduct:1,client:'ABC ' ,month:'December' },
    {id:1,IdProduct:1,client:'ABC ' ,month:'December' },
    {id:1,IdProduct:1,client:'ABC ' ,month:'December' },
    {id:1,IdProduct:1,client:'ABC ' ,month:'December' },
    {id:1,IdProduct:1,client:'ABC ' ,month:'December' },
    {id:1,IdProduct:1,client:'ABC ' ,month:'December' },
    {id:1,IdProduct:1,client:'ABC ' ,month:'December' },
    {id:1,IdProduct:5,client:'ABC ' ,month:'December' }
];


function getCategory(){
    return categories;
}

function getProduct(){
    return products;
}

function getBrand(){
    return brands;
}

function getProductById(id){
    var result = {};
    for(var i = 0;i < products.length;i++){
        if(id == products[i].id){
            result = products[i];
            i = products.length;
        }
    }
    return result;
}

function getChartData(IdCategory,IdBrand,IdProduct){
    console.log(IdCategory);
    console.log(IdBrand);
    console.log(IdProduct);

    var result = [];
    var group = [];
    var month = [];
    if(IdProduct > 0){
        for(var i = 0;i < seels.length;i++){
            if(seels[i].IdProduct==IdProduct){
                result[result.length] = seels[i];
            }
        }
    }else{
        for(var i = 0;i < seels.length;i++){
            var product = getProductById(seels[i].IdProduct);
            if((product.IdCategory==IdCategory || IdCategory==0 ) 
            && ( product.IdBrand==IdBrand || IdBrand==0) ){
                result[result.length] = seels[i];
            }
        }
    }

    //create group by month
    for(var i = 0;i < result.length;i++){
        if(month.indexOf(result[i].month) < 0){
            month[month.length] = result[i].month;
            group[group.length] = {month:result[i].month,qtde:1}
        }else{
            for(var j = 0;j < group.length;j++){
                if(group[j].month==result[i].month){
                    group[j].qtde+=1;
                }
            }
        }
    }

    var endresult = [["Month", "Sales"]];
    for(var i = 0;i < group.length;i++){
        endresult[endresult.length] = [group[i].month,group[i].qtde];
    }

    if(endresult.length==1)
        endresult[endresult.length] = ['January',0];//nothing

    return endresult;
}

export {
    getProduct,
    getProductById,
    getBrand,
    getCategory,
    getChartData
}
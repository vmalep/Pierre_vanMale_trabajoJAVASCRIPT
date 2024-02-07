/*
This file contains the js code to calculate the price of the 'presupuesto' (quotation).
*/

// List of price by product
var productTypePriceList = new Array();
productTypePriceList["None"]=0;
productTypePriceList["tikiWiki"]=500;
productTypePriceList["wordPress"]=750;
productTypePriceList["customsite"]=1000;

// Used to calculate the timeframe penalty: price * (maxTimeFrame / nbWeeks)
var maxTimeFrame = 8;

// Costs of additional services
var dedicatedServerPrice = 100;
var domainNamePrice = 50;
var autoBkpPrice = 75;

function getProductTypePrice() {
    
    var productTypePrice=0;
    //Get a reference to the form id="presupuestoForm"
    var theForm = document.forms["presupuestoForm"];
    //Get a reference to the select id="productType"
     var selectedProductType = theForm.elements["productType"];
     
    //set product type price equal to value user chose
    //For example productTypePriceList["tikiWiki".value] would be equal to 500
    productTypePrice = productTypePriceList[selectedProductType.value];

    //finally we return productTypePrice
    return productTypePrice;
}

function getTimeFramePenalty() {

    var timeFramePenalty = 0;
    var theForm = document.forms["presupuestoForm"];

    var selectedNbWeeks = theForm.elements["nbWeeks"].value;

    timeFramePenalty = maxTimeFrame / selectedNbWeeks;
    
    return timeFramePenalty;
}

function getAdditionalServicesPrice() {

    var additionalServicesPrice = 0;
    
    var theForm = document.forms["presupuestoForm"];
    

    var needDedicatedServer = theForm.elements["switchDedicatedServer"].checked;
    var needDDomainName = theForm.elements["switchDomainName"].checked;
    var needAutoBkp = theForm.elements["switchAutoBkp"].checked;

    additionalServicesPrice +=
        (needDedicatedServer ? dedicatedServerPrice : 0) +
        (needDDomainName ? domainNamePrice : 0) +
        (needAutoBkp ? autoBkpPrice : 0);

    return additionalServicesPrice;
}


function calculatePresupuesto() {

    // Calculate the total:
    var presupuestoPrice = Math.round((getProductTypePrice() * getTimeFramePenalty() ) + getAdditionalServicesPrice());
    // Display the result
    var divobj = document.getElementById('presupuestoTotal');
    divobj.style.display='block';
    divobj.innerHTML = "El precio total es de " + presupuestoPrice + " euros.";
}

function hideTotal()
{
    var divobj = document.getElementById('presupuestoTotal');
    divobj.style.display='none';
}
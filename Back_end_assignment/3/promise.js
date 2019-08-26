let address="";
let address_new="";

const country= new Promise((addr)=>{
    addr(address);
}).then((result)=>{
    return result+"대한민국 ";
}).then((result)=>{
    return result+"경기도 ";
}).then((result)=>{
    return result+"용인시 ";
    });
      
country.then(result=>console.log("promise : "+result));//promise

const promiseAddcountry=(address_new)=>{
    return new Promise ((resolve,reject)=>{
        resolve(address_new + "대한민국");
    });
}

const promiseAddregion=(address_new)=>{
    return new Promise((resolve,reject)=>{
        resolve(address_new+" 경기도");
    });
}

const promiseAddcity=(address_new)=>{
    return new Promise((resolve,reject)=>{
        resolve(address_new+" 용인시");
    });
}

const setaddress = async()=>{
    try{
        let first = await promiseAddcountry(address_new);
        let second = await promiseAddregion(first);
        let final = await promiseAddcity(second);
        console.log("async : ",final);
    }

    catch(err){
        console.error(err)
    }
}
//async
setaddress();
const cds = require('@sap/cds');
var axios = require('axios');
const cfenv = require('cfenv');

const appEnv = cfenv.getAppEnv();
var apphost;
if(appEnv.isLocal){
    apphost = 'localhost:4004'
}else{
    const urlObject = new URL(appEnv.url);
    apphost = urlObject.hostname;
}
access_token={};



cds.on('bootstrap', async app => {

    app.get('/cloudalmhosts.json', async(req,response) => {
        const db  = await cds.connect.to('db');
        let result = await db.run(SELECT.from('SapMon.CloudALMHost'));
        let res=[];
        for(i=0;i<result.length;i++){
            targets=[apphost];
            labels={"job":result[i]['name'],"__metrics_path__":"/targets/"+result[i]['name']};
            res.push({"targets":targets,"labels":labels});
        }
        response.send(res);

    });
    app.get('/targets/:target/:provider', async(req,response) => {
        const { target,provider } = req.params;      
        const db  = await cds.connect.to('db');
        
        resulttxt={};
        let result = await db.run(SELECT.one.from('SapMon.CloudALMHost').where({name:target}))
        if(result){

            axios.request({
                url: result['tokenendpoint']+"?grant_type=client_credentials",
                method: "get",
                auth: {
                  username: result['clientid'],
                  password: result['clientsecret']
                }
              }).then(function(res) {
                access_token[target] = res.data.access_token;  
                axios.request({
                    url: result['host']+"/api/calm-metrics/v1/metrics?version=V1&period=C1H&serviceType=SAP_S4HANA&provider="+provider+"&dimensions=serviceType,serviceName,serviceId,metricName,metricLabel&prefix=hm&resolution=15Mi&metrics=measure:value",
                    method: "get",
                    headers: {
                        'Authorization': 'Bearer '+ access_token[target]
                    }
                }).then(function(res) {
                    response.writeHead(200, {
                        'Content-Type': 'Content-Type: text/plain; version=0.0.4; charset=utf-8'
                    });
                    console.log(res.data);
                    response.end(res.data);
                }).catch(function(err) {
                    console.error(err);
                });
              });
        }else{
            response.status(404).send('Not found');
        }

        
    });
});
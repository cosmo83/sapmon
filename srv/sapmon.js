const cds = require('@sap/cds');

function clone(obj) {
    return JSON.parse(JSON.stringify(obj));
  }

module.exports = cds.service.impl(async function(){

    this.on('READ','MetricReadings', async req => {

        const promapi = await cds.connect.to("PROMAPI");
        results=[];

        try{
            var promres = await promapi.tx().send({method:'GET',path:"api/v1/query_range?query=avg_over_time(hm_value[15m])&start=2023-07-21T20:10:30.781Z&end=2023-07-21T23:10:30.781Z&step=900s"});
            for (i=0;i<promres.data.result.length;i++){
                let resline={}
                resline.job = promres.data.result[i].metric.job;
                resline.instance = promres.data.result[i].metric.instance;
                resline.measure = promres.data.result[i].metric.measure;
                resline.metricName = promres.data.result[i].metric.metricName;
                if(promres.data.result[i].metric.metricLabel){
                    resline.metricLabel = promres.data.result[i].metric.metricLabel;
                }
                resline.serviceId = promres.data.result[i].metric.serviceId;
                resline.serviceName = promres.data.result[i].metric.serviceName;
                resline.serviceType = promres.data.result[i].metric.serviceType;
                for(j=0;j<promres.data.result[i].values.length;j++){
                    reslinedeep = clone(resline)
                    reslinedeep.datetime = promres.data.result[i].values[j][0];
                    reslinedeep.value = promres.data.result[i].values[j][1];
                    results.push(reslinedeep);
                }
                
            }
            
        }catch(err){
            console.error(err);
        }
        return results;
    })

});
namespace com.satinfotech.sapmon;
using { managed, cuid } from '@sap/cds/common';

entity CloudALMHost : managed, cuid {
    name: String;
    host: String;
    clientid: String;
    clientsecret: String;
    tokenendpoint: String;
}

@readonly
@Aggregation.ApplySupported.PropertyRestrictions: true
@cds.redirection.target: true
@cds.persistence.skip:false   
entity MetricReadings {
    datetime: DateTime;
    value: Decimal(10, 2);
    instance: String;
    job: String;
    metricLabel: String;
    metricName: String;
    serviceId: String;
    serviceName: String;
    serviceType: String;
    @Analytics.Measure   : true
    @Aggregation.default : #SUM
    numberOfMessages : Integer default 1
}


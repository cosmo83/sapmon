using com.satinfotech.sapmon from '../db/schema';


service SapMon @(path: '/sapmon') {
     entity CloudALMHost as projection on sapmon.CloudALMHost;
}

service Metric @(path: '/metrics') {
     entity MetricReadings as projection on sapmon.MetricReadings
}

annotate SapMon.CloudALMHost with @odata.draft.enabled;
annotate Metric.MetricReadings with {
     @Analytics.Measure: true
     value;
     @Analytics.Dimension: true
     datetime;
}

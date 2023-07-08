using com.satinfotech.sapmon from '../db/schema';


service SapMon {
     entity CloudALMHost as projection on sapmon.CloudALMHost;
}

annotate SapMon.CloudALMHost with @odata.draft.enabled;
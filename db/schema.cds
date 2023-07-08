namespace com.satinfotech.sapmon;
using { managed, cuid } from '@sap/cds/common';

entity CloudALMHost : managed, cuid {
    hostName: String;
    clientid: String;
    clientsecret: String;
}


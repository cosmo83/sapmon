namespace com.satinfotech.sapmon;
using { managed, cuid } from '@sap/cds/common';

entity CloudALMHost : managed, cuid {
    name: String;
    host: String;
    clientid: String;
    clientsecret: String;
    tokenendpoint: String;
}


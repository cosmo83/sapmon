sap.ui.define(['sap/fe/test/ListReport'], function(ListReport) {
    'use strict';

    var CustomPageDefinitions = {
        actions: {},
        assertions: {}
    };

    return new ListReport(
        {
            appId: 'cloudalmhost',
            componentId: 'CloudALMHostList',
            entitySet: 'CloudALMHost'
        },
        CustomPageDefinitions
    );
});
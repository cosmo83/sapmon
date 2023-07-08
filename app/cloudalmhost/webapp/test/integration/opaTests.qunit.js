sap.ui.require(
    [
        'sap/fe/test/JourneyRunner',
        'cloudalmhost/test/integration/FirstJourney',
		'cloudalmhost/test/integration/pages/CloudALMHostList',
		'cloudalmhost/test/integration/pages/CloudALMHostObjectPage'
    ],
    function(JourneyRunner, opaJourney, CloudALMHostList, CloudALMHostObjectPage) {
        'use strict';
        var JourneyRunner = new JourneyRunner({
            // start index.html in web folder
            launchUrl: sap.ui.require.toUrl('cloudalmhost') + '/index.html'
        });

       
        JourneyRunner.run(
            {
                pages: { 
					onTheCloudALMHostList: CloudALMHostList,
					onTheCloudALMHostObjectPage: CloudALMHostObjectPage
                }
            },
            opaJourney.run
        );
    }
);
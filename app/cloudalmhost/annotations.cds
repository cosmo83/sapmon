using SapMon as service from '../../srv/sapmon';

annotate service.CloudALMHost with @(
    UI.LineItem : [
        {
            $Type : 'UI.DataField',
            Label : 'hostName',
            Value : hostName,
        },
        {
            $Type : 'UI.DataField',
            Label : 'clientid',
            Value : clientid,
        },
        {
            $Type : 'UI.DataField',
            Label : 'clientsecret',
            Value : clientsecret,
        },
    ]
);
annotate service.CloudALMHost with @(
    UI.FieldGroup #GeneratedGroup1 : {
        $Type : 'UI.FieldGroupType',
        Data : [
            {
                $Type : 'UI.DataField',
                Label : 'hostName',
                Value : hostName,
            },
            {
                $Type : 'UI.DataField',
                Label : 'clientid',
                Value : clientid,
            },
            {
                $Type : 'UI.DataField',
                Label : 'clientsecret',
                Value : clientsecret,
            },
        ],
    },
    UI.Facets : [
        {
            $Type : 'UI.ReferenceFacet',
            ID : 'GeneratedFacet1',
            Label : 'General Information',
            Target : '@UI.FieldGroup#GeneratedGroup1',
        },
    ]
);

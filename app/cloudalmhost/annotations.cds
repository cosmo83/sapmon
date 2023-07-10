using SapMon as service from '../../srv/sapmon';

annotate service.CloudALMHost with @(
    UI.LineItem : [
        {
            $Type : 'UI.DataField',
            Label : 'Tag Name',
            Value : name,
        },     
        {
            $Type : 'UI.DataField',
            Label : 'Cloud ALM Host Name',
            Value : host,
        },
        {
            $Type : 'UI.DataField',
            Label : 'Client ID',
            Value : clientid,
        },
        {
            $Type : 'UI.DataField',
            Label : 'Token URL',
            Value : tokenendpoint
        },
    ]
);
annotate service.CloudALMHost with @(
    UI.FieldGroup #GeneratedGroup1 : {
        $Type : 'UI.FieldGroupType',
        Data : [
            {
            $Type : 'UI.DataField',
            Label : 'Tag Name',
            Value : name,
            },    
            {
                $Type : 'UI.DataField',
                Label : 'Cloud ALM Host',
                Value : host,
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
            {
            $Type : 'UI.DataField',
            Label : 'Token URL',
            Value : tokenendpoint
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

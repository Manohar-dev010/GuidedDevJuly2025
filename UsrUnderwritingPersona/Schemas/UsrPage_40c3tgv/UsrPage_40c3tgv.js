define("UsrPage_40c3tgv", /**SCHEMA_DEPS*/[]/**SCHEMA_DEPS*/, function/**SCHEMA_ARGS*/()/**SCHEMA_ARGS*/ {
	return {
		viewConfigDiff: /**SCHEMA_VIEW_CONFIG_DIFF*/[
			{
				"operation": "merge",
				"name": "GeneralInfoTab",
				"values": {
					"iconPosition": "only-text"
				}
			},
			{
				"operation": "merge",
				"name": "GeneralInfoTabContainer",
				"values": {
					"gap": {
						"columnGap": "large",
						"rowGap": "none"
					},
					"visible": true,
					"color": "transparent",
					"borderRadius": "none",
					"padding": {
						"top": "none",
						"right": "none",
						"bottom": "none",
						"left": "none"
					},
					"alignItems": "stretch"
				}
			},
			{
				"operation": "insert",
				"name": "DataGrid_jomoj75",
				"values": {
					"type": "crt.DataGrid",
					"features": {
						"rows": {
							"selection": {
								"enable": true,
								"multiple": true
							}
						}
					},
					"items": "$DataGrid_jomoj75",
					"primaryColumnName": "DataGrid_jomoj75DS_Id",
					"columns": [
						{
							"id": "3b810588-c15f-c87d-24f3-2d95d89cc54a",
							"code": "DataGrid_jomoj75DS_CreatedBy",
							"caption": "#ResourceString(DataGrid_jomoj75DS_CreatedBy)#",
							"dataValueType": 10
						}
					],
					"placeholder": false
				},
				"parentName": "GeneralInfoTab",
				"propertyName": "items",
				"index": 1
			}
		]/**SCHEMA_VIEW_CONFIG_DIFF*/,
		viewModelConfigDiff: /**SCHEMA_VIEW_MODEL_CONFIG_DIFF*/[
			{
				"operation": "merge",
				"path": [
					"attributes"
				],
				"values": {
					"DataGrid_jomoj75": {
						"isCollection": true,
						"modelConfig": {
							"path": "DataGrid_jomoj75DS"
						},
						"viewModelConfig": {
							"attributes": {
								"DataGrid_jomoj75DS_CreatedBy": {
									"modelConfig": {
										"path": "DataGrid_jomoj75DS.CreatedBy"
									}
								},
								"DataGrid_jomoj75DS_Id": {
									"modelConfig": {
										"path": "DataGrid_jomoj75DS.Id"
									}
								}
							}
						}
					}
				}
			}
		]/**SCHEMA_VIEW_MODEL_CONFIG_DIFF*/,
		modelConfigDiff: /**SCHEMA_MODEL_CONFIG_DIFF*/[
			{
				"operation": "merge",
				"path": [
					"dataSources"
				],
				"values": {
					"DataGrid_jomoj75DS": {
						"type": "crt.EntityDataSource",
						"scope": "viewElement",
						"config": {
							"entitySchemaName": "UsrBaseAppentity",
							"attributes": {
								"CreatedBy": {
									"path": "CreatedBy"
								}
							}
						}
					}
				}
			}
		]/**SCHEMA_MODEL_CONFIG_DIFF*/,
		handlers: /**SCHEMA_HANDLERS*/[]/**SCHEMA_HANDLERS*/,
		converters: /**SCHEMA_CONVERTERS*/{}/**SCHEMA_CONVERTERS*/,
		validators: /**SCHEMA_VALIDATORS*/{}/**SCHEMA_VALIDATORS*/
	};
});
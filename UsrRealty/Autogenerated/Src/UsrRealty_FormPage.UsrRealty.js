define("UsrRealty_FormPage", /**SCHEMA_DEPS*/["@creatio-devkit/common"]/**SCHEMA_DEPS*/, function/**SCHEMA_ARGS*/(sdk)/**SCHEMA_ARGS*/ {
	return {
		viewConfigDiff: /**SCHEMA_VIEW_CONFIG_DIFF*/[
			{
				"operation": "merge",
				"name": "Tabs",
				"values": {
					"styleType": "default",
					"mode": "tab",
					"bodyBackgroundColor": "primary-contrast-500",
					"selectedTabTitleColor": "auto",
					"tabTitleColor": "auto",
					"underlineSelectedTabColor": "auto",
					"headerBackgroundColor": "auto"
				}
			},
			{
				"operation": "merge",
				"name": "CardToggleTabPanel",
				"values": {
					"styleType": "default",
					"bodyBackgroundColor": "primary-contrast-500",
					"selectedTabTitleColor": "auto",
					"tabTitleColor": "auto",
					"underlineSelectedTabColor": "auto",
					"headerBackgroundColor": "auto"
				}
			},
			{
				"operation": "merge",
				"name": "Feed",
				"values": {
					"dataSourceName": "PDS",
					"entitySchemaName": "UsrRealty"
				}
			},
			{
				"operation": "merge",
				"name": "AttachmentList",
				"values": {
					"columns": [
						{
							"id": "822c6df1-a7d3-4aa4-99c9-5563ad655675",
							"code": "AttachmentListDS_Name",
							"caption": "#ResourceString(AttachmentListDS_Name)#",
							"dataValueType": 28,
							"width": 200
						}
					]
				}
			},
			{
				"operation": "insert",
				"name": "ActionButton",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(Button_93mwhqp_caption)#",
					"color": "outline",
					"disabled": false,
					"size": "medium",
					"iconPosition": "left-icon",
					"visible": true,
					"icon": "actions-button-icon",
					"menuItems": [],
					"clickMode": "menu"
				},
				"parentName": "CardToggleContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "MenuItem_92f1097",
				"values": {
					"type": "crt.MenuItem",
					"caption": "#ResourceString(MenuItem_92f1097_caption)#",
					"visible": true,
					"clicked": {
						"request": "crt.RunBusinessProcessRequest",
						"params": {
							"processName": "UsrCalculateRealtyAveragePriceProcess",
							"processRunType": "ForTheSelectedPage",
							"showNotification": true,
							"recordIdProcessParameterName": "RealtyIdParameter"
						}
					},
					"icon": "calculator-icon"
				},
				"parentName": "ActionButton",
				"propertyName": "menuItems",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "RunMaxPriceWebServiceMenuItem",
				"values": {
					"type": "crt.MenuItem",
					"caption": "#ResourceString(MenuItem_xa7c3yk_caption)#",
					"visible": true,
					"clicked": {
						"request": "usr.RunWebServiceButtonRequest"
					},
					"icon": "process-button-icon"
				},
				"parentName": "ActionButton",
				"propertyName": "menuItems",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "MenuItem_yooi7tu",
				"values": {
					"type": "crt.MenuItem",
					"caption": "#ResourceString(MenuItem_yooi7tu_caption)#",
					"visible": true,
					"clicked": {
						"request": "crt.RunBusinessProcessRequest",
						"params": {
							"processName": "UsrAutoAddRealtyVisitsProcess",
							"processRunType": "ForTheSelectedPage",
							"showNotification": true,
							"recordIdProcessParameterName": "RealtyIdParameter"
						}
					},
					"icon": "add-button-icon"
				},
				"parentName": "ActionButton",
				"propertyName": "menuItems",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "PushMeButton",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(Button_9gfyulv_caption)#",
					"color": "accent",
					"disabled": false,
					"size": "medium",
					"iconPosition": "left-icon",
					"visible": true,
					"clicked": {
						"request": "usr.PushButtonRequest"
					},
					"clickMode": "default",
					"icon": "checkmark-icon"
				},
				"parentName": "CardToggleContainer",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "UsrName",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 1,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.Input",
					"label": "$Resources.Strings.UsrName",
					"control": "$UsrName",
					"labelPosition": "auto"
				},
				"parentName": "SideAreaProfileContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "Price",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 2,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.NumberInput",
					"label": "$Resources.Strings.PDS_UsrArea_zme4sye",
					"labelPosition": "auto",
					"control": "$PDS_UsrArea_zme4sye"
				},
				"parentName": "SideAreaProfileContainer",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "Area",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 3,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.NumberInput",
					"label": "$Resources.Strings.PDS_UsrArea_htt8b2m",
					"labelPosition": "auto",
					"control": "$PDS_UsrArea_htt8b2m"
				},
				"parentName": "SideAreaProfileContainer",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "Commission",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 4,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.NumberInput",
					"label": "$Resources.Strings.PDS_UsrCommission_fyzt8kq",
					"labelPosition": "auto",
					"control": "$PDS_UsrCommission_fyzt8kq",
					"visible": true,
					"readonly": true,
					"placeholder": "",
					"tooltip": ""
				},
				"parentName": "SideAreaProfileContainer",
				"propertyName": "items",
				"index": 3
			},
			{
				"operation": "insert",
				"name": "Type",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 1,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.PDS_UsrType_51ei269",
					"labelPosition": "auto",
					"control": "$PDS_UsrType_51ei269",
					"listActions": [],
					"showValueAsLink": true,
					"controlActions": [],
					"visible": true,
					"readonly": false,
					"placeholder": "",
					"tooltip": "",
					"valueDetails": null
				},
				"parentName": "GeneralInfoTabContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "OfferType",
				"values": {
					"layoutConfig": {
						"column": 2,
						"row": 1,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.PDS_UsrOfferType_nodp106",
					"labelPosition": "auto",
					"control": "$PDS_UsrOfferType_nodp106",
					"listActions": [],
					"showValueAsLink": true,
					"controlActions": [],
					"visible": true,
					"readonly": false,
					"placeholder": "",
					"tooltip": "",
					"valueDetails": null
				},
				"parentName": "GeneralInfoTabContainer",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "Comment",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 2,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.Input",
					"label": "$Resources.Strings.PDS_UsrComment_w65c7c6",
					"labelPosition": "auto",
					"control": "$PDS_UsrComment_w65c7c6",
					"multiline": false,
					"visible": true,
					"readonly": false,
					"placeholder": "",
					"tooltip": ""
				},
				"parentName": "GeneralInfoTabContainer",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "Manager",
				"values": {
					"layoutConfig": {
						"column": 2,
						"row": 2,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.PDS_UsrManager_um82voe",
					"labelPosition": "auto",
					"control": "$PDS_UsrManager_um82voe",
					"listActions": [],
					"showValueAsLink": true,
					"controlActions": [],
					"visible": true,
					"readonly": false,
					"placeholder": "",
					"tooltip": "",
					"valueDetails": null
				},
				"parentName": "GeneralInfoTabContainer",
				"propertyName": "items",
				"index": 3
			},
			{
				"operation": "insert",
				"name": "Country",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 3,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.PDS_UsrCountry_dagvx8q",
					"labelPosition": "auto",
					"control": "$PDS_UsrCountry_dagvx8q",
					"listActions": [],
					"showValueAsLink": true,
					"controlActions": [],
					"visible": true,
					"readonly": false,
					"placeholder": "",
					"tooltip": "",
					"valueDetails": null
				},
				"parentName": "GeneralInfoTabContainer",
				"propertyName": "items",
				"index": 4
			},
			{
				"operation": "insert",
				"name": "City",
				"values": {
					"layoutConfig": {
						"column": 2,
						"row": 3,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.PDS_UsrCity_fki7tl6",
					"labelPosition": "auto",
					"control": "$PDS_UsrCity_fki7tl6",
					"listActions": [],
					"showValueAsLink": true,
					"controlActions": [],
					"visible": true,
					"readonly": false,
					"placeholder": "",
					"tooltip": "",
					"valueDetails": null
				},
				"parentName": "GeneralInfoTabContainer",
				"propertyName": "items",
				"index": 5
			},
			{
				"operation": "insert",
				"name": "RealtyNumber",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 4,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.Input",
					"label": "$Resources.Strings.PDS_UsrNumber_eprj8lq",
					"labelPosition": "auto",
					"control": "$PDS_UsrNumber_eprj8lq",
					"multiline": false,
					"visible": true,
					"readonly": true,
					"placeholder": "",
					"tooltip": ""
				},
				"parentName": "GeneralInfoTabContainer",
				"propertyName": "items",
				"index": 6
			},
			{
				"operation": "insert",
				"name": "CommissionPercent",
				"values": {
					"layoutConfig": {
						"column": 2,
						"row": 4,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.NumberInput",
					"label": "$Resources.Strings.PDS_UsrOfferTypeUsrCommissionPercent",
					"control": "$PDS_UsrOfferTypeUsrCommissionPercent",
					"readonly": true,
					"placeholder": "",
					"labelPosition": "auto",
					"tooltip": ""
				},
				"parentName": "GeneralInfoTabContainer",
				"propertyName": "items",
				"index": 7
			},
			{
				"operation": "insert",
				"name": "ExpansionPanel_uqifgil",
				"values": {
					"type": "crt.ExpansionPanel",
					"tools": [],
					"items": [],
					"title": "#ResourceString(ExpansionPanel_uqifgil_title)#",
					"toggleType": "default",
					"togglePosition": "before",
					"expanded": true,
					"labelColor": "auto",
					"fullWidthHeader": false,
					"titleWidth": 20,
					"padding": {
						"top": "small",
						"bottom": "small",
						"left": "none",
						"right": "none"
					},
					"fitContent": true
				},
				"parentName": "GeneralInfoTab",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "GridContainer_liftj38",
				"values": {
					"type": "crt.GridContainer",
					"rows": "minmax(max-content, 24px)",
					"columns": [
						"minmax(32px, 1fr)"
					],
					"gap": {
						"columnGap": "large",
						"rowGap": 0
					},
					"styles": {
						"overflow-x": "hidden"
					},
					"items": []
				},
				"parentName": "ExpansionPanel_uqifgil",
				"propertyName": "tools",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "FlexContainer_bagrwmb",
				"values": {
					"type": "crt.FlexContainer",
					"direction": "row",
					"gap": "none",
					"alignItems": "center",
					"items": [],
					"layoutConfig": {
						"colSpan": 1,
						"column": 1,
						"row": 1,
						"rowSpan": 1
					}
				},
				"parentName": "GridContainer_liftj38",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridDetailAddBtn_r3sx3yq",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(GridDetailAddBtn_r3sx3yq_caption)#",
					"icon": "add-button-icon",
					"iconPosition": "only-icon",
					"color": "default",
					"size": "medium",
					"clicked": {
						"request": "crt.CreateRecordRequest",
						"params": {
							"entityName": "UsrRealtyVisit",
							"defaultValues": [
								{
									"attributeName": "UsrParentRealty",
									"value": "$Id"
								}
							]
						}
					},
					"visible": true,
					"clickMode": "default"
				},
				"parentName": "FlexContainer_bagrwmb",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridDetailRefreshBtn_7ih5efy",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(GridDetailRefreshBtn_7ih5efy_caption)#",
					"icon": "reload-icon",
					"iconPosition": "only-icon",
					"color": "default",
					"size": "medium",
					"clicked": {
						"request": "crt.LoadDataRequest",
						"params": {
							"config": {
								"loadType": "reload"
							},
							"dataSourceName": "GridDetail_1q0w95fDS"
						}
					}
				},
				"parentName": "FlexContainer_bagrwmb",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "GridDetailSettingsBtn_j79h3jq",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(GridDetailSettingsBtn_j79h3jq_caption)#",
					"icon": "actions-button-icon",
					"iconPosition": "only-icon",
					"color": "default",
					"size": "medium",
					"clickMode": "menu",
					"menuItems": []
				},
				"parentName": "FlexContainer_bagrwmb",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "GridDetailExportDataBtn_boyafg4",
				"values": {
					"type": "crt.MenuItem",
					"caption": "#ResourceString(GridDetailExportDataBtn_boyafg4_caption)#",
					"icon": "export-button-icon",
					"color": "default",
					"size": "medium",
					"clicked": {
						"request": "crt.ExportDataGridToExcelRequest",
						"params": {
							"viewName": "RealtyVisitGridDetail"
						}
					}
				},
				"parentName": "GridDetailSettingsBtn_j79h3jq",
				"propertyName": "menuItems",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridDetailImportDataBtn_qr576a5",
				"values": {
					"type": "crt.MenuItem",
					"caption": "#ResourceString(GridDetailImportDataBtn_qr576a5_caption)#",
					"icon": "import-button-icon",
					"color": "default",
					"size": "medium",
					"clicked": {
						"request": "crt.ImportDataRequest",
						"params": {
							"entitySchemaName": "UsrRealtyVisit"
						}
					}
				},
				"parentName": "GridDetailSettingsBtn_j79h3jq",
				"propertyName": "menuItems",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "GridDetailSearchFilter_v8kunhp",
				"values": {
					"type": "crt.SearchFilter",
					"placeholder": "#ResourceString(GridDetailSearchFilter_v8kunhp_placeholder)#",
					"iconOnly": true,
					"_filterOptions": {
						"expose": [
							{
								"attribute": "GridDetailSearchFilter_v8kunhp_GridDetail_1q0w95f",
								"converters": [
									{
										"converter": "crt.SearchFilterAttributeConverter",
										"args": [
											"GridDetail_1q0w95f"
										]
									}
								]
							}
						],
						"from": [
							"GridDetailSearchFilter_v8kunhp_SearchValue",
							"GridDetailSearchFilter_v8kunhp_FilteredColumnsGroups"
						]
					}
				},
				"parentName": "FlexContainer_bagrwmb",
				"propertyName": "items",
				"index": 3
			},
			{
				"operation": "insert",
				"name": "GridContainer_6o2pg1e",
				"values": {
					"type": "crt.GridContainer",
					"rows": "minmax(max-content, 32px)",
					"columns": [
						"minmax(32px, 1fr)",
						"minmax(32px, 1fr)"
					],
					"gap": {
						"columnGap": "large",
						"rowGap": 0
					},
					"styles": {
						"overflow-x": "hidden"
					},
					"items": []
				},
				"parentName": "ExpansionPanel_uqifgil",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "RealtyVisitGridDetail",
				"values": {
					"type": "crt.DataGrid",
					"layoutConfig": {
						"colSpan": 2,
						"column": 1,
						"row": 1,
						"rowSpan": 6
					},
					"features": {
						"rows": {
							"selection": {
								"enable": true,
								"multiple": true
							}
						},
						"editable": {
							"enable": true,
							"itemsCreation": false
						}
					},
					"items": "$GridDetail_1q0w95f",
					"activeRow": "$GridDetail_1q0w95f_ActiveRow",
					"selectionState": "$GridDetail_1q0w95f_SelectionState",
					"_selectionOptions": {
						"attribute": "GridDetail_1q0w95f_SelectionState"
					},
					"visible": true,
					"fitContent": true,
					"primaryColumnName": "GridDetail_1q0w95fDS_Id",
					"columns": [
						{
							"id": "4707b1e2-bfc9-3218-3c44-2944eda21778",
							"code": "GridDetail_1q0w95fDS_UsrVisitDateTime",
							"caption": "#ResourceString(GridDetail_1q0w95fDS_UsrVisitDateTime)#",
							"dataValueType": 7,
							"width": 184.9973907470703
						},
						{
							"id": "a67448a2-88e6-a371-f303-4959c6aed2bf",
							"code": "GridDetail_1q0w95fDS_UsrParentRealty",
							"caption": "#ResourceString(GridDetail_1q0w95fDS_UsrParentRealty)#",
							"dataValueType": 10,
							"width": 168
						},
						{
							"id": "a7278860-518b-4a6c-bd96-d7371b2e5e36",
							"code": "GridDetail_1q0w95fDS_UsrPotentialCustomer",
							"caption": "#ResourceString(GridDetail_1q0w95fDS_UsrPotentialCustomer)#",
							"dataValueType": 10,
							"width": 179
						},
						{
							"id": "ce2aec64-df54-0139-75c4-527935cc4a2f",
							"code": "GridDetail_1q0w95fDS_UsrComments",
							"caption": "#ResourceString(GridDetail_1q0w95fDS_UsrComments)#",
							"dataValueType": 28,
							"width": 178
						},
						{
							"id": "f48b8cec-1d4a-e603-5ba0-467a4aecdb98",
							"code": "GridDetail_1q0w95fDS_CreatedOn",
							"caption": "#ResourceString(GridDetail_1q0w95fDS_CreatedOn)#",
							"dataValueType": 7,
							"width": 141
						}
					],
					"placeholder": false,
					"bulkActions": []
				},
				"parentName": "GridContainer_6o2pg1e",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridDetail_1q0w95f_AddTagsBulkAction",
				"values": {
					"type": "crt.MenuItem",
					"caption": "Add tag",
					"icon": "tag-icon",
					"clicked": {
						"request": "crt.AddTagsInRecordsRequest",
						"params": {
							"dataSourceName": "GridDetail_1q0w95fDS",
							"filters": "$GridDetail_1q0w95f | crt.ToCollectionFilters : 'GridDetail_1q0w95f' : $GridDetail_1q0w95f_SelectionState | crt.SkipIfSelectionEmpty : $GridDetail_1q0w95f_SelectionState"
						}
					},
					"items": []
				},
				"parentName": "RealtyVisitGridDetail",
				"propertyName": "bulkActions",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridDetail_1q0w95f_RemoveTagsBulkAction",
				"values": {
					"type": "crt.MenuItem",
					"caption": "Remove tag",
					"icon": "delete-button-icon",
					"clicked": {
						"request": "crt.RemoveTagsInRecordsRequest",
						"params": {
							"dataSourceName": "GridDetail_1q0w95fDS",
							"filters": "$GridDetail_1q0w95f | crt.ToCollectionFilters : 'GridDetail_1q0w95f' : $GridDetail_1q0w95f_SelectionState | crt.SkipIfSelectionEmpty : $GridDetail_1q0w95f_SelectionState"
						}
					}
				},
				"parentName": "GridDetail_1q0w95f_AddTagsBulkAction",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridDetail_1q0w95f_ExportToExcelBulkAction",
				"values": {
					"type": "crt.MenuItem",
					"caption": "Export to Excel",
					"icon": "export-button-icon",
					"clicked": {
						"request": "crt.ExportDataGridToExcelRequest",
						"params": {
							"viewName": "RealtyVisitGridDetail",
							"filters": "$GridDetail_1q0w95f | crt.ToCollectionFilters : 'GridDetail_1q0w95f' : $GridDetail_1q0w95f_SelectionState | crt.SkipIfSelectionEmpty : $GridDetail_1q0w95f_SelectionState"
						}
					}
				},
				"parentName": "RealtyVisitGridDetail",
				"propertyName": "bulkActions",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "GridDetail_1q0w95f_DeleteBulkAction",
				"values": {
					"type": "crt.MenuItem",
					"caption": "Delete",
					"icon": "delete-button-icon",
					"clicked": {
						"request": "crt.DeleteRecordsRequest",
						"params": {
							"dataSourceName": "GridDetail_1q0w95fDS",
							"filters": "$GridDetail_1q0w95f | crt.ToCollectionFilters : 'GridDetail_1q0w95f' : $GridDetail_1q0w95f_SelectionState | crt.SkipIfSelectionEmpty : $GridDetail_1q0w95f_SelectionState"
						}
					}
				},
				"parentName": "RealtyVisitGridDetail",
				"propertyName": "bulkActions",
				"index": 2
			}
		]/**SCHEMA_VIEW_CONFIG_DIFF*/,
		viewModelConfigDiff: /**SCHEMA_VIEW_MODEL_CONFIG_DIFF*/[
			{
				"operation": "merge",
				"path": [
					"attributes"
				],
				"values": {
					"UsrName": {
						"modelConfig": {
							"path": "PDS.UsrName"
						}
					},
					"PDS_UsrArea_74i1iyi": {
						"modelConfig": {
							"path": "PDS.UsrPrice"
						}
					},
					"PDS_UsrArea_zme4sye": {
						"modelConfig": {
							"path": "PDS.UsrPrice"
						},
						"validators": {
							"MySuperValidator": {
								"type": "usr.DGValidator",
								"params": {
									"minValue": 1,
									"message": "#ResourceString(PriceCannotBeLess)#"
								}
							}
						}
					},
					"PDS_UsrArea_htt8b2m": {
						"modelConfig": {
							"path": "PDS.UsrArea"
						},
						"validators": {
							"MySuperValidator": {
								"type": "usr.DGValidator",
								"params": {
									"minValue": 1,
									"message": "#ResourceString(AreaCannotBeLess)#"
								}
							}
						}
					},
					"PDS_UsrType_ximetfj": {
						"modelConfig": {
							"path": "PDS.UsrType"
						}
					},
					"PDS_UsrOfferType_9p6xec6": {
						"modelConfig": {
							"path": "PDS.UsrOfferType"
						}
					},
					"PDS_UsrComment_2fwga80": {
						"modelConfig": {
							"path": "PDS.UsrComment"
						},
						"validators": {
							"required": {
								"type": "crt.Required"
							}
						}
					},
					"PDS_UsrManager_y08mrwb": {
						"modelConfig": {
							"path": "PDS.UsrManager"
						}
					},
					"PDS_UsrNumber_rs6yran": {
						"modelConfig": {
							"path": "PDS.UsrNumber"
						}
					},
					"PDS_UsrType_51ei269": {
						"modelConfig": {
							"path": "PDS.UsrType"
						}
					},
					"PDS_UsrOfferType_nodp106": {
						"modelConfig": {
							"path": "PDS.UsrOfferType"
						}
					},
					"PDS_UsrComment_w65c7c6": {
						"modelConfig": {
							"path": "PDS.UsrComment"
						},
						"validators": {
							"required": {
								"type": "crt.Required"
							}
						}
					},
					"PDS_UsrManager_um82voe": {
						"modelConfig": {
							"path": "PDS.UsrManager"
						}
					},
					"PDS_UsrNumber_eprj8lq": {
						"modelConfig": {
							"path": "PDS.UsrNumber"
						}
					},
					"PDS_UsrColumn10_y02rz8m": {
						"modelConfig": {
							"path": "PDS.UsrColumn10"
						}
					},
					"PDS_UsrCountry_dagvx8q": {
						"modelConfig": {
							"path": "PDS.UsrCountry"
						}
					},
					"PDS_UsrCity_fki7tl6": {
						"modelConfig": {
							"path": "PDS.UsrCity"
						}
					},
					"PDS_UsrCommission_fyzt8kq": {
						"modelConfig": {
							"path": "PDS.UsrCommission"
						}
					},
					"PDS_UsrOfferTypeUsrCommissionPercent": {
						"modelConfig": {
							"path": "PDS.UsrOfferTypeUsrCommissionPercent"
						}
					},
					"GridDetail_1q0w95f": {
						"isCollection": true,
						"modelConfig": {
							"path": "GridDetail_1q0w95fDS",
							"filterAttributes": [
								{
									"name": "GridDetailSearchFilter_v8kunhp_GridDetail_1q0w95f",
									"loadOnChange": true
								}
							]
						},
						"viewModelConfig": {
							"attributes": {
								"GridDetail_1q0w95fDS_UsrVisitDateTime": {
									"modelConfig": {
										"path": "GridDetail_1q0w95fDS.UsrVisitDateTime"
									}
								},
								"GridDetail_1q0w95fDS_UsrParentRealty": {
									"modelConfig": {
										"path": "GridDetail_1q0w95fDS.UsrParentRealty"
									}
								},
								"GridDetail_1q0w95fDS_UsrPotentialCustomer": {
									"modelConfig": {
										"path": "GridDetail_1q0w95fDS.UsrPotentialCustomer"
									}
								},
								"GridDetail_1q0w95fDS_UsrComments": {
									"modelConfig": {
										"path": "GridDetail_1q0w95fDS.UsrComments"
									}
								},
								"GridDetail_1q0w95fDS_CreatedOn": {
									"modelConfig": {
										"path": "GridDetail_1q0w95fDS.CreatedOn"
									}
								},
								"GridDetail_1q0w95fDS_Id": {
									"modelConfig": {
										"path": "GridDetail_1q0w95fDS.Id"
									}
								}
							}
						}
					}
				}
			},
			{
				"operation": "merge",
				"path": [
					"attributes",
					"Id",
					"modelConfig"
				],
				"values": {
					"path": "PDS.Id"
				}
			}
		]/**SCHEMA_VIEW_MODEL_CONFIG_DIFF*/,
		modelConfigDiff: /**SCHEMA_MODEL_CONFIG_DIFF*/[
			{
				"operation": "merge",
				"path": [],
				"values": {
					"primaryDataSourceName": "PDS",
					"dependencies": {
						"GridDetail_1q0w95fDS": [
							{
								"attributePath": "UsrParentRealty",
								"relationPath": "PDS.Id"
							}
						]
					}
				}
			},
			{
				"operation": "merge",
				"path": [
					"dataSources"
				],
				"values": {
					"PDS": {
						"type": "crt.EntityDataSource",
						"config": {
							"entitySchemaName": "UsrRealty",
							"attributes": {
								"UsrOfferTypeUsrCommissionPercent": {
									"path": "UsrOfferType.UsrCommissionPercent",
									"type": "ForwardReference"
								}
							}
						},
						"scope": "page"
					},
					"GridDetail_1q0w95fDS": {
						"type": "crt.EntityDataSource",
						"scope": "viewElement",
						"config": {
							"entitySchemaName": "UsrRealtyVisit",
							"attributes": {
								"UsrVisitDateTime": {
									"path": "UsrVisitDateTime"
								},
								"UsrParentRealty": {
									"path": "UsrParentRealty"
								},
								"UsrPotentialCustomer": {
									"path": "UsrPotentialCustomer"
								},
								"UsrComments": {
									"path": "UsrComments"
								},
								"CreatedOn": {
									"path": "CreatedOn"
								}
							}
						}
					}
				}
			}
		]/**SCHEMA_MODEL_CONFIG_DIFF*/,
		handlers: /**SCHEMA_HANDLERS*/[
         {
        request: "crt.HandleViewModelAttributeChangeRequest",
        /* The custom implementation of the comment field query handler. */
        handler: async (request, next) => {
			/* If the UsrPrice field changes, take the following steps. */
            if (request.attributeName == 'UsrPrice' || request.attributeName == 'PDS_UsrArea_74i1iyi') {
                var priceUSD = await request.$context.PDS_UsrArea_74i1iyi;
                /* Check the price is greater than 5000 USD. */
                if (priceUSD > 5000) {
                    /* If yes, apply the required validator to the UsrComment / PDS_UsrComment_w65c7c6 attribute. */
                    request.$context.enableAttributeValidator('PDS_UsrComment_w65c7c6', 'required');
                } else {
                    /* Do not apply the required validator to the UsrComment / PDS_UsrComment_w65c7c6 attribute. */
                    request.$context.disableAttributeValidator('PDS_UsrComment_w65c7c6', 'required');
                }
            }
            /* Call the next handler if it exists and return its result. */
            return next?.handle(request);
         }
       },
          {
				
            request: "usr.PushButtonRequest",
				
            /* Implementation of the custom query handler. */
				
            handler: async (request, next) => {
					
              console.log("Button works...");
					
              Terrasoft.showInformation("My button was pressed.");
					
              var price = await request.$context.PDS_UsrArea_74i1iyi;
					
              console.log("Price = " + price);
					
              request.$context.PDS_UsrArea_htt8b2m = price * 0.2;
					
              /* Call the next handler if it exists and return its result. */
					
              return next?.handle(request);
				
            }
			
          },
          {
				
            request: "crt.HandleViewModelAttributeChangeRequest",
				
            /* The custom implementation of the system query handler. */
				
            handler: async (request, next) => {
      					
              if (request.attributeName === 'PDS_UsrArea_74i1iyi' || 				             // if price changed
					  
                  request.attributeName === 'PDS_UsrOfferTypeUsrCommissionPercent' ) { 		// or percent changed
						
                var price = await request.$context.PDS_UsrArea_74i1iyi;
						
                var percent = await request.$context.PDS_UsrOfferTypeUsrCommissionPercent;
						
                var commission = price * percent / 100;
						
                request.$context.PDS_UsrCommission_fyzt8kq = commission;
					
              }
					
              /* Call the next handler if it exists and return its result. */
					
              return next?.handle(request);
				
            }
			
          },
          {
				
            request: "usr.RunWebServiceButtonRequest",
				
            /* Implementation of the custom query handler. */
				
            handler: async (request, next) => {
				
              console.log("Run web service button works...");

					
              // get id from type lookup type object
				
              var typeObject = await request.$context.PDS_UsrType_ximetfj;
				
              var typeId = "";
				
              if (typeObject) {
				
                typeId = typeObject.value;
				
              }

				
                // get id from type lookup offer type object
			
              var offerTypeObject = await request.$context.PDS_UsrOfferType_9p6xec6;
	
              var offerTypeId = "";
				
              if (offerTypeObject) {
				
                offerTypeId = offerTypeObject.value;
			
              }
                
	/* Create an instance of the HTTP client from @creatio-devkit/common. */
			
              const httpClientService = new sdk.HttpClientService();

				
              /* Specify the URL to run web service method. */
				
              const baseUrl = Terrasoft.utils.uri.getConfigurationWebServiceBaseUrl();
			
              const transferName = "rest";
				
              const serviceName = "RealtyService";
				
              const methodName = "GetMaxPriceByTypeId";
				
              const endpoint = Terrasoft.combinePath(baseUrl, transferName, serviceName, methodName);
              
	//const endpoint = "http://localhost/D1_Studio/0/rest/RealtyService/GetMaxPriceByTypeId";
		
              /* Send a POST HTTP request. The HTTP client converts the response body from JSON to a JS object automatically. */
		
              var params = {
					
                realtyTypeId: typeId,
					
                realtyOfferTypeId: offerTypeId
				
              };
				
              const response = await httpClientService.post(endpoint, params);
					
              console.log("response max price = " + response.body.GetMaxPriceByTypeIdResult);
		
              
              /* Call the next handler if it exists and return its result. */
			
              return next?.handle(request);
		
            }
		
          }                                                                                                                                                                                     
                                                                                                                                                                                       
        ]/**SCHEMA_HANDLERS*/,
		converters: /**SCHEMA_CONVERTERS*/{}/**SCHEMA_CONVERTERS*/,
		validators: /**SCHEMA_VALIDATORS*/{
          /* The validator type must contain a vendor prefix.
			
          Format the validator type in PascalCase. */
			
          "usr.DGValidator": {
				
            validator: function (config) {
					
              return function (control) {
						
                let value = control.value;
						
                let minValue = config.minValue;
						
                let valueIsCorrect = value >= minValue;
						
                var result;
						
                if (valueIsCorrect) {
							
                  result = null;
						
                } else {
							
                  result = {
								
                    "usr.DGValidator": { 
									
                      message: config.message
								
                    }
							
                  };
						
                }
						
                return result;
					
              };
				
            },
				
            params: [
					
              {
						
                name: "minValue"
					
              },
					
              {
						
                name: "message"
					
              }
				
            ],
				
            async: false
			
          }
        }/**SCHEMA_VALIDATORS*/
	};
});
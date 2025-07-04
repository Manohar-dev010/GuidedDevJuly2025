﻿namespace Terrasoft.Configuration
{

	using System;
	using System.Collections.Generic;
	using System.Collections.ObjectModel;
	using System.Globalization;
	using Terrasoft.Common;
	using Terrasoft.Core;
	using Terrasoft.Core.Configuration;

	#region Class: AppFeatureStateQueryExecutorSchema

	/// <exclude/>
	public class AppFeatureStateQueryExecutorSchema : Terrasoft.Core.SourceCodeSchema
	{

		#region Constructors: Public

		public AppFeatureStateQueryExecutorSchema(SourceCodeSchemaManager sourceCodeSchemaManager)
			: base(sourceCodeSchemaManager) {
		}

		public AppFeatureStateQueryExecutorSchema(AppFeatureStateQueryExecutorSchema source)
			: base( source) {
		}

		#endregion

		#region Methods: Protected

		protected override void InitializeProperties() {
			base.InitializeProperties();
			UId = new Guid("2f78da26-bcd3-4e5f-a839-3a84fd950fc2");
			Name = "AppFeatureStateQueryExecutor";
			ParentSchemaUId = new Guid("50e3acc0-26fc-4237-a095-849a1d534bd3");
			CreatedInPackageId = new Guid("f56dd55e-5084-4296-932e-a32f081a1593");
			ZipBody = new byte[] { 31,139,8,0,0,0,0,0,4,0,141,86,77,111,226,48,16,61,83,169,255,193,98,47,137,132,34,237,149,46,149,90,90,170,28,250,177,162,221,61,84,61,152,100,2,94,37,54,181,157,237,162,170,255,125,39,182,33,14,9,144,11,74,198,207,111,222,60,123,38,112,90,128,90,211,4,200,51,72,73,149,200,116,116,181,94,207,128,234,82,130,58,63,251,60,63,27,148,138,241,37,153,111,148,134,226,98,247,94,111,152,10,9,135,226,248,195,51,182,44,37,213,76,240,131,168,91,174,153,102,160,14,2,102,52,209,66,90,4,98,190,73,88,34,31,153,230,84,169,49,169,37,207,53,213,240,179,4,185,185,253,7,73,137,123,12,254,245,6,50,90,230,250,154,241,20,217,3,189,89,131,200,130,216,228,221,52,240,225,136,60,160,43,100,66,134,199,104,135,225,27,242,50,174,65,114,154,147,164,18,114,84,7,25,147,107,170,154,177,17,233,82,128,188,159,70,117,93,166,224,74,203,178,178,0,171,125,42,23,57,75,44,98,109,158,143,38,14,94,20,72,100,224,144,84,103,64,202,198,107,88,177,12,198,100,129,218,130,230,210,168,229,192,48,36,213,133,24,124,57,121,192,83,171,176,41,247,30,244,74,164,221,74,109,189,83,145,231,78,206,29,232,253,88,96,3,243,100,5,5,53,181,16,216,143,56,37,131,191,84,146,164,102,155,16,14,31,173,36,123,22,140,136,159,32,188,216,17,129,122,111,48,120,249,246,40,34,31,112,79,57,93,130,172,252,74,11,198,95,56,211,77,215,108,6,100,143,174,210,244,42,207,237,54,212,87,22,92,5,110,217,164,153,177,28,111,84,204,51,65,178,250,113,210,174,63,178,72,21,61,81,169,192,189,108,169,88,70,2,244,53,86,79,146,21,84,110,108,166,95,52,47,29,50,168,201,71,68,148,154,220,149,44,37,153,39,58,78,195,173,197,131,184,229,134,147,137,3,193,201,172,36,98,121,83,137,20,46,199,111,166,87,40,14,123,201,72,179,193,169,40,214,84,50,37,248,51,182,96,116,251,94,210,28,125,139,211,225,200,230,26,236,137,176,5,25,239,182,21,163,135,78,191,91,253,34,144,43,32,85,213,117,93,145,49,96,142,221,158,131,87,191,201,168,156,11,195,215,250,130,143,227,116,236,30,223,34,79,207,190,59,253,141,217,226,103,61,29,114,9,143,26,229,20,14,71,158,156,67,22,53,243,55,189,114,5,72,64,8,247,26,200,129,204,111,171,85,83,170,105,204,111,22,174,148,174,206,109,118,137,203,153,225,4,167,201,138,184,190,38,82,124,16,86,211,237,236,116,203,246,174,99,18,223,93,103,156,13,117,167,25,216,141,209,28,52,142,123,239,204,119,125,177,69,180,219,2,179,161,170,142,133,22,181,183,22,108,143,163,186,46,102,63,90,82,29,87,234,129,126,84,151,231,210,135,134,109,189,93,164,83,145,194,17,90,252,32,224,221,174,137,171,143,214,73,234,221,124,234,163,24,191,248,62,190,55,183,81,210,67,184,207,223,75,125,99,168,30,78,128,31,229,203,61,112,72,38,19,242,253,4,189,189,97,233,35,63,194,125,131,136,103,86,192,165,15,63,165,251,94,164,44,99,253,153,61,252,41,106,39,226,122,211,231,64,125,112,95,205,253,152,27,232,22,117,245,207,141,47,205,73,96,159,185,215,199,197,31,236,94,19,140,30,132,158,174,40,95,66,234,118,214,3,201,140,50,75,20,250,195,169,123,114,117,255,49,177,209,102,16,99,255,1,253,199,252,77,253,10,0,0 };
		}

		#endregion

		#region Methods: Public

		public override void GetParentRealUIds(Collection<Guid> realUIds) {
			base.GetParentRealUIds(realUIds);
			realUIds.Add(new Guid("2f78da26-bcd3-4e5f-a839-3a84fd950fc2"));
		}

		#endregion

	}

	#endregion

}


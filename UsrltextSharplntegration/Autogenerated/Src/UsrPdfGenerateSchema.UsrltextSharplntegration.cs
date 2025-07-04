namespace Terrasoft.Configuration
{

	using System;
	using System.Collections.Generic;
	using System.Collections.ObjectModel;
	using System.Globalization;
	using Terrasoft.Common;
	using Terrasoft.Core;
	using Terrasoft.Core.Configuration;

	#region Class: UsrPdfGenerateSchema

	/// <exclude/>
	public class UsrPdfGenerateSchema : Terrasoft.Core.SourceCodeSchema
	{

		#region Constructors: Public

		public UsrPdfGenerateSchema(SourceCodeSchemaManager sourceCodeSchemaManager)
			: base(sourceCodeSchemaManager) {
		}

		public UsrPdfGenerateSchema(UsrPdfGenerateSchema source)
			: base( source) {
		}

		#endregion

		#region Methods: Protected

		protected override void InitializeProperties() {
			base.InitializeProperties();
			UId = new Guid("48caba44-51c7-4526-88fd-adc8d6dd5f7d");
			Name = "UsrPdfGenerate";
			ParentSchemaUId = new Guid("50e3acc0-26fc-4237-a095-849a1d534bd3");
			CreatedInPackageId = new Guid("edfe2c00-d2d0-4c62-8866-fd91a3ab7174");
			ZipBody = new byte[] { 31,139,8,0,0,0,0,0,4,0,149,82,75,107,194,64,16,190,11,254,135,37,167,4,36,7,143,149,30,90,31,212,131,85,168,210,131,72,89,55,19,93,186,102,195,236,198,26,196,255,222,137,137,154,68,83,232,28,150,157,199,247,152,100,19,35,163,13,251,72,141,133,93,175,221,74,74,169,63,158,214,43,243,45,2,15,168,224,207,185,249,54,215,246,28,16,185,209,161,245,251,122,183,211,209,195,6,66,67,217,31,113,97,53,74,120,76,24,133,114,147,32,183,82,71,254,240,16,15,180,56,116,103,65,72,141,61,160,5,36,80,187,21,241,29,152,152,11,248,23,180,221,58,102,96,70,177,28,64,200,19,101,95,101,148,45,232,218,52,6,29,186,227,242,184,215,97,239,164,195,158,153,83,46,59,222,42,231,136,147,181,146,130,9,197,141,97,185,94,121,142,61,177,113,85,61,3,93,29,156,25,80,238,185,5,182,48,128,52,23,129,200,188,179,175,164,146,247,42,144,92,244,94,206,173,145,84,57,188,27,195,241,118,205,162,38,70,219,222,169,95,70,79,15,140,172,83,11,203,21,43,108,184,69,26,112,203,155,36,45,166,229,180,102,39,11,4,155,96,116,217,113,48,122,3,21,3,250,23,141,154,227,78,174,214,43,243,156,202,137,224,86,108,221,225,65,64,124,222,16,14,222,31,6,154,30,212,196,108,250,91,78,162,106,97,165,146,150,222,175,63,211,198,78,192,24,190,129,185,126,81,202,117,200,243,167,198,160,75,174,115,187,134,176,83,114,95,188,74,68,141,78,135,44,248,5,174,234,155,190,206,22,245,15,245,155,214,41,174,231,95,65,199,47,98,156,111,158,209,3,0,0 };
		}

		#endregion

		#region Methods: Public

		public override void GetParentRealUIds(Collection<Guid> realUIds) {
			base.GetParentRealUIds(realUIds);
			realUIds.Add(new Guid("48caba44-51c7-4526-88fd-adc8d6dd5f7d"));
		}

		#endregion

	}

	#endregion

}


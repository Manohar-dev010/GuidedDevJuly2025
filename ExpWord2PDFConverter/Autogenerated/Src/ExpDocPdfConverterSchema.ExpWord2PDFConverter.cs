namespace Terrasoft.Configuration
{

	using System;
	using System.Collections.Generic;
	using System.Collections.ObjectModel;
	using System.Globalization;
	using Terrasoft.Common;
	using Terrasoft.Core;
	using Terrasoft.Core.Configuration;

	#region Class: ExpDocPdfConverterSchema

	/// <exclude/>
	public class ExpDocPdfConverterSchema : Terrasoft.Core.SourceCodeSchema
	{

		#region Constructors: Public

		public ExpDocPdfConverterSchema(SourceCodeSchemaManager sourceCodeSchemaManager)
			: base(sourceCodeSchemaManager) {
		}

		public ExpDocPdfConverterSchema(ExpDocPdfConverterSchema source)
			: base( source) {
		}

		#endregion

		#region Methods: Protected

		protected override void InitializeProperties() {
			base.InitializeProperties();
			UId = new Guid("7098212f-eb24-4312-9a2a-e210aa040017");
			Name = "ExpDocPdfConverter";
			ParentSchemaUId = new Guid("50e3acc0-26fc-4237-a095-849a1d534bd3");
			CreatedInPackageId = new Guid("fc71e31d-668e-434f-89ab-9cfc436bfd9a");
			ZipBody = new byte[] { 31,139,8,0,0,0,0,0,4,0,149,82,75,111,130,64,16,190,155,248,31,54,156,32,49,28,60,214,244,208,250,72,61,88,77,138,233,193,152,102,93,6,216,116,97,201,236,98,37,198,255,222,69,80,1,165,73,231,180,243,248,30,3,147,41,158,132,228,35,87,26,226,81,191,151,213,82,119,190,108,87,188,8,129,250,166,224,122,84,125,171,107,219,3,68,170,100,160,221,177,140,99,153,60,108,32,116,148,221,25,101,90,34,135,199,132,73,192,195,12,169,230,50,113,167,135,116,34,217,97,184,242,3,211,216,3,106,64,3,234,247,18,26,131,74,41,131,127,65,251,189,99,1,38,38,54,19,8,104,38,244,43,79,138,5,109,157,167,32,3,123,94,31,119,6,228,221,232,144,103,98,213,203,150,179,45,57,210,108,39,56,35,76,80,165,72,169,87,159,35,79,100,222,84,47,64,87,7,103,6,228,123,170,129,172,21,160,153,75,128,21,222,201,87,214,200,71,13,72,41,122,47,103,183,72,154,28,206,141,225,120,123,22,209,18,51,219,222,169,95,70,79,15,140,236,114,13,155,45,169,108,216,85,234,83,77,187,36,53,230,245,180,101,167,8,4,157,97,114,217,113,50,123,3,145,2,186,23,141,150,227,65,169,54,170,243,156,234,9,163,154,69,246,244,192,32,61,111,8,7,231,15,3,93,7,181,80,225,56,162,70,84,172,53,23,92,155,251,117,87,82,233,5,40,69,67,240,228,139,16,182,101,60,127,74,244,135,198,117,105,87,25,236,210,184,175,174,18,81,162,53,48,22,220,10,215,244,109,190,78,132,242,199,244,187,214,169,158,231,95,113,250,5,173,78,253,183,207,3,0,0 };
		}

		#endregion

		#region Methods: Public

		public override void GetParentRealUIds(Collection<Guid> realUIds) {
			base.GetParentRealUIds(realUIds);
			realUIds.Add(new Guid("7098212f-eb24-4312-9a2a-e210aa040017"));
		}

		#endregion

	}

	#endregion

}


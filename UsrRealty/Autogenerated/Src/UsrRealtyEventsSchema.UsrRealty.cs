namespace Terrasoft.Configuration
{

	using System;
	using System.Collections.Generic;
	using System.Collections.ObjectModel;
	using System.Globalization;
	using Terrasoft.Common;
	using Terrasoft.Core;
	using Terrasoft.Core.Configuration;

	#region Class: UsrRealtyEventsSchema

	/// <exclude/>
	public class UsrRealtyEventsSchema : Terrasoft.Core.SourceCodeSchema
	{

		#region Constructors: Public

		public UsrRealtyEventsSchema(SourceCodeSchemaManager sourceCodeSchemaManager)
			: base(sourceCodeSchemaManager) {
		}

		public UsrRealtyEventsSchema(UsrRealtyEventsSchema source)
			: base( source) {
		}

		#endregion

		#region Methods: Protected

		protected override void InitializeProperties() {
			base.InitializeProperties();
			UId = new Guid("48a5220a-b960-4141-80d0-3a4ddc1aa2c0");
			Name = "UsrRealtyEvents";
			ParentSchemaUId = new Guid("50e3acc0-26fc-4237-a095-849a1d534bd3");
			CreatedInPackageId = new Guid("d9b5577d-61c2-43f3-a405-b6b5ce37d97c");
			ZipBody = new byte[] { 31,139,8,0,0,0,0,0,4,0,141,83,77,139,219,48,16,189,47,248,63,12,166,7,27,130,216,189,54,237,66,19,210,178,176,180,101,227,221,75,233,65,145,39,94,21,89,50,26,57,219,180,228,191,87,150,226,196,78,221,15,95,44,205,188,247,102,222,72,210,188,70,106,184,64,40,208,90,78,102,235,216,210,232,173,172,90,203,157,52,58,185,250,153,0,64,114,5,208,146,212,21,172,247,228,176,158,119,193,65,116,200,174,107,163,255,150,183,200,86,218,73,39,145,254,19,198,86,59,212,46,162,59,240,151,144,216,135,232,189,244,253,104,180,217,90,60,99,205,63,122,67,240,22,210,71,178,15,200,149,219,167,249,215,83,145,166,221,40,41,64,40,78,4,49,61,161,4,175,97,193,9,39,50,39,161,48,19,232,119,39,97,179,243,253,203,18,97,103,100,9,159,244,154,239,188,171,204,108,190,161,112,64,168,75,180,51,136,194,11,220,122,139,65,254,157,173,8,48,79,70,146,231,18,231,24,192,198,55,198,78,194,189,34,230,243,73,116,172,4,54,56,245,83,201,98,32,143,188,17,167,167,148,40,100,205,21,52,86,138,110,144,145,203,62,160,43,246,13,150,75,163,218,90,63,113,213,226,155,35,244,54,235,134,253,185,195,167,249,164,166,220,66,22,245,110,225,230,186,255,242,41,232,216,245,32,1,128,236,142,150,92,11,84,88,250,198,156,109,113,158,36,127,66,159,87,228,108,119,181,252,61,39,94,97,129,117,163,184,235,172,105,124,129,123,35,184,146,63,248,70,225,58,224,178,163,225,71,66,235,31,130,246,7,231,95,1,123,64,50,173,21,30,100,172,87,153,193,101,159,163,146,48,184,127,241,234,166,51,72,127,171,69,44,12,242,142,10,99,22,178,138,187,52,103,133,57,246,146,95,24,252,183,61,111,43,6,216,123,99,107,238,178,11,219,190,141,27,118,189,120,117,113,82,67,65,247,108,205,75,24,206,234,187,192,166,179,223,171,140,72,103,198,33,25,71,14,113,17,126,135,95,157,34,162,186,98,4,0,0 };
		}

		protected override void InitializeLocalizableStrings() {
			base.InitializeLocalizableStrings();
			SetLocalizableStringsDefInheritance();
			LocalizableStrings.Add(CreateValueIsTooBigLocalizableString());
		}

		protected virtual SchemaLocalizableString CreateValueIsTooBigLocalizableString() {
			SchemaLocalizableString localizableString = new SchemaLocalizableString() {
				UId = new Guid("35bd0cf4-6851-3fd4-5617-82d440e9cf91"),
				Name = "ValueIsTooBig",
				CreatedInPackageId = new Guid("d9b5577d-61c2-43f3-a405-b6b5ce37d97c"),
				CreatedInSchemaUId = new Guid("48a5220a-b960-4141-80d0-3a4ddc1aa2c0"),
				ModifiedInSchemaUId = new Guid("48a5220a-b960-4141-80d0-3a4ddc1aa2c0")
			};
			return localizableString;
		}

		#endregion

		#region Methods: Public

		public override void GetParentRealUIds(Collection<Guid> realUIds) {
			base.GetParentRealUIds(realUIds);
			realUIds.Add(new Guid("48a5220a-b960-4141-80d0-3a4ddc1aa2c0"));
		}

		#endregion

	}

	#endregion

}


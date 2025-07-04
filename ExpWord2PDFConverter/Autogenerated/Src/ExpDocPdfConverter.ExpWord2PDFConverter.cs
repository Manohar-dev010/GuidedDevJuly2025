using System;
using System.IO;
using System.Threading.Tasks;
using Terrasoft.Common;
using Terrasoft.Core;
using Terrasoft.Core.Factories;
using Terrasoft.Configuration.ExpDocx2PdfConverter;

namespace Terrasoft.Configuration.ExpDocx2PdfConverter
{

    [DefaultBinding(typeof(IPdfConverter), Name = "PdfConverter")]
    public class ExpDocPdfConverter : IPdfConverter
    {

        private UserConnection _userConnection;

        public ExpDocPdfConverter(UserConnection userConnection)
        {
            _userConnection = userConnection;
        }

        public byte[] Convert(byte[] data)
        {
          try
          {
                return ExpDocPDFHelper.Convert(_userConnection, data);
          }
          catch(Exception ex)
          {
            Terrasoft.Configuration.MsgChannelUtilities.PostMessageToAll("ExpWord2PDFConversionOperation.Error", ex.Message);
            throw ex;
          }
        }
    }

}

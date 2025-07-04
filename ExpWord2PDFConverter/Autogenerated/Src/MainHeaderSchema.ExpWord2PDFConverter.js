define("MainHeaderSchema", ["ServiceHelper"], function(ServiceHelper) {
  return {
      methods:{
          init: function(callback, scope) {
              this.callParent(arguments);

            Terrasoft.ServerChannel.on(Terrasoft.EventName.ON_MESSAGE,function(event, message){
              if (message.Header.Sender === "ExpWord2PDFConversionOperation.Error") {
               Terrasoft.showErrorMessage(message.Body);
              }
            },this);  
          }
      }
  };
});
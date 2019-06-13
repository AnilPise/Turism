// Copyright (c) 2019, Indictrans and contributors
// For license information, please see license.txt

frappe.ui.form.on('Register', {
	refresh: function(frm) {
       frm.get_field("quantity").$input.on("keypress", function(event) {
       		console.log("==================",event);
        	if(event.keyCode < 48 || event.keyCode > 57)
        	{
        		return false;
        	}
        });
       frm.get_field("pin").$input.on("keypress", function(event) {
       		console.log("==================pin",event);
        	if(event.keyCode < 48 || event.keyCode > 57)
        	{
        		return false;
        	}
        });
       frm.get_field("f_name").$input.on("keypress", function(event) {
       		console.log("==================First Name",event);
        	if(event.keyCode < 65 || event.keyCode > 90 && event.keyCode < 97 || event.keyCode > 122 )
        	{
        		return false;
        	}
        });
       frm.get_field("l_name").$input.on("keypress", function(event) {
       		console.log("==================Last Name",event);
        	if(event.keyCode < 65 || event.keyCode > 90 && event.keyCode < 97 || event.keyCode > 122 )
        	{
        		return false;
        	}
        });
	},
	onload_post_render: function(frm) {
        console.log("onload_post_render called...................");
    },
	onload: function(frm) {
		console.log("=================== onload");
		frappe.msgprint("Welcome to the registration page");
	},
	setup:function(frm){
		console.log(".............setup called");
	},
	after_save:function(frm){
		console.log("============save function called");
         
	},
	email: function(frm){
		var email_id = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
		console.log("============email function called")
         console.log(email_id.test(frm.doc.email));
		if (email_id.test(frm.doc.email) == false)
			{
				frm.set_value(`email`, ``)
				frappe.throw(`Enter Correct Email`);

			}	

	},

	pin: function(frm){
		if(frm.doc.pin.length != 6 && frm.doc.pin != "") {
			 frm.set_value('pin',"")
			frappe.throw("Enter valid Pin No")
		}
		console.log("pin called")
     },
     mob: function(frm){
		if(frm.doc.mob.length != 10 && frm.doc.mob != "") {
			 frm.set_value('mob',"")
			frappe.throw("Invalid Mobile no")
		}
		console.log("pin called")
     },
     submit: function(frm) {
		if (frm.doc.pass1==frm.doc.cpass)
		{
			console.log("===============File has submitted")
			frappe.msgprint("File has been Submitted")
		}
		else
        {
			console.log("===============File not submitted")
			frappe.throw("Password do not match")
			frm.set_value(`pass1`, ``)
			frm.set_value(`cpass`, ``)
		}
    },
    validate:function(frm){
		if(frm.doc.pass1==frm.doc.cpass){
			console.log('-------------------validate------------------------------');
		}
		else
		{
			console.log('-------------------Else validate------------------------------');
			frm.set_value('pass1', '');
			frm.set_value('cpass', '');
		}
    },
    
    clear: function (frm) {
		  console.log("clear button has been clicked");
		  frm.set_value(`salutation`, ``)
		  frm.set_value(`f_name`, ``)
		  frm.set_value(`date_birth`, ``)
		  frm.set_value(`address`, ``)
		  frm.set_value(`city`, ``)
		  frm.set_value(`other`, ``)
		  frm.set_value(`language`, ``)
		  frm.set_value(`state`, ``)
		  frm.set_value(`mob`, ``)
		  frm.set_value(`l_name`, ``)
		  frm.set_value(`gender`, ``)
		  frm.set_value(`country`, ``)
		  frm.set_value(`pin`, ``)
		  frm.set_value(`fax`, ``)
		  frm.set_value(`uname`, ``)
		  frm.set_value(`pass1`, ``)
		  frm.set_value(`email`, ``)
		  frm.set_value(`cpass`, ``)
  
    }
});

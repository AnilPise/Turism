# -*- coding: utf-8 -*-
# Copyright (c) 2019, Indictrans and contributors
# For license information, please see license.txt

from __future__ import unicode_literals
import frappe
from frappe.model.document import Document

class Register(Document):
	def submit1(self):
		print("Button is clicked and python file is working")
		if (self.pass1==self.cpass):
			frappe.msgprint('Successfully Registered\nFor further process save this document.')
			self.regFlag=1
		else:
			frappe.msgprint('Your password does not match ')      

	def clear1(self):
		frappe.msgprint('Clear....')		

	def on_submit(self):
		print(self.email)
		print('---------------on submit')
		status=self.send_email(self.email)
		#print(status)
		if(status==True):
			 frappe.msgprint('You are regestered. You will be communicted by email.')
		else:
			 frappe.msgprint('Your registration is failed.')	

	def before_save(self):
		frappe.msgprint('Calling before save function')
		if (self.pass1==self.cpass):
			frappe.msgprint('Successfully Registered\nFor further process save this document.')
			self.regFlag=1

		else:
			frappe.msgprint('Your password does not match ')

	def validate(self):
		print('------------------On validate-------------------------')

	def autoname(self):
		print("autoname function validated++++++++++")
		self.name = self.l_name + " - " + self.f_name
	

	def send_email(self,email_addr):
		print('send mail function')
		try:
			frappe.sendmail(recipients=email_addr,subject="New Joining to the organisation",message='Welcome to the organisation. Enjoy your work in Indictrans.')
			return True
		except:
			return False				 	

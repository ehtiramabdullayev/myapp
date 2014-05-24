# This is an auto-generated Django model module.
# You'll have to do the following manually to clean this up:
#   * Rearrange models' order
#   * Make sure each model has one field with primary_key=True
#   * Remove `managed = False` lines if you wish to allow Django to create and delete the table
# Feel free to rename the models, but don't rename db_table values or field names.
#
# Also note: You'll have to insert the output of 'django-admin.py sqlcustom [appname]'
# into your database.
from __future__ import unicode_literals

from django.db import models

class Action(models.Model):
    id = models.IntegerField(primary_key=True)
    actionname = models.CharField(db_column='ActionName', max_length=50, blank=True) # Field name made lowercase.
    class Meta:
        managed = False
        db_table = 'action'

class Brigade(models.Model):
    id = models.IntegerField(primary_key=True)
    id_group = models.IntegerField(blank=True, null=True)
    id_production_unit = models.ForeignKey('ProductionUnit', db_column='id_production_unit', blank=True, null=True)
    code = models.CharField(db_column='Code', max_length=10, blank=True) # Field name made lowercase.
    leader = models.ForeignKey('Specialist', db_column='Leader', blank=True, null=True) # Field name made lowercase.
    result_buffer = models.ForeignKey('Buffer', db_column='Result_buffer', blank=True, null=True) # Field name made lowercase.
    class Meta:
        managed = False
        db_table = 'brigade'

class BrigadeSpecialist(models.Model):
    id_brigade = models.ForeignKey(Brigade, db_column='id_brigade')
    id_specialist = models.ForeignKey('Specialist', db_column='id_specialist')
    class Meta:
        managed = False
        db_table = 'brigade_specialist'

class Buffer(models.Model):
    id = models.IntegerField(primary_key=True)
    name = models.CharField(db_column='Name', max_length=100, blank=True) # Field name made lowercase.
    table = models.CharField(db_column='Table', max_length=30, blank=True) # Field name made lowercase.
    class Meta:
        managed = False
        db_table = 'buffer'

class BufferSpec1(models.Model):
    id = models.IntegerField(primary_key=True)
    id_work = models.IntegerField(blank=True, null=True)
    file = models.TextField(db_column='File', blank=True) # Field name made lowercase.
    file_name = models.CharField(db_column='File_name', max_length=100, blank=True) # Field name made lowercase.
    add_date = models.DateTimeField(db_column='Add_date', blank=True, null=True) # Field name made lowercase.
    class Meta:
        managed = False
        db_table = 'buffer_spec1'

class DenyReason(models.Model):
    id = models.IntegerField(primary_key=True)
    reason = models.CharField(db_column='Reason', max_length=200) # Field name made lowercase.
    class Meta:
        managed = False
        db_table = 'deny_reason'

class Group(models.Model):
    id = models.IntegerField(primary_key=True)
    id_production_unit = models.ForeignKey('ProductionUnit', db_column='id_production_unit', blank=True, null=True)
    code = models.CharField(db_column='Code', max_length=10, blank=True) # Field name made lowercase.
    leader = models.ForeignKey('Specialist', db_column='Leader', blank=True, null=True) # Field name made lowercase.
    result_buffer = models.ForeignKey(Buffer, db_column='Result_buffer', blank=True, null=True) # Field name made lowercase.
    class Meta:
        managed = False
        db_table = 'group'

class GroupServices(models.Model):
    id_group = models.IntegerField()
    id_service = models.IntegerField()
    class Meta:
        managed = False
        db_table = 'group_services'

class History(models.Model):
    id = models.IntegerField(primary_key=True)
    id_work = models.ForeignKey('Work', db_column='id_work')
    id_action = models.ForeignKey(Action, db_column='id_action', blank=True, null=True)
    id_brigade = models.IntegerField(blank=True, null=True)
    old_id_specialist = models.IntegerField(blank=True, null=True)
    new_id_specialist = models.IntegerField(blank=True, null=True)
    old_id_status = models.IntegerField(blank=True, null=True)
    new_id_status = models.IntegerField(blank=True, null=True)
    old_id_priority = models.IntegerField(blank=True, null=True)
    new_id_priority = models.IntegerField(blank=True, null=True)
    deny_reason = models.IntegerField(db_column='Deny_reason', blank=True, null=True) # Field name made lowercase.
    actiondate = models.DateTimeField(db_column='ActionDate', blank=True, null=True) # Field name made lowercase.
    class Meta:
        managed = False
        db_table = 'history'

class Message(models.Model):
    id = models.IntegerField(primary_key=True)
    title = models.CharField(db_column='Title', max_length=100, blank=True) # Field name made lowercase.
    text = models.CharField(db_column='Text', max_length=1000, blank=True) # Field name made lowercase.
    spec_from = models.ForeignKey('Specialist', db_column='Spec_from', blank=True, null=True) # Field name made lowercase.
    spec_to = models.ForeignKey('Specialist', db_column='Spec_to', blank=True, null=True) # Field name made lowercase.
    unread = models.IntegerField(db_column='UnRead', blank=True, null=True) # Field name made lowercase.
    class Meta:
        managed = False
        db_table = 'message'

class Notifications(models.Model):
    id = models.IntegerField(primary_key=True)
    id_specialist = models.ForeignKey('Specialist', db_column='id_specialist', blank=True, null=True)
    title = models.CharField(db_column='Title', max_length=100, blank=True) # Field name made lowercase.
    notify_message = models.CharField(db_column='Notify_message', max_length=1000, blank=True) # Field name made lowercase.
    send_date = models.DateTimeField(db_column='Send_date', blank=True, null=True) # Field name made lowercase.
    class Meta:
        managed = False
        db_table = 'notifications'

class Priority(models.Model):
    id = models.IntegerField(primary_key=True)
    name = models.CharField(db_column='Name', max_length=45, blank=True) # Field name made lowercase.
    class Meta:
        managed = False
        db_table = 'priority'

class ProductionUnit(models.Model):
    id = models.IntegerField(primary_key=True)
    id_parent = models.IntegerField()
    id_type_unit = models.ForeignKey('TypeUnit', db_column='id_type_unit')
    name = models.CharField(db_column='Name', max_length=100, blank=True) # Field name made lowercase.
    class Meta:
        managed = False
        db_table = 'production_unit'

class Regulation(models.Model):
    id = models.IntegerField(primary_key=True)
    id_type_work = models.ForeignKey('TypeWork', db_column='id_type_work', blank=True, null=True)
    name = models.CharField(db_column='Name', max_length=100, blank=True) # Field name made lowercase.
    sql = models.CharField(db_column='SQL', max_length=200, blank=True) # Field name made lowercase.
    data_type = models.CharField(db_column='Data_type', max_length=10, blank=True) # Field name made lowercase.
    class Meta:
        managed = False
        db_table = 'regulation'

class Resource(models.Model):
    id = models.IntegerField(primary_key=True)
    id_type_work = models.ForeignKey('TypeWork', db_column='id_type_work', blank=True, null=True)
    name = models.CharField(db_column='Name', max_length=100, blank=True) # Field name made lowercase.
    sql = models.CharField(db_column='SQL', max_length=200, blank=True) # Field name made lowercase.
    data_type = models.CharField(db_column='Data_type', max_length=10, blank=True) # Field name made lowercase.
    class Meta:
        managed = False
        db_table = 'resource'

class Review(models.Model):
    id = models.IntegerField(primary_key=True)
    id_work = models.ForeignKey('Work', db_column='id_work')
    review_text = models.CharField(db_column='Review_text', max_length=2000, blank=True) # Field name made lowercase.
    review_date = models.DateTimeField(db_column='Review_date', blank=True, null=True) # Field name made lowercase.
    class Meta:
        managed = False
        db_table = 'review'

class Reward(models.Model):
    id = models.IntegerField(primary_key=True)
    id_specialist = models.ForeignKey('Specialist', db_column='id_specialist')
    id_work = models.ForeignKey('Work', db_column='id_work')
    reward = models.FloatField(db_column='Reward', blank=True, null=True) # Field name made lowercase.
    currency = models.CharField(db_column='Currency', max_length=3, blank=True) # Field name made lowercase.
    id_brigade = models.IntegerField(blank=True, null=True)
    id_group = models.IntegerField(blank=True, null=True)
    add_date = models.DateTimeField(db_column='Add_date', blank=True, null=True) # Field name made lowercase.
    class Meta:
        managed = False
        db_table = 'reward'

class RewardPayment(models.Model):
    id = models.IntegerField(primary_key=True)
    id_specialist = models.ForeignKey('Specialist', db_column='id_specialist')
    amount = models.IntegerField(db_column='Amount') # Field name made lowercase.
    currency = models.CharField(db_column='Currency', max_length=3) # Field name made lowercase.
    paymen_date = models.DateTimeField(db_column='Paymen_date', blank=True, null=True) # Field name made lowercase.
    class Meta:
        managed = False
        db_table = 'reward_payment'

class RewardRules(models.Model):
    id = models.IntegerField(primary_key=True)
    script_link = models.CharField(db_column='Script_link', max_length=100, blank=True) # Field name made lowercase.
    class Meta:
        managed = False
        db_table = 'reward_rules'

class Specialist(models.Model):
    id = models.IntegerField(primary_key=True)
    id_production_unit = models.IntegerField()
    full_name = models.CharField(db_column='Full_name', max_length=100, blank=True) # Field name made lowercase.
    location = models.CharField(db_column='Location', max_length=30, blank=True) # Field name made lowercase.
    contact_mail = models.CharField(db_column='Contact_mail', max_length=50, blank=True) # Field name made lowercase.
    contact_phone = models.CharField(db_column='Contact_phone', max_length=15, blank=True) # Field name made lowercase.
    skype = models.CharField(db_column='Skype', max_length=10, blank=True) # Field name made lowercase.
    working_hours = models.CharField(db_column='Working_hours', max_length=50, blank=True) # Field name made lowercase.
    result_buffer = models.IntegerField(db_column='Result_buffer', blank=True, null=True) # Field name made lowercase.
    register_date = models.DateTimeField(db_column='Register_date', blank=True, null=True) # Field name made lowercase.
    slogin = models.CharField(db_column='SLogin', max_length=30, blank=True) # Field name made lowercase.
    spassword = models.CharField(db_column='SPassword', max_length=100, blank=True) # Field name made lowercase.
    hours_per_day = models.IntegerField(db_column='Hours_per_day', blank=True, null=True) # Field name made lowercase.
    class Meta:
        managed = False
        db_table = 'specialist'

class Status(models.Model):
    id = models.IntegerField(primary_key=True)
    name = models.CharField(db_column='Name', max_length=45, blank=True) # Field name made lowercase.
    class Meta:
        managed = False
        db_table = 'status'

class TypeUnit(models.Model):
    id = models.IntegerField(primary_key=True)
    name = models.CharField(db_column='Name', max_length=100, blank=True) # Field name made lowercase.
    class Meta:
        managed = False
        db_table = 'type_unit'

class TypeWork(models.Model):
    id = models.IntegerField(primary_key=True)
    id_production_unit = models.ForeignKey(ProductionUnit, db_column='id_production_unit')
    id_reward_rules = models.ForeignKey(RewardRules, db_column='id_reward_rules')
    name = models.CharField(db_column='Name', max_length=100, blank=True) # Field name made lowercase.
    type = models.CharField(db_column='Type', max_length=20, blank=True) # Field name made lowercase.
    class Meta:
        managed = False
        db_table = 'type_work'

class Warehouse(models.Model):
    id = models.IntegerField(primary_key=True)
    name = models.CharField(db_column='Name', max_length=45, blank=True) # Field name made lowercase.
    database = models.CharField(db_column='Database', max_length=45, blank=True) # Field name made lowercase.
    class Meta:
        managed = False
        db_table = 'warehouse'

class Work(models.Model):
    id = models.IntegerField(primary_key=True)
    id_type_work = models.ForeignKey(TypeWork, db_column='id_type_work')
    id_group = models.ForeignKey(Group, db_column='id_group', blank=True, null=True)
    id_brigade = models.ForeignKey(Brigade, db_column='id_brigade', blank=True, null=True)
    id_specialist = models.IntegerField(blank=True, null=True)
    id_status = models.ForeignKey(Status, db_column='id_status')
    id_priority = models.ForeignKey(Priority, db_column='id_priority')
    name = models.CharField(db_column='Name', max_length=45) # Field name made lowercase.
    task = models.TextField(db_column='Task', blank=True) # Field name made lowercase.
    volume = models.FloatField(db_column='Volume', blank=True, null=True) # Field name made lowercase.
    complete_percent = models.IntegerField(db_column='Complete_percent', blank=True, null=True) # Field name made lowercase.
    add_date = models.DateTimeField(db_column='Add_date') # Field name made lowercase.
    complete_date = models.DateTimeField(db_column='Complete_date', blank=True, null=True) # Field name made lowercase.
    class Meta:
        managed = False
        db_table = 'work'

class WorkMaterials(models.Model):
    id = models.IntegerField(primary_key=True)
    id_work = models.ForeignKey(Work, db_column='id_work', blank=True, null=True)
    name = models.CharField(db_column='Name', max_length=100, blank=True) # Field name made lowercase.
    query = models.CharField(db_column='Query', max_length=300, blank=True) # Field name made lowercase.
    file = models.TextField(db_column='File', blank=True) # Field name made lowercase.
    file_name = models.CharField(db_column='File_name', max_length=100, blank=True) # Field name made lowercase.
    class Meta:
        managed = False
        db_table = 'work_materials'


# -*- coding: utf-8 -*-
# Generated by Django 1.11.20 on 2020-07-14 21:15
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('bills', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='bill',
            name='chamber',
            field=models.CharField(choices=[('Filer', 'Filer'), ('Spouse', 'Spouse'), ('Dependent', 'Dependent')], max_length=6),
        ),
    ]

# Generated by Django 5.0.3 on 2024-04-12 09:38

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('sv', '0002_insert_initial_data'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='prelevementnonofficiel',
            name='fiche_detection',
        ),
        migrations.RemoveField(
            model_name='prelevementofficiel',
            name='fiche_detection',
        ),
    ]

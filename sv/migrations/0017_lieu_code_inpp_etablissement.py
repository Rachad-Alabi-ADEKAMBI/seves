# Generated by Django 5.0.8 on 2024-08-30 08:23

from django.db import migrations, models


class Migration(migrations.Migration):
    dependencies = [
        ("sv", "0016_lieu_activite_etablissement_and_more"),
    ]

    operations = [
        migrations.AddField(
            model_name="lieu",
            name="code_inpp_etablissement",
            field=models.CharField(blank=True, max_length=50, verbose_name="Code INPP"),
        ),
    ]

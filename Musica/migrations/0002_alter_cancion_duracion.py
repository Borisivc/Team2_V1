# Generated by Django 4.0.5 on 2022-07-01 19:55

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('Musica', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='cancion',
            name='duracion',
            field=models.TimeField(),
        ),
    ]
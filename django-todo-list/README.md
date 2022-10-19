# Supatodo


## Getting Set Up

Create a virtual environment by running `virutalenv .env && pip3 install -r requirements.txt`


### Update settings

In `settings.py` add a section with the following information:

``` python
DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.postgresql_psycopg2',
        'NAME': 'postgres',
        'USER': 'postgres',
        'PASSWORD': '<fill_your_password>',
        'HOST': 'db.<fill_your_supabase_id>.supabase.co',
        'PORT': '5432',
    }
}# Password validation
```





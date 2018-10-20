import sys
import pandas as pd
import json
import os.path

data_df = pd.read_csv('cleaned_data.csv')
data_df = data_df.apply(pd.to_numeric, errors='ignore')
data_df.head()

import pandas as pd
import numpy as np
import matplotlib as plt
from itertools import groupby


df = pd.read_csv('cleaned_data.zip')
df = df.apply(pd.to_numeric, errors = 'ignore')
print(df.count())

mean_G = df.G.mean()
sd_G = df.G.std()
low_limit = mean_G - 2*sd_G
high_limit = mean_G + 2*sd_G
print(mean_G)
print(sd_G)
print(low_limit)
print(high_limit)

df['outlier'] = (df['G'] <= low_limit) | (df['G'] >= high_limit)
print(df.head())

outlier = df['outlier']
trues = []
index_list = []

for index, value in outlier.iteritems():
    if value:
        trues.append(index)
    else:
        if len(trues) > 1:
            index_list.extend(trues)
        trues = []

if len(trues) > 1:
    index_list.extend(trues)

df_filtered = df.iloc[index_list]
print(df_filtered.count())
print(df_filtered.head())

df_filtered.to_csv('filtered.csv')

df_filtered_map = df.iloc[index_list]
df_filtered_map.sort_values("Longitude", inplace = True)
df_filtered_map.drop_duplicates(subset ="Longitude", keep = False, inplace = True)
df_filtered_map.sort_values("Latitude", inplace = True)
df_filtered_map.drop_duplicates(subset ="Latitude", keep = False, inplace = True)
print(df_filtered_map.count())
df_filtered_map.to_csv('filtered_map.csv')

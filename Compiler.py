#!/usr/bin/env python
# coding: utf-8

# In[14]:


import requests
import json


# In[15]:


url = "https://ide.geeksforgeeks.org/main.php"


# In[16]:


code = """
#include<stdio.h>

int main() {
    printf("hello WORLDSSASS");
    return 0;
}
"""


# In[30]:


data = {
    'lang': 'Cpp14',
    'code': code,
    'input': '',
    'save': True
}


# In[31]:


r = requests.post(url, data=data)


# In[35]:



dt = r.json()
hid = dt['sid']
hid


# In[40]:


url2 = "https://ide.geeksforgeeks.org/submissionResult.php"

data2 = {
    'sid': hid,
    'requestType': 'fetchResults'
}
k = requests.post(url2 , data = data2)
result = k.json()
while(result['status'] =='IN-QUEUE'):
    k = requests.post(url2 , data = data2)
    result = k.json()
result['output']    


# In[ ]:





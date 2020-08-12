import requests as req
import os
import json
import matplotlib.pyplot as plt 
import numpy as np
import base64
from PIL import Image
import cv2
import io
from datetime import datetime 
url='https://korkiapp.herokuapp.com/' 
os.chdir('C:/Users/Nikita/Desktop/korkiNew/api/test')
def test_registerUser(url):
    myUrl=url+'users/register'
    start=datetime.now()
    payload = {"firstName":"Nikita2" ,"lastName":"Brazhyk2" ,"isStudent":False,"firebaseID":"test12345","phone":"793834123"}
    r = req.post(myUrl, json=payload)
    koniec=datetime.now()
    dane=r.json()
    print(dane)
    print('czas requesta wynosi ',(koniec-start).microseconds/1000 )
    
def test_login(url):
    myUrl=url+'users/login'
    payload = {"secretID":'test12345' }

    r = req.post(myUrl, json=payload)
    dane=r.json()
    authKey=dane['userObj']['authKey']
    print(authKey)
    return authKey

def test_uploadDefaultAvatar(url):
    myUrl=url+'admin/changeDefaultAvatar'
    img=open('defaultAva.png', "rb")
    bae64img = base64.b64encode(img.read())
    encodedBase64=bae64img.decode('utf-8')
    payload = {"defaultAvatar":encodedBase64,'authKey':"1c7251fcaadecd95e87b503e760cda8a" }

    response = req.request("POST", verify=False, url=myUrl,json=payload)
    print(response.text)
def test_adminlogin(url):
    myUrl=url+'admin/login'
    payload = {"login":"tester","password":"tester"}
    r = req.post(myUrl, json=payload)
    dane=r.json()
    return dane['authKey']
def test_adminAddSubject(url):
    auth=test_adminlogin(url)
    myUrl=url+'admin/addsubject'
    payload = {"authKey":auth,'school':False,'label':'Geografia','iconname':'check','iconfamily':'entypo'}
    r = req.post(myUrl, json=payload)
    dane=r.json()
    print(dane)
def test_updateschedule(url):
    start=datetime.now()
    myUrl=url+'lessons/updateSchedule'
    payload = {"authKey":auth,'schoolsubject':False,'name':'Muzyka','iconname':'account-circle','iconfamily':'MaterialCommunityIcons'}
    r = req.post(myUrl, json=payload)
    dane=r.json()
    print(dane)
    koniec=datetime.now()
    print('czas requesta wynosi ',(koniec-start).microseconds/1000 )
def test_getSchedule(url):
    start=datetime.now()
    myUrl=url+'lessons/getSchedule'
    payload = {"authKey":auth,'useruuid':'xddweww'}
    r = req.get(myUrl, headers=payload)
    dane=r.json()
    print(dane)
    koniec=datetime.now()
    print('czas requesta wynosi ',(koniec-start).microseconds/1000 )




test_adminAddSubject(url)

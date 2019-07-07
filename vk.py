import requests

token = "93fbcf7693fbcf7693fbcf767e939048fe993fb93fbcf76cedaf15c818323ec6029905f"
id = "386335648"
url = "https://api.vk.com/method/users.get"
param = {"user_id": id, "v": 5.9, "access_token": token, "fields": "bdate,sex,verified,contacts,country,city,education,last_seen,followers_count,counters,relation,personal,activities,interests,connections"}

r = requests.get(url, params=param)
data = r.json()
print(data['response'])


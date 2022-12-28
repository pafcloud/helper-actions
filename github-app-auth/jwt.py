import os
import jwt
from datetime import datetime, timedelta

app_id = os.environ['APP_ID']
private_key = os.environ['PRIVATE_KEY_PEM'].encode('UTF-8')

iat = datetime.utcnow()
exp = iat + timedelta(seconds = 60)

token = jwt.encode(
    payload={
        'iss': ,
        'iat': int(iat.timestamp()),
        'exp': int(exp.timestamp())
    },
    key=private_key,
    algorithm='RS256'
).decode('UTF-8')

print(token)
